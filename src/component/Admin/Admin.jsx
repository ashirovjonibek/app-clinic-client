import React, { useState } from 'react';
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import Enter from "../Nav/Enter";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AdminListListnear from './AdminListListnear';
import AdminListAppeal from './AdminListAppeal';
import AdminListSupervisor from './AdminListSupervisor';
import AdminListModerator from './AdminListModerator';
import AdminListSetting from './AdminListSetting';
import Setting from './Setting';
import {withTranslation} from "react-i18next";
import enterImg from "../../assets/img/enter-img.svg";
import LockIcon from '@material-ui/icons/Lock';
import {Link, useHistory} from 'react-router-dom'
import {STORAGE_NAME} from "../../utils/constant";
import {adminNavbarr,adminNavbar,navbarItems} from "../../assets/scss/adminList.scss"
import TestRequests from "../../requests/TestRequests";


const Admin = ({t}) => {
    const [sitebar, setSitebar] = useState(false);
    const [listnearContentItem, setListnearContentItem] = useState(false);
    const [supervisorContentItem, setSupervisorContentItem] = useState(false);
    const [moderatorContentItem, setModeratorContentItem] = useState(false);
    const [settingContentItem, setSettingContentItem] = useState(false);
    const [pageQount, setPageQount] = useState(1);
    const history=useHistory();

    function AdminSitebarItem(n) {
        switch (n) {
            case 1:
                return <AdminListAppeal />
            case 2:
                return <AdminListListnear />
            case 3:
                return <AdminListSupervisor />
            case 4:
                return <AdminListModerator />
            case 5:
                return <AdminListSetting />
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

    return (
        <div className="admin">
            <div className="admin-sitebar-wrapper" id={sitebar ? "admin-sitebar" : ""}>
                <div className="sitebar-chevron">
                    <ChevronLeftIcon
                        fontSize="large"
                        onClick={() => setSitebar(!sitebar)} />
                </div>

                <ul>
                    <li className="accordion__section">
                        <div className="accordion" onClick={() => getPage(1)} >
                            <h3 className="accordion__title">{t("List of applicants")}</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleListener}>
                            <h3 className="accordion__title">{t("List of listeners")}</h3>
                        </div>
                        <div className="accordion__content" id={listnearContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    {t("Department name")}
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSupervisor}>
                            <h3 className="accordion__title">{t("List of bosses")}</h3>
                        </div>
                        <div className="accordion__content" id={supervisorContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    {t("Department name")}
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleModerator}>
                            <h3 className="accordion__title">{t("List of moderators")}</h3>
                        </div>
                        <div className="accordion__content" id={moderatorContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    {t("Department name")}
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSetting}>
                            <h3 className="accordion__title">{t("Settings")}</h3>
                        </div>
                        <div className="accordion__content" id={settingContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    {t("Department name")}
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    {t("Department name")}
                                    {/* <div>2</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nav">
                <div className="nav-center container-fluit" style={{position: 'fixed', top: '0px'}}>
                    <div className="container">
                        <div className="navbar" style={{ height: '70px' }}>
                            <div className="menu-icon" >
                                <MenuIcon
                                    fontSize={'large'}
                                    onClick={() => setSitebar(!sitebar)}
                                />
                            </div>
                            <div className="header-logo">
                                <MenuIcon fontSize='large' style={{cursor: 'pointer'}} onClick={() => setSitebar(!sitebar)} />
                            </div>
                            <div className="header-right">
                                <div className="header-right-desctop">
                                    <form role="search" method="get" action="#" className="search-form">
                                        <input type="" placeholder={t("Search")+"..."} />
                                        <button type=""><img src={iconSearch} alt="search-icon" /></button>
                                    </form>
                                    <NavLanguage />
                                    <div className="glas">
                                        <img src={iconGlass} alt="" />
                                    </div>
                                </div>
                                <div className="enter" >
                                    <div className="enter-btn" onClick={()=>{
                                        localStorage.removeItem(STORAGE_NAME);
                                        history.push("/")
                                    }} style={{cursor:"pointer"}}>
                                        <div className="enter-img">
                                            <LockIcon/>
                                        </div>
                                        {t("Go out")}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div>

            <div className="container-fluit admin-body" style={{paddingTop: '60px'}}>
                <div className="container" style={{ padding: '50px 0', minHeight: '89vh' }}>
                        <div className="admin-navbar">
                            <div className="admin-navbarr">
                                <TestRequests/>
                                <ul>
                                    <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                        <Link onClick={() => getPage(1)}>List of applicants</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                        <Link onClick={() => getPage(2)}>List of listeners</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                        <Link onClick={() => getPage(3)}>List of bosses</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                        <Link onClick={() => getPage(4)}>List of moderators</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
                                        <Link onClick={() => getPage(5)}>Settings</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {AdminSitebarItem(pageQount)}
                </div>
            </div>

        </div >
    );
}

export default withTranslation()(Admin);

