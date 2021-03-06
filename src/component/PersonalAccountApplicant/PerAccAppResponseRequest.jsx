import React, {useEffect, useState} from "react";
import InputFile from "../InputFile";
import Label from "../Label";
import SectionCategory from "../SectionCategory";
import CheckboxConfidensial from "../CheckboxConfidensial";
import UserItem from "../UserItem";
import DocumentText from "../DocumentText";
import ButtonWhite from "../ButtonWhite";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import CustomPagination from "../catalog/Pagenation";
import {Loading} from "../catalog/Loading";
import {withTranslation} from "react-i18next";
import {green} from "@material-ui/core/colors";
import Swal from "sweetalert2";
import PdfViewer from "../catalog/pdfViewer";
import {Tag} from "antd";
import DownloadOutlined from "@ant-design/icons/lib/icons/DownloadOutlined";

const PerAccAppResponseRequest = ({t}) => {
    let token = localStorage.getItem(STORAGE_NAME);
    const [items, setItems] = useState([]);
    const [appeal, setAppeal] = useState([]);
    const [pageSize, setPageSize] = useState(0);
    const [active, setActive] = useState(1);
    const [loading, setLoading] = useState(true);
    const [ref, setRef] = useState(false);
    const [size, setSize] = useState(3);
    const [isDislike, setIsDislike] = useState(-1);
    const [comment, setComment] = useState("");
    const [comLength, setComLength] = useState(false);
    const [url, setUrl] = useState("");
    const [open, setOpen] = useState(false);
    let a = 0;


    useEffect(() => {
        setLoading(true);
        axios({
            method: "get",
            url: API_URL + "/document/applicant?size=" + size + "&page=" + (active - 1),
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log(r.data.object);
            setLoading(false);
            setPageSize(r.data.object.totalPages);
            setItems(r.data.object.object)
        }).catch((e) => {
            setLoading(false)
        })
    }, [size, active, ref]);

    const sendFeedback = (item) => {
        // console.log(item,comment)
        Swal.fire({
            title: t("Send a comment") + "?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: t("No"),
            confirmButtonText: t("Yes"),
            confirmButtonColor: green[400]
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    method: "put",
                    url: API_URL + "/answer/" + item.id,
                    headers: {
                        Authorization: token
                    },
                    data: {
                        ...item,
                        comment: comment,
                        liked: false
                    }
                }).then((r) => {
                    Swal.fire(t("Comment sent") + "!!!", "", "success").then((conf) => {
                        setRef(!ref);
                        setIsDislike(-1)
                    })
                }).catch((e) => {
                    Swal.fire(t("An error occurred") + "!!!", "", "error").then((conf) => {
                        setRef(!ref);
                    })
                })
            }
        })
    };

    return (
        <>
            {
                loading ? <Loading/> : <>
                    {
                        items && items.map((item, i) =>
                            <div key={i} className="content per-acc-app-response-request">
                                {/*<div className="request-theme" style={{marginBottom: '40px'}}>*/}
                                {/*    <div>*/}
                                {/*        <h3>{t("The answer to your appeal came from")}*/}
                                {/*            <strong style={{marginLeft:"5px"}}>{item?.checkedBy?.fullName}</strong></h3>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div style={{marginBottom: '20px'}}>
                                    <DocumentText appeal={item?.application}/>
                                </div>
                                <SectionCategory setOpen={setOpen} setUrl={setUrl} section={item?.application?.section}
                                                 fileId={item?.application?.attachmentsId ? item?.application?.attachmentsId[0] : null}
                                                 item={item}/>
                                <CheckboxConfidensial/>
                                <div className="response-request">
                                    <div className="content-line"/>
                                    <div style={{marginBottom: '20px'}}>
                                        <UserItem p={item?.checkedBy}/>
                                    </div>

                                    <div className="answer-for-appeal" style={{}}>
                                        <p style={{fontSize: "18px"}}>
                                            <strong>{t("Answer text")}: </strong>{item?.answer?.description}</p>
                                    </div>

                                    {item?.answer?.attachmentId &&
                                    <div className="file-upload" style={{width: "150px"}}>
                                        <p style={{fontSize: "18px"}}><strong>Javob fayli:</strong></p>
                                        <Tag onClick={() => {
                                            setUrl(API_URL + "/attach/" + item?.answer?.attachmentId);
                                            setOpen(true)
                                        }} style={{cursor: "pointer"}}
                                             className="d-flex justify-content-center align-items-center p-2">
                                            <DownloadOutlined/>
                                        </Tag>
                                    </div>}
                                </div>
                                <div className="answer-score">
                                    <h4>{t("Evaluating the response")}:</h4>
                                    <div className="answer-score-button">
                                            <span onClick={() => {
                                                setIsDislike(-1);
                                            }} style={{
                                                padding: "3px 5px",
                                                cursor: "pointer",
                                                color: !(isDislike === i || item?.answer?.comment) ? "green" : ""
                                            }}>
                                                <ThumbUpIcon/>
                                            </span>
                                        <span onClick={() => {
                                            if (!item?.answer?.comment) {
                                                if (isDislike === i) {
                                                    setIsDislike(-1);
                                                } else {
                                                    setIsDislike(i);
                                                }
                                            }
                                        }} style={{
                                            padding: "3px 5px",
                                            cursor: "pointer",
                                            color: isDislike === i || item?.answer?.comment ? "red" : ""
                                        }}>
                                                <ThumbDownIcon/>
                                            </span>
                                    </div>
                                </div>
                                <div style={{
                                    width: "100%",
                                    boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
                                    padding: "7px",
                                    display: isDislike === i ? "block" : "none",
                                    translation: "display 2s erase"
                                }}>
                                            <textarea onChange={(e) => {
                                                setComLength(false);
                                                setComment(e.target.value)
                                            }} placeholder="Izoh yozing!!!" style={{width: "100%"}} name="" rows="7">
                                            </textarea>
                                    {
                                        comLength ? <p style={{color: "red"}}>Belgilar soni 10 tadan kam bo'lmasligi
                                            kerak!!!</p> : ""
                                    }
                                    <button onClick={() => {
                                        if (comment.length > 10) {
                                            sendFeedback(item?.answer)
                                        } else {
                                            setComLength(true)
                                        }
                                    }} style={{
                                        float: "right",
                                        backgroundColor: green[400],
                                        padding: "6px 8px",
                                        color: "white",
                                        borderRadius: "3px"
                                    }}>Yuborish
                                    </button>
                                    <div style={{clear: "both"}}/>
                                </div>
                            </div>
                        )
                    }

                    <div style={{clear: "both"}}/>
                    {
                        items.length > 0 ? <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>
                            <CustomPagination
                                pageLength={pageSize}
                                setActive={setActive}
                                active={active}
                                size={size}
                                setSize={setSize}
                            />
                        </div> : <div style={{
                            textAlign: "center",
                            marginTop: "25px"
                        }}>
                            {t("Applications are not available")}!!!
                        </div>
                    }
                </>
            }
            <PdfViewer open={open} setUrl={setUrl} setOpen={setOpen} url={url}/>
        </>
    );
}

export default withTranslation()(PerAccAppResponseRequest);
