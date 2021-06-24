import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import Title from "../Title";
import axios from "axios";

const RegistrationApplicant = () => {
    const [positions, setPositions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [sections, setSections] = useState([]);
    const [nations, setNations] = useState([]);
    const [socialStatus, setSocialStatus] = useState([]);
    const [values, setValues] = useState(({
        fullName: '',
        positionId: '',
        courseId: '',
        sectionId: '',
        phoneNumber: '',
        email: '',
        status: false
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
        console.log(values)
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
                                                <div>
                                                    <select id="nationId" name="nationId" className="category">
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="gender">Пол</label>
                                                <div>
                                                    <select id="gender" name="gender" className="category">
                                                        <option value="erkak">Erkak</option>
                                                        <option value="ayol">Ayol</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Дата рождения</label>
                                                <input className="input-date" type="date"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Область</label>
                                                <div>ferwefrwerfwef
                                                    <select id="lorem2" className="category">
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                    </select>
                                                </div>

                                            </li>
                                        </ul>
                                    </li>
                                    <li className="form-last">
                                        <ul>
                                            <li>
                                                <label className="label" htmlFor="">Город (район)</label>
                                                <div>
                                                    <select id="lorem2" className="category">
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Домашний адрес</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="Введите ваш домашний адрес"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Телефон</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="+998 (__) ___-__-__"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Почта</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="Введите вашу почту"/>
                                            </li>
                                            <li>
                                                <label className="label" htmlFor="">Категория льгот</label>
                                                <div>
                                                    <select id="lorem2" className="category">
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                        <option value="lorem">lorem</option>
                                                    </select>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="form-center">
                                    <ul>
                                        <li>
                                            <div>
                                                <label className="label" htmlFor="">Ваш логин</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="Логин"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div style={{marginBottom: '20px'}}>
                                                <label className="label" htmlFor="">Пароль</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="Введите вашу почту"/>
                                            </div>

                                            <div>
                                                <label className="label" htmlFor="">Вводите пароль</label>
                                                <input onChange="" className="input-text" type="text"
                                                       placeholder="Повторно вводите пароль"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="form-bottom">
                                    <div className="confidential">

                                        <div className="checked">

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
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
            <Footer/>
        </div>
    )
}

export default RegistrationApplicant;
