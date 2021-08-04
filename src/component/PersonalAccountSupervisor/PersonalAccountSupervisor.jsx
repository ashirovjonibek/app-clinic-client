import React, { useState } from "react";
import { Link } from "react-router-dom";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorIncomingRequestSection from "./SupervisorIncomingRequestSection";
import SupervisorResponsesSection from "./SupervisorResponsesRequestSection";
import SupervisorApplicantItem from "./SupervisorApplicantItem";
import SupervisorAppealSection from "./SupervisorAppealSection";
import SupervisorCallFlowSection from "./SupervisorCallFlowSection";
import SupervisorFeedbakRequestSection from "./SupervisorFeedbakRequestSection";
import SupervisorDirectorySection from "./SupervisorDirectorySection";
import SupervisorReytingListnear from "./SupervisorReytingListnear";
import SupervisorArchive from "./SupervisorArchive";
import SupervisorApplicantSection from "./SupervisorApplicantSection";
import SupervisorStatisticSection from "./SupervisorStatisticSection/SupervisorStatisticSection";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Enter from "../Nav/Enter";
import { light } from "@material-ui/core/styles/createPalette";

const PersonalAccountSupervisor = () => {

    const [sitebar, setSitebar] = useState(false);
    const [pageQount, setPageQount] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <PerAccSupListenersSection />
            case 2:
                return <SupervisorIncomingRequestSection />
            case 3:
                return <SupervisorResponsesSection />
            case 4:
                return <SupervisorApplicantSection />
            case 5:
                return <SupervisorAppealSection />
            case 6:
                return <SupervisorCallFlowSection />
            case 7:
                return <SupervisorFeedbakRequestSection />
            case 8:
                return <SupervisorDirectorySection />
            case 9:
                return <SupervisorReytingListnear />
            case 10:
                return <SupervisorStatisticSection />
            case 11:
                return <SupervisorArchive />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
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
                                                <Link onClick={() => getPage(1)}>Слушатели</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(2)}>Поступившие обращения</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(3)}>Ответы на обращения </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(4)}>Заявители</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(5)}>Обращения</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(6)}>Ход обращений</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(7)}>Отзывы по обращений </Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(8)}>Нормативно-правовая база</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(9)}>Рейтинг слушателей</Link>
                                            </li>
                                            <li>
                                                <Link onClick={() => getPage(10)}>Статистика и отчеты</Link>
                                            </li>
                                            <light>
                                                <Link onClick={() => getPage(11)}>Архив</Link>
                                            </light>
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
                <div className="personal-account-supervisor container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <li className="navbar-items" id={pageQount === 1 ? 'active' : ''}>
                                            <Link onClick={() => getPage(1)}>Слушатели</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 2 ? 'active' : ''}>
                                            <Link onClick={() => getPage(2)}>Поступившие обращения</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 3 ? 'active' : ''}>
                                            <Link onClick={() => getPage(3)}>Ответы на обращения </Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 4 ? 'active' : ''}>
                                            <Link onClick={() => getPage(4)}>Заявители</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 5 ? 'active' : ''}>
                                            <Link onClick={() => getPage(5)}>Обращения</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 6 ? 'active' : ''}>
                                            <Link onClick={() => getPage(6)}>Ход обращений</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 7 ? 'active' : ''}>
                                            <Link onClick={() => getPage(7)}>Отзывы по обращений </Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 8 ? 'active' : ''}>
                                            <Link onClick={() => getPage(8)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 9 ? 'active' : ''}>
                                            <Link onClick={() => getPage(9)}>Рейтинг слушателей</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 10 ? 'active' : ''}>
                                            <Link onClick={() => getPage(10)}>Статистика и отчеты</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 11 ? 'active' : ''}>
                                            <Link onClick={() => getPage(11)}>Архив</Link>
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
        </div>
    );
}

export default PersonalAccountSupervisor;
