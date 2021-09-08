import React, {useState} from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {green, red} from "@material-ui/core/colors";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";

const ResponseRequestItem1 = ({t,id,item}) => {
    const [isAn,setIsAn]=useState(false);
    const token=localStorage.getItem(STORAGE_NAME);
    const [message,setMessage]=useState("");

    const submit=()=>{
        console.log(id)
        axios({
            method:'post',
            url:API_URL+'/answer/create',
            headers:{
              Authorization:token
            },
            params:{
                id:id
            },
            data:{
                description: item.description,
                status: item.status,
                attachmentId: item.attachmentId,
                deniedMessage: message
            }
        }).then((r)=>{
            console.log(r)
        })
    }
    return (
        <div className="response-request">
            <div className="content-line" />
            <div style={{textAlign:isAn?"end":"start", marginBottom:isAn?"":"7px"}}>
                <span title={isAn?"Amalni bekor qilish":"Javob qo'shish "} style={
                    {
                        backgroundColor:isAn?red[400]:green[400],
                        width:"25px",height:"25px",
                        paddingTop:"10px",
                        paddingLeft:"3px",
                        paddingRight:"3px",
                        color:"white",
                        borderRadius:"50%",
                        cursor:"pointer"
                    }
                }
                onClick={()=>setIsAn(!isAn)}
                >{!isAn?<AddIcon/>:<RemoveIcon/>}</span>
            </div>
            {
                isAn?<div>
                    <Label text={t("Answer")+":"} />
                    <textarea onChange={(e)=>setMessage(e.target.value)} style={
                        {
                            border:"1px solid rgba(0,0,0,0.3)",
                            width:"100%",
                            borderRadius:"5px",
                            minHeight:"75px",
                            maxHeight:"85px",
                            marginBottom:"3px",
                            padding:"6px"
                        }
                    }
                              placeholder="Javob matnini kiriting"
                    >

                </textarea>
                </div>:""
            }
            <div className="button">
                <button onClick={submit} className="btn-default">{t("Submit for review")}</button>
            </div>
        </div>
    );
}

export default withTranslation()(ResponseRequestItem1);
