import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import Title from "../Title";
import axios from "axios";
import {toast} from "react-toastify";
import {withRouter} from 'react-router-dom';
import {API_URL} from "../../utils/constant";

const RegistrationApplicant = (props) => {
    const {history} = props;
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [nations, setNations] = useState([]);
    const [socialStatus, setSocialStatus] = useState([]);
    const [values, setValues] = useState(({
        fullName: '',
        sectionId: '',
        phoneNumber: '',
        email: '',
        districtId: '',
        status: true,
        password: '',
        birthDate: '',
        address: '',
        prePassword: '',
        socialStatusId: '',
        gender: ''
    }))

    useEffect(() => {
        axios.get(API_URL + "api/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);
    useEffect(() => {
        axios.get(API_URL + "api/district").then(res => {
            setDistricts(res.data._embedded.districts);
        })
    }, []);
    useEffect(() => {
        axios.get(API_URL + "api/socialStatus").then(res => {
            setSocialStatus(res.data._embedded.socialStatuses)
        })
    }, []);
    useEffect(() => {
        axios.get(API_URL + "api/nation").then(res => {
            setNations(res.data._embedded.nations)
        })
    }, []);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };
    const handleSend = (e) => {
        e.preventDefault();
        if (values.password === values.prePassword) {
            axios.post(API_URL + "api/auth/createApplicant", {...values}).then(res => {
                console.log(res)
                if (res.data.success) {
                    history.push("/auth/login")
                    toast.success(res.data.message)
                }
            });
        } else {
            toast.error('Password Not match')
        }
    }
    return (
        <div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text="Регистрация"/>
                        <h5>Анкетные данные</h5>
                        <form onSubmit={handleSend}>
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <label className="label" htmlFor="">Ф.И.О</label>
                                                <input onChange={handleChange} name="fullName" className="input-text"
                                                       type="text"
                                                       placeholder="Введите ваше Ф.И.О"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="nationId">Национальность</label>
                                                <select id="nationId" name="nationId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Выберите ваш национальность</option>
                                                    {nations && nations.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="gender">Пол</label>
                                                <select id="gender" onChange={handleChange} name="gender"
                                                        className="category">
                                                    <option value="">Выберите ваш пол</option>
                                                    <option value="erkak">Erkak</option>
                                                    <option value="ayol">Ayol</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="birthDate">Дата рождения</label>
                                                <input className="input-date"
                                                       onChange={handleChange} name="birthDate"
                                                       id="birthDate" type="date"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="regionId">Область</label>

                                                <select name="regionId" id="regionId" onChange={handleChange}
                                                        className="category">
                                                    <option value="lorem">Выберите ваш Область</option>
                                                    {regions && regions.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>

                                            </li>
                                            <li>
                                                <label className="label" htmlFor="districtId">Город (область) </label>
                                                <select required id="districtId" onChange={handleChange}
                                                        name="districtId"
                                                        className="category">
                                                    <option value="">Выберите ваш раён</option>
                                                    {districts && districts.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="form-last">
                                        <ul>
                                            <li>
                                                <label className="label" htmlFor="address">Домашний адрес</label>
                                                <input required={true} onChange={handleChange} name="address"
                                                       id="address"
                                                       className="input-text"
                                                       type="text"
                                                       placeholder="Введите ваш домашний адрес"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="phoneNumber">Телефон</label>
                                                <input required={true} onChange={handleChange} name="phoneNumber"
                                                       id="phoneNumber"
                                                       className="input-text" type="text"
                                                       placeholder="+998 (__) ___-__-__"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="email">Почта</label>
                                                <input required={true} onChange={handleChange} name="email" id="email"
                                                       className="input-text" type="text"
                                                       placeholder="Введите вашу почту"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="socialStatusId">Категория
                                                    льгот</label>
                                                <select id="socialStatusId" name="socialStatusId"
                                                        onChange={handleChange}
                                                        className="category">
                                                    <option value="lorem">Выберите льгот</option>
                                                    {socialStatus && socialStatus.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="password">Пароль</label>
                                                <input required={true} onChange={handleChange} name="password"
                                                       id="password"
                                                       className="input-text" type="text"
                                                       placeholder="Введите вашу почту"/>
                                            </li>

                                            <li>
                                                <label className="label" htmlFor="prePassword">Вводите пароль</label>
                                                <input required={true} onChange={handleChange} name="prePassword"
                                                       id="prePassword"
                                                       className="input-text" type="text"
                                                       placeholder="Повторно вводите пароль"/>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                                <div className="form-bottom">
                                    <div className="confidential">

                                        <div className="checked">

                                            <input required={true} type="checkbox" id="vehicle1" name="vehicle1"
                                                   value="Bike"/>
                                            <label htmlFor="vehicle1"> Я даю согласие на обработку своих персональных
                                                данных
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
            {/* <Footer/> */}
        </div>
    )
}

export default withRouter(RegistrationApplicant);
