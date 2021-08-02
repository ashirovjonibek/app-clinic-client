import React, { useEffect, useState, useContext } from "react";
import { Route, Switch } from "react-router";

import CenterSends from "./CenterSends";
import DirectoryPdf from "./DirectoryPdf";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import ResponseRequestSection from "./ResponseRequestSection";
import DeadlineRequestSection from "./DeadlineRequestSection";
import PerAccLisSiteBar from "./PerAccSiteBar";
import AppealSection from "./AppealSection";
import CallFlowSection from "./CallFlowSection";
import FedbeckSection from "./FedbeckSection";
import DirectorySection from "./DirectorySection";
import SendSection from "./SendSection";
import IncomingRequestSection from "./IncomingRequestSection";
import axios from "axios";
import { Link } from "react-router-dom";
import ResponseRequestItem from "./ResponseRequestItem";
import AppealItem from "./AppealItem";
import { ApiContext } from "../../utils/ApiContext";
import IncomingRequestItem from "./IncomingRequestItem";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Enter from "../Nav/Enter";


const PersonalAccountListener = (props) => {
    const [sitebar, setSitebar] = useState(false);

    const { idUser, setIdUser, currentItem } = useContext(ApiContext);
    console.log(idUser);

    function Applications(n) {
        switch (n) {
            case 1:
                return <IncomingRequestSection />
            case 2:
                return <AppealSection />
            case 3:
                return <CallFlowSection />
            case 4:
                return <ResponseRequestSection />
            case 5:
                return <DeadlineRequestSection />
            case 6:
                return <FedbeckSection />
            case 7:
                return <DirectorySection />
            case 8:
                return <SendSection />
            case 9:
                return <IncomingRequestItem currentItem={currentItem} />
        }
    }

    const getPage = (n) => {
        setIdUser(n);
    }

    return (
        <div>
            <div className="nav">
                <NavTop />
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
                                            <Link onClick={() => getPage(1)}>Поступившие обращения</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(2)}>Ответы на обращения</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(3)}>Срок исполнения обращений</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(4)}>Обращения</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(5)}>Ход обращений</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(6)}>Ваши отзывы</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(7)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(8)}>Центр сообщений</Link>
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
            </div>
            <div className="personal-account-listnear container-fluit" style={{paddingTop: '100px'}}>
                <div className="container">
                    <section className="section-body">
                        <div>
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <li className="navbar-items active">
                                            <Link onClick={() => getPage(1)}>Поступившие обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(2)}>Ответы на обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(3)}>Срок исполнения обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(4)}>Обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(5)}>Ход обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(6)}>Ваши отзывы</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(7)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(8)}>Центр сообщений</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {

                                Applications(idUser)
                            }
                        </div>
                    </section>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default PersonalAccountListener;
