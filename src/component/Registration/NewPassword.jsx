import React from "react";
import ButtonDefault from "../ButtonDefault";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";

const NewPassword = () => {
    return (
        <div className="desctop8 container-fluit" >
            <div className="container" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    <h3>Придумайте теперь новый пароль</h3>
                    <form action="">
                        <ul>
                            <li style={{ marginRight: '-50px' }}>
                                <label className="label" for="">Новый пароль</label>
                                <input className="input-text" type="text" placeholder="Пароль" />
                            </li>
                            <li>
                                <label className="label" for="">Повторите пароль</label>
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
