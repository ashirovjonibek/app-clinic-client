import React from "react";
import UserName from "../UserName";
import {blue, green, red} from "@material-ui/core/colors";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import yellow from "@material-ui/core/colors/yellow";
import i18next from "i18next";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import {withTranslation} from "react-i18next";

const InpsApps = ({
                      item,
                      i,
                      t,
                      getPage,
                      getDayDeadline,
                      setUrl,
                      setOpen,
                      setPlayer,
                      acceptedApp
                  }) => {
    return (
        <div className="content" key={i}>
            <div className="request-content-title">
                <div className="request-content-title-name">
                    <UserName text={`${item.applicant.fullName}`}/>
                </div>
                <div className="request-content-title-date">
                    <div className=" text-danger" style={{
                        marginRight: "6px",
                        textDecoration: "underline",
                        cursor: "pointer",
                        color: blue[400],
                        display: "block",
                        clear: "both"
                    }} onClick={() => {
                        axios({
                            method: "post",
                            url: API_URL + '/message/generate-chat?toId=' + item?.applicant.id,
                            headers: {
                                Authorization: localStorage.getItem(STORAGE_NAME)
                            }
                        }).then((response) => {
                            getPage(8)
                        })
                    }}>
                        {t("Send message")}
                    </div>
                    <div className="date-label">
                        {t("Review period")}:
                        <span style={{
                            position: "relative",
                            backgroundColor: getDayDeadline(item.deadLineDate) > 10 ? green[400] : getDayDeadline(item.deadLineDate) < 5 ? red[400] : yellow[400],
                            padding: "3px 4px",
                            borderRadius: "10px",
                            color: "white",
                            height: "100%"
                        }}>
                                                <span>
                                                    {
                                                        getDayDeadline(item.deadLineDate)
                                                    }
                                                </span>
                                                <span> kun</span>
                                            </span>
                    </div>
                </div>
            </div>
            <div className="request-theme">
                <div className="request-theme-title">
                    <h3>{t("Subject of the appeal")}:</h3>
                    <p>{item.title}</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">{t("Confidentially")}</label>
                </div>
            </div>
            <div className="request-content-item">
                <p>{item.description}</p>
            </div>
            <div className="categories">
                <ul>
                    <li>
                        <label htmlFor="">{t("Category of treatment")}</label>
                        <div
                            className="category-item d-flex justify-content-center align-items-center">{item?.section?.title[i18next.language]}</div>
                    </li>
                    <li style={{display: item?.attachmentsId ? "" : "none", margin: '0 5px 0 5px'}}>
                        <label htmlFor="">{t("File")}</label>
                        {item?.attachmentsId ?<div
                            onClick={() => {
                                setUrl(API_URL + '/attach/' + item?.attachmentsId[0]);
                                setOpen(true)
                            }
                            }
                            title={item?.attachmentsId ? t("Download the application") : t("Doc not found")}
                            style={{textAlign: "center", cursor: "pointer"}}
                            className="file-item d-flex justify-content-center align-items-center">
                             <a ><FileCopy/></a>
                        </div>: ""}
                    </li>
                    <li style={{display: item?.video ? "" : "none", margin: '0 5px 0 5px'}}>
                        <label htmlFor="">{t("Video")}</label>
                        <div
                            title={item?.video ? t("Download the application") : t("Doc not found")}
                            onClick={(e) => {
                                setPlayer({
                                    open: true,
                                    name: "video",
                                    resource: item?.video
                                })
                            }} style={{textAlign: "center", cursor: "pointer"}}
                            className="file-item d-flex justify-content-center align-items-center">
                            <Videocam/>
                        </div>
                    </li>
                    <li style={{display: item?.audio ? "" : "none", margin: '0 5px 0 5px'}}>
                        <label htmlFor="">{t("Audio")}</label>
                        <div
                            title={item?.audio ? t("Download the application") : t("Doc not found")}
                            onClick={(e) => {
                                setPlayer({
                                    open: true,
                                    name: "audio",
                                    resource: item?.audio
                                })
                            }} style={{textAlign: "center", cursor: "pointer"}}
                            className="file-item d-flex justify-content-center align-items-center">
                            <Audiotrack/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="response-request">
                <ResponseRequestItem1 refresh={acceptedApp} id={item?.id} item={item}/>
            </div>
        </div>
    )
};

export default withTranslation()(InpsApps)