import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Title from "../Title";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from 'react-router-dom';

const RegistrationApplicant = (props) => {
    const { history } = props;
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
        socialStatusId: ''
    }))

    useEffect(() => {
        axios.get("/api/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);
    useEffect(() => {
        axios.get("/api/district").then(res => {
            setDistricts(res.data._embedded.districts);
        })
    }, []);
    useEffect(() => {
        axios.get("/api/socialStatus").then(res => {
            setSocialStatus(res.data._embedded.socialStatuses)
        })
    }, []);
    useEffect(() => {
        axios.get("/api/nation").then(res => {
            setNations(res.data._embedded.nations)
        })
    }, []);
    useEffect(() => {
        axios.get("/api/section").then(res => {
            console.log(res);
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
            console.log(values)
            axios.post("/api/auth/createApplicant", { ...values }).then(res => {
                console.log(res)
                if (res.data.success) {
                    history.push("/auth/login")
                    toast.success(res.data.message)
                }
            });
        } else {
            toast.error('Password Not match')
        }
        console.log(values)
    }
    return (
        <div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text="Регистрация" />
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
                                                       placeholder="Введите ваше Ф.И.О" />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="nationId">Национальность</label>
                                                <div>
                                                    <select id="nationId" name="nationId" onChange={handleChange}
                                                            className="category">
                                                        <option value="">Выберите ваш национальность</option>
                                                        {nations && nations.map((item, i) =>
                                                            <option key={i} value={item.id}>{item.name.uz}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="gender">Пол</label>
                                                <div>
                                                    <select id="gender" onChange={handleChange} name="gender"
                                                            className="category">
                                                        <option value="erkak">Erkak</option>
                                                        <option value="ayol">Ayol</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="birthDate">Дата рождения</label>
                                                <input className="input-date" onChange={handleChange} name="birthDate"
                                                       id="birthDate" type="date" />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="regionId">Область</label>
                                                <div>
                                                    <select name="regionId" id="regionId" onChange={handleChange}
                                                            className="category">
                                                        <option value="lorem">Выберите ваш Область</option>
                                                        {regions && regions.map((item, i) =>
                                                            <option key={i} value={item.id}>{item.name.uz}</option>
                                                        )}
                                                    </select>
                                                </div>

                                            </li>
                                            <li>
                                                <label className="label" htmlFor="districtId">Город (область) </label>
                                                <div>
                                                    <select required id="districtId" onChange={handleChange}
                                                            name="districtId"
                                                            className="category">
                                                        <option value="">Выберите ваш раён</option>
                                                        {districts && districts.map((item, i) =>
                                                            <option key={i} value={item.id}>{item.name.uz}</option>
                                                        )}
                                                    </select>
                                                </div>
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
                                                       placeholder="Введите ваш домашний адрес" />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="phoneNumber">Телефон</label>
                                                <input required={true} onChange={handleChange} name="phoneNumber"
                                                       id="phoneNumber"
                                                       className="input-text" type="text"
                                                       placeholder="+998 (__) ___-__-__" />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="email">Почта</label>
                                                <input required={true} onChange={handleChange} name="email" id="email"
                                                       className="input-text" type="text"
                                                       placeholder="Введите вашу почту" />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="socialStatusId">Категория
                                                    льгот</label>
                                                <div>
                                                    <select id="socialStatusId" name="socialStatusId"
                                                            onChange={handleChange}
                                                            className="category">
                                                        <option value="lorem">Выберите льгот</option>
                                                        {socialStatus && socialStatus.map((item, id) =>
                                                            <option value={item.id}>{item.name.uz}</option>
                                                        )}
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="password">Пароль</label>
                                                <input required={true} onChange={handleChange} name="password"
                                                       id="password"
                                                       className="input-text" type="text"
                                                       placeholder="Введите вашу почту" />
                                            </li>

                                            <li>
                                                <label className="label" htmlFor="prePassword">Вводите пароль</label>
                                                <input required={true} onChange={handleChange} name="prePassword"
                                                       id="prePassword"
                                                       className="input-text" type="text"
                                                       placeholder="Повторно вводите пароль" />
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                                <div className="form-center">
                                    <ul>

                                        <li>

                                        </li>
                                    </ul>
                                </div>
                                <div className="form-bottom">
                                    <div className="confidential">

                                        <div className="checked">

                                            <input required={true} type="checkbox" id="vehicle1" name="vehicle1"
                                                   value="Bike" />
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
            <Footer />
        </div>
    )
}

export default withRouter(RegistrationApplicant);
