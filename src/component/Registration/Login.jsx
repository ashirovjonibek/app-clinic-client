import React, {useState} from "react";
import ButtonDefault from "../ButtonDefault";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";
import axios from "axios";
import {STORAGE_NAME} from "../../utils/constant";
import {withRouter} from 'react-router-dom';

const Login = (props) => {
    const {history} = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault()

        console.log(phoneNumber)
        console.log(password)
        if (phoneNumber != undefined && password != undefined) {
            axios.post("/api/auth/login", {phoneNumber, password})
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem(STORAGE_NAME, res.data.tokenType + ' ' + res.data.tokenBody);
                        history.push("/personalAccountListener")
                    }
                })
        }
    }

    const changeLogin = (e) => {
        setPhoneNumber(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    return (

        <div className="login container-fluit">
            <div className="container">
                <div className="login-wrapper">
                    <Title text="Вход в личный кабинет"/>
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <ul>
                                <li>
                                    <div className="first-label">
                                        <label className="label" for="phoneNumber">Телефон</label>
                                    </div>
                                    <input className="input-text" id="phoneNumber" onChange={changeLogin} type="text"

                                           placeholder="+998 (__) ___-__-__"/>


                                </li>
                                <li>
                                    <div className="last-label">
                                        <label className="label" for="password">Пароль</label>
                                    </div>
                                    <input className="input-text" id="password" onChange={changePassword} type="text"
                                           placeholder="Пароль"/>
                                </li>
                                <li>
                                    <button type="submit" className="btn-default">Войти</button>
                                </li>
                                <div className="form-link">
                                    <div className="link">
                                        <a href="">Забыли пароль?</a>
                                    </div>
                                    <div className="link">
                                        <a href="">Еще нет аккаунта</a>
                                    </div>
                                </div>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
