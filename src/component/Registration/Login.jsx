import React, { useState } from "react";
import Title from "../Title";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
import NavCenter from "../Nav/NavCenter";
import NavTop from "../Nav/NavTop";
import {withTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE} from "../../redux/me/actionType";
import meReducer from "../../redux/me/reducer";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {allRoles} from "../../routes/authRoles";
import Swal from "sweetalert2";
import NavBottom from "../Nav/NavBottom";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom'

const Login = (props) => {
    const { history, t } = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    const meTools=useSelector(state => state.meReducer);
    const dispatch=useDispatch();
    const theme=useSelector(state => state.theme);
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
                    axios.defaults.headers.Authorization=res.data.tokenType+" "+res.data.tokenBody;
                    axios({
                        url: API_URL + '/auth/me',
                        method: 'GET'
                    }).then(res => {
                        console.log(res);
                        if (!res.data.success) {
                            localStorage.removeItem(STORAGE_NAME);
                            delete axios.defaults.headers.Authorization;
                            history.push('/auth/login');
                        } else {
                            if (res.data.object != null) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: t("Logged in to the account"),
                                    showConfirmButton: false,
                                    timer: 1000
                                }).then(()=>{
                                    dispatch({type:ME_DATA,data:res?.data?.object})
                                    dispatch({type:ME_USERNAME,data:res?.data?.object?.username})
                                    dispatch({type:ME_EMAIL,data:res?.data?.object?.email})
                                    dispatch({type:ME_FULL_NAME,data:res?.data?.object?.fullName})
                                    dispatch({type:ROLE,data:allRoles[res?.data?.object?.roles[0].authority]})
                                    let a=allRoles[res?.data?.object?.roles[0].authority]
                                    history.push(a[1])
                                });
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: t("Login or password error. Please try again")+"!",
                                    showConfirmButton: false,
                                    timer: 1000
                                }).then(()=>{
                                    history.push("/auth/login")
                                });
                            }
                        }
                    }).catch((e)=>{
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: t("Login or password error. Please try again")+"!",
                            showConfirmButton: false,
                            timer: 2000
                        }).then(()=>{
                            history.push("/auth/login")
                        });
                    })
                }
            }).catch(e => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: e.response.data.message && e.response.data.message ?
                        props.t("User not accepted. Please contact the admin")+"!":"?",
                    showConfirmButton: false,
                    timer: 2000
                }).then(()=>{
                    history.push("/auth/login")
                });
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
        <div >
            <div className="nav" >
                <NavTop />
                <NavCenter />
                {/*<NavBottom/>*/}
            </div>
            <div className="login container-fluit">
                <div style={theme} className="container">
                    <div className="login-wrapper">

                        <Title  text={<span style={{cursor:"pointer"}} onClick={()=>{
                            history.push("/")
                        }}><KeyboardBackspaceIcon titleAccess="Bosh sahifaga"  style={{marginRight:"17px",cursor:"pointer"}}/>{

                            props.t("Login to your personal account")}
                        </span> }/>
                        <div className="form">
                            <form onSubmit={handleLogin}>
                                <ul>
                                    <li>
                                        <div className="first-label">
                                            <label className="label" htmlFor="phoneNumber">{props.t("Phone number")}</label>
                                        </div>
                                        <input required={true} className="input-text" id="phoneNumber" onChange={changeLogin} type="text"
                                            placeholder="+998 (__) ___-__-__" />

                                    </li>
                                    <li>
                                        <div className="last-label">
                                            <label className="label" htmlFor="password">{props.t("Password")}</label>
                                        </div>
                                        <input required={true} className="input-text" id="password" onChange={changePassword} type="text"
                                            placeholder={props.t("Password")} />
                                    </li>
                                    <li>
                                        <button type="submit" className="btn-default">{props.t("Login")}</button>
                                    </li>
                                    <div className="form-link">
                                        <div className="link">
                                            <Link to="/auth/registrationApplicant">{props.t("Regiter as applicant")}</Link>
                                        </div>
                                        <div className="link">
                                            <Link to="/auth/registrationListener">{props.t("Regiter as listener")}</Link>
                                        </div>
                                    </div>
                                    <div className="form-link">
                                        <div className="link">
                                            <Link to="/requestNewPassword">{props.t("Forgot your password")}?</Link>
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
};

export default withTranslation()(withRouter(Login));
