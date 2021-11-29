import React, {useState} from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import {withTranslation} from "react-i18next";
import i18next from "i18next";
import {API_URL} from "../../utils/constant";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";
import {Button, Card, Checkbox, Col, Row, Tag} from "antd";
import {FileOutlined} from "@ant-design/icons/lib/icons";
import VideoCameraOutlined from "@ant-design/icons/lib/icons/VideoCameraOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import AudioVidioReader from "../catalog/appeal/videoVsAudioRead";
import PdfViewer from "../catalog/pdfViewer";

const DeadlineRequestItem = ({t, appeal}) => {
    const [doc, setDoc] = useState();
    const [docOpen, setDocOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [modalItem, setMOdalItem] = useState({
        url: "",
        type: ""
    });

    const getDayDeadline = (date) => {
        let a = new Date(date);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s = d / (1000 * 60 * 60 * 24)
        return s > 0 ? parseInt(s) < s ? parseInt(s + 1) : s : 0;
    };

    return (
        <div className="deadline-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич"/>
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                        </div>
                        <div >
                            <Tag color={getDayDeadline(appeal?.deadLineDate)>10?'green':getDayDeadline(appeal?.deadLineDate)>5&&getDayDeadline(appeal?.deadLineDate)<=10?"yellow":"red"} style={{marginLeft:"5px"}}>
                                {getDayDeadline(appeal?.deadLineDate)} kun
                            </Tag>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="request-theme">
                    <div>
                        <h3>{t("Subject of the appeal")}:<span>
                            {appeal?.title}
                    </span></h3>
                    </div>
                </div>
                <hr/>
                <div className="request-content-item" style={{fontSize: "16px"}}>
                    <p style={{
                        maxHeight: show ? "" : "220px",
                        overflow: show ? "" : 'hidden',
                        transition: "ease 500ms"
                    }} className="text-justify">
                        {
                            appeal?.description
                        }

                    </p>
                    {
                        appeal?.description?.length > 2000 && <Button type="link" onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    }

                </div>
                <div className="categories">
                    <Row gutter={24}>
                        <Col className="p-3" xs={24} sm={24} md={6} lg={6}>
                                    <span>
                                        {t("Category of treatment")}
                                    </span>
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={24} lg={24} className="p-1">
                                    <Tag style={{width: '100%', fontSize: "16px"}} className="text-center p-2">
                                        {appeal?.section?.title[i18next.language]}
                                    </Tag>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="p-3" xs={24} sm={24} md={18} lg={18}>
                                    <span>
                                        Files
                                    </span>
                            <Row>
                                {appeal?.attachmentsId && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setDoc(API_URL + '/attach/' + appeal?.attachmentsId[0]);
                                        setDocOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <FileOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}
                                {appeal?.video && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setMOdalItem({url: API_URL + appeal?.video, type: "v"});
                                        setOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <VideoCameraOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}
                                {appeal?.audio && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                    <Tag onClick={() => {
                                        setMOdalItem({url: API_URL + appeal?.audio, type: "va"});
                                        setOpen(true)
                                    }} style={{width: "100%", cursor: 'pointer'}} className="text-center p-2">
                                        <AudioOutlined style={{fontSize: "20px"}}/>
                                    </Tag>
                                </Col>}

                                <Col lg={15} md={12} sm={24} xs={24} className="p-1">
                                    <Checkbox checked={appeal?.top}>
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
            </div>
            {modalItem?.url && <AudioVidioReader type={modalItem?.type} setOption={()=>setMOdalItem({type:"",url:""})} url={modalItem?.url} open={open} setOpen={setOpen} />}
            {doc && <PdfViewer url={doc} open={docOpen} setOpen={setDocOpen} setUrl={setDoc} />}
        </div>
    );
}

export default withTranslation()(DeadlineRequestItem);
