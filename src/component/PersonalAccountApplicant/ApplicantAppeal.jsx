import React, { useEffect, useState } from "react";
import iconVideo from "../../assets/icon/video-camera.svg";
import iconAudio from "../../assets/icon/microphone.svg";
import Title from "../Title";
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import { toast } from "react-toastify";
import DeleteIcon from '@material-ui/icons/Delete';
import {CircularProgress} from "@material-ui/core";

const ApplicantAppeal = (props) => {
    const { history } = props;
    const [sections, setSections] = useState([]);
    const [isLoading,setLoading]=useState(false);
    const [file, setFile] = useState([]);
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
            setSections(res.data._embedded.sections);
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
        let a=new FormData()

        a.append("title",values.title)
        a.append("sectionId",values.sectionId)
        a.append("attachmentId",values.attachmentId)
        a.append("top",values.top)
        a.append("description",values.description)
        // console.log(values);
        axios({
            url: API_URL + '/application/create',
            method: 'POST',
            data: a ,
            headers: {
                'Authorization': token,
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            if (res.data.success) {
                toast.success(res.data.message);
                history.push('/personalAccountApplicant')
            } else {
                toast.error(res.data.message);
            }
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
                setFile(prevState => [...prevState, res.data.object]);
                setLoading(false)
            }
            )
        }

    }


    return (
        <div>
            <div className="applicant-appeal container-fluit">
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
                                        {/*<div>*/}
                                        {/*    <div className="lb">*/}
                                        {/*        <label className="label" for="">Категория обращения</label>*/}
                                        {/*    </div>*/}
                                        {/*    <div>*/}
                                        {/*        <select onChange={handleChange} id="sectionId" name="sectionId"*/}
                                        {/*            className="category">*/}
                                        {/*            <option value="">Выберите ваш обращения</option>*/}
                                        {/*            {sections && sections.map((item, i) =>*/}
                                        {/*                <option key={i} value={item.id}>{item.title.uz}</option>*/}
                                        {/*            )}*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </li>
                                    <li>
                                        <div style={{ marginBottom: '20px' }}>
                                            <div className="lb">
                                                <label className="label" for="">Прикрепить файл</label>
                                            </div>
                                            <div className="file">
                                                {isLoading?<CircularProgress color="primary"/>:""}
                                                <input onChange={handleUpload} type="file" />
                                            </div>
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
