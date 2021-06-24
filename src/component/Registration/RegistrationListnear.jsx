import React, {useEffect, useState} from "react";
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
                    <Title text="Регистрация"/>
                    <h5>Анкетные данные</h5>
                    <form onSubmit={handleSend}>
                        <div className="form-wrapper">
                            <ul className="form">
                                <li className="form-first">
                                    <ul>
                                        <li>
                                            <label className="label" for="">Ф.И.О</label>
                                            <input name="fullName" className="input-text" type="text"
                                                   placeholder="Введите ваше Ф.И.О"/>
                                        </li>
                                        <li>
                                            <label className="label" for="">Должность</label>
                                            <div>
                                                <div className="category">
                                                    <input name="positionId" list="lorem1"
                                                           placeholder="Выберите ваш должность"
                                                    />
                                                    <img src={iconDropdown} alt=""/>
                                                </div>

                                                <datalist id="lorem1">
                                                    {positions && positions.map((item, i) =>
                                                        <option key={i} value={item.id}>{item.title.uz}</option>
                                                    )}
                                                </datalist>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" for="">Курс</label>
                                            <div>
                                                <div className="category">
                                                    <input onChange={handleChange} name="courseId" list="lorem2"
                                                           placeholder="Выберите ваш курс если учитесь"
                                                    />
                                                    <img src={iconDropdown} alt=""/>
                                                </div>
                                                <datalist id="lorem2">
                                                    <option value="lorem"/>
                                                    <option value="lorem"/>
                                                    <option value="lorem"/>
                                                </datalist>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="form-last">
                                    <ul>
                                        <li>
                                            <label className="label" for="">Кафедра</label>
                                            <div>
                                                <div className="category">
                                                    <input onChange={handleChange} name="sectionId" list="lorem3"
                                                           placeholder="Выберите кафедру"
                                                    />
                                                    <img src={iconDropdown} alt=""/>
                                                </div>
                                                <datalist id="lorem3">
                                                    <option value="lorem"/>
                                                    <option value="lorem"/>
                                                    <option value="lorem"/>
                                                </datalist>
                                            </div>
                                        </li>
                                        <li>
                                            <label className="label" for="">Телефон</label>
                                            <input onChange={handleChange} name="phoneNumber" className="input-text"
                                                   type="text"
                                                   placeholder="+998 (__) ___-__-__"/>
                                        </li>
                                        <li>
                                            <label className="label" for="">Почта</label>
                                            <input onChange={handleChange} name="email" className="input-text"
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
