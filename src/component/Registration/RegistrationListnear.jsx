import React, {useEffect, useState} from "react";
import Title from "../Title";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import {toast} from "react-toastify";

function RegistrationListnear(props) {
    const {history} = props;
    const [positions, setPositions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [sections, setSections] = useState([]);
    const [values, setValues] = useState(({
        fullName: '',
        positionId: '',
        courseId: '',
        sectionId: '',
        phoneNumber: '',
        email: '',
        status: true
    }));

    useEffect(() => {
        axios.get('/api/position').then(res => {
            setPositions(res.data);
        })
    }, []);
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
        axios.get("/api/section").then(res => {
            setSections(res.data._embedded.sections);
        })
    }, []);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const handleSend = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post("/api/auth/createListener", {...values}).then(res => {
            console.log(res)
            if (res.data.success) {
                history.push("/auth/login")
                toast.success(res.data.message)
            }
        });
    }

    return (
        <div className="registration-listnear container-fluit">
            <div className="container">
                <div className="registration-listnear-wrapper">
                    <Title text="Регистрация"/>
                    <h5>Анкетные данные</h5>
                    <form onSubmit={handleSend}>
                        <div className="form-wrapper">
                            <ul className="form">
                                <li className="form-first">
                                    <ul>
                                        <li>
                                            <label className="label" htmlFor="fullName">Ф.И.О</label>
                                            <input name="fullName" id="fullName" onChange={handleChange}
                                                   className="input-text" type="text"
                                                   placeholder="Введите ваше Ф.И.О"/>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="positionId">Должность</label>
                                            <div>
                                                <select id="positionId" name="positionId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Выберите ваш должность</option>
                                                    {positions && positions.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.title.uz}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </li>
                                        <li>

                                            <label className="label" htmlFor="courseId">Курс</label>
                                            <div>
                                                <select id="courseId" name="courseId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Выберите ваш курс</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="regionId">Городь</label>
                                            <div>
                                                <select id="regionId" name="regionId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Выберите ваш городь</option>
                                                    {regions && regions.map((item, i) =>
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
                                            <label className="label" htmlFor="districtId">Раён</label>
                                            <div>
                                                <select id="districtId" name="districtId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Выберите ваш раён</option>
                                                    {districts && districts.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.name.uz}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="address">Адрес</label>
                                            <input onChange={handleChange} id="address" name="address"
                                                   className="input-text"
                                                   type="text"
                                                   placeholder="Введите вашу адрес"/>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="sectionId">Кафедра</label>
                                            <div>
                                                <select id="sectionId" name="sectionId" onChange={handleChange}
                                                        className="category">
                                                    <option value="">Кафедра</option>
                                                    {sections && sections.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.title.uz}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="phoneNumber">Телефон</label>
                                            <input onChange={handleChange} id="phoneNumber" name="phoneNumber"
                                                   className="input-text"
                                                   type="text"
                                                   placeholder="+998 (__) ___-__-__"/>
                                        </li>
                                        <li>
                                            <label className="label" htmlFor="email">Почта</label>
                                            <input onChange={handleChange} id="email" name="email"
                                                   className="input-text"
                                                   type="text"
                                                   placeholder="Введите вашу почту"/>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                            <div style={{margin: '20px 0 0 auto'}}>
                                <button type="submit" className="btn-default">Регистрация</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationListnear;