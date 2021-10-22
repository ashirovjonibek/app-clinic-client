import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import ModeratorHeadsDepartmentSection from "./ModeratorHeadsDepartmentSection";
import ModeratorPerformerSection from "./ModeratorPerformerSection";
import ModeratorListnearSection from "./ModeratorListnearSection";
import ModeratorApplicantSection from "./ModeratorApplicantSection";
import ModeratorAppealSection from "./ModeratorAppealSection";
import ModeratorFedbeckRequestSection from "./ModeratorFedbeckRequestSection";
import ModeratorLegalBaseSection from "./ModeratorLegalBaseSection";
import ModeratorListnearReytingSection from "./ModeratorListnearReytingSection";
import ModeratorArchive from "./ModeratorArchive";
import SupervisorStatisticSection
    from "../PersonalAccountSupervisor/SupervisorStatisticSection/SupervisorStatisticSection";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Enter from "../Nav/Enter";
import {STORAGE_NAME} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";
import DashboardAppealsPage from "../Dashboard/DashboardAppealsPage";

const PersonalAccountModerator = ({t}) => {
    const history = useHistory();
    const userRole = useSelector(state => state.meReducer);

    const [sitebar, setSitebar] = useState(false);
    const [pageQount, setPageQount] = useState(11);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <ModeratorHeadsDepartmentSection/>

            case 2:
                return <ModeratorPerformerSection sts={"SUPER_MODERATOR"}/>;

            case 3:
                return <ModeratorListnearSection/>;

            case 4:
                return <ModeratorApplicantSection n={n}/>

            case 5:
                return <ModeratorAppealSection/>

            case 6:
                return <ModeratorFedbeckRequestSection/>

            case 7:
                return <ModeratorLegalBaseSection/>

            case 8:
                return <ModeratorListnearReytingSection/>

            case 9:
                return <SupervisorStatisticSection/>

            case 10:
                return <ModeratorArchive/>
            case 11:
                return <DashboardAppealsPage/>
            default:
                return <ModeratorHeadsDepartmentSection/>

        }
    }

    useEffect(() => {
        // console.log("this is redux->",me)
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/auth/login")
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
                                            {userRole.role[0] === "SUPER_MODERATOR_AND_MODERATOR" ? <li>
                                                <Link to="/personalAccountSupervisor">{t("Go moderator page")}</Link>
                                            </li> : ""}

                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(11)}>{t("Appeals informations")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(1)}>{t("Heads of departments")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(2)}>{t("Appointment of the performer")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(3)}>{t("Listeners")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(4)}>{t("Applicants")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(5)}>{t("Appeals")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(6)}>{t("Feedback reviews")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(7)}>{t("Regulatory and legal framework")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={() => getPage(8)}>{t("Listener rating")}</Link>
                                            </li>
                                            <li>
                                                <Link to="#"
                                                      onClick={() => getPage(9)}>{t("Statistics and reports")}</Link>
                                            </li>
                                            {/*<li>*/}
                                            {/*    <Link to="#" onClick={() => getPage(10)}>{t("Archive")}</Link>*/}
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
                <div style={{paddingBottom: "15px"}} className="account-moderator container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        {userRole.role[0] === "SUPER_MODERATOR_AND_MODERATOR" ?
                                            <li className="navbar-items">
                                                <Link to="/personalAccountSupervisor">{t("Go moderator page")}</Link>
                                            </li> : ""}

                                        <li className="navbar-items" id={pageQount === 11 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(11)}>{t("Appeals informations")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 1 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(1)}>{t("Heads of departments")}</Link>
                                        </li>
                                        <li className="navbar-items " id={pageQount === 2 ? 'active' : ''}>
                                            <Link to="#"
                                                  onClick={() => getPage(2)}>{t("Appointment of the performer")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 3 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(3)}>{t("Listeners")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 4 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(4)}>{t("Applicants")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 5 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(5)}>{t("Appeals")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 6 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(6)}>{t("Feedback reviews")}</Link>
                                        </li>
                                        <li className="navbar-items " id={pageQount === 7 ? 'active' : ''}>
                                            <Link to="#"
                                                  onClick={() => getPage(7)}>{t("Regulatory and legal framework")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 8 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(8)}>{t("Listener rating")}</Link>
                                        </li>
                                        <li className="navbar-items" id={pageQount === 9 ? 'active' : ''}>
                                            <Link to="#" onClick={() => getPage(9)}>{t("Statistics and reports")}</Link>
                                        </li>
                                        {/*<li className="navbar-items" id={pageQount === 10 ? 'active' : ''}>*/}
                                        {/*    <Link to="#" onClick={() => getPage(10)}>{t("Archive")}</Link>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                            <div style={{minHeight: "75vh"}} className={pageQount === 11 ?"" : "content-wrapper"}>
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

export default withTranslation()(PersonalAccountModerator);
