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
                                        <Label text="Логин" />
                                    </div>

                                    <InputText text="Логин (email)" />
                                </li>
                                <li>
                                    <div className="last-label">
                                        <Label text="Пароль" />
                                    </div>
                                    <InputText text="Пароль" />
                                </li>
                                <li>
                                    <ButtonDefault type="submit" text="Войти" />
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
