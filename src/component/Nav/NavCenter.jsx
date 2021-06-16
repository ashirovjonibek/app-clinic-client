import React from "react";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import ButtonDefault from "../ButtonDefault";
import NavLanguage from "./NavLanguage";


const NavCenter = () => {
    return (

        <div className="nav-center container-fluit">
            <div className="container">
                <div className="navbar">
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
                        <form role="search" method="get" action="#" className="search-form">
                            <input type="" placeholder="Поиск..." />
                            <button type=""><img src={iconSearch} alt="search-icon" /></button>
                        </form>
                        <NavLanguage />
                        <div className="glas">
                            <img src={iconGlass} alt="" />
                        </div>
                        <ButtonDefault type="submit" text="Войти" />
                    </div>


                </div>
            </div >
        </div >


    );
}

export default NavCenter;
