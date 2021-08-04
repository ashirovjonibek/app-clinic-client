import React, { useState } from "react";
import Title from "../Title";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";
import { Link, Route, Switch } from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";
// import ApplicantAppeal from "./ApplicantAppeal";
// import IncomingRequestItem from "./IncomingRequestItem";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Enter from "../Nav/Enter";

const PersonalAccountApplicant = () => {

    const [pageQount, setPageQount] = useState(1);
    const [sitebar, setSitebar] = useState(false);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <YourAppealSection />
            case 2:
                return <PerAccAppCallFlowSection />
            case 3:
                return <PerAccAppPeriodSection />
            case 4:
                return <PerAccAppResponseRequest />
            case 5:
                return <SendSection />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
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
                                            <Link to="/applicantAppeal">Создать новое обращение</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(1)}>Ваше обращение</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(2)}>Статус документа</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(3)}>Срок рассмотрения</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(4)}>Ответы на обращения</Link>
                                        </li>
                                        <li>
                                            <Link onClick={() => getPage(5)}>Центр сообщений</Link>
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
            <div className="acount-applicant container-fluit" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <Title text="Личный кабинет" />
                    <section className="section-body">
                        <div className="navbar-wrapper">
                            <div className="navbarr">
                                <ul>
                                    <li className="navbar-items ">
                                        <Link to="/applicantAppeal">Создать новое обращение</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                        <Link onClick={() => getPage(1)}>Ваше обращение</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                        <Link onClick={() => getPage(2)}>Статус документа</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                        <Link onClick={() => getPage(3)}>Срок рассмотрения</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                        <Link onClick={() => getPage(4)}>Ответы на обращения</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
                                        <Link onClick={() => getPage(5)}>Центр сообщений</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {
                                pushBar(pageQount)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountApplicant;
