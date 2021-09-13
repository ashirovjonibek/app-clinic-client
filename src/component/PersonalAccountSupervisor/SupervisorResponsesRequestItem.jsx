import React, {useState} from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";
import {useTranslation} from "react-i18next";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";
import {DirectionsWalk} from "@material-ui/icons";
import {FormHelperText} from "@material-ui/core";

const SupervisorResponsesRequestItem = (props) => {
    let token=localStorage.getItem(STORAGE_NAME);
    const [isM,setIsM]=useState(false);
    const [message,setMessage]=useState("");
    const [error,setError]=useState(false);

    const fileLoad=(id,name)=>{
        if (id){
            axios.get(API_URL + "/attach/" + id,{
                headers:{
                    'Authorization':token,
                }
            }).then((r)=>{
                console.log(r)
                const type = r.headers['content-type'];
                const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = ''+name+'.'+type.substring(type.indexOf("pdf"));
                link.click()
            })
        }
    };

    const accept=(id)=>{
      Swal.fire({
          title:"Tasdiqlash!!",
          html:"Murojaat qabul qilinsinmi?",
          icon:"warning",
          confirmButtonText:"Ha",
          showCancelButton:true,
          cancelButtonText:"Yo'q",
          cancelButtonColor:"red",

      }).then((confirm)=>{
          if (confirm.isConfirmed){
              axios({
                  method:'put',
                  url:API_URL+'/document/boss/accept/'+id,
                  headers: {
                      Authorization: token
                  }
              }).then((r)=>{
                  Swal.fire("Bajarildi!!!","","success").then((ress)=>{
                      console.log(r)
                      props.refresh()
                  })
              }).catch((e)=>{
                  Swal.fire("Xatolik yuz berdi!!!","","error").then(()=>{

                      props.refresh()
                  })
              })
          }
      })


    };

    const denied=(id)=>{
        Swal.fire({
            title:"Tasdiqlash!!",
            html:"Murojaat rad etilsinmi?",
            icon:"warning",
            confirmButtonText:"Ha",
            showCancelButton:true,
            cancelButtonText:"Yo'q",
            confirmButtonColor:"red",

        }).then((confirm)=>{
            if (confirm.isConfirmed){
                axios({
                    method:'put',
                    url:API_URL+'/document/boss/denied/'+id,
                    headers: {
                        Authorization: token
                    },
                    data:{string:message}
                }).then((r)=>{
                    Swal.fire("Bajarildi!!!","","success").then((ress)=>{
                        console.log(r);
                        props.refresh();
                        setMessage(false);
                        setIsM(false)
                    })
                }).catch((e)=>{
                    Swal.fire("Xatolik yuz berdi!!!","","error").then(()=>{

                        props.refresh()
                    })
                })
            }
        });
    };

    return (
        <div className="supervisor-response-request-item">
            <div className="content">
                <UserName text={props.item.application.applicant.fullName} />
                <DocumentText appeal={props?.item?.application} />
                <div className="request-categoriyes">
                    <SectionCategory fileId={props?.item?.answer?.attachmentId} section={props?.item?.application?.section}/>
                </div>
                <div className="content-line"></div>
                <div className="request-categoriyes">
                    <UserItem p={props?.item?.checkedBy} />
                </div>
                <div className="request-bottom">
                    <div className="file-upload">
                        <Label text="Ответ:" />
                        <div onClick={()=>{
                            fileLoad(props?.item?.answer?.attachmentId,"answer")
                        }} style={{cursor:"pointer"}} className="file">
                            Listener javobini yuklash
                        </div>
                    </div>
                    <br/>
                    {
                        isM?<div style={
                            {
                                display:"block",
                                width:"100%",
                                marginTop:"25px",
                                border:"1px solid rgba(0,0,0,0.1)",
                                borderRadius:"6px",
                                padding:"7px",
                                boxShadow:"0 0 3px 0 rgba(0,0,0,0.3"
                            }
                        }>
                            <textarea onChange={(e)=>
                            {
                                setMessage(e.target.value);
                                if (e.target.value.length>10){
                                    setError(false)
                                }
                            }} cols="30" rows="10" placeholder="Rad etilish sababini kiriting!!!">
                            </textarea>
                            {error?<FormHelperText error={error}>Minimum 10 ta belgi kiriting!!!</FormHelperText>:""}
                        </div>:""
                    }
                    <div style={{
                        marginTop:"15px",
                        textAlign:"right",
                        display:"block",
                        width:"100%"
                    }}>
                        <button style={{
                            float:"right"
                        }} className="red-btn" onClick={()=>{
                            if (message.length<10&&isM){
                                setError(true)
                            }else {
                                setError(false)
                            }
                            if (!isM){
                                setIsM(true);
                            }

                            if (message.length>10&&isM){
                                denied(props?.item?.id)
                            }
                        }}>Неудовлетворительно</button>
                        <button style={{
                            float:"right"
                        }} className="green-btn" onClick={()=>{
                            accept(props?.item?.id)
                        }}>Удовлетворительно</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorResponsesRequestItem;
