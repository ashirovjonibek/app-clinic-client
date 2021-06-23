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
        e.preventDefault();
        if (phoneNumber != undefined && password != undefined) {
            axios.post("/api/auth/login", {phoneNumber, password})
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem(STORAGE_NAME, res.data.tokenType + ' ' + res.data.tokenBody);
                        history.push("/personalAccountListnear")
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

        <div className="desctop4 container-fluit">
            <div className="container">
                <div className="desctop4-wrapper">
                    <Title text="Вход в личный кабинет"/>
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <ul>
                                <li>
                                    <div className="first-label">
                                        <label className="label" for="phoneNumber">Логин</label>
                                    </div>
                                    <input className="input-text" id="phoneNumber" onChange={changeLogin} type="text"
                                           placeholder="Логин (email)"/>

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
                                <li className="form-link">
                                    <a href="">Забыли пароль?</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Login);
