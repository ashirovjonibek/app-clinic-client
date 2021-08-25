import React from "react";
import iconAdress from "../../assets/icon/icon-adress.svg";
import iconEmail from "../../assets/icon/icon-email.svg";
import iconContact from "../../assets/icon/icon-contact.svg";
import {withTranslation} from "react-i18next";

const NavTop = ({t}) => {
    return (
        <div className="nav-top container-fluit">
            <div className="container">
                <ul>
                    <li>
                        <a href="/#" className="adress">
                            <img width="18px" src={iconAdress} alt="" />
                            <p>{t("100047, Tashkent, Mirabad district, st. Shakhrisabz, 42")}.</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:info@proacademy.uz" className="email">
                            <img width="22px" src={iconEmail} alt="" />
                            <p>info@proacademy.uz</p>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+998 (71) 202-04-96" className="contact-number">
                            <img width="20px" src={iconContact} alt="" />
                            <p>+998 (71) 202-04-96</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default withTranslation()(NavTop);
