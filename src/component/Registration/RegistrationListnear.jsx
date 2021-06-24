import React, { useEffect, useState } from "react";
import iconDropdown from "../../assets/icon/icon-down.svg";
import Title from "../Title";
import axios from "axios";

function RegistrationListnear(props) {
    const [positions, setPositions] = useState();
    const [values, setValues] = useState(({
        fullName: '',
        positionId: '',
        courseId: '',
        sectionId: '',
        phoneNumber: '',
        email: ''
    }))

    useEffect(() => {
        axios.get('/api/position').then(res => {
            setPositions(res.data);
        })
    }, [])

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const handleSend = (e) => {
        e.preventDefault();
        console.log(values);
    }

    return (
        <div className="registration-listnear container-fluit">
            <div className="container">
                <div className="registration-listnear-wrapper">
                    <Title text="Регистрация" />
                    <h5>Анкетные данные</h5>
                    <form onSubmit={handleSend}>
                        <div className="form-wrapper">
                            <ul className="form">
                                <li className="form-first">
                                    <ul>
                                        <li>
                                            <label className="label" for="">Ф.И.О</label>
                                            <input name="fullName" className="input-text" type="text"
                                                placeholder="Введите ваше Ф.И.О" />
                                        </li>
                                        <li>
                                            <label className="label" for="">Дата рождения</label>
                                            <input className="input-date" type="date" />
                                        </li>
                                        <li>
                                            <label className="label" for="">Должность</label>
                                            <div>
                                                <select id="lorem2" className="category">
                                                    <option value="lorem" >Выберите ваш должность</option>
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" for="">Курс</label>
                                            <div>
                                                <select id="lorem2" className="category">
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" for="">Городь</label>
                                            <div>
                                                <select id="lorem2" className="category">
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="form-last">
                                    <ul>
                                        <li>
                                            <label className="label" for="">Кафедра</label>
                                            <div>
                                                <select id="lorem2" className="category">
                                                    <option value="lorem" >Кафедра</option>
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <label className="label" for="">Пароль</label>
                                                <input onChange="" className="input-text" type="text" placeholder="Введите вашу почту" />
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" for="">Телефон</label>
                                            <input onChange={handleChange} name="phoneNumber" className="input-text"
                                                type="text"
                                                placeholder="+998 (__) ___-__-__" />
                                        </li>
                                        <li>
                                            <label className="label" for="">Почта</label>
                                            <input onChange={handleChange} name="email" className="input-text"
                                                type="text"
                                                placeholder="Введите вашу почту" />
                                        </li>
                                        <li>
                                            <label className="label" for="">Раён</label>
                                            <div>
                                                <select id="lorem2" className="category">
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                    <option value="lorem" >lorem</option>
                                                </select>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div style={{ margin: '20px 0 0 auto' }}>
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
