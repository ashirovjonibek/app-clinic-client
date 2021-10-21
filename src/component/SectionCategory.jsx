import React from "react";
import {useTranslation, withTranslation} from "react-i18next";
import Label from "./Label";
import InputFile from "./InputFile";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../utils/constant";
import i18next from "i18next";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";

const SectionCategory = (props) => {
    const {i18n}=useTranslation();

    let token=localStorage.getItem(STORAGE_NAME);
    // console.log(props);

    const fileLoad=(id,name)=>{
        if (id){
            axios.get(API_URL + "/attach/" + id,{
                headers:{
                    'Authorization':token,
                }
            }).then((r)=>{
                const type = r.headers['content-type'];
                const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' });
                const link = document.createElement('a');
                // setFile(URL.createObjectURL(blob));
                link.href=URL.createObjectURL(blob);
                link.target="_blank";
                // link.download = ''+name+' arizasi.'+type;
                link.click()

                // console.log(r)
                // const type = r.headers['content-type'];
                // const blob = new Blob([r.data], { type: type, encoding: 'UTF-8' });
                // const link = document.createElement('a');
                // link.href = URL.createObjectURL(blob);
                // link.download = ''+name+'.'+type.substring(type.indexOf("pdf"));
                // link.click()
            })
        }
    };

    return (
        <div className="categories">
            {
                !props.item?<ul>
                {!props?.showSection?<li>
                    <label htmlFor="">{props.t("Category of treatment")}</label>
                    <input disabled={true} type="text" value={props?.section?.title[''+i18n.language]}/>
                </li>:""}
                <li >
                    <label htmlFor="">{props.t("File")}</label>
                    <div onClick={()=>{
                        if (props?.fileId){
                            fileLoad(props.fileId,"answer")
                        }
                    }} title={props?.fileId?{}:props.t("Doc not found")} style={{cursor:props?.fileId?"pointer":"no-drop"}} className="file">
                        {props.t("Download the application")}
                    </div>
                </li>
            </ul>:
                    <ul>
                        <li>
                            <label htmlFor="">{props.t("Category of treatment")}</label>
                            <div className="file">{props?.item?.application?.section?.title[i18next.language]}</div>
                        </li>
                        <li style={{display:props?.item?.application?.attachmentsId?"":"none",margin:'0 5px 0 5px'}}>
                            <label htmlFor="">{props.t("File")}</label>
                            <div
                                title={props?.item?.application?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                style={{textAlign: "center", cursor: "pointer"}}
                                className="file">
                                {/*<a href={API_URL+'/attach/'+props?.item?.application?.attachmentsId[0]}><FileCopy/></a>*/}
                                {props?.item?.attachmentsId?<a onClick={()=>{
                                    props?.setUrl(API_URL + '/attach/' + props?.item?.attachmentsId[0]);
                                    props?.setOpen(true)
                                }}><FileCopy/></a>:""}
                            </div>
                        </li>
                        <li style={{display:props?.item?.application?.video?"":"none",margin:'0 5px 0 5px'}}>
                            <label htmlFor="">{props.t("Video")}</label>
                            <div
                                title={props?.item?.application?.video ? props.t("Download the application") : props.t("Doc not found")}
                                onClick={(e) => {
                                    props?.setPlayer({
                                        open:true,
                                        name:"video",
                                        resource: props?.item?.application?.video
                                    })
                                }} style={{textAlign: "center", cursor: "pointer"}}
                                className="file">
                                <Videocam/>
                            </div>
                        </li>
                        <li style={{display:props?.item?.application?.audio?"":"none",margin:'0 5px 0 5px'}}>
                            <label htmlFor="">{props.t("Audio")}</label>
                            <div
                                title={props?.item?.audio ? props.t("Download the application") : props.t("Doc not found")}
                                onClick={(e) => {
                                    props?.setPlayer({
                                        open:true,
                                        name:"audio",
                                        resource: props?.item?.application?.audio
                                    })
                                }} style={{textAlign: "center", cursor: "pointer"}}
                                className="file">
                                <Audiotrack/>
                            </div>
                        </li>
                    </ul>
            }
        </div>
    );
}

export default withTranslation()(SectionCategory);
