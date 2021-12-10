import React from "react";
import iconAdress from "../../assets/icon/icon-adress.svg";
import iconEmail from "../../assets/icon/icon-email.svg";
import iconContact from "../../assets/icon/icon-contact.svg";
import {withTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {LocationOn,Mail, Phone} from "@material-ui/icons";

const NavTop = ({t}) => {
    const theme = useSelector(state => state.theme);
    return (
        <div style={theme} className="nav-top container-fluit12">
            <div className="container12">
                <ul style={{width: "100% !important", padding: "0 !important"}}>
                    <li style={{display: "inline-block"}}>
                        <a target="_blank" href="https://www.google.com/maps/place/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D1%80%D0%BE%D0%BA%D1%83%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0+%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.307783,69.287713,17z/data=!4m5!3m4!1s0x0:0x87547e5307b77db5!8m2!3d41.3077454!4d69.2877751?hl=ru" className="adress">
                            <p className="d-flex align-items-center"><LocationOn/>{t("100047, Tashkent, Mirabad district, st. Shakhrisabz, 42")}.</p>
                        </a>
                    </li>
                    <li style={{display: "inline-block"}}>
                        <a href="mailto:info@proacademy.uz" className="email">
                            <p className="d-flex align-items-center"><Mail/> info@proacademy.uz</p>
                        </a>
                    </li>
                    <li style={{display: "inline-block"}}>
                        <a href="tel:+998 (71) 202-04-96" className="contact-number">
                            <p className="d-flex align-items-center"><Phone/> +998 (71) 202-04-96</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default withTranslation()(NavTop);
