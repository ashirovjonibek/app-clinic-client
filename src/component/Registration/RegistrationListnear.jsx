import React, { useState } from "react";
import iconDropdown from "../../assets/icon/icon-down.svg";
import Title from "../Title";

function RegistrationListnear(props) {
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [course, setCourse] = useState('');
    // const [category, setCategory] = useState('');
    // const [position, setPosition] = useState('');
    // const [chair, setChair] = useState('');

    // const handleSave = (e) => {
    //     e.preventDefault();
    //     console.log(fullName)
    //     console.log(position)
    //     console.log(course)
    //     console.log(chair)
    //     console.log(phone)
    //     console.log(email)
    //     axios.post("/api/auth/create", { fullName, position, course, chair, phone, email }).then(res => console.log(res))

    // }
    return (
        <div className="registration-listnear container-fluit">
            <div className="container">
                <div className="registration-listnear-wrapper">
                    <Title text="Регистрация" />
                    <h5>Анкетные данные</h5>
                        <form>
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <label className="label" for="">Ф.И.О</label>
                                                <input className="input-text" type="text" placeholder="Введите ваше Ф.И.О" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Должность</label>
                                                <div>
                                                    <div className="category">
                                                        <input list="lorem" name="lorem" placeholder="Выберите ваш должность"
                                                        />
                                                        <img src={iconDropdown} alt="" />
                                                    </div>
                                                    <datalist id="lorem">
                                                        <option value="lorem" />
                                                        <option value="lorem" />
                                                        <option value="lorem" />
                                                    </datalist>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" for="">Курс</label>
                                                <div>
                                                    <div className="category">
                                                        <input list="lorem" name="lorem" placeholder="Выберите ваш курс если учитесь"
                                                        />
                                                        <img src={iconDropdown} alt="" />
                                                    </div>
                                                    <datalist id="lorem">
                                                        <option value="lorem" />
                                                        <option value="lorem" />
                                                        <option value="lorem" />
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
                                                        <input list="lorem" name="lorem" placeholder="Выберите кафедру"
                                                        />
                                                        <img src={iconDropdown} alt="" />
                                                    </div>
                                                    <datalist id="lorem">
                                                        <option value="lorem" />
                                                        <option value="lorem" />
                                                        <option value="lorem" />
                                                    </datalist>
                                                </div>
                                            </li>
                                            <li>
                                                <label className="label" for="">Телефон</label>
                                                <input className="input-text" type="text" placeholder="+998 (__) ___-__-__" />
                                            </li>
                                            <li>
                                                <label className="label" for="">Почта</label>
                                                <input className="input-text" type="text" placeholder="Введите вашу почту" />
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
