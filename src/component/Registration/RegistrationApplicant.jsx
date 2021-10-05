import React, {useEffect, useState} from "react";
import Title from "../Title";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {API_URL} from "../../utils/constant";
import Swal from "sweetalert2";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import {withTranslation} from "react-i18next";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import NavTop from "../Nav/NavTop";
import MuiPickersUtilsProvider, {DatePicker} from "@material-ui/pickers";


const RegistrationApplicant = (props) => {
    const {history, t} = props;
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [nations, setNations] = useState([]);
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
        socialStatusId: '',
        gender: ''
    }))


    useEffect(() => {
        axios.get(API_URL + "/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);
    // useEffect(() => {
    //     axios.get(API_URL + "/district").then(res => {
    //         // setDistricts(res.data._embedded.districts);
    //     })
    // }, []);
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

    const handleSend = () => {
        // e.preventDefault();
        console.log(values)
        if (values.password === values.prePassword) {
            console.log(values)
            axios.post(API_URL + "/auth/createApplicant", {...values}).then(res => {
                if (res.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: props.t("Registered") + "!!!",
                        showConfirmButton: false,
                        timer: 1000
                    }).then(() => {
                        history.push("/auth/login")
                    });
                } else {
                    console.log(res)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: props.t("An error occurred. Please try again") + "!!!",
                        showConfirmButton: false,
                        timer: 1000
                    }).then((e) => {
                        console.log(e)
                    });
                }
            }).catch((e)=>{
                console.log(e)
            });
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: props.t("An error occurred. Please try again") + "!!!",
                showConfirmButton: false,
                timer: 1000
            }).then((e) => {
                console.log(e)
            });
        }
    }
    const [date, changeDate] = useState(new Date());
    return (
        <div>
            <div className="nav">
                <NavTop/>
                <NavCenter/>
                {/*<NavBottom/>*/}
            </div>
            <div className="registration-applicant container-fluit">
                <div className="container">
                    <div className="registration-applicant-wrapper">
                        <Title text={<span><KeyboardBackspaceIcon titleAccess="Bosh sahifaga" onClick={() => {
                            history.goBack()
                        }} style={{marginRight: "17px", cursor: "pointer"}}/>{

                            props.t("Register")}
                        </span>}/>
                        <h5>{props.t("Personal data")}</h5>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <label className="label" htmlFor="">{props.t("Full name")}</label>
                                                <input
                                                    onBlur={e => nameHandler(e)}
                                                    onChange={handleChange}
                                                    name="fullName"
                                                    className="input-text"
                                                    type="text"
                                                    placeholder={props.t("Enter your full name")}
                                                    required
                                                />
                                            </li>
                                            {(nameDirty && errorName) && <p className="error">{errorName}</p>}
                                            {/*<li>
                                                <label className="label"
                                                       htmlFor="nationId">{props.t("Nationality")}</label>
                                                <select id="nationId" name="nationId" onChange={handleChange}
                                                        className="category" required>
                                                    <option value="">{props.t("Choose your nationality")}</option>
                                                    {nations && nations.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>*/}
                                            <li>
                                                <label className="label" htmlFor="gender">{props.t("Gender")}</label>
                                                <select id="gender" onChange={handleChange} name="gender"
                                                        className="category" required>
                                                    <option value="">{props.t("Choose your gender")}</option>
                                                    <option value="erkak">{props.t("Male")}</option>
                                                    <option value="ayol">{props.t("Female")}</option>
                                                </select>
                                            </li>

                                            <li>
                                                <label className="label"
                                                       htmlFor="birthDate">{props.t("Date of Birth")}</label>
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
                                                <label className="label" htmlFor="regionId">{props.t("Region")}</label>
                                                <select
                                                    id="regionId"
                                                    onChange={fetchDistricts}
                                                    name="regionId"
                                                    className="category"
                                                    required={true}
                                                >
                                                    <option value="">{props.t("Select your region")}</option>
                                                    {regions && regions.map((item) =>
                                                        <option key={item.id} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label"
                                                       htmlFor="districtId">{props.t("City (region)")} </label>
                                                <select
                                                    id="districtId"
                                                    onChange={handleChange}
                                                    name="districtId"
                                                    className="category"
                                                    required={true}
                                                >
                                                    <option value="">{props.t("Choose your district")}</option>
                                                    {districts && districts.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label"
                                                       htmlFor="address">{props.t("Home address")}</label>
                                                <input required={true} onChange={handleChange} name="address"
                                                       id="address"
                                                       className="input-text"
                                                       type="text"
                                                       placeholder={props.t("Enter your home address")}
                                                />
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="form-last">
                                        <ul>

                                            <li>
                                                <label className="label"
                                                       htmlFor="phoneNumber">{props.t("Telephone")}</label>
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
                                                <label className="label" htmlFor="email">{props.t("Email")}</label>
                                                <input
                                                    required={true}
                                                    onBlur={e => emailHandler(e)}
                                                    onChange={handleChange}
                                                    name="email"
                                                    id="email"
                                                    className="input-text"
                                                    type="text"
                                                    placeholder={props.t("Enter your mail")}
                                                />
                                            </li>
                                            {(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}
                                            <li>
                                                <label className="label"
                                                       htmlFor="socialStatusId">{props.t("Benefit category")}</label>
                                                <select id="socialStatusId" name="socialStatusId"
                                                        onChange={handleChange}
                                                        className="category"
                                                        required={true}
                                                >
                                                    <option value="">{props.t("Select benefits")}</option>
                                                    {socialStatus && socialStatus.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li>
                                                <label className="label"
                                                       htmlFor="password">{props.t("Password")}</label>
                                                <input
                                                    required={true}
                                                    onChange={handleChange}
                                                    name="password"
                                                    id="password"
                                                    className="input-text"
                                                    type="text"
                                                    onBlur={e => passwordHandler(e)}
                                                    placeholder={props.t("Enter your password")}
                                                />
                                            </li>
                                            {(errorPasswordDirty && errorPassword) &&
                                            <p className="error">{errorPassword}</p>}
                                            <li>
                                                <label className="label"
                                                       htmlFor="prePassword">{props.t("Repeat password")}</label>
                                                <input onChange={handleChange} required={true}
                                                       onBlur={e => passwordChacker(e)} name="prePassword"
                                                       id="prePassword"
                                                       className="input-text" type="text"
                                                       placeholder={props.t("Re-enter your password")}/>
                                            </li>
                                            {(errorPrePasswordDirty && errorPrePassword) &&
                                            <p className="error">{errorPrePassword}</p>}
                                            <div className="form-bottom">
                                                <div className="confidential">

                                                    <div className="checked">

                                                        <input type="checkbox" id="vehicle1"
                                                               name="vehicle1"
                                                               value="Bike"/>
                                                        <label
                                                            htmlFor="vehicle1">{props.t("I consent to the processing of my personal data and have read the ")}
                                                            <a href="/#"><strong>{props.t("privacy policy")}</strong></a></label>
                                                    </div>
                                                </div>
                                                <button onClick={handleSend}
                                                        className="btn-default">{props.t("Registration")}</button>
                                            </div>
                                        </ul>
                                    </li>

                                </ul>


                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default withTranslation()(withRouter(RegistrationApplicant));
