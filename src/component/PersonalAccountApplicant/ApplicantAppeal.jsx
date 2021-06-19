import React from "react";
import iconVideo from "../../assets/icon/video-camera.svg";
import iconAudio from "../../assets/icon/microphone.svg";
import Title from "../Title";
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import iconDropdown from "../../assets/icon/icon-down.svg";

const ApplicantAppeal = (props) => {
    const { history } = props;
    return (
        <div>
            <div className="nav">
                <NavCenter />
            </div>
            <div className="desctop3 container-fluit">
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
                    <form className="appeal">
                        <ul>
                            <li className="first-form">
                                <div>
                                    <label for="">Тема обращения:</label>
                                    <input className="theme-request" type="text" placeholder="Введите тему обращения" />
                                </div>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Введите тему обращения"></textarea>
                            </li>
                            <li className="last-form">
                                <ul>
                                    <li >
                                        <div className="lb">
                                            <label className="label" for="">Категория обращения</label>
                                        </div>
                                        <div>
                                            <div className="category">
                                                <input onChange="" list="lorem" name="lorem" placeholder="Выберите категорию"
                                                />
                                                <img src={iconDropdown} alt="" />
                                            </div>
                                            <datalist id="lorem">
                                                <option value="lorem" />
                                                <option value="lorem" />
                                                <option value="lorem" />
                                            </datalist>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="lb">
                                            <label className="label" for="">Прикрепить файл</label>
                                        </div>
                                        <div className="file">
                                            <input type="file" />
                                        </div>
                                    </li>
                                    <li className="confidential">
                                        <label className="label lb" for="" style={{ fontSize: '18px', fontWeight: '500', marginLeft: '60px' }}>Конфиденциально</label>
                                        <div className="about">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
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
            </div >
            <Footer />
        </div>
    );
}

export default withRouter(ApplicantAppeal);
