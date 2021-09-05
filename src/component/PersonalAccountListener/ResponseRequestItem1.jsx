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

const ResponseRequestItem1 = ({t,id}) => {
    const [isAn,setIsAn]=useState(false);


    const submit=()=>{
        console.log(id)
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
                    <textarea style={
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
