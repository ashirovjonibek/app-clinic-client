
import React from 'react';
import iconAdreesLight from "../../assets/icon/footer/icon-adress-light.svg";
import iconEmailLight from "../../assets/icon/footer/icon-email-light.svg";
import iconContactLight from "../../assets/icon/footer/icon-contact-light.svg";
import iconFacebook from "../../assets/icon/footer/icon-facebook.svg";
import iconInstagram from "../../assets/icon/footer/icon-instagram.svg";
import iconTwitter from "../../assets/icon/footer/icon-twitter.svg";
import iconTelegram from "../../assets/icon/footer/icon-telegram.svg";

const Footer = 
() => {
    return (
        <div className="footer container-fluit">
            <div className="container">
                <div className="footer-first">
                    <div className="footer-contacts">
                        <h4>Контакты</h4>
                        <div className="sub-title-line"></div>
                        <ul>
                            <li>
                                <a href="" className="adress">
                                    <div className="img">
                                        <img width="18px" src={iconAdreesLight} alt="" />
                                    </div>
                                    <div style={{ width: '80%' }}>
                                        100047, г.Ташкент, Мирабадский район, ул. Шахрисабз, д.42.
                  </div>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:" className="email">
                                    <div className="img">
                                        <img width="22px" src={iconEmailLight} alt="" />
                                    </div>
                                    <p>info@proacademy.uz</p>
                                </a>
                            </li>
                            <li>
                                <a href="tel:" className="contact-number">
                                    <div className="img">
                                        <img width="20px" src={iconContactLight} alt="" />
                                    </div>
                                    <p>+998 (71) 202-04-96</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-navigation">
                        <h4>Навигация по сайту</h4>
                        <div className="sub-title-line"></div>
                        <ul>
                            <li>
                                <a href="" className="adress">
                                    Что такое клиника
                                </a>
                            </li>
                            <li>
                                <a href="" className="email">
                                    Цель клиники
                                </a>
                            </li>
                            <li>
                                <a href="" className="contact-number">
                                    Предназначение клиники
                                </a>
                            </li>
                            <li>
                                <a href="" className="adress">
                                    Популярные вопросы
                                </a>
                            </li>
                            <li>
                                <a href="" className="adress">
                                    Нормативно-правовая база
                                </a>
                            </li>
                            <li>
                                <a href="" className="email">
                                    Полезные ссылки
                                </a>
                            </li>
                            <li>
                                <a href="" className="contact-number">
                                    Адреса прокуратур
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-cotsial">
                        <h4>Мы в социальных сетях</h4>
                        <div className="sub-title-line"></div>
                        <ul>
                            <li>
                                <a href="">
                                    <img src={iconFacebook} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={iconInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={iconTwitter} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={iconTelegram} alt="" />
                                </a>
                            </li>
                        </ul>
                        <form action="">
                            <input type="email" placeholder="Адрес электронной почты" />
                            <button>Подписаться</button>
                        </form>
                    </div>
                </div>
                <p className="about">© 2021 Академия Генеральной прокуратуры
                        Республики Узбекистан. Все права защищены.</p>
            </div>
        </div>
    );
}

export default Footer;

