import React from 'react';
import iconAdreesLight from "../../assets/icon/footer/icon-adress-light.svg";
import iconEmailLight from "../../assets/icon/footer/icon-email-light.svg";
import iconContactLight from "../../assets/icon/footer/icon-contact-light.svg";
import iconFacebook from "../../assets/icon/footer/icon-facebook.svg";
import iconInstagram from "../../assets/icon/footer/icon-instagram.svg";
import iconTwitter from "../../assets/icon/footer/icon-twitter.svg";
import iconTelegram from "../../assets/icon/footer/icon-telegram.svg";
import {withTranslation} from "react-i18next";

const Footer = ({t}) => {
    let date=new Date();

    return (
        <div className="footer container-fluit">
            <div className="container">
                <div className="footer-first">
                    <div className="footer-contacts">
                        <h4>{t("Contacts")}</h4>
                        <div className="sub-title-line"/>
                        <ul>
                            <li>
                                <a href="/#" className="adress">
                                    <div className="img">
                                        <img width="18px" src={iconAdreesLight} alt=""/>
                                    </div>
                                    <div style={{width: '80%'}}>
                                        {t("100047, Tashkent, Mirabad district, st. Shakhrisabz, 42")}
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:" className="email">
                                    <div className="img">
                                        <img width="22px" src={iconEmailLight} alt=""/>
                                    </div>
                                    <p>info@proacademy.uz</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:" className="contact-number">
                                    <div className="img">
                                        <img width="20px" src={iconContactLight} alt=""/>
                                    </div>
                                    <p>+998 (71) 202-04-96</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-navigation">
                        <h4>{t("Site navigation")}</h4>
                        <div className="sub-title-line"/>
                        <ul>
                            <li>
                                <a href="/#" className="adress">
                                    {t("What is clinic")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="email">
                                    {t("Goal of the clinic")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="contact-number">
                                    {t("Purpose of the clinic")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="adress">
                                    {t("Popular questions")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="adress">
                                    {t("Regulatory base")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="email">
                                    {t("Useful links")}
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="contact-number">
                                    {t("Addresses prosecutors")}
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-cotsial">
                        <h4>{t("We are in social networks")}</h4>
                        <div className="sub-title-line"/>
                        <ul>
                            <li>
                                <a href="/#">
                                    <img src={iconFacebook} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src={iconInstagram} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src={iconTwitter} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src={iconTelegram} alt=""/>
                                </a>
                            </li>
                        </ul>
                        <form action="/#">
                            <input type="email" placeholder={t("Email")}/>
                            <button>{t("Subscribe")}</button>
                        </form>
                    </div>
                </div>
                <p className="about">© {date.getFullYear()} {t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan. All rights reserved.")}</p>
            </div>
        </div>
    );
}

export default withTranslation()(Footer);

