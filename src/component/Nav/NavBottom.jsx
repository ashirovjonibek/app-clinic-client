import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from 'react-router-dom'
import {blue, red} from "@material-ui/core/colors";

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
                        <Link style={
                            {
                                color:"white",
                                backgroundColor:red[400],
                                padding:"8px 10px",
                                fontSize:"20px",
                                borderRadius:"12px"
                            }
                        } to={
                            {
                                pathname:'/applicantAppeal',
                                state:{
                                    to:"home"
                                }
                            }
                        }>{t("Appeals send")}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default withTranslation()(NavBottom);
