import React, {useState, useEffect} from "react";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {useHistory, Link} from "react-router-dom";
import axios from "axios";
import ContentTop from "../ContentTop";
import UserName from "../UserName";
import GetAppIcon from '@material-ui/icons/GetApp';
import {withTranslation} from "react-i18next";
import CustomPagination from "../catalog/Pagenation";
import Swal from "sweetalert2";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import {Audiotrack, FileCopy, Videocam} from "@material-ui/icons";
import i18next from "i18next";
import Dialog from "@material-ui/core/Dialog";
import {green, red} from "@material-ui/core/colors";

const IncomingRequestSection = (props) => {
    const {t} = props;
    const [request, setRequest] = useState([]);
    const history = useHistory();
    const [idUser, setIdUser] = useState(1);
    console.log(idUser);
    const [nS, setNS] = useState(1);
    const [r, setR] = useState(false);
    const [newApps, setNewApps] = useState([]);
    const [inpApps, setInpApps] = useState([]);
    const [doneApps, setDoneApps] = useState([]);
    const token = localStorage.getItem(STORAGE_NAME);
    const [active, setActive] = useState(1);
    const [size, setSize] = useState(3);
    const [total, setTotal] = useState(1);
    const [active1, setActive1] = useState(1);
    const [size1, setSize1] = useState(3);
    const [total1, setTotal1] = useState(1);
    const [player, setPlayer] = useState({
        open: false,
        name: "",
        resource: ""
    });
    const [comment, setComment] = useState({
        status: false,
        message: "",
        errorCom: ""
    })

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/listener?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            setRequest(res.data.object)
            let cr = [];
            res.data.object.map((item) => {
                if (item.status === "CREATED") {
                    cr.push(item)
                }
            });
            setTotal(res.data.totalPages)
            setNewApps(cr);
            section(1)

        });

        axios({
            method: 'get',
            url: API_URL + "/application/unchecked?size=" + size1 + "&page=" + (active1 - 1),
            headers: {
                'Authorization': token
            }
        }).then((r) => {
            setTotal1(r.data.totalPages);
            setInpApps(r.data.object)
        })
    }, [active, active1, size, size1]);

    const newApplication = () => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/listener?size=" + size + "&page=" + (active - 1),
            method: 'GET'
        }).then(res => {
            setRequest(res.data.object)
            let cr = [];
            res.data.object.map((item) => {
                if (item.status === "CREATED") {
                    cr.push(item)
                }
            });
            setTotal(res.data.totalPages)
            setNewApps(cr);
            section(1)

        })
    }

    const acceptApp = (id) => {
        Swal.fire({
            title: t("Confirmation")+"!!!",
            text:  t("Should this application be accepted")+"?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: t("Yes"),
            cancelButtonText: t("No")
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: 'put',
                    url: API_URL + '/application/accepted?id=' + id,
                    headers: {
                        'Authorization': token
                    }
                }).then((r) => {
                    Swal.fire(
                        t("Approved")+"",
                        t("The application was accepted")+"!!!",
                        'success'
                    ).then((res) => {
                        newApplication()
                    });
                })

            }
        });

    };

    const ignoredApp = (id) => {
        if (comment.message.length > 10) {
            Swal.fire({
                title:  t("Confirmation") + "!!!",
                text: t("Are you sure this application will be sent to the Moderator") + "?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText:  t("Yes"),
                cancelButtonText: t("No")
            }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method: 'put',
                        url: API_URL + '/application/ignored?id=' + id,
                        headers: {
                            'Authorization': token
                        },
                        data: {
                            comment:comment.message
                        }
                    }).then((r) => {
                        Swal.fire(
                            t("Sent")+"!",
                            t("The application was sent to the Moderator")+"!",
                            'success'
                        ).then((res) => {
                            setComment({
                                status:false,
                                message:"",
                                errorCom:"",
                            })
                            newApplication()
                        });
                    })

                }
            })
        } else {
            setComment({
                ...comment,
                errorCom: t("The message length must be at least 10 characters")+"!"
            })
        }
    };

    const acceptedApp = () => {
        axios({
            method: 'get',
            url: API_URL + "/application/unchecked?size=" + size1 + "&page=" + (active1 - 1),
            headers: {
                'Authorization': token
            }
        }).then((r) => {
            setTotal1(r.data.totalPages);
            setInpApps(r.data.object)
        })
    };

    useEffect(() => {
        acceptedApp()
    }, [size, active]);

    const checkedApp = () => {
        axios({
            method: 'get',
            url: API_URL + "/document/listener/checked",
            headers: {
                Authorization: token
            }
        }).then((r) => {
            console.log("checkedApp")
        })
    };

    const download = (id, name) => {
        axios.get(API_URL + "/attach/" + id, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/pdf'
            }
        }).then((r) => {
            const type = r.headers['content-type'];
            const blob = new Blob([r.data], {type: type, encoding: 'UTF-8'});
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob)
            link.download = '' + name + ' arizasi.pdf'
            link.click()
        })

    };


    const section = (n) => {
        switch (n) {
            case 1:
                return (
                    <>
                        {newApps && newApps.map((item, i) =>

                            <div className="content" key={i} value={item.id}>
                                <div className="request-content-title">
                                    <div className="request-content-title-name">
                                        <UserName text={`${item.applicant.fullName}`}/>
                                    </div>
                                    <div className="request-content-title-date">
                                        {/*<div className="date-label">*/}
                                        {/*    {props.t("Осталось")}:*/}
                                        {/*</div>*/}
                                        {/*<div*/}
                                        {/*    style={{backgroundColor: new Date(*/}
                                        {/*    new Date(item.deadLineDate).getTime()-new Date().getTime())*/}
                                        {/*        .getDate()>10?"#63AA55":new Date(*/}
                                        {/*        new Date(item.deadLineDate).getTime()-new Date().getTime()).getDate()<=10&&new Date(*/}
                                        {/*        new Date(item.deadLineDate).getTime()-new Date().getTime()).getDate()>5?"#FBCE0E":"#d80027"}} className="date-item"*/}
                                        {/*>*/}
                                        {/*    {*/}
                                        {/*        new Date(*/}
                                        {/*        new Date(item.deadLineDate).getTime()-new Date().getTime())} kun*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <div className="request-theme">
                                    <div className="request-theme-title">
                                        <h3>{props.t("Subject of the appeal")}:</h3>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" defaultChecked={item.top}/>
                                        <label htmlFor="">{props.t("Confidentially")}</label>
                                    </div>
                                </div>
                                <div className="request-content-item">
                                    <p>{item.description}</p>
                                </div>
                                <div className="categories">
                                    <ul>
                                        <li>
                                            <label htmlFor="">{props.t("Category of treatment")}</label>
                                            <div
                                                className="category-item">{item?.section?.title[i18next.language]}</div>
                                        </li>
                                        <li style={{display: item?.attachmentsId ? "" : "none", margin: '0 5px 0 5px'}}>
                                            <label htmlFor="">{props.t("File")}</label>
                                            <div
                                                title={item?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                                style={{textAlign: "center", cursor: "pointer"}}
                                                className="file-item">
                                                {item?.attachmentsId?<a href={API_URL + '/attach/' + item?.attachmentsId[0]}><FileCopy/></a>:""}
                                            </div>
                                        </li>
                                        <li style={{display: item?.video ? "" : "none", margin: '0 5px 0 5px'}}>
                                            <label htmlFor="">{props.t("Video")}</label>
                                            <div
                                                title={item?.video ? props.t("Download the application") : props.t("Doc not found")}
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
                                            <label htmlFor="">{props.t("Audio")}</label>
                                            <div
                                                title={item?.audio ? props.t("Download the application") : props.t("Doc not found")}
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
                                  <textarea onChange={(e) => {
                                  if (e.target.value.length>10){
                                      setComment({
                                          ...comment,
                                          message: e.target.value,
                                          errorCom:""
                                      })
                                  }
                                  }
                                  } id="" cols="30" rows="10">

                                  </textarea>
                                                <div>
                                                    <span style={{color: red[400]}}>{comment.errorCom}</span>
                                                    <button onClick={()=>{
                                                        setComment({
                                                            status:false,
                                                            message:"",
                                                            errorCom:"",
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
                                                        })}>{props.t("Send to the moderator to replace the listener")}</button>
                                                <button type="submit" className="btn-default" style={{
                                                    marginTop: "15px"
                                                }}
                                                        onClick={() => acceptApp(item.id)}>{props.t("Accept")}</button>
                                            </>
                                    }
                                </div>
                            </div>
                        )}
                        <div style={{clear: "both"}}/>

                        <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>

                            {total > 0 ? <CustomPagination
                                pageLength={total}
                                setActive={setActive}
                                active={active}
                                size={size}
                                setSize={setSize}
                            /> : <div style={{textAlign: "center", paddingTop: "35px"}}>
                                {props.t("No new appeals are available")}!!!
                            </div>}
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        {inpApps && inpApps.map((item, i) =>
                            <div className="content" key={i} value={item.id}>
                                <div className="request-content-title">
                                    <div className="request-content-title-name">
                                        <UserName text={`${item.applicant.fullName}`}/>
                                    </div>
                                    <div className="request-content-title-date">
                                        <div className="date-label">
                                            {props.t("Review period")}:
                                        </div>
                                        <div
                                            // style={{backgroundColor: new Date(
                                            //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime()))
                                            //                                          .getDate()>10?"#63AA55":new Date(
                                            //                                          (new Date().getTime())-(new Date().getTime())).getDate()<=10&&new Date(
                                            //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime())).getDate()>5?"#FBCE0E":"#d80027"}}
                                            //                                        className="date-item"
                                        >
                                            {" " + item.deadLineDate} {props.t("gacha")}
                                        </div>
                                    </div>
                                </div>
                                <div className="request-theme">
                                    <div className="request-theme-title">
                                        <h3>{props.t("Subject of the appeal")}:</h3>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label htmlFor="">{props.t("Confidentially")}</label>
                                    </div>
                                </div>
                                <div className="request-content-item">
                                    <p>{item.description}</p>
                                </div>
                                <div className="categories">
                                    <ul>
                                        <li>
                                            <label htmlFor="">{props.t("Category of treatment")}</label>
                                            <div
                                                className="category-item">{item?.section?.title[i18next.language]}</div>
                                        </li>
                                        <li style={{display: item?.attachmentsId ? "" : "none", margin: '0 5px 0 5px'}}>
                                            <label htmlFor="">{props.t("File")}</label>
                                            <div
                                                title={item?.attachmentsId ? props.t("Download the application") : props.t("Doc not found")}
                                                style={{textAlign: "center", cursor: "pointer"}}
                                                className="file-item">
                                                {item?.attachmentsId?<a href={API_URL + '/attach/' + item?.attachmentsId[0]}><FileCopy/></a>:""}
                                            </div>
                                        </li>
                                        <li style={{display: item?.video ? "" : "none", margin: '0 5px 0 5px'}}>
                                            <label htmlFor="">{props.t("Video")}</label>
                                            <div
                                                title={item?.video ? props.t("Download the application") : props.t("Doc not found")}
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
                                            <label htmlFor="">{props.t("Audio")}</label>
                                            <div
                                                title={item?.audio ? props.t("Download the application") : props.t("Doc not found")}
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
                                <div className="response-request">
                                    <ResponseRequestItem1 refresh={acceptedApp} id={item?.id} item={item}/>
                                </div>
                            </div>
                        )}
                        <div style={{clear: "both"}}/>

                        {inpApps?.length > 0 ? <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>

                            <CustomPagination
                                pageLength={total1}
                                setActive={setActive1}
                                active={active1}
                                size={size1}
                                setSize={setSize1}
                            />
                        </div> : <div style={{textAlign: "center", paddingTop: "35px"}}>
                            {props.t("Accepted applications are not available")}!!!
                        </div>}
                    </>
                )
            default:
                return (
                    <>
                        {doneApps && doneApps.map((item, i) =>
                            <div className="content" key={i} value={item.id}>
                                <div className="request-content-title">
                                    <div className="request-content-title-name">
                                        <UserName text={`${item.applicant.fullName}`}/>
                                    </div>
                                    <div className="request-content-title-date">
                                        <div className="date-label">
                                            Осталось:
                                        </div>
                                        <div className="date-item">
                                            5 {props.t("days")}
                                        </div>
                                    </div>
                                </div>
                                <div className="request-theme">
                                    <div className="request-theme-title">
                                        <h3>{props.t("Subject of the appeal")}:</h3>
                                        <p>{item.title}</p>
                                    </div>
                                    <div>
                                        <input type="checkbox"/>
                                        <label htmlFor="">{props.t("Confidentially")}</label>
                                    </div>
                                </div>
                                <div className="request-content-item">
                                    <p>{item.description}</p>
                                </div>
                                <div className="categories">
                                    <ul>
                                        <li>
                                            <label for="">{props.t("Category of appeal")}</label>
                                            <div className="category-item">{item.section.title.uz}</div>
                                        </li>
                                        <li>
                                            <label for="">{props.t("File")}</label>
                                            <div onClick={() => {
                                                item.attachmentsId ? download(item.attachmentsId[0], item.applicant?.fullName) : console.log("not found")
                                            }} style={{textAlign: "center", paddingTop: "10px"}} className="file-item">
                                                <GetAppIcon/></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="request-bottom">
                                    <button className="blue-btn" onClick={() => changeAppeal(item)}>Отправить модератору
                                        на замену исполнителя
                                    </button>
                                    <button className="blue-btn">{props.t("Write a message")}</button>
                                    <button type="submit" className="btn-default" style={{
                                        marginTop: "15px"
                                    }}
                                        // onClick={() => testPage(item)}
                                    >{props.t("To answer")}</button>
                                </div>
                            </div>
                        )}
                        <div style={{clear: "both"}}/>

                        {doneApps?.length > 0 ? <div style={{display: "block", textAlign: "center", marginTop: "10px"}}>

                            <CustomPagination
                                pageLength={total}
                                setActive={setActive}
                                active={active}
                                size={size}
                                setSize={setSize}
                            />
                        </div> : <div style={{textAlign: "center", paddingTop: "35px"}}>
                            {props.t("The applications reviewed are not available")}!!!
                        </div>}
                    </>
                )
        }
    }

    const changeAppeal = (item) => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/answer/" + item.id,
            method: 'PUT',
            data: {
                id: item.id,
                description: item.description,
                status: true,
                deniedMessage: "null"
            }
        }).then((r) => {
            console.log("changeAppeal")
        })
        // console.log(item.id);
    }

    return (
        <div className="incoming-request-section">
            <ContentTop/>
            <div className="navbar-wrapper">
                <div className="content-top">
                    <p className="request-items">
                    </p>
                    <p style={{padding: "0px 10px", border: nS === 1 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                       className="request-items">
                        <Link to={"#"} onClick={() => {
                            setNS(1)
                            newApplication();
                        }}>{props.t("New")}</Link>
                    </p>
                    <p style={{padding: "0px 10px", border: nS === 2 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                       className="request-items">
                        <Link to={"#"} onClick={() => {
                            setNS(2)
                            acceptedApp();
                        }}>{props.t("Accepted")}</Link>
                    </p>
                    {/*<p style={{padding:"0px 10px",border:nS===3?"1px solid rgba(0,0,0,0.5)":""}} className="request-items active">*/}
                    {/*    <Link to={"#"} onClick={()=>{*/}
                    {/*        setNS(3);*/}
                    {/*        checkedApp();*/}
                    {/*    }}>{props.t("Reviewed")}</Link>*/}
                    {/*</p>*/}
                    <p className="request-items">
                    </p>
                </div>
            </div>
            {
                section(nS)
            }
            <Dialog fullWidth={true} open={player.open}
                    onClose={() => setPlayer({open: false, resource: "", name: ""})}>
                <div style={{
                    width: "100%",
                    position: "relative"
                }}>
                    <span onClick={() => {
                        setPlayer({
                            open: false,
                            name: "",
                            resource: ""
                        })
                    }} style={{
                        position: "absolute",
                        zIndex: 1,
                        fontSize: "16px",
                        fondWeight: "bold",
                        color: player.name === "audio" ? "black" : "white",
                        right: 0,
                        padding: "10px",
                        cursor: "pointer"
                    }}><b>X</b></span>
                </div>
                <div style={{width: "100%"}}>
                    {
                        player.name === "video" ? <video width={"100%"} src={API_URL + player?.resource} controls/>
                            :
                            player.name === "audio" ?
                                <audio style={{width: "100%", marginTop: "25px"}} src={API_URL + player?.resource}
                                       controls/> : ""
                    }
                </div>
            </Dialog>
        </div>
    );
}

export default withTranslation()(IncomingRequestSection);


