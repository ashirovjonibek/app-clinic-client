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

const Admin = () => {
    const [sitebar, setSitebar] = useState(false);
    const [listnearContentItem, setListnearContentItem] = useState(false);
    const [supervisorContentItem, setSupervisorContentItem] = useState(false);
    const [moderatorContentItem, setModeratorContentItem] = useState(false);
    const [settingContentItem, setSettingContentItem] = useState(false);
    const [pageQount, setPageQount] = useState(1);

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

    const handleListnear = () => {
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
                            <h3 className="accordion__title">Список заявителей</h3>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleListnear}>
                            <h3 className="accordion__title">Список слушателей</h3>
                        </div>
                        <div className="accordion__content" id={listnearContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    Название кафедры
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSupervisor}>
                            <h3 className="accordion__title">Список начальников</h3>
                        </div>
                        <div className="accordion__content" id={supervisorContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    Название кафедры
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleModerator}>
                            <h3 className="accordion__title">Список модераторов</h3>
                        </div>
                        <div className="accordion__content" id={moderatorContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    Название кафедры
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>2</div> */}
                                </li>
                                <li>
                                    Название кафедры
                                    {/* <div>13</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="accordion__section">
                        <div className="accordion" onClick={handleSetting}>
                            <h3 className="accordion__title">Настройки</h3>
                        </div>
                        <div className="accordion__content" id={settingContentItem ? "content__items" : ""}>
                            <ul>
                                <li>
                                    Название кафедры
                                    {/* <div>9</div> */}
                                </li>
                                <li>
                                    Название лготь
                                    {/* <div>2</div> */}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nav">
                <div className="nav-center container-fluit">
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
                </div >
            </div>

            <div className="container-fluit admin-body">
                <div className="container" style={{ padding: '50px 0', minHeight: '89vh' }}>
                    {AdminSitebarItem(pageQount)}
                </div>
            </div>

        </div >
    );
}

export default Admin;

