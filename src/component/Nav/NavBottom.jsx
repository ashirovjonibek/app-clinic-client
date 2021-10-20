import React from "react";
import {withTranslation} from "react-i18next";

const NavBottom = ({t}) => {
    return (
        <nav className="nav-bottom container-fluit">
            <div className="container">
                <ul>
                    <li>
                        <a href={"#what-clinic"}>{t("What is clinic")}</a>
                    </li>
                    <li>
                        <a href={"#cel-clinic"}>{t("Goal of the clinic")}</a>
                    </li>
                    <li>
                        <a href={"#purpose-clinic"}>{t("Purpose of the clinic")}</a>
                    </li>
                    <li>
                        <a href={"#popular-clinic"}>{t("Popular questions")}</a>
                    </li>
                    <li>
                        <a href={"#legal-clinic"}>{t("Regulatory base")}</a>
                    </li>
                    <li>
                        <a href={"#home-useful-links"}>{t("Useful links")}</a>
                    </li>
                    <li>
                        <a href={"#adres-procuratura1"}>{t("Addresses prosecutors")}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default withTranslation()(NavBottom);
