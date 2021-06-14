import React from "react";
import ButtonDefault from "../ButtonDefault";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import InputCategoriya from "../InputCategoriya";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";

const RegistrationApplicant = () => {
    return (
        <div>
            <div className="nav">
                <NavCenter/>
            </div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text="Регистрация"/>
                        <h5>Анкетные данные</h5>
                        <form action="">
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <Label text="Ф.И.О"/>
                                                <InputText nameFullname text="Введите ваше Ф.И.О"/>
                                            </li>
                                            <li>
                                                <Label text="Национальность"/>
                                                <InputCategoriya nameNation={"nation"} text="Выберите национальность"/>
                                            </li>
                                            <li>
                                                <Label text="Пол"/>
                                                <InputCategoriya name={"gender"} text="Выберите пол"/>
                                            </li>
                                            <li>
                                                <Label text="Дата рождения"/>
                                                <input className="input-date" type="date"
                                                       placeholder="Введите ваше Ф.И.О"/>
                                            </li>
                                            <li>
                                                <Label text="Область"/>
                                                <InputCategoriya text="Выберите область"/>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="form-last">
                                        <ul>
                                            <li>
                                                <Label text="Город (район)"/>
                                                <InputCategoriya text="Выберите город (район)"/>
                                            </li>
                                            <li>
                                                <Label text="Домашний адрес"/>
                                                <InputText text="Введите ваш домашний адрес"/>
                                            </li>
                                            <li>
                                                <Label text="Телефон"/>
                                                <InputText text="+998 (__) ___-__-__"/>
                                            </li>
                                            <li>
                                                <Label text="Почта"/>
                                                <InputText text="Введите вашу почту"/>
                                            </li>
                                            <li>
                                                <Label text="Категория льгот"/>
                                                <InputCategoriya text="Выберите категорию"/>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="form-center">
                                    <ul>
                                        <li>
                                            <div>
                                                <Label text="Ваш логин"/>
                                                <InputText text="Логин"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <Label text="Пароль"/>
                                                <InputText text="Введите вашу почту"/>
                                            </div>

                                            <div>
                                                <Label text="Вводите пароль"/>
                                                <InputText text="Повторно вводите пароль"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-bottom">
                                    <div className="confidential">

                                        <div className="checked">

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1"> Я даю согласие на обработку своих персональных данных
                                                и ознакомлен с <a href=""><strong>политикой конфиденциальности</strong></a></label>
                                        </div>
                                    </div>
                                    <ButtonDefault type="submit" text="Регистрация"/>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RegistrationApplicant;
