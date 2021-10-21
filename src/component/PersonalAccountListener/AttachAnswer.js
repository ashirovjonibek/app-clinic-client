import React, {useState} from 'react'
import UserName from "../UserName";
import GetAppIcon from "@material-ui/icons/GetApp";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import {CustomPagination} from "../catalog/Pagenation";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Label from "../Label";
import {withTranslation} from "react-i18next";

const AttachAnswer=({item,refresh,t,setUrl,setOpen})=>{
    let token=localStorage.getItem(STORAGE_NAME);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(0);


    const download = (id,name) => {
        setUrl(API_URL+"/attach/"+id);
        setOpen(true)

    };
    return(
                <>
                    <div className="content">
                        <div className="request-content-title">
                            <div className="request-content-title-name">
                                <UserName text={`${item?.application?.applicant.fullName}`}/>
                            </div>
                            <div className="request-content-title-date">
                                <div className="date-label">
                                    {t("Review period")}:
                                </div>
                                <div
                                    // style={{backgroundColor: new Date(
                                    //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime()))
                                    //                                          .getDate()>10?"#63AA55":new Date(
                                    //                                          (new Date().getTime())-(new Date().getTime())).getDate()<=10&&new Date(
                                    //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime())).getDate()>5?"#FBCE0E":"#d80027"}}
                                    //                                        className="date-item"
                                >
                                    {" " + item.deadLineDate} {t("until")}
                                </div>
                            </div>
                        </div>
                        <div className="request-theme">
                            <div className="request-theme-title">
                                <h3>Тема обращения:</h3>
                                <p>{item?.application.title}</p>
                            </div>
                            <div>
                                <input type="checkbox"/>
                                <label htmlFor="">{t("Confidentially")}</label>
                            </div>
                        </div>
                        <div className="request-content-item">
                            <p>{item?.application?.description}</p>
                        </div>
                        <div className="categories">
                            <ul>
                                <li>
                                    <label htmlFor="">{t("Category of appeal")}</label>
                                    <div className="category-item">{item?.application?.section.title.uz}</div>
                                </li>
                                <li>
                                    <label htmlFor="">{t("File")}</label>
                                    <div onClick={() => {
                                        item?.application?.attachmentsId ? download(item?.application?.attachmentsId[0], item?.application?.applicant?.fullName) : console.log("not found")
                                    }} style={{textAlign: "center", paddingTop: "10px"}} className="file-item">
                                        <GetAppIcon/></div>
                                </li>
                            </ul>
                        </div>
                        <div className="content-line" />
                        <Label text="Rahbar xulosasi:"/>
                        <p style={{marginTop:"5px",marginLeft:"15px"}} className="text-warning">{item?.answer?.deniedMessage}</p>
                        <div className="response-request">
                            <ResponseRequestItem1 type={true} refresh={refresh} id={item?.id} docId={item?.id} item={item?.application}/>
                        </div>
                    </div>
                </>
    )
}

export default withTranslation() (AttachAnswer);
