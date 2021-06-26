import React, { useEffect, useState } from "react";
import iconVideo from "../../assets/icon/video-camera.svg";
import iconAudio from "../../assets/icon/microphone.svg";
import Title from "../Title";
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import axios from "axios";
import { STORAGE_NAME } from "../../utils/constant";
import { toast } from "react-toastify";
import DeleteIcon from '@material-ui/icons/Delete';

const ApplicantAppeal = (props) => {
    const { history } = props;
    const [sections, setSections] = useState([]);
    const [values, setValues] = useState({
        title: '',
        description: '',
        sectionId: '',
        top: '',
        attachmentId: []
    })
    useEffect(() => {
        axios.get("/api/section").then(res => {
            setSections(res.data._embedded.sections);
        })
    }, []);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const handleSend = (e) => {
        const token = localStorage.getItem(STORAGE_NAME);
        e.preventDefault();
        console.log(values)
        axios({
            url: '/api/application/create',
            method: 'POST',
            data: {
                ...values
            },
            headers: {
                'Authorization': token
            }
        }).then(res => {
            if (res.data.success) {
                toast.success(res.data.message);
                history.push('/personalAccountApplicant')
            } else {
                toast.error(res.data.message);
            }

        })

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
                                        <div>
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
                                            <div className="file" >
                                                <input type="file" />
                                            </div>
                                        </div>
                                        <div className="input-item">
                                            <input className="input-item-name"></input>
                                            <DeleteIcon />
                                        </div>
                                    </li>
                                    <li className="confidential">
                                        <label className="label lb" for="" style={{
                                            fontSize: '18px',
                                            fontWeight: '500',
                                            marginLeft: '60px'
                                        }}>Конфиденциально</label>
                                        <div className="about">
                                            <input required type="checkbox" id="vehicle1"
                                                name="statusFull" />
                                            <label for="vehicle1">
                                                данный вопрос не будет отображаться в разделе «Популярные вопросы» в АИС
                                                Клиника.</label>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="send-button">
                                <button type="submit" className="btn-default">Отправить</button>
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
