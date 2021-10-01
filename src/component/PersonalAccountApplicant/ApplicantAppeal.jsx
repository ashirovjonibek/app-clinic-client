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
import {ArrowBack} from "@material-ui/icons";
import {configHeader} from "../../requests/congifHeader";

const ApplicantAppeal = (props) => {
    const {history} = props;
    const [sections, setSections] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [done, setDone] = useState(false)
    const [errorUpload, setErrorUpload] = useState("")
    const [values, setValues] = useState({
        title: '',
        description: '',
        sectionId: 0,
        top: false,
        attachmentId: []
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
            confirmButtonText: "Yuborish",
            title: "Ariza ko'rib chiqish uchun yuborilsinmi",
            icon: "warning",
            cancelButtonText: "Bekor qilish"
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
                        Swal.fire("Ariza yuborildi", "", "success").then(r => {
                            history.push('/personalAccountApplicant')
                        })

                    } else {
                        Swal.fire(res.data.message, "", "error").then(r => {
                        })
                    }
                }).catch((err) => {
                    Swal.fire("Xatolik yuz berdi!!!", "", "error").then(r => {
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

                    {/*<div className="requests">*/}
                    {/*    <div>*/}
                    {/*        <button className="video-request">*/}
                    {/*            <img src={iconVideo} alt="" />*/}
                    {/*            Сделать видео обращение*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <button className="audio-request">*/}
                    {/*            <img src={iconAudio} alt="" />*/}
                    {/*            Сделать аудио обращение*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                                            <div className="file1">{fileName}</div>
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
                                            <input required checked={values.top} type="checkbox" onChange={(e) => {
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
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withTranslation()(withRouter(ApplicantAppeal));
