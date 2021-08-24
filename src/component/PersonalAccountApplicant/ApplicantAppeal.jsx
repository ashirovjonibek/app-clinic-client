import React, { useEffect, useState } from "react";
import iconVideo from "../../assets/icon/video-camera.svg";
import iconAudio from "../../assets/icon/microphone.svg";
import Title from "../Title";
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import { toast } from "react-toastify";
import {CircularProgress} from "@material-ui/core";
import NavTop from "../Nav/NavTop";
import MenuIcon from "@material-ui/icons/Menu";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";
import GetAppIcon from '@material-ui/icons/GetApp';
import DoneIcon from '@material-ui/icons/Done';

const ApplicantAppeal = (props) => {
    const { history } = props;
    const [sections, setSections] = useState([]);
    const [isLoading,setLoading]=useState(false);
    const [file, setFile] = useState([]);
    const [fileName, setFileName] = useState("");
    const [done,setDone]=useState(false)
    const [errorUpload,setErrorUpload]=useState("")
    const [values, setValues] = useState({
        title: '',
        description: '',
        sectionId: 0,
        top: false,
        attachmentId: []
    });
    
    console.log(file);
    console.log("VALUES ",values);

    useEffect(() => {
        axios.get(API_URL + "/section").then(res => {
            console.log(res)
            setSections(res.data);
        })
    }, []);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.name==="sectionId"?parseInt(e.target.value):e.target.value
        });
    }

    const handleSend = (e) => {
        const token = localStorage.getItem(STORAGE_NAME);
        e.preventDefault();
        // console.log(values);
        axios({
            url: API_URL + '/application/create',
            method: 'POST',
            data: values ,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.data.success) {
                console.log(res)
                // toast.success(res.data.message);
                // history.push('/personalAccountApplicant')
            } else {
                toast.error(res.data.message);
            }
        }).catch((err)=>{
            console.log(err)
        });
        setValues({ ...values, attachmentId: file });
    }

    const handleUpload = (e) => {
        setLoading(true)
        if (e.target.files[0]) {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            formData.append("type", 'PDF');
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
                setFile(prevState => [...prevState, res.data.object]);
                setLoading(false)
                setDone(true)
            }
            )
        }else {
            setErrorUpload("File yuklanmadi!!!")
            setLoading(false)
        }

    }


    return (
        <div>
            <div className="nav">
                <NavTop />
                <div className="nav-center container-fluit">
                    <div className="container">
                        <div className="navbar">
                            <div className="menu-icon" >
                                <MenuIcon
                                    fontSize={'large'}
                                    onClick={() => props.setSitebar(!props.sitebar)}
                                />
                            </div>
                            <div className="header-logo">
                                <a href="#">
                                    <div className="logo-left">
                                        <img src={iconLogo} alt="logo" />
                                    </div>
                                    <div className="logo-right">
                                        <div>
                                            <span><strong>Юридическая клиника</strong></span><br />
                                            Академии Генеральной прокуратуры<br />
                                            Республики Узбекистан.
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="header-right">
                                <div className="header-right-desctop">
                                    <form role="search" method="get" action="#" className="search-form">
                                        <input type="" placeholder="Поиск..." />
                                        <button type=""><img src={iconSearch} alt="search-icon" /></button>
                                    </form>
                                    <NavLanguage />
                                    <div className="glas">
                                        <img src={iconGlass} alt="" />
                                    </div>
                                </div>
                                <Enter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop:"88px"}} className="applicant-appeal">
                <div className="container">
                    <Title text="Обращение" />

                    <div className="requests">
                        <div>
                            <button className="video-request">
                                <img src={iconVideo} alt="" />
                                Сделать видео обращение
                            </button>
                        </div>
                        <div>
                            <button className="audio-request">
                                <img src={iconAudio} alt="" />
                                Сделать аудио обращение
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSend} className="appeal">
                        <ul>
                            <li className="first-form">
                                <div>
                                    <label for="">Тема обращения:</label>
                                    <input className="theme-request" onChange={handleChange} name="title" id="title"
                                        type="text" placeholder="Введите тему обращения" />
                                </div>
                                <textarea name="description" onChange={handleChange} id="description" cols="30"
                                    rows="10"
                                    placeholder="Введите тему обращения" />
                            </li>
                            <li className="last-form">
                                <ul>
                                    <li>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div className="lb">
                                                <label className="label" for="">Категория обращения</label>
                                            </div>
                                            <div>
                                                <select onChange={handleChange} id="sectionId" name="sectionId"
                                                    className="category">
                                                    <option value="">Выберите ваш обращения</option>
                                                    {sections && sections.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.title.uz}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div className="lb">
                                                <label className="label" for="">Прикрепить файл</label>
                                            </div>
                                            <div className="file" style={{cursor:"pointer"}}>
                                                {!isLoading?done?<DoneIcon style={{cursor:"pointer"}}/>:<GetAppIcon style={{cursor:"pointer"}}/>:""}
                                                {isLoading?<CircularProgress style={{width:"15px",height:"15px",marginTop:"3px"}} color="primary"/>:""}
                                                <input title={done?fileName:"Fayl yuklanmagan"} onChange={handleUpload} type="file" />
                                            </div>
                                            <div className="file1">{fileName}</div>
                                            <p className="text-danger">{errorUpload}</p>
                                        </div>
                                    </li>
                                    <li className="confidential">
                                        <label className="label lb" for="" style={{
                                            fontSize: '18px',
                                            fontWeight: '500',
                                            marginLeft: '60px'
                                        }}>Конфиденциально</label>
                                        <div className="about">
                                            <input required checked={values.top} type="checkbox" onChange={(e)=>{
                                                console.log(e.target.checked)
                                                setValues({
                                                    ...values,
                                                    top:e.target.checked
                                                })
                                            }
                                            } id="vehicle1"
                                                name="statusFull" />
                                            <label for="vehicle1">
                                                данный вопрос не будет отображаться в разделе «Популярные вопросы» в АИС
                                                Клиника.</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="send-button">
                                <button type="submit" disabled={isLoading} className="btn-default">Отправить</button>
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default withRouter(ApplicantAppeal);
