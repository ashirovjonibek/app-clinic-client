import React, {useState} from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";
import {useTranslation, withTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";
import {Audiotrack, DirectionsWalk, FileCopy, Videocam} from "@material-ui/icons";
import {FormHelperText} from "@material-ui/core";
import i18next from "i18next";

const SupervisorResponsesRequestItem = (props) => {
    const { t } = props;

    let token = localStorage.getItem(STORAGE_NAME);
    const [isM, setIsM] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);


    const fileLoad = (id, name) => {
        if (id) {
            axios.get(API_URL + "/attach/" + id, {
                headers: {
                    'Authorization': token,
                }
            }).then((r) => {
                console.log(r)
                const type = r.headers['content-type'];
                const blob = new Blob([r.data], {type: type, encoding: 'UTF-8'});
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = '' + name + '.' + type.substring(type.indexOf("pdf"));
                link.click()
            })
        }
    };

    const accept = (id) => {
        Swal.fire({
            title:t("Confirmation") + "!!!",
            html: t("Will the application be accepted")+"?",
            icon: "warning",
            confirmButtonText: t("Yes"),
            showCancelButton: true,
            cancelButtonText: t("No"),
            cancelButtonColor: "red",

        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    method: 'put',
                    url: API_URL + '/document/boss/accept/' + id,
                    headers: {
                        Authorization: token
                    }
                }).then((r) => {
                    Swal.fire(t("Done"), "", "success").then((ress) => {
                        console.log(r)
                        props.refresh()
                    })
                }).catch((e) => {
                    Swal.fire(t("An error occurred")+"!!!", "", "error").then(() => {

                        props.refresh()
                    })
                })
            }
        })


    };

    const denied = (id) => {
        Swal.fire({
            title: t("Confirmation") + "!!!",
            html: t("Should the application be rejected")+"?",
            icon: "warning",
            confirmButtonText:  t("Yes"),
            showCancelButton: true,
            cancelButtonText:  t("No"),
            confirmButtonColor: "red",

        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    method: 'put',
                    url: API_URL + '/document/boss/denied/' + id,
                    headers: {
                        Authorization: token
                    },
                    data: {comment:message}
                }).then((r) => {
                    Swal.fire(t("Done"), "", "success").then((ress) => {
                        console.log(r);
                        props.refresh();
                        setMessage(false);
                        setIsM(false)
                    })
                }).catch((e) => {
                    Swal.fire(t("An error occurred")+"!!!", "", "error").then(() => {

                        props.refresh()
                    })
                })
            }
        });
    };

    return (
        <div className="supervisor-response-request-item">
            <div className="content">
                <UserName text={props.item.application.applicant.fullName}/>
                <DocumentText appeal={props?.item?.application}/>
                <div className="request-categoriyes">
                    <div className="categories">

                    </div>
                    <SectionCategory fileId={props?.item?.answer?.attachmentId}
                                     section={props?.item?.application?.section} item={props.item}/>
                </div>
                <div className="content-line"/>
                <div className="request-categoriyes">
                    <UserItem p={props?.item?.checkedBy}/>
                </div>
                <div className="request-bottom">
                    <div className="file-upload">
                        <Label text={props.t("Answer") + ":"}/>
                        <div style={{width: "100%"}}>
                            {props?.item?.answer?.description}
                        </div>
                        <div onClick={() => {
                            fileLoad(props?.item?.answer?.attachmentId, "answer")
                        }} style={{cursor: "pointer"}} className="file file1">
                            {props.t("Upload listener response")}
                        </div>
                    </div>
                    <br/>
                    {
                        isM ? <div style={
                            {
                                display: "block",
                                width: "100%",
                                marginTop: "25px",
                                border: "1px solid rgba(0,0,0,0.1)",
                                borderRadius: "6px",
                                padding: "7px",
                                boxShadow: "0 0 3px 0 rgba(0,0,0,0.3"
                            }
                        }>
                            <textarea onChange={(e) => {
                                setMessage(e.target.value);
                                if (e.target.value.length > 10) {
                                    setError(false)
                                }
                            }} cols="30" rows="10" placeholder="Rad etilish sababini kiriting!!!">
                            </textarea>
                            {error ? <FormHelperText
                                error={error}>{props.t("Enter a minimum of 10 characters")}!!!</FormHelperText> : ""}
                        </div> : ""
                    }
                    <div style={{
                        marginTop: "15px",
                        textAlign: "right",
                        display: "block",
                        width: "100%"
                    }}>
                        <button style={{
                            float: "right"
                        }} className="red-btn" onClick={() => {
                            if (message.length < 10 && isM) {
                                setError(true)
                            } else {
                                setError(false)
                            }
                            if (!isM) {
                                setIsM(true);
                            }

                            if (message.length > 10 && isM) {
                                denied(props?.item?.id)
                            }
                        }}>{props.t("Unsatisfactory")}</button>
                        <button style={{
                            float: "right"
                        }} className="green-btn" onClick={() => {
                            accept(props?.item?.id)
                        }}>{props.t("Satisfactorily")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(SupervisorResponsesRequestItem);
