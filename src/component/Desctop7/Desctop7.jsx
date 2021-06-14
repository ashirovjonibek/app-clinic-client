import React from "react";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import Title from "../Title";

const Login = () => {
    return (
        <div className="desctop7 container-fluit" >
            <div className="container" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    <h4>Мы отправили 6ти значный код<br /> на номер  ** *** 89 99</h4>
                    <form action="">
                        <div className="form-password">
                            <div className="label">
                                <Label text="Введите код" />
                            </div>
                            <input type="password" />
                        </div>
                        <ButtonDefault type="submit" text="Отправить" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
