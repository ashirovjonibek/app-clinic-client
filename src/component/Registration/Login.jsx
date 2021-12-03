import React, {useState} from "react";
import Title from "../Title";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {withRouter} from 'react-router-dom';
import {toast} from "react-toastify";
import NavCenter from "../Nav/NavCenter";
import NavTop from "../Nav/NavTop";
import {withTranslation} from "react-i18next";
import {Person} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE} from "../../redux/me/actionType";
import meReducer from "../../redux/me/reducer";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {TextField} from "@material-ui/core";
import {allRoles} from "../../routes/authRoles";
import Swal from "sweetalert2";
import NavBottom from "../Nav/NavBottom";
import Footer from "../Footer/Footer";
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import InputMask from 'react-input-mask'
import {Button, Col, Form, Input, Row} from "antd";

const Login = (props) => {
    const [form] = Form.useForm();
    const {history, t} = props;
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    const meTools = useSelector(state => state.meReducer);
    const state = useLocation().state;
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);
    console.log(state)
    // if (app.currentUser.roles.filter(i =>
    //     i.name === 'ROLE_ADMIN'
    // ).length === 0) {
    //     router.push("/event")
    // }
    const handleLogin = (values) => {
        console.log(values);
        if (values) {
            axios({
                url: API_URL + "/auth/login",
                method: 'POST',
                data: values
            }).then(res => {
                if (res.status === 200) {
                    localStorage.setItem(STORAGE_NAME, res.data.tokenType + ' ' + res.data.tokenBody);
                    axios.defaults.headers.Authorization = res.data.tokenType + " " + res.data.tokenBody;
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
                                }).then(() => {
                                    dispatch({type: ME_DATA, data: res?.data?.object})
                                    dispatch({type: ME_USERNAME, data: res?.data?.object?.username})
                                    dispatch({type: ME_EMAIL, data: res?.data?.object?.email})
                                    dispatch({type: ME_FULL_NAME, data: res?.data?.object?.fullName})
                                    dispatch({type: ROLE, data: allRoles[res?.data?.object?.roles[0].authority]})
                                    let a = allRoles[res?.data?.object?.roles[0].authority]
                                    history.push(a[1])
                                });
                            } else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: t("Login or password error. Please try again") + "!",
                                    showConfirmButton: false,
                                    timer: 1000
                                }).then(() => {
                                    history.push("/auth/login")
                                });
                            }
                        }
                    }).catch((e) => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: t("Login or password error. Please try again") + "!",
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {
                            history.push("/auth/login")
                        });
                    })
                }
            }).catch(e => {
                console.log(e);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: props.t("Password or login is incorrect") + "!",
                    showConfirmButton: false,
                    timer: 2000
                }).then(() => {
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
        <div>
            <div className="nav">
                <NavTop/>
                <NavCenter/>
                {/*<NavBottom/>*/}
            </div>
            <div className="login container-fluit12">
                <div style={theme} className="container12">
                    <div className="login-wrapper">

                        <Title text={<span style={{cursor: "pointer"}} onClick={() => {
                            history.push("/")
                        }}><KeyboardBackspaceIcon titleAccess="Bosh sahifaga"
                                                  style={{marginRight: "17px", cursor: "pointer"}}/>{

                            props.t("Login to your personal account")}
                        </span>}/>
                        <div className="form">


                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={handleLogin}
                            >
                                <Row>
                                    <Col xs={24} sm={24} md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}}>
                                        <Form.Item
                                            label={<span style={{fontWeight: 600}}>{t("Phone number or email")}</span>}
                                            name="phoneNumber"
                                        >
                                            <Input placeholder={t("Phone number or email")}/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}}>
                                        <Form.Item
                                            label={<span style={{fontWeight: 600}}>{t("Password")}</span>}
                                            name="password"
                                        >
                                            <Input.Password autoComplete="new-password"
                                                            placeholder={t("Password")}/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={{span: 18, offset: 3}} lg={{span: 18, offset: 3}}>
                                        <Form.Item>
                                            <Button style={{float: "right"}} type="primary"
                                                    htmlType="submit">{props.t("Login")}</Button>
                                        </Form.Item>
                                    </Col>
                                    <Col className="text-center" xs={24} sm={24} md={{span: 18, offset: 3}}
                                         lg={{span: 18, offset: 3}}>
                                        <Link to="/auth/registrationApplicant">{props.t("Register as applicant")}</Link>
                                    </Col>
                                    <Col className="text-center" xs={24} sm={24} md={{span: 18, offset: 3}}
                                         lg={{span: 18, offset: 3}}>
                                        <Link to="/auth/registrationListener">{props.t("Register as listener")}</Link>
                                    </Col>
                                    <Col className="text-center" xs={24} sm={24} md={{span: 18, offset: 3}}
                                         lg={{span: 18, offset: 3}}>
                                        <Link to="/requestNewPassword">{props.t("Forgot your password")}?</Link>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(withRouter(Login));
