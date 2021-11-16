import React, {useEffect, useRef, useState} from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";
import {Send, AttachFile, Edit, Delete, Clear,Description} from '@material-ui/icons';
import unRead from '../../assets/icon/done_black_24dp.svg'
import read from '../../assets/icon/done_all_black_24dp.svg'
import axios from "axios";
import {ListItem,ListItemAvatar,Avatar,ListItemText,List} from "@material-ui/core";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import Swal from "sweetalert2";
import {red} from "@material-ui/core/colors";

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
    // const messagesEndRef = useRef(null);
    const [refresh, setRefresh] = useState(false);
    const [edit, setEdit] = useState(false);
    const [dropFile, setDropFile] = useState({
        open:false,
        url:"",
        type:"",
        size:0,
        file:"",
        message:"",
        name:""
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


    const sendOrEdit = () => {
        let data = {};
        let method = '';
        if (message?.id) {
            data = {
                messageId: message.id,
                message: message.text
            };
            method = 'put'
        } else {
            data = {
                toId: props?.chat?.id,
                chatId: props?.chat?.chatId,
                message: message.text
            };
            method = 'post'
        }

        if (message?.text) {
            axios({
                method: method,
                url: API_URL + '/message',
                headers: {
                    Authorization: localStorage.getItem(STORAGE_NAME)
                },
                data: data
            }).then((res) => {
                setRefresh(!refresh);
                setMessage({
                    id: "",
                    text: ""
                });
                setEdit(false)
            }).catch((e) => {
                Swal.fire("Xatolik yuz berdi!!!", "", "error")
            })
        }

    };
    const sendFile=(e)=>{
        let file=e?.target?.files;
        console.log(file[0]);
        if (file[0]){
            let type = file[0]?.type;
            let s = URL.createObjectURL(file[0]);
            if (type==="application/pdf"){
                setDropFile(
                    {
                        ...dropFile,
                        url:s,
                        file:file[0],
                        type:"file",
                        name:file[0]?.name,
                        size:parseInt(file[0]?.size/(1024)),
                        open:true
                    }
                )
            }else if (type.startsWith("video")){
                setDropFile(
                    {
                        ...dropFile,
                        url:s,
                        file:file[0],
                        type:"video",
                        size:parseInt(file[0]?.size/(1024)),
                        name:file[0]?.name,
                        open:true
                    }
                )
            }else {
                setDropFile(
                    {
                        ...dropFile,
                        url:s,
                        file:file[0],
                        type:"img",
                        name:file[0]?.name,
                        size:parseInt(file[0]?.size/(1024)),
                        open:true
                    }
                )
            }
        }
    }

    return (
        <div>
            <div className="new">
                {
                    props?.chat?.count > 0 ? <div className="new-item">{props?.chat?.count}</div> : ""
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

                {openMessaage && <div style={{position: "relative"}} ref={chatContainer} className="message-content">
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

                                    <div key={i} className="message-paragrapgh">

                                        <p className={item.fromId === me.id ? "me" : ""}>
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
                                    </div>
                                </div>
                            ) :
                            <div style={{
                                textAlign: "center",
                                marginTop: "25px"
                            }}>Habarlar mavjud emas!!!</div>

                    }

                    </>
                </div>}
                {
                    openMessaage && <div className="message-input">
                        {dropFile?.open && <div onClick={() => setDropFile({
                            open:false,url:"",type:"",size:0
                        })} style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: 70+"px",
                            minHeight: "360px",
                            width:"100%",
                            backgroundColor: "rgba(0,0,0,0.3)",
                            zIndex: "2"
                        }}>
                            <div style={{
                                position: "relative",
                                width: "60%",
                                padding:"20px",
                                borderRadius:"15px",
                                height: "200px",
                                backgroundColor: "#ffffff",
                                zIndex:5
                            }}>
                                <div>
                                    {
                                        dropFile.type==="file"?
                                            <List>
                                                <ListItem style={{cursor:"pointer"}}>
                                                    <ListItemAvatar style={{position:"relative"}}>
                                                        <Avatar>
                                                            <Description />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                    <div style={{left:"65px",lineClamp:1}}>
                                                        {
                                                            dropFile?.name
                                                        }
                                                    </div>
                                                </ListItem>
                                            </List>:
                                            dropFile.type==="video"?
                                                <div>
                                                    <video width={"100%"} height="140px" style={{position:"relative",objectFit:"cover"}} src={dropFile?.url} autoPlay={false} controls/>
                                                </div>:
                                                <div>
                                                    <img width={"100%"} height={"140px"} src={dropFile?.url} alt=""/>
                                                </div>
                                    }
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>}
                        <span className="attach-file">
                                <label htmlFor="attachFile"><AttachFile style={{
                                    fontSize: "30px"
                                }}/></label>
                            <input onChange={sendFile} type="file" accept="application/pdf,image/jpeg,video/*" size={25} id="attachFile" style={{width:0}}/>
                        </span>
                        <span>
                            <Send onClick={sendOrEdit} style={{
                                fontSize: "30px"
                            }}/>
                        </span>
                        <textarea multiple={true} value={message.text} onChange={(e) => {
                            setMessage({
                                ...message,
                                text: e.target.value
                            })
                        }
                        } type="text" placeholder="Введите ваше сообщение"/>
                        {edit ? <span onClick={() => {
                            setMessage({
                                id: "",
                                text: ""
                            })
                            setEdit(false)
                        }} title="Bekor qilish" className="clear-edit"><Clear/></span> : ""}
                    </div>
                }
            </div>
        </div>
    );
}

export default withTranslation()(CenterSends);
