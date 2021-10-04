import React, {useEffect, useState} from "react";
import Title from "../Title";
import {withRouter} from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {CircularProgress} from "@material-ui/core";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";
import GetAppIcon from '@material-ui/icons/GetApp';
import DoneIcon from '@material-ui/icons/Done';
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {ArrowBack, Visibility} from "@material-ui/icons";
import {configHeader} from "../../requests/congifHeader";
import iconAudio from '../../assets/icon/microphone.svg'
import iconVideo from '../../assets/icon/video-camera.svg'
import Dialog from "@material-ui/core/Dialog";
import VoiceRecorder from "./recorders/voiceRecorder";
import CustomVideoRecorder from "./recorders/videoRecorder";

const ApplicantAppeal = (props) => {
    const {history,t} = props;
    const [record, setRecord] = useState({
        status: false,
        name: ""
    });
    const [sections, setSections] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [done, setDone] = useState(false)
    const [errorUpload, setErrorUpload] = useState("");
    const [openVideo, setOpenVideo] = useState(false);
    const [values, setValues] = useState({
        title: '',
        description: '',
        sectionId: 0,
        top: false,
        attachmentId: [],
        audioId: "",
        videoId: ""
    });


    useEffect(() => {
        axios.get(API_URL + "/section").then(res => {
            console.log(res)
            setSections(res.data);
        })
    }, []);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.name === "sectionId" ? parseInt(e.target.value) : e.target.value
        });
    }

    const handleSend = (e) => {
        const token = localStorage.getItem(STORAGE_NAME);
        e.preventDefault();
        // console.log(values);
        Swal.fire({
            showCancelButton: true,
            confirmButtonText: t("Send"),
            title: t("Should the application be sent for review")+"?",
            icon: "warning",
            cancelButtonText: t("Cancel")
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    url: API_URL + '/application/create',
                    method: 'POST',
                    data: values,
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    if (res.data.success) {
                        Swal.fire(t("Application has been sent"), "", "success").then(r => {
                            history.push('/personalAccountApplicant')
                        })

                    } else {
                        Swal.fire(res.data.message, "", "error").then(r => {
                        })
                    }
                }).catch((err) => {
                    Swal.fire(t("An error occurred")+"!!!", "", "error").then(r => {
                        console.log(r)
                    })
                });
            }
        })


    }

    const handleUpload = (e) => {
        setLoading(true)
        if (e.target.files[0]) {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            axios({
                url: API_URL + '/attach/upload',
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: formData
            }).then(res => {
                    console.log(res)
                    setFileName(e.target.files[0].name)
                    setFile([res.data.object]);
                    setValues({
                        ...values,
                        attachmentId: [res.data.object]
                    })
                    setLoading(false)
                    setDone(true)
                }
            )
        } else {
            setErrorUpload("File yuklanmadi!!!")
            setLoading(false)
        }

    }


    return (
        <div>
            <div className="nav">
                <NavTop/>
                <div className="nav-center container-fluit">
                    <div className="container">
                        <div className="navbar">
                            <div className="menu-icon">
                                <ArrowBack
                                    fontSize={'large'}
                                    onClick={() => history.push("/personalAccountApplicant")}
                                />
                            </div>
                            <div className="header-logo">
                                <a href="#">
                                    <div className="logo-left">
                                        <img src={iconLogo} alt="logo"/>
                                    </div>
                                    <div className="logo-right">
                                        <div>
                                            <span><strong>{props.t("Legal clinic")}</strong></span><br/>
                                            {props.t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="header-right">
                                <div className="header-right-desctop">
                                    <form role="search" method="get" action="#" className="search-form">
                                        <input type="" placeholder={props.t("Search") + "..."}/>
                                        <button type=""><img src={iconSearch} alt="search-icon"/></button>
                                    </form>
                                    <NavLanguage/>
                                    <div className="glas">
                                        <img src={iconGlass} alt=""/>
                                    </div>
                                </div>
                                <Enter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop: "88px"}} className="applicant-appeal">
                <div className="container">
                    <Title text={<span><KeyboardBackspaceIcon titleAccess={props.t("Go back")} onClick={() => {
                        history.push("/personalAccountApplicant")
                    }} style={{marginRight: "17px", cursor: "pointer"}}/>{

                        props.t("Appeal")}
                        </span>}/>

                    <div className="requests">
                        <div>
                            {
                                values.videoId === "" ?
                                    <button onClick={() => {
                                        navigator.permissions.query(
                                            { name: 'camera' }
                                            // { name: 'microphone' }
                                            // { name: 'geolocation' }
                                            // { name: 'notifications' }
                                            // { name: 'midi', sysex: false }
                                            // { name: 'midi', sysex: true }
                                            // { name: 'push', userVisibleOnly: true }
                                            // { name: 'push' } // without userVisibleOnly isn't supported in chrome M45, yet
                                        ).then(function(permissionStatus){

                                            console.log(permissionStatus.state); // granted, denied, prompt
                                            if (permissionStatus.state==="granted"){
                                                setRecord({
                                                    status: true,
                                                    name: "video"
                                                })
                                            }else {
                                                alert("Permission "+permissionStatus.state+" for camera!!!")
                                            }

                                        });

                                    }} className="video-request">
                                <span>
                                    <img src={iconVideo} alt=""/>
                                Сделать видео обращение
                                </span>
                                    </button> :
                                    <button className="video-request" onClick={() => {
                                        setRecord({
                                            status: true,
                                            name: "recv"
                                        })
                                    }
                                    } style={{display: 'flex', alignItems: "center", cursor: "pointer"}}>
                                            <span style={{marginRight: "3px"}}>
                                                <Visibility/>
                                            </span>
                                        <span>
                                                Videoni ko'rish
                                            </span>
                                    </button>
                            }
                        </div>
                        <div>
                            {
                                values.audioId === "" ? <button onClick={() => {
                                        navigator.permissions.query(
                                            // { name: 'camera' }
                                            { name: 'microphone' }
                                            // { name: 'geolocation' }
                                            // { name: 'notifications' }
                                            // { name: 'midi', sysex: false }
                                            // { name: 'midi', sysex: true }
                                            // { name: 'push', userVisibleOnly: true }
                                            // { name: 'push' } // without userVisibleOnly isn't supported in chrome M45, yet
                                        ).then(function(permissionStatus){

                                            console.log(permissionStatus.state); // granted, denied, prompt
                                            if (permissionStatus.state==="granted"){
                                                setRecord({
                                                    status: true,
                                                    name: "voice"
                                                })
                                            }else {
                                                alert("Permission "+permissionStatus.state+" for microphone!!!")
                                            }

                                        });

                                    }} className="audio-request">
                                        <img src={iconAudio} alt=""/>
                                        Сделать аудио обращение
                                    </button> :
                                    <button className="video-request" onClick={() => {
                                        setRecord({
                                            status: true,
                                            name: "reca"
                                        })
                                    }
                                    } style={{display: 'flex', alignItems: "center", cursor: "pointer"}}>
                                            <span style={{marginRight: "3px"}}>
                                                <Visibility/>
                                            </span>
                                        <span>
                                                Audioni eshitish
                                            </span>
                                    </button>
                            }
                        </div>
                    </div>
                    <form onSubmit={handleSend} className="appeal">
                        <ul>
                            <li className="first-form">
                                <div>
                                    <label htmlFor="">{props.t("Subject of the appeal")}:</label>
                                    <input className="theme-request" onChange={handleChange} name="title" id="title"
                                           type="text" placeholder={props.t("Enter the subject of the appeal")}/>
                                </div>
                                <textarea name="description" onChange={handleChange} id="description" cols="30"
                                          rows="10"
                                          placeholder={props.t("Enter the subject of the appeal")}/>
                            </li>
                            <li className="last-form">
                                <ul>
                                    <li>
                                        <div style={{marginBottom: '20px'}}>
                                            <div className="lb">
                                                <label className="label"
                                                       htmlFor="">{props.t("Category of treatment")}</label>
                                            </div>
                                            <div>
                                                <select onChange={handleChange} id="sectionId" name="sectionId"
                                                        className="category">
                                                    <option value="">{props.t("Select your appeal")}</option>
                                                    {sections && sections.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.title.uz}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{marginBottom: '20px'}}>
                                            <div className="lb">
                                                <label className="label" htmlFor="">{props.t("Attach file")}</label>

                                            </div>
                                            <div className="file" style={{cursor: "pointer"}}>
                                                {!isLoading ? done ? <DoneIcon style={{cursor: "pointer"}}/> :
                                                    <GetAppIcon style={{cursor: "pointer"}}/> : ""}
                                                {isLoading ? <CircularProgress
                                                    style={{width: "15px", height: "15px", marginTop: "3px"}}
                                                    color="primary"/> : ""}
                                                <input title={done ? fileName : props.t("The file was not uploaded")}
                                                       onChange={handleUpload} type="file"/>
                                            </div>
                                            <p className="pdfFormat">{props.t("only ( *.pdf ) format")}</p>
                                            <a href={API_URL + '/attach/' + values.attachmentId[0]}
                                               className="file1">{fileName}</a>
                                            <p className="text-danger">{errorUpload}</p>
                                        </div>
                                    </li>
                                    <li className="confidential">
                                        <label className="label lb" htmlFor="" style={{
                                            fontSize: '18px',
                                            fontWeight: '500',
                                            marginLeft: '60px'
                                        }}>{props.t("Confidentially")}</label>
                                        <div className="about">
                                            <input checked={values.top} type="checkbox" onChange={(e) => {
                                                setValues({
                                                    ...values,
                                                    top: e.target.checked
                                                })
                                            }
                                            } id="vehicle1"
                                                   name="statusFull"/>
                                            <label htmlFor="vehicle1">
                                                {props.t("This question will not be displayed in the \"Frequently Asked Questions\" section of the AIS Clinic.")}</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="send-button">
                                <button type="submit" disabled={isLoading}
                                        className="btn-default">{props.t("Submit")}</button>
                            </li>

                        </ul>
                    </form>

                    <Dialog fullWidth={true} open={record.status}
                            onClose={() => setRecord({...record, status: !record.status})}>
                        <div style={{
                            width: "100%",
                            position: "relative"
                        }}>
                    <span onClick={() => {
                        setRecord({
                            status: false,
                            name: ""
                        })
                    }} style={{
                        position: "absolute",
                        zIndex: 1,
                        fontSize: "16px",
                        fondWeight: "bold",
                        color: record.name === "voice" || record.name === "reca" || record.name === "file" ? "black" : "white",
                        right: 0,
                        padding: "10px",
                        cursor: "pointer"
                    }}><b>X</b></span>
                        </div>
                        {
                            record.name === "voice" ? <VoiceRecorder values={values} setValues={setValues}
                                                                     setRecord={setRecord}/> : record.name === "video" ?
                                <CustomVideoRecorder values={values} setValues={setValues}
                                                     setRecord={setRecord}/> : record.name === "recv" ?
                                    <video
                                        controls
                                        src={API_URL + '/attach/video/' + values.videoId}/> :
                                    record.name === "reca" ? <audio style={{width: "100%", marginTop: "25px"}} controls
                                                                    src={API_URL + '/attach/audio/' + values.audioId}/> :
                                        record.name === "file" ?
                                            <iframe title="This is a audio" src={API_URL + '/attach/' + values.attachmentId[0]}
                                                    frameBorder="1"></iframe> : ""
                        }
                    </Dialog>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withTranslation()(withRouter(ApplicantAppeal));
