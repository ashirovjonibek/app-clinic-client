import React, {useEffect, useRef, useState} from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";
import {Send, AttachFile, Edit, Delete, Clear, Description, MoreVert} from '@material-ui/icons';
import unRead from '../../assets/icon/done_black_24dp.svg'
import read from '../../assets/icon/done_all_black_24dp.svg'
import axios from "axios";
import {ListItem, ListItemAvatar, Avatar, ListItemText, List} from "@material-ui/core";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import {red} from "@material-ui/core/colors";
import {Col, Dropdown, Input, Menu, Modal, Popconfirm, Row, Tag, Upload} from "antd";
import PdfViewer from "../catalog/pdfViewer";
import DropDown from "../Home/dropdown/dropdown";

// const AlwaysScrollToBottom = () => {
//     const elementRef = useRef();
//     useEffect(() => elementRef.current.scrollIntoView());
//     return <div ref={elementRef} />;
// };

const CenterSends = (props) => {
    const chatContainer = React.createRef();
    const [openMessaage, setOpenMessaage] = useState(false);
    const [me, setMe] = useState({});
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    // const messagesEndRef = useRef(null);
    const [refresh, setRefresh] = useState(false);
    const [edit, setEdit] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalUrl, setModalUrl] = useState("");
    const [dropFile, setDropFile] = useState({
        open: false,
        url: "",
        type: "",
        size: 0,
        file: "",
        message: "",
        name: ""
    });
    const [message, setMessage] = useState({
        id: "",
        text: ""
    });

    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/message?toId=' + props?.chat?.chatId,
            headers: {
                Authorization: localStorage.getItem(STORAGE_NAME)
            }
        }).then((res) => {
            console.log(res);
            setMessages(res?.data?.object);
            axios({
                method: 'get',
                url: API_URL + '/auth/me',
                headers: {
                    Authorization: localStorage.getItem(STORAGE_NAME)
                }
            }).then((resp) => {
                console.log(resp);
                setMe(resp?.data?.object)
            })
        });
    }, [props, refresh]);

    useEffect(() => {
        scrollToMyRef()
    }, [messages, openMessaage]);

    const scrollToMyRef = () => {
        // chatContainer.current.scrollIntoView();
        console.log(chatContainer);
        if (chatContainer.current) {
            const scroll =
                chatContainer.current.scrollHeight -
                chatContainer.current.clientHeight;
            chatContainer.current.scrollTo(0, scroll);
        }
    };

    const getTime = (date) => {
        let s = new Date(date).toLocaleTimeString();
        return s.substring(0, s.lastIndexOf(":"))
    }

    const defaultDay = (index) => {
        return messages.length > 0 && index !== 0 ? new Date(messages[index - 1].createdAt).getDay() !== new Date(messages[index].createdAt).getDay() : true
        // return true
    };

    const getDay = (date) => {
        let s = new Date(date).toDateString();
        console.log(s)
        return s.substring(0, s.lastIndexOf(" "));
    };

    const deleteMessage = (id) => {
        if (id) {
            Swal.fire({
                showCancelButton: true,
                cancelButtonText: "Yo'q",
                confirmButtonText: "Ha",
                confirmButtonColor: red[400],
                title: "Habar o'chirilsinmi?",
                icon: "warning"
            }).then((confirm) => {
                if (confirm.isConfirmed) {
                    axios({
                        method: 'delete',
                        url: API_URL + '/message?messageId=' + id,
                        headers: {
                            Authorization: localStorage.getItem(STORAGE_NAME)
                        }
                    }).then((r) => {
                        Swal.fire("Habar o'chirildi!!!", "", "success").then((c) => {
                            setRefresh(!refresh)
                        })
                    }).catch((e) => {
                        Swal.fire("Xatolik yuz berdi!!!", "", "error").then((c) => {
                            setRefresh(!refresh)
                        })
                    })
                }
            })
        }
    };


    const sendOrEdit = (file?) => {
        console.log(file);
        let data = new FormData();
        let method = '';
        if (message?.id) {
            data.append("messageId", message.id);
            data.append("message", message.text);
            method = 'put'
        } else {
            data.append("toId", props?.chat?.id);
            data.append("chatId", props?.chat?.chatId);
            data.append("message", file?.message ? file?.message : message.text);
            if (file?.file) data.append("file", file?.file);
            method = 'post'
        }

        if (message?.text || file?.file) {
            axios({
                method: method,
                url: API_URL + '/message',
                headers: {
                    Authorization: localStorage.getItem(STORAGE_NAME),
                    'Content-Type': 'multipart/form-data'
                },
                data: data
            }).then((res) => {
                setRefresh(!refresh);
                setMessage({
                    id: "",
                    text: ""
                });
                setDropFile(
                    {
                        open: false,
                        url: "",
                        type: "",
                        size: 0,
                        file: "",
                        message: "",
                        name: ""
                    }
                )
                setEdit(false)
                props?.setRefreshCount(!props?.refreshCount)
            }).catch((e) => {
                Swal.fire("Xatolik yuz berdi!!!", "", "error")
            })
        }

    };
    const sendFile = (e) => {

        if (e) {
            let s = URL.createObjectURL(e);
            setDropFile(
                {
                    ...dropFile,
                    url: s,
                    file: e,
                    type: "file",
                    name: e?.name,
                    size: parseInt(e?.size / (1024)),
                    open: true
                }
            );
        }
    };

    return (
        <div>
            <div className="new">
                {
                    props?.chat?.count > 0 ? <div className="new-item">{props?.chat?.count}</div> :
                        <div className="new-item">0</div>
                }
            </div>
            <div className="content">
                <div className="fedbeck">

                    <UserName text={props?.chat?.fullName} fedbeck={"fedbeck"}/>

                    <div className="fedbeck-right">
                        <button className="btn-default" onClick={() => {
                            scrollToMyRef();
                            setOpenMessaage(!openMessaage)
                        }}>{openMessaage ? props.t("Close") : props.t("Open")}</button>
                    </div>
                </div>

                {openMessaage &&
                <div style={{position: "relative"}} ref={chatContainer} className="message-content bg-light">
                    <>{
                        messages.length > 0 ? messages.map((item, i) =>
                                <div>

                                    {
                                        defaultDay(i) ?
                                            <p className="messaging-day">
                                            <span>
                                                {getDay(item.createdAt)}
                                            </span>
                                            </p>
                                            : ""
                                    }

                                    {item?.fileUrl ?
                                        <div style={{width: "98%", margin: "auto", clear: "both"}}>
                                            <Row className={item.fromId === me.id ? "d-flex justify-content-end" : ""}
                                                 gutter={24}>
                                                <Col xs={22} sm={18} md={16} lg={12} style={{position: "relative"}}>
                                                    {
                                                        item.fromId === me.id && <span onClick={() => {
                                                            deleteMessage(item?.messageId)
                                                        }} style={{
                                                            position: "absolute",
                                                            top: "5px",
                                                            zIndex: 1,
                                                            right: "15px",
                                                            color: red[400],
                                                        }}
                                                        >
                                                            <span style={{
                                                                height: "35px",
                                                                width: "15px",
                                                                cursor: "pointer",
                                                                position: "relative"
                                                            }}>
                                                                <Delete/>
                                                            </span>
                                                    </span>
                                                    }
                                                    <Tag className="pt-2 bg-info pb-2 text-light"
                                                         style={{width: "100%", overflow: "hidden", borderRadius: "12px"}}>
                                                        <Row style={{cursor: "pointer"}} gutter={24}>
                                                            <Col onClick={() => {
                                                                setModal(true)
                                                                setModalUrl(API_URL + item?.fileUrl)
                                                            }} span={3}>
                                                                <Avatar><Description/></Avatar>
                                                            </Col>
                                                            <Col className="d-flex align-items-center" span={21}>
                                                                <div style={{lineHeight: "10px"}}>
                                                                    <p style={{fontSize: "18px"}}>{item?.fileName}</p>
                                                                    <i style={{paddingLeft: "5px"}}>{item?.fileSize} kb</i>
                                                                </div>
                                                            </Col>
                                                            <hr/>
                                                            {item?.message && <Col span={24}>
                                                                <p className="border-top pt-2 mt-2"
                                                                   style={{fontSize: "18px"}}>
                                                                    <span className="message">{item.message}</span>
                                                                    <span style={{float: "right"}}
                                                                          className="icon">{item.edit ?
                                                                        <i>edited </i> : ""}{getTime(item.createdAt)}{item.fromId === me.id ?
                                                                        <img src={item?.read ? read : unRead}
                                                                             alt=""/> : ""}</span>
                                                                </p>
                                                            </Col>}
                                                        </Row>
                                                    </Tag>
                                                </Col>
                                            </Row>
                                        </div>
                                        : <div key={i} className="message-paragrapgh">

                                            <p className={item.fromId === me.id ? "me  bg-info text-light" : "bg-info text-light"}>
                                        <span className="message">
                                           {item.message}
                                        </span>
                                                <span className="icon">
                                            {item.edit ? <i>edited </i> : ""}
                                                    {getTime(item.createdAt)}
                                                    {item.fromId === me.id ?
                                                        <img src={item?.read ? read : unRead} alt=""/> : ""}
                                        </span>
                                            </p>
                                            {item.fromId === me.id && !edit ? <span className="action-message"
                                                                                    style={item.fromId !== me.id ? {float: "top"} : {float: "right"}}>
                                            <span onClick={() => {
                                                setMessage({
                                                    id: item?.messageId,
                                                    text: item?.message
                                                })
                                                setEdit(true)
                                            }} className="message-edit"><Edit/></span>
                                            <span onClick={() => {
                                                deleteMessage(item?.messageId)
                                            }} className="message-delete"><Delete/></span>
                                        </span> : ""}
                                        </div>}
                                </div>
                            ) :
                            <div className="messaging-day" style={{
                                textAlign: "center",
                                marginTop: "25px"
                            }}>Habarlar mavjud emas!!!</div>

                    }

                    </>
                </div>}
                {
                    openMessaage && <div className="message-input">
                        <Row gutter={24}>
                            <Col xs={20} sm={20} md={20} lg={22}>
                                {edit ? <span onClick={() => {
                                    setMessage({
                                        id: "",
                                        text: ""
                                    })
                                    setEdit(false)
                                }} title="Bekor qilish"
                                              className="clear-edit text-light bg-danger rounded"><Clear/></span> : ""}
                                <textarea disabled={dropFile?.open} className="pt-3 pl-2 pb-3 pr-5" onKeyPress={(e) => {
                                    if (e?.ctrlKey && e?.charCode === 13) {
                                        sendOrEdit()
                                    }
                                }} autoFocus={openMessaage} value={message.text} onChange={(e) => {
                                    setMessage({
                                        ...message,
                                        text: e.target.value
                                    })
                                }
                                } placeholder="Введите ваше сообщение"/>
                            </Col>
                            {!edit &&
                            <Col className="d-flex justify-content-center align-items-center" xs={2} sm={2} md={2}
                                 lg={1}>
                                <Popconfirm
                                    className="rounded-3"
                                    cancelText="Bekor qilish"
                                    okText="Yuborish"
                                    onConfirm={(e) => {
                                        sendOrEdit(dropFile)
                                    }}
                                    onCancel={() => setDropFile({
                                        open: false,
                                        url: "",
                                        type: "",
                                        size: 0,
                                        file: "",
                                        message: "",
                                        name: ""
                                    })}
                                    title={
                                        <Row gutter={24}>
                                            <Col span={24}>
                                                <p className="text-info">Sending file</p>
                                            </Col>
                                            <Col span={24}>

                                                <Row gutter={24}>
                                                    <Col span={24}>
                                                        <Tag className="pt-2 pb-2" style={{width: "100%"}}>
                                                            <Row>
                                                                <Col span={3}>
                                                                    <Avatar><Description/></Avatar>
                                                                </Col>
                                                                <Col className="d-flex align-items-center" span={21}>
                                                                    {dropFile?.name}
                                                                </Col>
                                                            </Row>
                                                        </Tag>
                                                    </Col>

                                                    <Col span={24}>
                                                        <Input.TextArea value={dropFile?.message} onChange={(e) => {
                                                            setDropFile({
                                                                ...dropFile,
                                                                message: e?.target?.value
                                                            })
                                                        }} placeholder="Write some message..."
                                                                        style={{width: "100%"}}/>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    }
                                    placement="topRight"
                                    visible={dropFile?.open}>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"
                                        fileList={[]}
                                        accept=".pdf"
                                        customRequest={(e) => {
                                            if (e.file?.size > 5 * 1024 * 1024) {
                                                Swal.fire("Fayl hajmi 6Mb dan kam bo'lishi kerak!!!", "", "error")
                                            }
                                            sendFile(e?.file);
                                            setTimeout(() => {
                                                return "ok"
                                            }, 3000)
                                        }}
                                    >
                                        <AttachFile/>
                                    </Upload>

                                </Popconfirm>
                            </Col>}
                            <Col className="d-flex justify-content-center align-items-center" xs={2} sm={2} md={2}
                                 lg={1}>
                                <span style={{cursor: "pointer"}}>
                            <Send onClick={sendOrEdit} style={{
                                fontSize: "30px"
                            }}/>
                        </span>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
            <PdfViewer open={modal} url={modalUrl} setOpen={setModal}
                       setUrl={setModalUrl}/>
        </div>
    );
}

export default withTranslation()(CenterSends);
