import React from "react";
import {withTranslation} from "react-i18next";

const NavBottom = ({t}) => {
    return (
        <nav className="nav-bottom container-fluit">
            <div className="container">
                <ul>
                    <li>
                        <a href="#what-clinic">{t("What is clinic")}</a>
                    </li>
                    <li>
                        <a href="#cel-clinic">{t("Target clinics")}</a>
                    </li>
                    <li>
                        <a href="#purpose-clinic">{t("Purpose clinics")}</a>
                    </li>
                    <li>
                        <a href="#popular-clinic">{t("Popular questions")}</a>
                    </li>
                    <li>
                        <a href="#legal-clinic">{t("Regulatory base")}</a>
                    </li>
                    <li>
                        <a href="#home-slider">{t("Useful links")}</a>
                    </li>
                    <li>
                        <a href="#adres-procuratura">{t("Addresses prosecutors")}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default withTranslation()(NavBottom);
