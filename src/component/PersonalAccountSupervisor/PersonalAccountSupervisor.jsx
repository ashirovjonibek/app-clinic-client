import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorResponsesSection from "./SupervisorResponsesRequestSection";
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
import RequestFunctions from "../../requests/RequestFunctions";
import {withTranslation} from "react-i18next";
import Footer from "../Footer/Footer";
import {STORAGE_NAME} from "../../utils/constant";
import {useSelector} from "react-redux";
import ModeratorPerformerItem from "../PersonalAccountModerator/ModeratorPerformerItem";
import ModeratorPerformerSection from "../PersonalAccountModerator/ModeratorPerformerSection";
import DashboardAppealsPage from "../Dashboard/DashboardAppealsPage";
import "../../assets/scss/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../../assets/css/table.css'

const PersonalAccountSupervisor = ({t}) => {
    const history = useHistory();

    const [sitebar, setSitebar] = useState(false);
    const [pageQount, setPageQount] = useState(12);
    const userRole=useSelector(state => state.meReducer)

    // const me=useSelector(state=>state.meReducer)

    function pushBar(n) {
        switch (n) {
            case 1:
                return <PerAccSupListenersSection/>
            case 2:
                return <ModeratorPerformerSection sts={"MODERATOR"}/>
            case 3:
                return <SupervisorResponsesSection/>
            case 4:
                return <SupervisorApplicantSection/>
            case 5:
                return <SupervisorAppealSection/>
            case 6:
                return <SupervisorCallFlowSection/>
            case 7:
                return <SupervisorFeedbakRequestSection/>
            case 8:
                return <SupervisorDirectorySection/>
            case 9:
                return <SupervisorReytingListnear/>
            case 10:
                return <SupervisorStatisticSection/>
            case 11:
                return <SupervisorArchive/>
            case 12:
                return <DashboardAppealsPage/>
            default:
                return <PerAccSupListenersSection/>
        }
    }

    useEffect(() => {
        // console.log("this is redux->",me)
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/")
        }

    }, [])

    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
            <div>
                <div className="nav">
                    <NavTop/>
                    <div className="nav-center container-fluit">
                        <div className="container">
                            <div className="navbar">
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
                                            <input type="" placeholder={t("Search") + "..."}/>
                                            <button type=""><img src={iconSearch} alt="search-icon"/></button>
                                        </form>
                                        <NavLanguage/>
                                        <div className="glas">
                                            <img src={iconGlass} alt=""/>
                                        </div>
                                    </div>
                                    <Enter/>
                                </div>
                            </div>
                        </div>
                        <div className="desctop-navigation" id={sitebar ? "show-navigation" : ""}>
                            <div className="container">
                                <div className="desctop-navigation-body">
                                    <div>
                                        <div className="mobil-language">
                                            <NavLanguage/>
                                            <div className="glas">
                                                <img src={iconGlass} alt=""/>
                                            </div>
                                        </div>
                                        <ul>
                                            {userRole.role[0]==="SUPER_MODERATOR_AND_MODERATOR"?<li>
                                                <Link to="/personalAccountModerator" >{t("Go super moderator page")}</Link>
                                            </li>:""}

                                            <li>
                                                <Link to="#" onClick={() => getPage(12)}>{t("Appeals informations")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(1)}>{t("Listener")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(2)}>{t("Appointment of the performer")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(3)}>{t("Responses to requests")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(4)}>{t("The applicant")}</Link>
                                            </li>
                                            {/*<li>*/}
                                            {/*    <Link to="#" onClick={() => getPage(6)}>{t("Call flow")}</Link>*/}
                                            {/*</li>*/}
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(7)}>{t("Feedback on requests")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(8)}>{t("Regulatory base")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(9)}>{t("Listener rating")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(10)}>{t("Statistics and reports")}</Link>
                                            </li>
                                            {/*<li>*/}
                                            {/*    <Link to="#" onClick={() => getPage(11)}>{t("Archive")}</Link>*/}
                                            {/*</li>*/}
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
                </div>
                <div className="personal-account-supervisor container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        {userRole.role[0]==="SUPER_MODERATOR_AND_MODERATOR"?<li className="navbar-items">
                                            <Link to="/personalAccountModerator" >{t("Go super moderator page")}</Link>
                                        </li>:""}

                                        <li className="navbar-items" id={pageQount === 12 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(12)}>{t("Appeals informations")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 1 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(1)}>{t("Listener")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 2 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(2)}>{t("Appointment of the performer")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 3 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(3)}>{t("Responses to requests")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 4 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(4)}>{t("The applicant")}</Link>
                                        </li>
                                        {/*<li className="navbar-items" id={pageQount === 6 ? 'active' : ''}>*/}
                                        {/*    <Link to="#" onClick={() => getPage(6)}>{t("Call flow")}</Link>*/}
                                        {/*</li>*/}
                                        <li className="navbar-items" id={pageQount === 7 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(7)}>{t("Feedback on requests")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 8 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(8)}>{t("Regulatory base")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 9 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(9)}>{t("Listener rating")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 10 ? 'active' : ''}>
                                            <Link to="#"
                                                  onClick={() => getPage(10)}>{t("Statistics and reports")}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{minHeight:"75vh"}} className="content-wrapper">
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

export default withTranslation()(PersonalAccountSupervisor);
