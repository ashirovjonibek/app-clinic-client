import React, {useEffect, useState} from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {withTranslation} from "react-i18next";
import NavTop from "../Nav/NavTop";
import Footer from "../Footer/Footer";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import Swal from "sweetalert2";
import {Email, LocationCity, ArrowBack, LocationOn, Person, Phone} from "@material-ui/icons";
import {AddAPhoto} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";
import {IMAGE, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME} from "../../redux/me/actionType";
import "../../assets/scss/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../../assets/css/table.css'

const ProfileSettings = ({t, history}) => {
    const user = useSelector(state => state.meReducer);
    const [openImageDialog, setOpenImageDialog] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [region, setRegion] = useState([]);
    const [newUser, setNewUser] = useState({});
    let [isApplicant, setIsApplicant] = useState(false);
    const dispatch=useDispatch();

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
                let forData = response.data.object
                let isApllicant = 0;
                response.data.object.roles.map(item => {
                    if (item.name === "ADMIN" || item.name === "ADMIN") {
                        isApplicant++
                    }
                    if (item.name === "USER") {
                        setIsApplicant(true)
                    }
                })
                if (isApplicant > 0) {
                    setIsApplicant(false)
                }

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
    const [districts, setDistricts] = useState([]);
    const [socialStatus, setSocialStatus] = useState([]);
    const [values, setValues] = useState(({
        fullName: '',
        sectionId: '',
        nationId: 1,
        phoneNumber: '',
        email: '',
        districtId: '',
        password: '',
        birthDate: '',
        address: '',
        prePassword: '',
        socialStatusId: 0,
        gender: '',
        imageId: ''
    }))

    // console.log("aaa")
    // console.log(values)

    useEffect(() => {
        axios.get(API_URL + "/region").then(res => {
            setRegions(res?.data?._embedded?.regions)
        });
    }, []);

    useEffect(() => {
        axios.get(API_URL + "/socialStatus").then(res => {
            setSocialStatus(res?.data?._embedded?.socialStatuses)
        })
    }, []);

    const fetchDistricts = (e) => {
        let id = e.target.value
        axios.get(API_URL + "/district/search/filterByRegion?id=" + id + "").then(res => {
            setDistricts(res?.data?._embedded?.districts);
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
        const phoneNumber = e.target.value;
        // const regNumber = /^\d+/;
        const regNumber = /^((\+)33|0)[1-9](\d{2}){4}$/;
        // if (!regNumber.test(String(e.target.value).toLowerCase()) && name === 'phoneNumber') {
        //     setNumberDirty(true);
        //     setErrorNumber('faqat raqam kiriting!');
        //     setTimeout(() => {
        //         e.target.value = ''
        //     }, 1300)
        // }
        if (phoneNumber.match(regNumber) && name === 'phoneNumber') {
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

    const [imageFile, setImageFile] = useState({
        imageId: ''
    });

    const handleUpload = (e) => {

        const axios = require('axios');
        // const FormData = require('form-data');
        const fs = require('fs');
        const data = new FormData();
        data.append('image', e.target.files[0]);

        const config = {
            method: 'post',
            url: API_URL + '/attach/upload',
            headers: {
                'Authorization': localStorage.getItem(STORAGE_NAME)
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                setValues({
                    ...values,
                    imageId: response.data.object
                })
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const handleSend = (e) => {

        //yuboriladigan data
        //{
        //     "fullName": "string",
        //     "email": "ashirov.uzbek.1997@gmail.com",
        //     "districtId": 3,
        //     "phoneNumber": "99891123456789",
        //     "address": "string",
        //     "birthDate": "2000-09-30T05:34:46.123Z",
        //     "gender": "erkak",
        //     "password": "123456",
        //     "socialStatusId": 0,
        //     "imageId":"502f04f2-9119-4017-b2b2-733322ffaa1a"
        //   }

        //data yuboriladigan manzil  /api/auth/setProfile

        e.preventDefault();
        if (values.password === values.prePassword) {
            console.log(values)
            axios.post(API_URL + "/auth/setProfile", {...values}, {
                headers: {
                    'Authorization': localStorage.getItem(STORAGE_NAME)
                }
            }).then(res => {
                if (res.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: t("Saved"),
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        dispatch({type: ME_DATA, data: {}});
                        dispatch({type: ME_USERNAME, data: ""});
                        dispatch({type: ME_FULL_NAME, data: ""});
                        dispatch({type: ME_EMAIL, data: ""});
                        dispatch({type: IMAGE, data: ""});
                        localStorage.removeItem(STORAGE_NAME);
                        history.push("/auth/login")
                    });
                } else {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: t("An error occurred. Please try again") + "!!!",
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
                title: t("An error occurred. Please try again") + "!!!",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
            });
        }
    };

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
                                    onClick={() => history.push(user.role[1])}
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

                            history.push(user.role[1])
                        }} style={{marginLeft: "10px", cursor: "pointer"}}><KeyboardBackspaceIcon
                            style={{marginRight: "20px"}}
                            titleAccess={t("Go back")}/>
                            {t("Go back")}
                        </span></h4>
                    </div>

                    <div className="flexUchun">
                        <div className="dashboard-container">
                            <div className="profileImage">
                                {values.imageId || values.image ? <img onClick={()=>setOpenImageDialog(true)} width="100px" height="100px"
                                                                       src={API_URL + (values.imageId !== "" ? "/attach/" + values.imageId : values.image)}
                                                                       alt=""/> : <div style={{width:"100%",height:"100%"}}/>}
                                <Dialog fullWidth={true} open={openImageDialog}
                                        onClose={() => setOpenImageDialog(false)}>
                                    <div style={{width:"100%",position:"relative"}}>
                                        <span style={{backgroundColor:"rgba(0,0,0,0.4)",position:"absolute",margin:"10px",color:"white",fontSize:"20px",right:0,cursor:"pointer"}}
                                              onClick={() => setOpenImageDialog(false)}
                                        >
                                            <b>X</b></span>
                                    </div>
                                    <div style={{padding: "6px"}}>
                                        {values.imageId || values.image ? <img width="100%" height="100%"
                                                                               src={API_URL + (values.imageId !== "" ? "/attach/" + values.imageId : values.image)}
                                                                               alt=""/> : ""}
                                    </div>
                                </Dialog>
                                <div>
                                    <div>
                                        <div>
                                            <span style={{width: "100%", height: "100%"}}>

                                            <AddAPhoto/>
                                            </span>
                                            <input type="file" accept="image/*" name="file" onChange={handleUpload}/>   
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    onSubmit={handleSend}
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
                                                    {
                                                        isApplicant ? <li>
                                                            <label className="label"
                                                                   htmlFor="gender">{t("Gender")}</label>
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
                                                        </li> : ""
                                                    }

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
                                                    {(yearDirty && errorYear) && <p className="error">{errorYear}</p>}

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
                                                    {(numberDirty && errorNumber) &&
                                                    <p className="error">{errorNumber}</p>}
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
                                                    {(emailDirty && errorEmail) &&
                                                    <p className="error">{errorEmail}</p>}

                                                    {
                                                        isApplicant ? <li>
                                                            <label className="label"
                                                                   htmlFor="socialStatusId">{t("Benefit category")}</label>
                                                            <select id="socialStatusId" name="socialStatusId"
                                                                    onChange={handleChange}
                                                                    className="category"
                                                                    value={values.socialStatusId ? values.socialStatusId : 3}
                                                                    required={true}
                                                            >
                                                                <option value="">{t("Select benefits")}</option>
                                                                {socialStatus && socialStatus.map((item, i) =>
                                                                    <option key={i}
                                                                            value={item.id}>{item.name.uz}</option>
                                                                )}
                                                            </select>
                                                        </li> : ""
                                                    }


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
                                                    {(errorPasswordDirty && errorPassword) &&
                                                    <p className="error">{errorPassword}</p>}
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
                                                    {(errorPrePasswordDirty && errorPrePassword) &&
                                                    <p className="error">{errorPrePassword}</p>}
                                                    <div className="form-bottom dashboard-form-button">
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
        </div>
    );
}

export default withTranslation()(ProfileSettings);
