import React from "react";
import { API_URL } from "../../utils/Api";
import ButtonDefault from "../ButtonDefault";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";
import axios from "axios";

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("ishladi")
        // axios.post("http://192.168.111.136:8080/api/auth/login", { "phoneNumber": "+998919687077", "password": "1" })
        //     .then(res => console.log(res))
        axios({
            url: "http://192.168.111.136:8080/api/auth/login",
            method: "POST",
            data: {
                "phoneNumber": "+998919687077",
                "password": "1"
            }
        }).then(res => console.log(res))
    }

    return (

        <div className="desctop4 container-fluit" >
            <div className="container" >
                <div className="desctop4-wrapper">
                    <Title text="Вход в личный кабинет" />
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <ul>
                                <li>
                                    <div className="first-label">
                                        <label className="label" for="">Логин</label>
                                    </div>
                                    <input className="input-text" type="text" placeholder="Логин (email)" />
                                  
                                </li>
                                <li>
                                    <div className="last-label">
                                        <label className="label" for="">Пароль</label>
                                    </div>
                                    <input className="input-text" type="text" placeholder="Пароль" />
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

export default Login;
