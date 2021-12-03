import React, {useState} from 'react'
import UserName from "../UserName";
import GetAppIcon from "@material-ui/icons/GetApp";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import {CustomPagination} from "../catalog/Pagenation";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Label from "../Label";
import {withTranslation} from "react-i18next";
import i18next from "i18next";
import {Checkbox, Col, Row, Tag} from "antd";
import {FileOutlined} from "@ant-design/icons/lib/icons";
import VideoCameraOutlined from "@ant-design/icons/lib/icons/VideoCameraOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";

const AttachAnswer = ({item, refresh, t, setUrl, setOpen}) => {
    let token = localStorage.getItem(STORAGE_NAME);
    const [size, setSize] = useState(3);
    const [active, setActive] = useState(1);
    const [total, setTotal] = useState(0);
    const [doc, setDoc] = useState()
    const [docOpen, setDocOpen] = useState(false)
    const [modalItem, setMOdalItem] = useState({
        url: "",
        type: ""
    })


    const download = (id, name) => {
        setUrl(API_URL + "/attach/" + id);
        setOpen(true)

    };

    const getDayDeadline = (date) => {
        let a = new Date(date);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s = d / (1000 * 60 * 60 * 24)
        return s > 0 ? parseInt(s) < s ? parseInt(s + 1) : s : 0;
    };

    return (
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
                        >
                            <Tag
                                color={getDayDeadline(item?.application?.deadLineDate) > 10 ? "green" : getDayDeadline(item?.application?.deadLineDate) <= 10 && getDayDeadline(item?.application?.deadLineDate) > 5 ? "yellow" : "red"}
                                style={{marginLeft: "5px"}}>
                                {getDayDeadline(item?.application?.deadLineDate)} kun
                            </Tag>
                        </div>
                    </div>
                </div>
                <div className="request-theme">
                    <div className="request-theme-title" style={{fontSize: "16px"}}>
                        <h3 className="d-inline-block" style={{paddingRight: "5px"}}>{t("Subject of the appeal")}:</h3>
                        {item?.application.title}
                    </div>
                </div>
                <hr/>
                <div className="request-content-item">
                    <p>{item?.application?.description}</p>
                </div>
                <hr/>
                <div className="categories">
                    <Row gutter={24}>
                        <Col className="p-3" xs={24} sm={24} md={6} lg={6}>
                                    <span>
                                        {t("Category of treatment")}
                                    </span>
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={24} lg={24} className="p-1">
                                    <Tag style={{width: '100%', fontSize: "16px"}} className="text-center p-2">
                                        {item?.application?.section?.title[i18next.language]}
                                    </Tag>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-3" xs={24} sm={24} md={18} lg={18}>
                                    <span>
                                        Files
                                    </span>
                            <Row>
                                {item?.application?.attachmentsId && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setDoc(API_URL + '/attach/' + item?.application?.attachmentsId[0]);
                                        setDocOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <FileOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}
                                {item?.application?.video && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setMOdalItem({url: API_URL + item?.application?.video, type: "v"});
                                        setOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <VideoCameraOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}
                                {item?.application?.audio && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setMOdalItem({url: API_URL + item?.application?.audio, type: "va"});
                                        setOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <AudioOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}

                                <Col lg={15} md={12} sm={24} xs={24} className="p-1">
                                    <Checkbox checked={item?.application?.top}>
                                        <div>
                                            <p id="vehicle1">
                                                {t("This question will not be displayed in the \"Frequently Asked Questions\" section of the AIS Clinic.")}</p>
                                        </div>
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <hr/>
                <>
                    <Label text="Rahbar xulosasi:"/>
                    <Tag
                        style={{width: "100%", marginTop: "5px", marginBottom: "5px", fontSize: "16px", padding: "5px"}}
                        color={"orange"}>{item?.answer?.deniedMessage}</Tag>
                </>
                <hr/>
                <div className="response-request">
                    <ResponseRequestItem1 type={true} refresh={refresh} id={item?.id} docId={item?.id}
                                          item={item?.application}/>
                </div>
            </div>
        </>
    )
}

export default withTranslation()(AttachAnswer);
