import React, {useEffect, useState} from "react";
import Title from "../Title";
import axios from "axios";
import {toast} from "react-toastify";
import {withRouter} from 'react-router-dom';
import {API_URL} from "../../utils/constant";
import Swal from "sweetalert2";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {withTranslation} from "react-i18next";
import Nav from "../Nav/Nav";
import NavTop from "../Nav/NavTop";
import NavCenter from "../Nav/NavCenter";

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
        password: '',
        birthDate: '',
        address: '',
        prePassword: '',
        socialStatusId: '',
        gender: ''
    }))


    useEffect(() => {
        axios.get(API_URL + "/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);
    useEffect(() => {
        axios.get(API_URL + "/district").then(res => {
            setDistricts(res.data._embedded.districts);
        })
    }, []);
    useEffect(() => {
        axios.get(API_URL + "/socialStatus").then(res => {
            setSocialStatus(res.data._embedded.socialStatuses)
        })
    }, []);
    useEffect(() => {
        axios.get(API_URL + "/nation").then(res => {
            setNations(res.data._embedded.nations)
        })
    }, []);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    // validation \|/
    const [nameDirty, setNameDirty] = useState(false);
    const [errorName, setErrorName] = useState('Ism yozilishi kerak!');
    const [yearDirty, setYearDirty] = useState(false);
    const [errorYear, setErrorYear] = useState('foydalanuvchi 16 yoshdan katta bo\'lishi kerak!');
    const [numberDirty, setNumberDirty] = useState(false);
    const [errorNumber, setErrorNumber] = useState('telefon raqamingizni kiriting!');
    const [emailDirty, setEmailDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('elektron pochtangizda @ bo\'lishi kerak');

    const nameHandler = (e) => {
        const name = e.target.name;
        const regName = /^[a-zA-Z\s]+$/;
        if (!regName.test(String(e.target.value).toLowerCase()) && name === 'fullName') {
            setNameDirty(true);
            setErrorName('Ism faqat harflardan iborat bo\'lsin');
        } else {
            setErrorName('');
        }
    }

    const yearHandler = (e) => {
        const name = e.target.name;
        const fullYear = new Date().getFullYear();
        const userYear = e.target.value.slice(0, 4);
        if ((fullYear - userYear) < 16 && name === 'birthDate') {
            setYearDirty(true);
            setErrorYear('foydalanuvchi 16 yoshdan katta bo\'lishi kerak');
        } else {
            setErrorYear('');
        }
    }

    const numberHandler = (e) => {
        const name = e.target.name;
        const regNumber = /^\d+/;
        if (!regNumber.test(String(e.target.value).toLowerCase()) && name === 'phoneNumber') {
            setNumberDirty(true);
            setErrorNumber('faqat raqam kiriting!');
        } else {
            setErrorNumber('');
        }
    }

    const emailHandler = (e) => {
        const name = e.target.name;
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(String(e.target.value).toLowerCase()) && name === 'email') {
            setEmailDirty(true);
            setErrorEmail('elektron po\'chtangizda abs@abs.com bo\'lishi kerak!');
        } else {
            setErrorEmail('');
        }
    }

    const handleSend = (e) => {
        e.preventDefault();
        if (values.password === values.prePassword) {
            console.log(values)
            axios.post(API_URL + "/auth/createApplicant", {...values}).then(res => {
                if (res.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Ro'yhatga olindi!!!",
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        history.push("/auth/login")
                    });
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: "Xatolik yuz berdi iltimos qayta urunib ko'ring!!!",
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                    });
                }
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Xatolik yuz berdi iltimos qayta urunib ko'ring!!!",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
            });
        }
    }

    return (
        <div>
            <div className="nav" >
                <NavTop />
                <NavCenter />
            </div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text={<span><KeyboardBackspaceIcon titleAccess="Bosh sahifaga" onClick={() => {
                            history.goBack()
                        }} style={{marginRight: "17px", cursor: "pointer"}}/>{

                            props.t("Register")}
                        </span>}/>
                        <h5>Анкетные данные</h5>
                        <form onSubmit={handleSend}>
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <label className="label" htmlFor="">Ф.И.О</label>
                                                <input
                                                    onBlur={e => nameHandler(e)}
                                                    onChange={handleChange}
                                                    name="fullName"
                                                    className="input-text"
                                                    type="text"
                                                    placeholder="Введите ваше Ф.И.О"
                                                    required
                                                />
                                            </li>
                                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}
                                            <li>
                                                <label className="label" htmlFor="nationId">Национальность</label>
                                                <select id="nationId" name="nationId" onChange={handleChange}
                                                        className="category" required>
                                                    <option value="">Выберите ваш национальность</option>
                                                    {nations && nations.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="gender">Пол</label>
                                                <select id="gender" onChange={handleChange} name="gender"
                                                        className="category" required>
                                                    <option value="">Выберите ваш пол</option>
                                                    <option value="erkak">Erkak</option>
                                                    <option value="ayol">Ayol</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="birthDate">Дата рождения</label>
                                                <input
                                                    className="input-date"
                                                    onBlur={e => yearHandler(e)}
                                                    onChange={handleChange}
                                                    name="birthDate"
                                                    id="birthDate"
                                                    type="date"
                                                    required
                                                />
                                            </li>
                                            {(yearDirty && errorYear) && <p className="error">{errorYear}</p>}
                                            <li>
                                                <label className="label" htmlFor="regionId">Область</label>

                                                <select
                                                    name="regionId"
                                                    id="regionId"
                                                    onChange={handleChange}
                                                    className="category"
                                                    required
                                                >
                                                    <option value="lorem">Выберите ваш Область</option>
                                                    {regions && regions.map((item) =>
                                                        <option key={item.id} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="districtId">Город (область) </label>
                                                <select
                                                    id="districtId"
                                                    onChange={handleChange}
                                                    name="districtId"
                                                    className="category"
                                                    required={true}
                                                >
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
                                                       placeholder="Введите ваш домашний адрес"
                                                />
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="phoneNumber">Телефон</label>
                                                <input
                                                    required={true}
                                                    onBlur={e => numberHandler(e)}
                                                    onChange={handleChange}
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    className="input-text" type="text"
                                                    placeholder="+998 (__) ___-__-__"/>
                                            </li>
                                            {(numberDirty && errorNumber) && <p className="error">{errorNumber}</p>}
                                            <li>
                                                <label className="label" htmlFor="email">Почта</label>
                                                <input
                                                    required={true}
                                                    onBlur={e => emailHandler(e)}
                                                    onChange={handleChange}
                                                    name="email"
                                                    id="email"
                                                    className="input-text"
                                                    type="text"
                                                    placeholder="Введите вашу почту"
                                                />
                                            </li>
                                            {(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}
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
                                                <input
                                                    required={true}
                                                    onChange={handleChange}
                                                    name="password"
                                                    id="password"
                                                    className="input-text"
                                                    type="text"
                                                    placeholder="Введите вашу почту"
                                                />
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
                                                и ознакомлен с <a href="/#"><strong>политикой
                                                    конфиденциальности</strong></a></label>
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

export default withTranslation()(withRouter(RegistrationApplicant));
