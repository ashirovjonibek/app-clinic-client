import React from 'react';
import iconAdreesLight from "../../assets/icon/footer/icon-adress-light.svg";
import iconEmailLight from "../../assets/icon/footer/icon-email-light.svg";
import iconContactLight from "../../assets/icon/footer/icon-contact-light.svg";
import iconFacebook from "../../assets/icon/footer/icon-facebook.svg";
import iconInstagram from "../../assets/icon/footer/icon-instagram.svg";
import iconTwitter from "../../assets/icon/footer/icon-twitter.svg";
import iconTelegram from "../../assets/icon/footer/icon-telegram.svg";
import {withTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import logoNapa from "../../assets/img/napa.svg";

const Footer = ({t}) => {
    let date = new Date();
    const theme = useSelector(state => state.theme);

    return (
        <div style={theme} className="footer">
            <div className="container12">
                <div className="footer-first d-flex flex-wrap justify-content-center">
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
                                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.0329210425926!2d69.28706118608989!3d41.3074374422724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad54d47a56f%3A0x87547e5307b77db5!2z0JPQtdC90LXRgNCw0LvRjNC90LDRjyDQv9GA0L7QutGD0YDQsNGC0YPRgNCwINCg0LXRgdC_0YPQsdC70LjQutC4INCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1624433459932!5m2!1sru!2s">
                                            {t("100047, Tashkent, Mirabad district, st. Shakhrisabz, 42")}
                                        </a>

                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@proacademy.uz" className="email">
                                    <div className="img">
                                        <img width="22px" src={iconEmailLight} alt=""/>
                                    </div>
                                    <p>info@proacademy.uz</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+998712020496" className="contact-number">
                                    <div className="img">
                                        <img width="20px" src={iconContactLight} alt=""/>
                                    </div>
                                    <p>+998 (71) 202-04-96</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/*<div className="footer-navigation">*/}
                    {/*    <h4>{t("Site navigation")}</h4>*/}
                    {/*    <div className="sub-title-line"/>*/}
                    {/*    /!*<ul>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="adress">*!/*/}
                    {/*    /!*            {t("What is clinic")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="email">*!/*/}
                    {/*    /!*            {t("Goal of the clinic")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="contact-number">*!/*/}
                    {/*    /!*            {t("Purpose of the clinic")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="adress">*!/*/}
                    {/*    /!*            {t("Popular questions")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="adress">*!/*/}
                    {/*    /!*            {t("Regulatory base")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="email">*!/*/}
                    {/*    /!*            {t("Useful links")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    /!*    <li>*!/*/}
                    {/*    /!*        <a href="/#" className="contact-number">*!/*/}
                    {/*    /!*            {t("Addresses prosecutors")}*!/*/}
                    {/*    /!*        </a>*!/*/}
                    {/*    /!*    </li>*!/*/}
                    {/*    */}
                    {/*    /!*</ul>*!/*/}
                    {/*</div>*/}
                    <div className="footer-cotsial">
                        <h4>{t("We are in social networks")}</h4>
                        <div className="sub-title-line"/>
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/ProsecutorAcademy">
                                    <img src={iconFacebook} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/proacademyuz/">
                                    <img src={iconInstagram} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/ProAcademyUz">
                                    <img src={iconTwitter} alt=""/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://t.me/ProsecutorAcademy">
                                    <img src={iconTelegram} alt=""/>
                                </a>
                            </li>
                        </ul>
                        {/* <form action="/#">
                                    <input type="email" placeholder={t("Email")}/>
                                    <button>{t("Subscribe")}</button>
                                </form> */}
                    </div>
                </div>
                <p className="about">© {date.getFullYear()} {t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan. All rights reserved.")}</p>
                <p className="about">
                    <a style={{color: "white"}} target="_blank" href="https://www.napaautomotive.uz/ru">
                        <img src={logoNapa} alt=""/>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default withTranslation()(Footer);

