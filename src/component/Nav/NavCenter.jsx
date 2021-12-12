import React, {useState} from "react";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "./NavLanguage";
import CloseIcon from '@material-ui/icons/Close';
import Enter from "./Enter";
import {withTranslation} from "react-i18next";
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_EYE, CHANGE_IMG_LESS, CHANGE_THEME} from "../../redux/me/actionType";
import {Dropdown, Menu} from "antd";

const NavCenter = ({t, setSearchVal}) => {
    const [sitebar, setSitebar] = useState(false);
    const [aa, setaa] = useState(false);
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const findString = () => {
        console.log("searchVal", aa);
        window.find(aa,"",(e)=>{
            console.log("nmadir",e)
        })
        document.onmouseup = () => {
            console.log("mmmmmmmm", window.getSelection());
        };

    }
    const onChange = (e) => {
        dispatch({type: CHANGE_EYE, data: e})
    };


    return (

        <div style={theme} className="nav-center container-fluit12">
            <div className="container12">
                <div className="navbar2">
                    <div className="menu-icon">
                        <MenuIcon
                            fontSize={'large'}
                            onClick={() => setSitebar(!sitebar)}
                        />
                    </div>
                    <div className="header-logo">
                        <a href="/#">
                            <div className="logo-left">
                                <img src={iconLogo} alt="logo"/>
                            </div>
                            <div className="logo-right">
                                <div>
                                    <span><strong>{t("Legal clinic")}</strong></span><br/>
                                    <p style={{maxWidth: "350px"}}>{t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="header-right">
                        <div className="header-right-desctop">
                            <form role="search" method="get" action="#" className="search-form">
                                <input type="" onChange={(e) => setaa(e.target.value)}
                                       placeholder={t("Search") + "..."}/>
                                <button onClick={() => findString()} type="button"><img src={iconSearch} alt="search-icon"/>
                                </button>
                            </form>
                            <NavLanguage/>
                            <div className="glas">
                                <Dropdown overlay={
                                    <Menu>
                                        <Menu.Item onClick={(e) => {
                                            dispatch({type: CHANGE_THEME, data: ""});
                                            dispatch({type: CHANGE_IMG_LESS, data: false});
                                            onChange(1)
                                        }}>
                                            Odatiy
                                        </Menu.Item>
                                        <Menu.Item onClick={() => {
                                            dispatch({type: CHANGE_THEME, data: "grayscale(100%)"})
                                        }}>
                                            Oq va qora
                                        </Menu.Item>
                                        <Menu.Item style={{borderBottom: "1px solid rgba(0,0,0,0.2)"}}
                                                   onClick={(e) => {
                                                       dispatch({type: CHANGE_THEME, data: ""});
                                                       onChange(3)
                                                   }}>
                                            Qora va sariq
                                        </Menu.Item>
                                        <Menu.Item onClick={(e) => dispatch({type: CHANGE_IMG_LESS, data: true})}>
                                            Rasmsiz
                                        </Menu.Item>
                                    </Menu>
                                }>
                                    <img src={iconGlass} alt=""/>
                                </Dropdown>
                            </div>
                        </div>
                        <Enter/>
                    </div>
                </div>
            </div>
            <div className="desctop-navigation" id={sitebar ? "show-navigation" : ""}>
                <div className="container12">
                    <div className="desctop-navigation-body">
                        <div>
                            <div className="mobil-language">
                                <NavLanguage/>
                                <div className="glas">
                                    <img src={iconGlass} alt=""/>
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
                                style={{color: 'white'}}
                                onClick={() => setSitebar(!sitebar)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(NavCenter);
