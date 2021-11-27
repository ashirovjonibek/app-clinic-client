import { Avatar, Badge, Button, Card, Checkbox, Col, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Tag } from 'antd';
import { FileOutlined } from '@ant-design/icons'
import VideoCameraOutlined from "@ant-design/icons/lib/icons/VideoCameraOutlined";
import AudioOutlined from "@ant-design/icons/lib/icons/AudioOutlined";
import './appeals.scss'
import AnswerListener from './answerListener';
import AnswerForUser from './answerListenerForUser';
import AnswerModerator from './AnswerModerator';
import AudioVidioReader from './videoVsAudioRead';
import { types } from './type';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import { API_URL } from '../../../utils/constant';
import PdfViewer from '../pdfViewer';

const Appeals = ({
    item,
    type,
    t
}) => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const [appeal, setAppeal] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [checkedBy, setCheckedBy] = useState(null);
    const [doc, setDoc] = useState()
    const [docOpen, setDocOpen] = useState(false)
    const [modalItem, setMOdalItem] = useState({
        url: "",
        type: ""
    })
    const [text, setText] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit ametconsectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore numquam magnam! Ex dignissimos assumenda amet magni iusto dolor, error totam similique ea iste voluptatibus, sint sequi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptatibus itaque eaque dolore")

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    useEffect(() => {
        if (type === types.newAppFromApplicant) {
            setAnswer(null);
            setCheckedBy(null)
            setAppeal(item)
        }else{
            setAnswer(item?.answer);
            setCheckedBy(item?.checkedBy)
            setAppeal(item?.application)
        }
    }, [item])

    const onFinish = (values) => {
        console.log(values)
    };

    // CREATED, //yaratildi
    //INPROCESS, //jarayonda
    //DENIED,//  rad etildi
    //COMPLETED
    const getStatus=(a)=>{
        switch(a){
            case "CREATED": return {text:"Yangi murojaat",color:"blue"};
            case "INPROCESS": return {text:"Jarayonda",color:"yellow"};
            case "DENIED": return type!==types?.newAppFromApplicant?{text:"Jarayonda",color:"yellow"}:{text:"Qaytarildi",color:"red"};
            case "COMPLETED": return {text:"Bajarilgan",color:"green"};
            default: return {text:"No date",color:"yellow"}
        }
    }

    console.log(text.length)

    const getDay=(date)=>{
        let a=new Date().getTime();
        let b=new Date(date).getTime();
         return b-a>0?parseInt((b-a)/86400/1000):0
    }

    return (
        <div className="container-fluid m-2">
            <Badge.Ribbon {...getStatus(appeal?.status)}>
                <Card className="rounded card-appeals border"
                    title={false}>
                    <Row gutter={24}>
                        {types.newAppFromApplicant !== type && <Col xs={12} sm={12} md={12} lg={12}>
                            <Avatar className="m-0 p-0"
                                src={appeal?.applicant?.image&&<Image src={API_URL+appeal?.applicant?.image} style={{ width: "100%", height: "45px", objectFit: 'cover' }} />}
                                style={{ backgroundColor: stringToHslColor("Appeals", 50, 50), float: 'left' }}
                                size={45}>{
                                    appeal?.applicant?.fullName[0]?.toUpperCase()
                                }</Avatar>
                            <span className="d-flex pt-2 justify-content-center aligin-items-center"
                                style={{
                                    backgroundColor: "",
                                    paddingLeft: "5px",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    float: 'left'
                                }}>{appeal?.applicant?.fullName}</span>
                        </Col>}
                        {
                            types.newAppFromApplicant !== type ? appeal?.deadLineDate&&<Col className="text-end" Col xs={12} sm={12} md={12} lg={12}>
                                <p style={{width:"100%",textAlign:"right",marginTop:"4px"}}><span style={{fontWeight:600}}>Ko'rib chiqish muddati: </span>{getDay(appeal?.deadLineDate)} kun</p>
                            </Col>:""
                        }
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={24} className="mt-2">
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <p className="border-bottom pb-1"
                                        style={{ fontWeight: "550", fontFamily: "sans-serif", wordBreak: "break-all" }}>
                                        <span style={{ fontWeight: "600", fontSize: "16px", paddingRight: "5px" }}>{t("Subject of the appeal")}:</span>
                                        {appeal?.title}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="border rounded" gutter={24}>
                        <Col className="border p-3" lg={24} md={24} sm={24} xs={24}>
                            <p style={{
                                maxHeight: show ? "" : "225px",
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
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <Row gutter={24}>
                                <Col className="p-3" xs={24} sm={24} md={6} lg={6}>
                                    <span>
                                        {t("Category of treatment")}
                                    </span>
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} className="p-1">
                                            <Tag style={{ width: '100%', fontSize: "16px" }} className="text-center p-2">
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
                                            <Tag onClick={() => { setDoc(API_URL + '/attach/' + appeal?.attachmentsId[0]); setDocOpen(true) }} style={{ width: "100%", cursor: 'pointer' }} className="text-center p-2">
                                                <FileOutlined style={{ fontSize: "20px" }} />
                                            </Tag>
                                        </Col>}
                                        {appeal?.video && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                            <Tag onClick={() => { setMOdalItem({ url: API_URL + appeal?.video, type: "v" }); setOpen(true) }} style={{ width: "100%", cursor: 'pointer' }} className="text-center p-2">
                                                <VideoCameraOutlined style={{ fontSize: "20px" }} />
                                            </Tag>
                                        </Col>}
                                        {appeal?.audio && <Col lg={3} md={4} sm={8} xs={24} className="p-1">
                                            <Tag onClick={() => { setMOdalItem({ url: API_URL + appeal?.audio, type: "va" }); setOpen(true) }} style={{ width: "100%", cursor: 'pointer' }} className="text-center p-2">
                                                <AudioOutlined style={{ fontSize: "20px" }} />
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
                        </Col>
                    </Row>
                    {
                        types.newAppFromApplicant !== type && <> 
                            {answer&&answer?.deniedMessage&&<AnswerModerator message={answer?.deniedMessage} />}
                            {checkedBy&&<AnswerListener type={type} setDocOpen={setDocOpen} setDoc={setDoc} item={checkedBy} answer={answer}/>}
                            {appeal?.status==="COMPLETE"&&<AnswerForUser />}
                        </>
                    }
                    {modalItem?.url && <AudioVidioReader type={modalItem?.type} setOption={()=>setMOdalItem({type:"",url:""})} url={modalItem?.url} open={open} setOpen={setOpen} />}
                    {doc && <PdfViewer url={doc} open={docOpen} setOpen={setDocOpen} setUrl={setDoc} />}
                </Card>
            </Badge.Ribbon>
        </div>
    )
}

export default withTranslation()(Appeals)