import React, {useState} from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import DescriptionIcon from '@material-ui/icons/Description';
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Dialog from "@material-ui/core/Dialog";
import ButtonDefault from "../ButtonDefault";
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";

const AppealItem = (props) => {
    const [file,setFile]=useState();
    const [open,setOpen]=useState(false);
    let token=localStorage.getItem(STORAGE_NAME)

    const fileLoad=(id)=>{
        if (id){
            axios.get(API_URL + "/attach/" + id,{
                headers:{
                    'Authorization':token,
                }
            }).then((r)=>{
                // setFile(r.data)
                // setOpen(true);
                // console.log(r)
                const type = r.headers['content-type'];
                const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' });
                const link = document.createElement('a');
                // setFile(URL.createObjectURL(blob));
                link.href=URL.createObjectURL(blob);
                link.target="_blank";
                // link.download = ''+name+' arizasi.'+type;
                link.click()
            })
        }
    };

    const sendBoss=(id)=>{
        Swal.fire({
            title: 'Tasdiqlash!!!',
            text: "Ushubu ariza ko'rib chiqish uchun yuborilsinmi?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ha!',
            cancelButtonText:"Yo'q"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method:'put',
                    url:API_URL+'/answer/send/boss?answerId='+id,
                    headers:{
                        Authorization:token
                    }
                }).then((r)=>{
                    console.log(r);
                    Swal.fire(
                        'Yuborildi!',
                        '',
                        'success'
                    ).then((res)=>{
                        props.refresh()
                    });
                })
            }
        })
    };

    const sendApplicant=(id)=>{
        Swal.fire({
            title: 'Tasdiqlash!!!',
            text: "Ushbu ariza arizachiga yuborilsinmi?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ha!',
            cancelButtonText:"Yo'q"
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method:'put',
                    url:API_URL+'/answer/send/applicant?answerId='+id,
                    headers:{
                        Authorization:token
                    }
                }).then((r)=>{
                    console.log(r);
                    Swal.fire(
                        'Yuborildi!',
                        '',
                        'success'
                    ).then((res)=>{
                        props.refresh()
                    });
                })
            }
        })
    };


    return (
        <div className="appeal-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text={props?.item?.application?.applicant?.fullName} />
                    </div>
                </div>
                <RequestTheme
                    label={props?.item?.application?.title}
                    description={props?.item?.application?.description}
                    check={props?.item?.application?.top}
                    item={props?.item.application}/>
                {/*<div className="category-audio"></div>*/}
                <div className="response-request">
                    {
                        props?.item?.answer?.description?.length>0?
                            <div>
                        <span style={{fontWeight:"bold"}}>
                            {props.t("Answer text")}:
                        </span>
                                <span style={{marginLeft:"5px"}}>
                            {
                                props?.item?.answer?.description
                            }
                        </span>
                            </div>:""
                    }
                </div>
                <div className="response-request">
                    {
                        props?.item?.answer?.attachmentId?
                            <div>
                        <span style={{fontWeight:"bold",display:"inline-block"}}>
                            {props.t("Answer file")}:
                        </span>
                                <span  onClick={()=>{

                                    fileLoad(props?.item?.answer?.attachmentId)
                                }} style={{marginLeft:"25px",marginTop:"15px", paddingTop:"15px",display:"inline-block",cursor:"pointer"}}>
                            {
                                <DescriptionIcon/>
                            }
                        </span>
                            </div>:""
                    }
                    <div style={{textAlign:"right"}}>
                        <ButtonDefault onClick={()=>{
                            if (props?.item.status==="INPROCESS"){
                                sendBoss(props?.item?.answer?.id)
                            }else {
                                sendApplicant(props?.item?.answer?.id);
                            }
                        }} text={props?.item.status==="INPROCESS"? props.t("Submit for review"):props.t("Send to applicant")}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (AppealItem);
