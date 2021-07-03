import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {STORAGE_NAME} from "../../utils/constant";


const Enter = () => {
    const logOut = () => {
        localStorage.removeItem(STORAGE_NAME);
    };


    return (
        <div className="enter">
            <div className="btn-default">Войти</div>
            <div className="enter-content">
                <ul>
                    <li>
                        <Link to="/auth/login">Логинь</Link>
                    </li>
                    <li>
                        <Link to="/auth/registrationApplicant">Заявитель</Link>
                    </li>
                    <li>
                        <Link to="/auth/registrationListener">Слушатель</Link>
                    </li>
                    <li>
                        <Link onClick={logOut} to="/">Выйти</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Enter;
