import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {STORAGE_NAME} from "../../utils/constant";
import enterImg from '../../assets/img/enter-img.svg'
import {withTranslation} from "react-i18next";


const Enter = ({t}) => {
    const logOut = () => {
        localStorage.removeItem(STORAGE_NAME);
    };


    return (
        <div className="enter" >
            <div className="enter-btn" style={{cursor:"pointer"}}>
                <div className="enter-img">
                    <img src={enterImg} alt="enter img"/>
                </div>
                {t("Login")}
            </div>
            <div className="enter-content" >
                <ul>
                    <li>
                        <Link to="/auth/login">{t("Login")}</Link>
                    </li>
                    <li>
                        <Link to="/auth/registrationApplicant">{t("The applicant")}</Link>
                    </li>
                    <li>
                        <Link to="/auth/registrationListener">{t("Listener")}</Link>
                    </li>
                    <li>
                        <Link onClick={logOut} to="/">{t("Go out")}</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default withTranslation()(Enter);
