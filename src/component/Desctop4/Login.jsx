import React from "react";
import ButtonDefault from "../ButtonDefault";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";

const Login = () => {
    return (

        <div className="desctop4 container-fluit" >
            <div className="container" >
                <div className="desctop4-wrapper">
                    <Title text="Вход в личный кабинет" />
                    <div className="form">
                        <form action="">
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
