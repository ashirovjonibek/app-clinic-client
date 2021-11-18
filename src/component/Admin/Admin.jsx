import React, {useEffect, useState} from 'react';
import iconSearch from "../../assets/icon/icon-search.svg";
import "../../assets/scss/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../../assets/css/table.css'
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AdminListAppeal from './AdminListAppeal';
import AdminListSupervisor from './AdminListSupervisor';
import AdminListModerator from './AdminListModerator';
import AdminListSetting from './AdminListSetting';
import {withTranslation} from "react-i18next";
import {useHistory,Link} from 'react-router-dom'
import {STORAGE_NAME} from "../../utils/constant";
import "../../assets/scss/adminList.scss"
import "../../assets/scss/adminNav.scss"
import AdminListListener from "./AdminListListenear";
import iconLogo from "../../assets/icon/icon-logo.svg";
import Footer from "../Footer/Footer";
import Enter from "../Nav/Enter";
import AdminListModeratorAndSuperModerator from "./AdminListModeratorAndSuperModerator";
import DashboardAppealsPage from "../Dashboard/DashboardAppealsPage";
import {Line} from "recharts";

const Admin = ({t}) => {
    const [sitebar, setSitebar] = useState(false);
    const [listnearContentItem, setListnearContentItem] = useState(false);
    const [supervisorContentItem, setSupervisorContentItem] = useState(false);
    const [moderatorContentItem, setModeratorContentItem] = useState(false);
    const [moderatorAdnSuperModeratorContentItem, setModeratorAdnSuperModeratorContentItem] = useState(false);
    const [settingContentItem, setSettingContentItem] = useState(false);
    const [pageQount, setPageQount] = useState(7);
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();

    function AdminSitebarItem(n) {
        switch (n) {
            case 1:
                return <AdminListAppeal searchTerm={searchTerm}/>
            case 2:
                return <AdminListListener searchTerm={searchTerm}/>
            case 3:
                return <AdminListSupervisor searchTerm={searchTerm}/>
            case 4:
                return <AdminListModerator searchTerm={searchTerm}/>
            case 5:
                return <AdminListModeratorAndSuperModerator searchTerm={searchTerm}/>
            case 6:
                return <AdminListSetting searchTerm={searchTerm}/>
            case 7:
                return <DashboardAppealsPage searchTerm={searchTerm}/>
            default:
                return <DashboardAppealsPage searchTerm={searchTerm}/>
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
        getPage(6);
        setSettingContentItem(!settingContentItem);
    };
    const handleModeratorAndSuperModerator=()=>{
        getPage(5);
        setModeratorAdnSuperModeratorContentItem(!moderatorAdnSuperModeratorContentItem);
    }

    const handleGoOut = () => {
        localStorage.removeItem(STORAGE_NAME);
        console.log(localStorage.getItem(STORAGE_NAME));
        history.push("/")
    }

    useEffect(() => {
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/auth/login")
        }
    }, []);

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
                        <div className="accordion" onClick={() => getPage(7)}>
                            <h3 className="accordion__title">{t("Home page")}</h3>
                        </div>
                    </li>
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
                            <h3 className="accordion__title">{t("Moderators")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleModerator}>
                            <h3 className="accordion__title">{t("Super moderators")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleModeratorAndSuperModerator}>
                            <h3 className="accordion__title">{t("Moderators and super moderators")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSetting}>
                            <h3 className="accordion__title">{t("Settings")}</h3>
                        </div>
                    </li>
                </ul>
                <br/>
                <div className="mobil-language mobil-language-admin">
                    <NavLanguage />
                    {/*<div className="glas">*/}
                    {/*    <img src={iconGlass} alt="" />*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="adminnav">
                <div className="nav-center container-fluit12" style={{position: 'fixed', top: '0px', zIndex:1}}>
                    <div className="navbar1">
                        <div className="menu-icon">
                            <MenuIcon
                                fontSize={'large'}
                                onClick={() => setSitebar(!sitebar)}
                            />
                        </div>
                        <div className="header-logo">
                            <Link to="/">
                                <div className="logo-left">
                                    <img src={iconLogo} alt="logo"/>
                                </div>
                                <div className="logo-right">
                                    <div>
                                        <span><strong>{t("Legal clinic")}</strong></span><br/>
                                        <p style={{maxWidth: "350px"}}>{t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="header-right-desctop">
                                <form role="search" method="get" action="#" className="search-form">
                                    <input type="text" placeholder={t("Search") + "..."}
                                           onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button type="button" disabled><img src={iconSearch} alt="search-icon"/></button>
                                </form>
                                <NavLanguage/>
                                {/*<div className="glas">*/}
                                {/*    <img src={iconGlass} alt=""/>*/}
                                {/*</div>*/}
                            </div>
                            <div className="enter">
                                {/*<div className="enter-btn" onClick={handleGoOut} style={{cursor: "pointer"}}>*/}
                                {/*    <div className="enter-img">*/}
                                {/*        <LockIcon/>*/}
                                {/*    </div>*/}
                                {/*    {t("Go out")}*/}
                                {/*</div>*/}
                                <Enter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluit12 admin-body">
                <div className="container12" style={{padding: '60px 0'}}>
                    <div className="sitebar-elements searchdiv ">
                        <form role="search" method="get" action="#" className="search-form">
                            <input type="text" placeholder={t("Search") + "..."}
                                   onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </form>
                    </div>
                    <div className="admin-navbar">
                        <div className="admin-navbarr">
                            <ul>
                                <li className="navbar-items" id={pageQount === 7 ? "active" : ""}>
                                    <button onClick={() => getPage(7)}>{t("Home page")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                    <button onClick={() => getPage(1)}>{t("List of applicants")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                    <button onClick={() => getPage(2)}>{t("List of listeners")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                    <button onClick={() => getPage(3)}>{t("Moderators")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                    <button onClick={() => getPage(4)}>{t("Super moderators")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
                                    <button onClick={() => getPage(5)}>{t("Moderators and super moderators")}</button>
                                </li>
                                <li className="navbar-items" id={pageQount === 6 ? "active" : ""}>
                                    <button onClick={() => getPage(6)}>{t("Settings")}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {AdminSitebarItem(pageQount)}
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(Admin);

