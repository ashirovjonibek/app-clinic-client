import React, {useEffect, useState} from "react";
import Title from "../Title";
import axios from "axios";
import {toast} from "react-toastify";
import {API_URL} from "../../utils/constant";
import RequestFunctions from "../../requests/RequestFunctions";
import Swal from "sweetalert2";
import {withTranslation} from "react-i18next";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Footer from "../Footer/Footer";
import NavTop from "../Nav/NavTop";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";

function RegistrationListener(props) {
    const {history, t} = props;
    const [positions, setPositions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [sections, setSections] = useState([]);
    const [values, setValues] = useState(({
        fullName: '',
        positionId: 1,
        course: '',
        sectionId: '',
        phoneNumber: '',
        email: '',
        districtId: '',
        password: '',
        prePassword: '',
        birthDate: '',
        address: '',
        gender: ''
    }));

    useEffect(() => {
        axios.get(API_URL + '/position').then(res => {
            setPositions(res.data);
        })
    }, []);
    useEffect(() => {
        axios.get(API_URL + "/region").then(res => {
            setRegions(res.data._embedded.regions)
        });
    }, []);
    // useEffect(() => {
    //     axios.get(API_URL + "/district").then(res => {
    //         setDistricts(res.data._embedded.districts);
    //     })
    // }, []);
    useEffect(() => {
        axios.get(API_URL + "/section").then(res => {
            setSections(res.data);
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
    }
    const handleSend = (e) => {
        // console.log("values")
        // console.log(values)
        e.preventDefault();
        axios.post(API_URL + "/auth/createListener", {...values}).then(res => {
            if (res.data.success) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: t("Registered") + "!!!",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    history.push("/auth/login")
                });
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: t("An error occurred. Please try again") + "!!!",
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
                });
            }
        }).catch((e) => {
            // console.log("e.response.data")
            // console.log(e.response.data)
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: e.response.data.phoneNumber && e.response.data.phoneNumber ?
                    props.t("The phone number and email are already available") :
                    e.response.data.phoneNumber ?
                        props.t("The phone number is already available") : e.response.data.email ?
                            props.t("Email is already available") : props.t("An error occurred. Please try again") + "!",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // console.log(e.response)
            });
        });
    }

    // validation \|/
    const [nameDirty, setNameDirty] = useState(false);
    const [errorName, setErrorName] = useState('Ism yozilishi kerak!');
    const [yearDirty, setYearDirty] = useState(false);
    const [errorYear, setErrorYear] = useState('foydalanuvchi 16 yoshdan katta bo\'lishi kerak!');
    const [numberDirty, setNumberDirty] = useState(false);
    const [errorNumber, setErrorNumber] = useState('telefon raqamingizni kiriting!');
    const [emailDirty, setEmailDirty] = useState(false);
    const [errorEmail, setErrorEmail] = useState('elektron pochtangizda @ bo\'lishi kerak');
    const [errorPassword, setErrorPassword] = useState('Parolni kiriting!');
    const [errorPasswordDirty, setErrorPasswordDirty] = useState(false);
    const [errorPrePassword, setErrorPrePassword] = useState('Parolingizni kiriting!');
    const [errorPrePasswordDirty, setErrorPrePasswordDirty] = useState(false);

    const nameHandler = (e) => {
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
        }
        if ((fullYear - userYear) > 100 && name === 'birthDate') {
            setYearDirty(true);
            setErrorYear("foydalanuvchi yoshi to'g'ri kiritilmadi");
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
            }, 100)
        } else {
            setErrorPassword('');
        }
    }

    const passwordChacker = (e) => {
        // console.log(e.target.value)
        // console.log(values.password)
        if (e.target.value !== values.password) {
            setErrorPrePasswordDirty(true);
            setErrorPrePassword("Parol mos kelmadi");
            setTimeout(() => {
                e.target.value = ''
            }, 100)
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
            }, 1000)
        } else {
            setErrorEmail('');
        }
    }

    return (
        <div className="registration-listnear container-fluit">
            <div className="nav">
                <NavTop/>
                <NavCenter/>
                {/*<NavBottom/>*/}
            </div>
            <div className="container">
                <div className="registration-listnear-wrapper">
                    <Title text={<span><KeyboardBackspaceIcon titleAccess="Bosh sahifaga" onClick={() => {
                        history.goBack()
                    }} style={{marginRight: "17px", cursor: "pointer"}}/>{

                        props.t("Register")}
                        </span>}/>
                    <h5>{props.t("Personal data")}</h5>
                    <form onSubmit={handleSend}>
                        <div className="form-wrapper">
                            <ul className="form">
                                <li className="form-first">
                                    <ul>
                                        <li>
                                            <label className="label" htmlFor="fullName">{props.t("Full name")}</label>
                                            <input
                                                name="fullName"
                                                id="fullName"
                                                onBlur={e => nameHandler(e)}
                                                onChange={handleChange}
                                                className="input-text"
                                                type="text"
                                                placeholder={props.t("Enter your full name")}
                                                required/>
                                        </li>
                                        {(nameDirty && errorName) && <p className="error">{errorName}</p>}
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
                                        {/* <li>
                                            <label className="label" htmlFor="positionId">{props.t("Position")}</label>
                                            <select id="positionId" name="positionId" onChange={handleChange}
                                                    className="category" required>
                                                <option value="">{props.t("Choose your position")}</option>
                                                {positions && positions.map((item, i) =>
                                                    <option key={i} value={item.id}>{item.title.uz}</option>
                                                )}
                                            </select>
                                        </li>*/}
                                        <li>
                                            <label className="label" htmlFor="course">{props.t("Course")}</label>
                                            <select id="course" name="course" onChange={handleChange} required={true}
                                                    className="category">
                                                <option value="">{props.t("Choose your course")}</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="regionId">{props.t("Region")}</label>
                                            <select id="regionId" name="regionId" onChange={fetchDistricts}
                                                    className="category" required={true}>
                                                <option value="">{props.t("Select your region")}</option>
                                                {regions && regions.map((item, i) =>
                                                    <option key={i} value={item.id}>{item.name.uz}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>
                                            <label className="label"
                                                   htmlFor="districtId">{props.t("City (region)")}</label>
                                            <select id="districtId" name="districtId" onChange={handleChange}
                                                    className="category" required={true}>
                                                <option value="">{props.t("Choose your district")}</option>
                                                {districts && districts.map((item, i) =>
                                                    <option key={i} value={item.id}>{item.name.uz}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="address">{props.t("Home address")}</label>
                                            <input
                                                onChange={handleChange}
                                                id="address"
                                                name="address"
                                                className="input-text"
                                                type="text"
                                                placeholder={props.t("Enter your home address")}
                                                required
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li className="form-last">
                                    <ul>

                                        <li>
                                            <label className="label" htmlFor="sectionId">{props.t("Department")}</label>
                                            <select id="sectionId" name="sectionId" onChange={handleChange}
                                                    className="category" required={true}>
                                                <option value="">{props.t("Choose your department")}</option>
                                                {sections && sections.map((item, i) =>
                                                    <option key={i} value={item.id}>{item.title.uz}</option>
                                                )}
                                            </select>
                                        </li>
                                        <li>
                                            <label className="label"
                                                   htmlFor="phoneNumber">{props.t("Telephone")}</label>
                                            <input
                                                onBlur={e => numberHandler(e)}
                                                onChange={handleChange}
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="input-text"
                                                type="text"
                                                placeholder="+998 (__) ___-__-__"
                                                required
                                            />
                                        </li>
                                        {(numberDirty && errorNumber) && <p className="error">{errorNumber}</p>}
                                        <li>
                                            <label className="label" htmlFor="email">{props.t("Email")}</label>
                                            <input required={true}
                                                   onBlur={e => emailHandler(e)}
                                                   onChange={handleChange}
                                                   id="email"
                                                   name="email"
                                                   className="input-text"
                                                   type="text"
                                                   placeholder={props.t("Enter your mail")}
                                            />
                                        </li>
                                        {(emailDirty && errorEmail) && <p className="error">{errorEmail}</p>}
                                        <li>
                                            <label className="label" htmlFor="password">{props.t("Password")}</label>
                                            <input required={true}
                                                   onChange={handleChange}
                                                   id="password"
                                                   name="password"
                                                   className="input-text" type="text"
                                                   onBlur={e => passwordHandler(e)}
                                                   placeholder={props.t("Enter your password")}
                                            />
                                        </li>
                                        {(errorPasswordDirty && errorPassword) &&
                                        <p className="error">{errorPassword}</p>}
                                        <li>
                                            <label className="label"
                                                   htmlFor="prePassword">{props.t("Repeat password")}</label>
                                            <input required={true}
                                                   onChange={handleChange}
                                                   onBlur={e => passwordChacker(e)}
                                                   id="password"
                                                   name="prePassword"
                                                   className="input-text"
                                                   type="text"
                                                   placeholder={props.t("Re-enter your password")}
                                            />
                                        </li>
                                        {(errorPrePasswordDirty && errorPrePassword) &&
                                        <p className="error">{errorPrePassword}</p>}
                                        <div className="button-submit">
                                            <button type="submit"
                                                    className="btn-default">{props.t("Registration")}</button>
                                        </div>
                                    </ul>
                                </li>
                            </ul>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(RegistrationListener);
