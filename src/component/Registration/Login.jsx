import React, { useState } from "react";
import Title from "../Title";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
import NavCenter from "../Nav/NavCenter";
import NavTop from "../Nav/NavTop";

const Login = (props) => {
    const { history } = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    // if (app.currentUser.roles.filter(i =>
    //     i.name === 'ROLE_ADMIN'
    // ).length === 0) {
    //     router.push("/event")
    // }
    const handleLogin = (e) => {
        e.preventDefault()
        if (phoneNumber !== undefined && password !== undefined) {
            axios({
                url: API_URL + "/auth/login",
                method: 'POST',
                data: {
                    phoneNumber, password
                }
            }).then(res => {
                if (res.status === 200) {
                    localStorage.setItem(STORAGE_NAME, res.data.tokenType + ' ' + res.data.tokenBody);
                    // history.push("/personalAccountListener")
                    const token = localStorage.getItem(STORAGE_NAME);
                    axios({
                        url: API_URL + '/auth/me',
                        method: 'GET',
                        headers: {
                            'Authorization': token
                        }
                    }).then(res => {
                        console.log(res)
                        if (!res.data.success) {
                            localStorage.removeItem(STORAGE_NAME);
                            history.push('/auth/login');
                        } else {
                            if (res.data.object != null) {
                                setCurrentUser(res.data.object);
                                if (res.data.object.authorities.filter(i => i.name === 'ADMIN').length > 0) {
                                    history.push('/admin')
                                } else if (res.data.object.authorities.filter(i => i.name === 'BOSS').length > 0) {
                                    history.push('/personalAccountSupervisor')
                                } else if (res.data.object.authorities.filter(i => i.name === 'MODERATOR').length > 0) {
                                    history.push('/personalAccountModerator')
                                } else if (res.data.object.authorities.filter(i => i.name === 'USER').length > 0) {
                                    history.push('/personalAccountApplicant')
                                } else if (res.data.object.authorities.filter(i => i.name === 'LISTENER').length > 0) {
                                    history.push('/personalAccountListener')
                                }
                            } else {
                                history.push('/auth/login')
                            }
                        }
                    })
                }
            }).catch(error => {
                toast.error("User Not found !")
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
        <div>
            <div className="nav" >
                <NavTop />
                <NavCenter />
            </div>
            <div className="login container-fluit">
                <div className="container">
                    <div className="login-wrapper">
                        <Title text="Вход в личный кабинет" />
                        <div className="form">
                            <form onSubmit={handleLogin}>
                                <ul>
                                    <li>
                                        <div className="first-label">
                                            <label className="label" for="phoneNumber">Телефон</label>
                                        </div>
                                        <input className="input-text" id="phoneNumber" onChange={changeLogin} type="text"
                                            placeholder="+998 (__) ___-__-__" />

                                    </li>
                                    <li>
                                        <div className="last-label">
                                            <label className="label" for="password">Пароль</label>
                                        </div>
                                        <input className="input-text" id="password" onChange={changePassword} type="text"
                                            placeholder="Пароль" />
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
        </div>
    );
}

export default withRouter(Login);
