import React, { useState } from "react";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "./NavLanguage";
import CloseIcon from '@material-ui/icons/Close';
import Enter from "./Enter";
import {withTranslation} from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_THEME} from "../../redux/me/actionType";

const NavCenter = ({t}) => {
    const [sitebar, setSitebar] = useState(false);
    const theme=useSelector(state => state.theme);
    const dispatch=useDispatch();
    console.log(theme);
    return (

        <div style={theme} className="nav-center container-fluit">
            <div className="container">
                <div className="navbar">
                    <div className="menu-icon" >
                        <MenuIcon
                            fontSize={'large'}
                            onClick={() => setSitebar(!sitebar)}
                        />
                    </div>
                    <div className="header-logo">
                        <a href="/#">
                            <div className="logo-left">
                                <img src={iconLogo} alt="logo" />
                            </div>
                            <div className="logo-right">
                                <div>
                                    <span><strong>{t("Legal clinic")}</strong></span><br />
                                    <p style={{maxWidth:"350px"}}>{t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="header-right-desctop">
                            <form role="search" method="get" action="#" className="search-form">
                                <input type="" placeholder={t("Search")+"..."} />
                                <button type=""><img src={iconSearch} alt="search-icon" /></button>
                            </form>
                            <NavLanguage />
                            <div onClick={()=>{
                                dispatch({type:CHANGE_THEME,data:theme.filter?"":"grayscale(100%)"})
                            }} style={{cursor:"pointer"}} className="glas">
                                <img src={iconGlass} alt="" />
                            </div>
                        </div>
                        <Enter />
                    </div>
                </div>
            </div>
            <div className="desctop-navigation" id={sitebar ? "show-navigation" : ""}>
                <div className="container">
                    <div className="desctop-navigation-body">
                        <div>
                            <div className="mobil-language">
                                <NavLanguage />
                                <div className="glas">
                                    <img src={iconGlass} alt="" />
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <a href="/#what-clinic-to-scroll">{t("What is clinic")}</a>
                                </li>
                                <li>
                                    <a href="/#cel-clinic">{t("Goal of the clinic")}</a>
                                </li>
                                <li>
                                    <a href="/#statistic-clinic">{t("Purpose of the clinic")}</a>
                                </li>
                                <li>
                                    <a href="/#popular-clinic-to-scroll">{t("Popular questions")}</a>
                                </li>
                                <li>
                                    <a href="/#legal-clinic-to-scroll">{t("Regulatory base")}</a>
                                </li>
                                <li>
                                    <a href="/#home-useful-links-to-scroll">{t("Useful links")}</a>
                                </li>
                                <li>
                                    <a href="/#adres-procuratura">{t("Addresses prosecutors")}</a>
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

export default withTranslation()(NavCenter);
