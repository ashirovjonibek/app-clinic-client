import React from "react";
import ButtonDefault from "../ButtonDefault";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";

const Desctop8 = () => {
    return (
        <div className="desctop8 container-fluit" >
            <div className="container" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    <h3>Придумайте теперь новый пароль</h3>
                    <form action="">
                        <ul>
                            <li style={{ marginRight: '-50px' }}>
                                <Label text="Новый пароль" />
                                <InputText text="Пароль" />
                            </li>
                            <li>
                                <Label text="Повторите пароль" />
                                <InputText text="Пароль" />
                            </li>
                            <li>
                                <ButtonDefault type="submit" text="Подтвердить" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Desctop8;
