import React from "react";
import {withTranslation} from "react-i18next";

const NavBottom = ({t}) => {
    return (
        <nav className="nav-bottom container-fluit">
            <div className="container">
                <ul>
                    <li>
                        <a href={"#what-clinic-to-scroll"}>{t("What is clinic")}</a>
                    </li>
                    <li>
                        <a href={"#cel-clinic"}>{t("Goal of the clinic")}</a>
                    </li>
                    <li>
                        <a href={"#statistic-clinic"}>{t("Purpose of the clinic")}</a>
                    </li>
                    <li>
                        <a href={"#popular-clinic-to-scroll"}>{t("Popular questions")}</a>
                    </li>
                    <li>
                        <a href={"#legal-clinic-to-scroll"}>{t("Regulatory base")}</a>
                    </li>
                    <li>
                        <a href={"#home-useful-links-to-scroll"}>{t("Useful links")}</a>
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
