import React, {useState} from "react";
import Title from "../Title";
import {useLocation} from 'react-router-dom'
import {FormHelperText} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import Swal from 'sweetalert2'
import {useHistory, Link} from 'react-router-dom'
import {withTranslation} from "react-i18next";
import "../../assets/scss/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../../assets/css/table.css'

const NewPassword = ({t}) => {
    const state = useLocation().state;
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [token, setToken] = useState("");

    const onResetPassword = () => {
        Swal.fire({
            title: t("Save changes") + "?",
            icon: 'warning',
            confirmButtonText: t("Yes"),
            confirmButtonColor: green[400],
            showCancelButton: true,
            cancelButtonText: t("No")
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    method: 'post',
                    url: API_URL + '/auth/savePassword',
                    data: {
                        newPassword: password,
                        token: token
                    }
                }).then((res) => {
                    Swal.fire(t("Saved") + "!", "", 'success').then((conf) => {
                        history.push('/auth/login')
                    })
                }).catch((err) => {
                    Swal.fire(t("An error occurred") + "!!!\n" + err.response?.data?.message, "", 'error').then((conf) => {
                    })
                })
            }
        })
    };

    return (
        <div className="newpassword container-fluit12">
            <div className="container12">
                <Title text="Восстановление аккаунта"/>
                <div className="form">
                    <FormHelperText style={{fontSize: "20px", color: green[500]}}>{state?.message}</FormHelperText>
                    <h3>Придумайте теперь новый пароль</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <ul>
                            <li>
                                <label className="label" htmlFor="">Token</label>
                                <input onChange={(e) => setToken(e.target.value)} required autoComplete="new-password"
                                       className="input-text" type="text" placeholder="Token"/>
                            </li>
                            <li>
                                <label className="label" htmlFor="">Новый пароль</label>
                                <input onChange={(e) => setPassword(e.target.value)} required
                                       autoComplete="new-password" className="input-text" type="password"
                                       placeholder="Пароль"/>
                            </li>
                            <li>
                                <label className="label" htmlFor="">Повторите пароль</label>
                                <input onChange={(e) => setRePassword(e.target.value)} required
                                       autoComplete="new-password" className="input-text" type="password"
                                       placeholder="Пароль"/>
                            </li>
                            <li>
                                <button onClick={onResetPassword} disabled={password !== rePassword}
                                        className="btn-default">Подтвердить
                                </button>
                            </li>
                            <li>
                                <Link to="/requestNewPassword">Qayta yuborish uchun bu yerga bosing!!!</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(NewPassword);
