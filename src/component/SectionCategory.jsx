import React from "react";
import {useTranslation, withTranslation} from "react-i18next";
import Label from "./Label";
import InputFile from "./InputFile";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../utils/constant";

const SectionCategory = (props) => {
    const {i18n}=useTranslation();

    let token=localStorage.getItem(STORAGE_NAME);
    console.log(props);

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

    return (
        <div className="categories">
            <ul>
                {!props?.showSection?<li>
                    <label for="">{props.t("Category of treatment")}</label>
                    <input disabled={true} type="text" value={props?.section?.title[''+i18n.language]}/>
                </li>:""}
                <li >
                    <label for="">{props.t("File")}</label>
                    <div onClick={()=>{
                        if (props?.fileId){
                            fileLoad(props.fileId,"answer")
                        }
                    }} title={props?.fileId?{}:props.t("Doc not found")} style={{cursor:props?.fileId?"pointer":"no-drop"}} className="file">
                        {props.t("Download the application")}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default withTranslation()(SectionCategory);
