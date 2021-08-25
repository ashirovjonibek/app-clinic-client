import React from "react";
import Title from "../Title";

const NewPassword = () => {
    return (
        <div className="newpassword container-fluit" >
            <div className="container" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    <h3>Придумайте теперь новый пароль</h3>
                    <form action="">
                        <ul>
                            <li>
                                <label className="label" htmlFor="">Новый пароль</label>
                                <input className="input-text" type="text" placeholder="Пароль" />
                            </li>
                            <li>
                                <label className="label" htmlFor="">Повторите пароль</label>
                                <input className="input-text" type="text" placeholder="Пароль" />
                            </li>
                            <li>
                                <button type="submit" className="btn-default">Подтвердить</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPassword;
