import React, {useState} from 'react';
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AdminListAppeal from './AdminListAppeal';
import AdminListSupervisor from './AdminListSupervisor';
import AdminListModerator from './AdminListModerator';
import AdminListSetting from './AdminListSetting';
import {withTranslation} from "react-i18next";
import LockIcon from '@material-ui/icons/Lock';
import {useHistory} from 'react-router-dom'
import {STORAGE_NAME} from "../../utils/constant";
import "../../assets/scss/adminList.scss"
import "../../assets/scss/adminNav.scss"
import AdminListListener from "./AdminListListenear";
import iconLogo from "../../assets/icon/icon-logo.svg";
import Footer from "../Footer/Footer";

const Admin = ({t}) => {
    const [sitebar, setSitebar] = useState(false);
    const [listnearContentItem, setListnearContentItem] = useState(false);
    const [supervisorContentItem, setSupervisorContentItem] = useState(false);
    const [moderatorContentItem, setModeratorContentItem] = useState(false);
    const [settingContentItem, setSettingContentItem] = useState(false);
    const [pageQount, setPageQount] = useState(1);
    const history = useHistory();

    function AdminSitebarItem(n) {
        switch (n) {
            case 1:
                return <AdminListAppeal/>
            case 2:
                return <AdminListListener/>
            case 3:
                return <AdminListSupervisor/>
            case 4:
                return <AdminListModerator/>
            case 5:
                return <AdminListSetting/>
            default:
                return <AdminListAppeal/>
        }
    }

    const getPage = (n) => {
        setPageQount(n)
    }

    const handleListener = () => {
        getPage(2);
        setListnearContentItem(!listnearContentItem);
    }

    const handleSupervisor = () => {
        getPage(3);
        setSupervisorContentItem(!supervisorContentItem);
    }

    const handleModerator = () => {
        getPage(4);
        setModeratorContentItem(!moderatorContentItem);
    }

    const handleSetting = () => {
        getPage(5);
        setSettingContentItem(!settingContentItem);
    }

    const handleGoOut = () => {
        localStorage.removeItem(STORAGE_NAME);
        console.log(localStorage.getItem(STORAGE_NAME))
        history.push("/")
    }

    return (
        <div className="admin">
            <div className="admin-sitebar-wrapper" id={sitebar ? "admin-sitebar" : ""}>
                <div className="sitebar-chevron">
                    <ChevronLeftIcon
                        fontSize="large"
                        onClick={() => setSitebar(!sitebar)}/>
                </div>

                <ul>
                    <li className="accordion__section">
                        <div className="accordion" onClick={() => getPage(1)}>
                            <h3 className="accordion__title">{t("List of applicants")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleListener}>
                            <h3 className="accordion__title">{t("List of listeners")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSupervisor}>
                            <h3 className="accordion__title">{t("List of bosses")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleModerator}>
                            <h3 className="accordion__title">{t("List of moderators")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSetting}>
                            <h3 className="accordion__title">{t("Settings")}</h3>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="adminnav">
                <div className="nav-center container-fluit" style={{position: 'fixed', top: '0px'}}>
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
                            <div className="enter">
                                <div className="enter-btn" onClick={handleGoOut} style={{cursor: "pointer"}}>
                                    <div className="enter-img">
                                        <LockIcon/>
                                    </div>
                                    {t("Go out")}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluit admin-body" style={{paddingTop: '60px'}}>
                <div className="container" style={{padding: '50px 0', minHeight: '89vh'}}>
                    <div className="admin-navbar">
                        <div className="admin-navbarr">
                            <ul>
                                <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                    <button onClick={() => getPage(1)}>{t("List of applicants")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                    <button onClick={() => getPage(2)}>{t("List of listeners")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                    <button onClick={() => getPage(3)}>{t("List of bosses")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                    <button onClick={() => getPage(4)}>{t("List of moderators")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
                                    <button onClick={() => getPage(5)}>{t("Settings")}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {AdminSitebarItem(pageQount)}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default withTranslation()(Admin);

