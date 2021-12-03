import React, {useState} from "react";
import UserName from "../UserName";
import i18next from "i18next";
import {API_URL} from "../../utils/constant";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";
import {green, red} from "@material-ui/core/colors";
import {withTranslation} from "react-i18next";
import {Select} from "antd";


const NewApplications = ({
                             item,
                             i,
                             t,
                             comment,
                             setComment,
                             ignoredApp,
                             acceptApp,
                             setUrl,
                             setOpen,
                             setPlayer
                         }) => {

    const [show, setShow] = useState(false);

    return (
        <div className="content" key={i}>
            <div className="request-content-title">
                <div className="request-content-title-name">
                    <UserName text={`${item.applicant.fullName}`}/>
                </div>
                <div className="request-content-title-date">
                    {/*{*/}
                    {/*    getDayDeadline(item.deadLineDate)*/}
                    {/*}*/}
                </div>
            </div>
            <div className="request-theme">
                <div className="request-theme-title">
                    <h3>{t("Subject of the appeal")}:</h3>
                    <p>{item.title}</p>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={item.top}/>
                    <label htmlFor="">{t("Confidentially")}</label>
                </div>
            </div>
            <div className="request-content-item">
                <p style={{
                    maxHeight: show ? "" : "340px",
                    overflow: "hidden"
                }}>{item?.description && item?.description}</p>
                {item?.description?.length > 1300 && <span onClick={() => setShow(!show)} style={{
                    cursor: "pointer",
                    color: "blue"
                }}>{show ? "Hide" : "Show"}</span>}
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
                        <div
                            onClick={() => {
                                setUrl(API_URL + '/attach/' + item?.attachmentsId[0])
                                setOpen(true)
                            }
                            }
                            title={item?.attachmentsId ? t("Download the application") : t("Doc not found")}
                            style={{textAlign: "center", cursor: "pointer"}}
                            className="file-item d-flex justify-content-center align-items-center">
                            {item?.attachmentsId ? <span><FileCopy/></span> : ""}
                        </div>
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
                            className="file-item">
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
                            className="file-item">
                            <Audiotrack/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="request-bottom">
                {
                    comment.status ?
                        <div style={{
                            border: "1px solid rgba(0,0,0,0.3)",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px"
                        }}>
                            {/*<div>*/}
                            {/*    <TextFields/>*/}
                            {/*</div>*/}
                            <textarea style={{width: "100%"}} onChange={(e) => {
                                if (e.target.value.length > 10) {
                                    setComment({
                                        ...comment,
                                        message: e.target.value,
                                        errorCom: ""
                                    })
                                }
                            }
                            } id="" rows="10">

                                  </textarea>
                            <div>
                                <p style={{color: red[400]}}>{comment.errorCom}</p>
                                <label htmlFor="selectHow">Kimga yuborilsin:</label><br/>
                                <Select onChange={(e) => {
                                    setComment({
                                        ...comment,
                                        to: e
                                    })
                                }} id={"selectHow"} placeholder="Kimga yo'naltirish">
                                    <Select.Option value={"boss"}>Kafedra mudiriga</Select.Option>
                                    <Select.Option value={"moderator"}>Super moderatorga</Select.Option>
                                </Select>
                                <button onClick={() => {
                                    setComment({
                                        status: false,
                                        message: "",
                                        errorCom: "",
                                    })
                                }} style={{
                                    padding: "6px 8px", borderRadius: "3px", float: "right"
                                }}>Bekor qilish
                                </button>
                                <button onClick={() => ignoredApp(item.id)} style={{
                                    padding: "6px 8px",
                                    borderRadius: "3px",
                                    backgroundColor: green[400],
                                    color: "white",
                                    float: "right"
                                }}>Yuborish
                                </button>
                            </div>
                        </div>

                        :
                        <>
                            < div style={{width: "100%", clear: "both"}}/>
                            <button className="blue-btn"
                                    onClick={() => setComment({
                                        ...comment,
                                        status: true
                                    })}>{t("Send to the moderator to replace the listener")}</button>
                            <button type="submit" className="btn-default" style={{
                                marginTop: "15px"
                            }}
                                    onClick={() => acceptApp(item.id)}>{t("Accept")}</button>
                        </>
                }
            </div>
        </div>
    )
};

export default withTranslation()(NewApplications)