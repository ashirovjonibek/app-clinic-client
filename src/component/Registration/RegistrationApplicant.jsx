import React from "react";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import Title from "../Title";
import iconDropdown from "../../assets/icon/icon-down.svg";

const RegistrationApplicant = () => {
    return (
        <div>
            <div className="nav">
                <NavCenter />
            </div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text="Регистрация" />
                        <h5>Анкетные данные</h5>
                        <form action="">
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <label className="label" for="">Ф.И.О</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Введите ваше Ф.И.О" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Национальность</label>
                                                <div>
                                                    <div className="category">
                                                        <input onChange="" list="lorem" name="lorem" placeholder="Выберите национальность"
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
                                                <label className="label" for="">Пол</label>
                                                <div>
                                                    <div className="category">
                                                        <input onChange="" list="lorem" name="lorem" placeholder="Выберите пол"
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
                                                <label className="label" for="">Дата рождения</label>
                                                <input className="input-date" type="date" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Область</label>
                                                <div>
                                                    <div className="category">
                                                        <input onChange="" list="lorem" name="lorem" placeholder="Выберите область"
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
                                        </ul>
                                    </li>
                                    <li className="form-last">
                                        <ul>
                                            <li>
                                                <label className="label" for="">Город (район)</label>
                                                <div>
                                                    <div className="category">
                                                        <input onChange="" list="lorem" name="lorem" placeholder="Выберите город (район)"
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
                                                <label className="label" for="">Домашний адрес</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Введите ваш домашний адрес" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Телефон</label>
                                                <input onChange="" className="input-text" type="text" placeholder="+998 (__) ___-__-__" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Почта</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Введите вашу почту" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Категория льгот</label>
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
                                        </ul>
                                    </li>
                                </ul>
                                <div className="form-center">
                                    <ul>
                                        <li>
                                            <div>
                                                <label className="label" for="">Ваш логин</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Логин" />
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{marginBottom: '20px'}}>
                                                <label className="label" for="">Пароль</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Введите вашу почту" />
                                            </div>

                                            <div>
                                                <label className="label" for="">Вводите пароль</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Повторно вводите пароль" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-bottom">
                                    <div className="confidential">

                                        <div className="checked">

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label for="vehicle1"> Я даю согласие на обработку своих персональных данных
                                                и ознакомлен с <a href=""><strong>политикой конфиденциальности</strong></a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-default">Регистрация</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegistrationApplicant;
