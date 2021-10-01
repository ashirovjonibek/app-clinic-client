import React, {useEffect, useState} from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {withTranslation} from "react-i18next";
import NavTop from "../Nav/NavTop";
import NavCenter from "../Nav/NavCenter";
import Footer from "../Footer/Footer";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";
import {ArrowBack, Email, LocationOn, Person, Phone} from "@material-ui/icons";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";

const ProfileSettings = ({t, history}) => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/auth/login")
        }
    }, [])

    useEffect(() => {
        const axios = require('axios');
        const config = {
            method: 'get',
            url: API_URL + "/auth/me",
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            }
        };

        axios(config)
            .then(function (response) {
                setUserInfo(response.data.object)
                let forData=response.data.object

                    const config = {
                        method: 'get',
                        url: API_URL + "/district/" + response.data.object.districtId,
                        headers: {
                            'Authorization': localStorage.getItem(STORAGE_NAME)
                        }
                    };

                    axios(config)
                        .then(function (response) {
                            setRegion(response.data._embedded.region.id)

                            setValues({
                                ...values,
                                ...forData,
                                "regionId": response.data._embedded.region.id
                            });
                            axios.get(API_URL + "/district/search/filterByRegion?id=" + response.data._embedded.region.id + "").then(res => {
                                setDistricts(res.data._embedded.districts);
                            })
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    // setValues(response.data.object)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState(0);
    const [districts, setDistricts] = useState([]);
    const [socialStatus, setSocialStatus] = useState([]);
    const [values, setValues] = useState({
        fullName: '',
        sectionId: '',
        nationId: 1,
        phoneNumber: '',
        email:  '',
        districtId: userInfo.districtId,
        regionId:  '',
        password: '',
        birthDate:  '',
        address:  '',
        prePassword: '',
        socialStatusId: '',
        gender: ''
    })
    console.log("aaa")
    console.log(values)

    useEffect(() => {
        axios.get(API_URL + "/socialStatus").then(res => {
            setSocialStatus(res.data._embedded.socialStatuses)
        })
    }, []);

    useEffect(() => {
        axios.get(API_URL + "/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);


    const fetchDistricts = (e) => {
        let id = e.target.value
        axios.get(API_URL + "/district/search/filterByRegion?id=" + id + "").then(res => {
            setDistricts(res.data._embedded.districts);
        })

        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };



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
    const [errorPassword, setErrorPassword] = useState('Parolni kiriting!');
    const [errorPasswordDirty, setErrorPasswordDirty] = useState(false);
    const [errorPrePassword, setErrorPrePassword] = useState('Parolingizni kiriting!');
    const [errorPrePasswordDirty, setErrorPrePasswordDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('elektron pochtangizda @ bo\'lishi kerak');

    const nameHandler = (e) => {
        if (e.target.value !== null) {
            const name = e.target.name;
            const regName = /^[a-zA-Z\s]+$/;
            if (!regName.test(String(e.target.value).toLowerCase()) && name === 'fullName') {
                setNameDirty(true);
                setErrorName('Ism faqat harflardan iborat bo\'lsin');
                setTimeout(() => {
                    e.target.value = ''
                }, 800)
            } else {
                setErrorName('');
            }
        }
    }

    const yearHandler = (e) => {
        const name = e.target.name;
        const fullYear = new Date().getFullYear();
        const userYear = e.target.value.slice(0, 4);
        if ((fullYear - userYear) < 16 && name === 'birthDate') {
            setYearDirty(true);
            setErrorYear('foydalanuvchi 16 yoshdan katta bo\'lishi kerak');
            setTimeout(() => {
                e.target.value = ''
            }, 800)
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
            setTimeout(() => {
                e.target.value = ''
            }, 1300)
        } else if (e.target.value.length < 12 && name === 'phoneNumber') {
            setNumberDirty(true);
            setErrorNumber("Tel:  +998 (__) ___-__-__' ko'rinishda bo'lsin");
            setTimeout(() => {
                e.target.value = ''
            }, 800)
        } else {
            setErrorNumber('');
        }
    }

    const passwordHandler = (e) => {
        if (e.target.value.length < 8) {
            setErrorPasswordDirty(true);
            setErrorPassword("Parol 8 ta belgidan kam bo'lmasin");
            setTimeout(() => {
                e.target.value = ''
            }, 1300)
        } else {
            setErrorPassword('');
        }
    }

    const passwordChacker = (e) => {
        if (e.target.value !== values.password) {
            setErrorPrePasswordDirty(true);
            setErrorPrePassword("Parol mos kelmadi");
            setTimeout(() => {
                e.target.value = ''
            }, 800)
        } else {
            setErrorPrePassword('');
        }
    }

    const emailHandler = (e) => {
        const name = e.target.name;
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(String(e.target.value).toLowerCase()) && name === 'email') {
            setEmailDirty(true);
            setErrorEmail('elektron po\'chtangizda abs@abs.com bo\'lishi kerak!');
            setTimeout(() => {
                e.target.value = ''
            }, 800)
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
            <div className="nav">
                <NavTop/>
                <div className="nav-center container-fluit">
                    <div className="container">
                        <div className="navbar">
                            <div className="menu-icon">
                                <ArrowBack
                                    fontSize={'large'}
                                    onClick={() =>  history.goBack()}
                                />
                            </div>
                            <div className="header-logo">
                                <a href="#">
                                    <div className="logo-left">
                                        <img src={iconLogo} alt="logo"/>
                                    </div>
                                    <div className="logo-right">
                                        <div>
                                            <span><strong>{t("Legal clinic")}</strong></span><br/>
                                            {t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="header-right">
                                <div className="header-right-desctop">
                                    <form role="search" method="get" action="#" className="search-form">
                                        <input type="" placeholder={t("Search") + "..."}/>
                                        <button type=""><img src={iconSearch} alt="search-icon"/></button>
                                    </form>
                                    <NavLanguage/>
                                    <div className="glas">
                                        <img src={iconGlass} alt=""/>
                                    </div>
                                </div>
                                <Enter/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<NavCenter/>*/}
                {/*<NavBottom/>*/}
            </div>
            <div className="dashboard container-fluit">

                <div className="container">
                    <div className="title">
                        <h4 className="title-text"><span onClick={() => {
                            history.goBack()
                        }} style={{marginLeft: "10px", cursor: "pointer"}}><KeyboardBackspaceIcon
                            style={{marginRight: "20px"}}
                            titleAccess={t("Go back")}/>
                            {t("Go back")}
                        </span></h4>
                    </div>

                    <div className="flexUchun">
                        <div className="dashboard-container">
                            <div className="profileImage"/>
                            <p style={{fontSize: "10px"}}>{t("User image")}</p>
                            <div className="profileInfo">
                                <div className="profileInfoDiv"><Person className="userIcon"/>{userInfo.fullName}</div>
                                <div className="profileInfoDiv"><Phone className="userIcon"/>{userInfo.phoneNumber}
                                </div>
                                <div className="profileInfoDiv"><Email className="userIcon"/>{userInfo.email}</div>
                                <div className="profileInfoDiv"><LocationOn className="userIcon"/>{userInfo.address}
                                </div>
                            </div>
                        </div>

                        <div className="registration-applicant container-fluit">
                            <div className="registration-applicant-wrapper">
                                <h5>{t("Personal data")}</h5>
                                <form
                                    // onSubmit={handleSend}
                                >
                                    <div className="form-wrapper">
                                        <ul className="form">
                                            <li className="form-first">
                                                <ul>
                                                    <li>
                                                        <label className="label" htmlFor="">{t("Full name")}</label>
                                                        <input
                                                            onBlur={e => nameHandler(e)}
                                                            onChange={handleChange}
                                                            name="fullName"
                                                            className="input-text"
                                                            type="text"
                                                            placeholder={t("Enter your full name")}
                                                            value={values.fullName}
                                                            required
                                                        />
                                                    </li>
                                                    {(nameDirty && errorName) && <p className="error">{errorName}</p>}
                                                    {/*<li>
                                                        <label className="label"
                                                               htmlFor="nationId">{t("Nationality")}</label>
                                                        <select id="nationId" name="nationId" onChange={handleChange}
                                                                className="category" required>
                                                            <option value="">{t("Choose your nationality")}</option>
                                                            {nations && nations.map((item, i) =>
                                                                <option key={i} value={item.id}>{item.name.uz}</option>
                                                            )}
                                                        </select>
                                                    </li>*/}
                                                    <li>
                                                        <label className="label" htmlFor="gender">{t("Gender")}</label>
                                                        <select id="gender"
                                                                onChange={handleChange}
                                                                name="gender"
                                                                className="category" required
                                                                value={values.gender}
                                                        >
                                                            <option value="">{t("Choose your gender")}</option>
                                                            <option value="erkak">{t("Male")}</option>
                                                            <option value="ayol">{t("Female")}</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <label className="label"
                                                               htmlFor="birthDate">{t("Date of Birth")}</label>
                                                        <input
                                                            className="input-date"
                                                            onBlur={e => yearHandler(e)}
                                                            onChange={handleChange}
                                                            name="birthDate"
                                                            id="birthDate"
                                                            type="date"
                                                            value={values.birthDate}
                                                            required
                                                        />
                                                    </li>
                                                    {/*{(yearDirty && errorYear) && <p className="error">{errorYear}</p>}*/}

                                                    <li>
                                                        <label className="label"
                                                               htmlFor="regionId">{t("Region")}</label>
                                                        <select
                                                            id="regionId"
                                                            onChange={fetchDistricts}
                                                            name="regionId"
                                                            className="category"
                                                            value={values.regionId}
                                                            required={true}
                                                        >
                                                            <option value="">{t("Select your region")}</option>
                                                            {regions && regions.map((item) =>
                                                                <option key={item.id}
                                                                        value={item.id}>{item.name.uz}</option>
                                                            )}
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <label className="label"
                                                               htmlFor="districtId">{t("City (region)")} </label>
                                                        <select
                                                            id="districtId"
                                                            onChange={handleChange}
                                                            name="districtId"
                                                            className="category"
                                                            value={values.districtId}
                                                            required={true}
                                                        >
                                                            <option value="">{t("Choose your district")}</option>
                                                            {districts && districts.map((item, i) =>
                                                                <option key={i} value={item.id}>{item.name.uz}</option>
                                                            )}
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <label className="label"
                                                               htmlFor="address">{t("Home address")}</label>
                                                        <input required={true}
                                                               onChange={handleChange}
                                                               name="address"
                                                               id="address"
                                                               className="input-text"
                                                               type="text"
                                                               value={values.address}
                                                               placeholder={t("Enter your home address")}
                                                        />
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="form-last">
                                                <ul>

                                                    <li>
                                                        <label className="label"
                                                               htmlFor="phoneNumber">{t("Telephone")}</label>
                                                        <input
                                                            required={true}
                                                            onBlur={e => numberHandler(e)}
                                                            onChange={handleChange}
                                                            name="phoneNumber"
                                                            id="phoneNumber"
                                                            className="input-text" type="text"
                                                            value={values.phoneNumber}
                                                            placeholder="+998 (__) ___-__-__"/>
                                                    </li>
                                                    {(numberDirty && errorNumber) && <p className="error">{errorNumber}</p>}
                                                    <li>
                                                        <label className="label" htmlFor="email">{t("Email")}</label>
                                                        <input
                                                            required={true}
                                                            onBlur={e => emailHandler(e)}
                                                            onChange={handleChange}
                                                            name="email"
                                                            id="email"
                                                            className="input-text"
                                                            type="text"
                                                            value={values.email}
                                                            placeholder={t("Enter your mail")}
                                                        />
                                                    </li>
                                                    {(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}
                                                    <li>
                                                        <label className="label"
                                                               htmlFor="socialStatusId">{t("Benefit category")}</label>
                                                        <select id="socialStatusId" name="socialStatusId"
                                                                onChange={handleChange}
                                                                className="category"
                                                                required={true}
                                                        >
                                                            <option value="">{t("Select benefits")}</option>
                                                            {socialStatus && socialStatus.map((item, i) =>
                                                                <option key={i} value={item.id}>{item.name.uz}</option>
                                                            )}
                                                        </select>
                                                    </li>

                                                    <li>
                                                        <label className="label"
                                                               htmlFor="password">{t("Password")}</label>
                                                        <input
                                                            required={true}
                                                            onChange={handleChange}
                                                            name="password"
                                                            id="password"
                                                            className="input-text"
                                                            type="text"
                                                            onBlur={e => passwordHandler(e)}
                                                            placeholder={t("Enter your password")}
                                                        />
                                                    </li>
                                                    {/*{(errorPasswordDirty && errorPassword) &&*/}
                                                    {/*<p className="error">{errorPassword}</p>}*/}
                                                    <li>
                                                        <label className="label"
                                                               htmlFor="prePassword">{t("Repeat password")}</label>
                                                        <input
                                                            onChange={handleChange}
                                                            required={true}
                                                            onBlur={e => passwordChacker(e)}
                                                            name="prePassword"
                                                            id="prePassword"
                                                            className="input-text" type="text"
                                                            placeholder={t("Re-enter your password")}/>
                                                    </li>
                                                    {/*{(errorPrePasswordDirty && errorPrePassword) &&*/}
                                                    {/*<p className="error">{errorPrePassword}</p>}*/}
                                                    <div className="form-bottom">
                                                        <button type="submit"
                                                                className="btn-default">{t("Edit profile")}</button>
                                                    </div>
                                                </ul>
                                            </li>

                                        </ul>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withTranslation()(ProfileSettings);
