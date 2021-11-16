import React from "react";
import Title from "../Title";

const ReqoverAccount = () => {
    return (
        <div className="reqover-account container-fluit12" >
            <div className="container12" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    <h4>Мы отправили 6ти значный код<br /> на номер  ** *** 89 99</h4>
                    <form action="">
                        <div className="form-password">
                            <div className="label">
                                <label className="label" htmlFor="" >Введите код</label>
                            </div>
                            <input className="input-password" type="password" />
                        </div>
                        <button type="submit" className="btn-default">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReqoverAccount;
