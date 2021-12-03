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
import {Audiotrack, FileCopy, TextFields, Videocam} from "@material-ui/icons";
import i18next from "i18next";
import Dialog from "@material-ui/core/Dialog";
import {blue, green, red} from "@material-ui/core/colors";
import PdfViewer from "../catalog/pdfViewer";
import yellow from "@material-ui/core/colors/yellow";
import NewApplications from "./NewApplications";
import {Badge} from "antd";
import InpsApps from "./InpsApps";

const IncomingRequestSection = (props) => {
    const {t} = props;
    const [request, setRequest] = useState([]);
    const history = useHistory();
    const [idUser, setIdUser] = useState(1);
    // console.log(idUser);
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
    const [open, setOpen] = useState(false);
    const [url, setUrl] = useState("");
    const [player, setPlayer] = useState({
        open: false,
        name: "",
        resource: ""
    });
    const [comment, setComment] = useState({
        status: false,
        message: "",
        to: "",
        errorCom: ""
    })
    const [appealFilter, setAppealFilter] = useState({
        status: "ALL",
        sectionId: 0,
        search: ""
    });

    useEffect(() => {
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/listener?size=" + size + "&page=" + (active - 1) +
                "&search=" + appealFilter.search,
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
            props?.setRefreshCount(!props?.refreshCount)

        });

        axios({
            method: 'get',
            url: API_URL + "/application/unchecked?size=" + size1 + "&page=" + (active1 - 1) +
                "&search=" + appealFilter.search,
            headers: {
                'Authorization': token
            }
        }).then((r) => {
            setTotal1(r.data.totalPages);
            setInpApps(r.data.object)
            props?.setRefreshCount(!props?.refreshCount)
        })
    }, [active, active1, size, size1, appealFilter]);

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
            title: t("Confirmation") + "!!!",
            text: t("Should this application be accepted") + "?",
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
                        t("Approved") + "",
                        t("The application was accepted") + "!!!",
                        'success'
                    ).then((res) => {
                        newApplication();
                        acceptedApp()
                        props?.setRefreshCount(!props?.refreshCount)
                    });
                })

            }
        });

    };

    const ignoredApp = (id) => {
        if (comment.message.length > 10) {
            Swal.fire({
                title: t("Confirmation") + "!!!",
                text: t("Are you sure this application will be sent to the Moderator") + "?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: t("Yes"),
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
                            comment: comment.message,
                            to: comment.to
                        }
                    }).then((r) => {
                        Swal.fire(
                            t("Sent") + "!",
                            t("The application was sent to the Moderator") + "!",
                            'success'
                        ).then((res) => {
                            setComment({
                                status: false,
                                message: "",
                                errorCom: "",
                            })
                            newApplication()
                            props?.setRefreshCount(!props?.refreshCount)
                        });
                    })

                }
            })
        } else {
            setComment({
                ...comment,
                errorCom: t("The message length must be at least 10 characters") + "!"
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

    useEffect(() => {
        acceptedApp()
        props?.setRefreshCount(!props?.refreshCount)
    }, []);

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

    const getDayDeadline = (date) => {
        let a = new Date(date);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s = d / (1000 * 60 * 60 * 24)
        return s > 0 ? parseInt(s) < s ? parseInt(s + 1) : s : 0;
    };


    const section = (n) => {
        switch (n) {
            case 1:
                return (
                    <>
                        {newApps && newApps.map((item, i) =>

                            <NewApplications
                                setUrl={setUrl}
                                setOpen={setOpen}
                                setPlayer={setPlayer}
                                item={item}
                                comment={comment}
                                setComment={setComment}
                                ignoredApp={ignoredApp}
                                acceptApp={acceptApp}
                                i={i}
                                refreshCount={props?.refreshCount} setRefreshCount={props?.setRefreshCount}
                            />
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
                            <InpsApps

                                item={item}
                                i={i}
                                getPage={props?.getPage}
                                getDayDeadline={getDayDeadline}
                                setUrl={setUrl}
                                setOpen={setOpen}
                                setPlayer={setPlayer}
                                acceptedApp={acceptedApp}
                                refreshCount={props?.refreshCount} setRefreshCount={props?.setRefreshCount}

                            />
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
                );
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

            <ContentTop role={"listener"} setAppealFilter={setAppealFilter} appealFilter={appealFilter}/>

            <div className="navbar-wrapper1">
                <div className="content-top1">
                    <p className="request-items1">
                    </p>
                    <Badge showZero count={newApps.length}>
                        <p style={{padding: "0px 10px", border: nS === 1 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                           className="request-items1">
                            <Link to={"#"} onClick={() => {
                                setNS(1)
                                newApplication();
                                setAppealFilter({
                                    ...appealFilter,
                                    search: ""
                                })
                            }}>{props.t("New")}</Link>
                        </p>
                    </Badge>
                    <Badge showZero count={inpApps.length}>
                        <p style={{padding: "0px 10px", border: nS === 2 ? "1px solid rgba(0,0,0,0.5)" : ""}}
                           className="request-items1">
                            <Link to={"#"} onClick={() => {
                                setNS(2)
                                acceptedApp();
                                setAppealFilter({
                                    ...appealFilter,
                                    search: ""
                                })
                            }}>{props.t("Accepted")}</Link>
                        </p>
                    </Badge>
                    {/*<p style={{padding:"0px 10px",border:nS===3?"1px solid rgba(0,0,0,0.5)":""}} className="request-items active">*/}
                    {/*    <Link to={"#"} onClick={()=>{*/}
                    {/*        setNS(3);*/}
                    {/*        checkedApp();*/}
                    {/*    }}>{props.t("Reviewed")}</Link>*/}
                    {/*</p>*/}
                    <p className="request-items1">
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
            <PdfViewer url={url} setUrl={setUrl} setOpen={setOpen} open={open}/>
        </div>
    );
}

export default withTranslation()(IncomingRequestSection);


