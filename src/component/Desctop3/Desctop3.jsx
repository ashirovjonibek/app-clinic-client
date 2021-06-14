import React from "react";
import iconVideo from "../../assets/icon/video-camera.svg";
import iconAudio from "../../assets/icon/microphone.svg";
import Title from "../Title";
import ButtonDefault from "../ButtonDefault";
import InputFile from "../InputFile";
import InputCategoraiya from "../InputCategoriya";
import Label from "../Label";
import { withRouter } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";


const Desctop3 = (props) => {
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
                                            <Label for="" text="Категория обращения" />
                                        </div>
                                        <InputCategoraiya />
                                    </li>
                                    <li>
                                        <div className="lb">
                                            <Label for="" text="Прикрепить файл" />
                                        </div>
                                        <InputFile />
                                    </li>
                                    <li className="confidential">
                                        <div className="lb">
                                            <Label for="" text="Конфиденциально" />
                                        </div>
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
                                <ButtonDefault onClick={() => history.push('/registrationApplicant')} type="submit" text="Отправить" />
                            </li>

                        </ul>
                    </form>
                </div>
            </div >
            <Footer />
        </div>
    );
}

export default withRouter(Desctop3);
