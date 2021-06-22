import React, { useState } from "react";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import ButtonDefault from "../ButtonDefault";
import NavLanguage from "./NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const NavCenter = () => {
    const [sitebar, setSitebar] = useState(false);

    return (

        <div className="nav-center container-fluit">
            <div className="container">
                <div className="navbar">
                    <div className="menu-icon" >
                        <MenuIcon
                            fontSize={'large'}
                            onClick={() => setSitebar(!sitebar)}
                        />
                    </div>
                    <div className="header-logo">
                        <a href="#">
                            <div className="logo-left">
                                <img src={iconLogo} alt="logo" />
                            </div>
                            <div className="logo-right">
                                <div>
                                    <span><strong>Юридическая клиника</strong></span><br />
                                    Академии Генеральной прокуратуры<br />
                                    Республики Узбекистан.
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="header-right-desctop">
                            <form role="search" method="get" action="#" className="search-form">
                                <input type="" placeholder="Поиск..." />
                                <button type=""><img src={iconSearch} alt="search-icon" /></button>
                            </form>
                            <NavLanguage />
                            <div className="glas">
                                <img src={iconGlass} alt="" />
                            </div>
                        </div>
                        <ButtonDefault type="submit" text="Войти" />
                    </div>
                </div>
            </div>
            <div className="desctop-navigation" id={sitebar ? "show-navigation" : ""}>
                <div className="container">
                    <div className="desctop-navigation-body">
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                                <NavLanguage />
                                <div className="glas">
                                    <img src={iconGlass} alt="" />
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="">Что такое клиника</a>
                                </li>
                                <li>
                                    <a href="">Цель клиники</a>
                                </li>
                                <li>
                                    <a href="">Предназначение клиники</a>
                                </li>
                                <li>
                                    <a href="">Популярные вопросы</a>
                                </li>
                                <li>
                                    <a href="">Нормативно-правовая база</a>
                                </li>
                                <li>
                                    <a href="">Полезные ссылки</a>
                                </li>
                                <li>
                                    <a href="">Адреса прокуратур</a>
                                </li>
                            </ul>
                        </div>
                        <div className="icon-disable">
                            <CloseIcon
                                fontSize={'large'}
                                style={{ color: 'white' }}
                                onClick={() => setSitebar(!sitebar)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NavCenter;
