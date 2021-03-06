import React, {useState, useContext, useEffect} from "react";
import ResponseRequestSection from "./ResponseRequestSection";
import DeadlineRequestSection from "./DeadlineRequestSection";
import AppealSection from "./AppealSection";
import CallFlowSection from "./CallFlowSection";
import FedbeckSection from "./FedbeckSection";
import DirectorySection from "./DirectorySection";
import SendSection from "./SendSection";
import IncomingRequestSection from "./IncomingRequestSection";
import {Link, useHistory} from "react-router-dom";
import IncomingRequestItem from "./IncomingRequestItem";
import NavTop from "../Nav/NavTop";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import iconGlass from "../../assets/icon/icon-glass.svg";
import NavLanguage from "../Nav/NavLanguage";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Enter from "../Nav/Enter";
import {withTranslation} from "react-i18next";
import Footer from "../Footer/Footer";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {red} from "@material-ui/core/colors";
import axios from "axios";
import "../../assets/scss/style.scss";
import 'react-toastify/dist/ReactToastify.css';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../../assets/css/table.css'
import {Badge} from "antd";
import PerAccAppResponseRequest from "../PersonalAccountApplicant/PerAccAppResponseRequest";
import SupervisorFeedbakRequestSection from "../PersonalAccountSupervisor/SupervisorFeedbakRequestSection";


const PersonalAccountListener = ({t}) => {
    const [sitebar, setSitebar] = useState(false);
    const [idUser, setIdUser] = useState(1);
    const history = useHistory();
    const [refreshCount, setRefreshCount] = useState(false);
    const [count, setCount] = useState(0);
    const [n, setN] = useState(0);
    const [counts, setCounts] = useState();


    function Applications(n) {
        switch (n) {
            case 1:
                return <IncomingRequestSection refreshCount={refreshCount} setRefreshCount={setRefreshCount}
                                               getPage={getPage}/>
            case 2:
                return <AppealSection/>
            case 3:
                return <CallFlowSection/>
            case 4:
                return <ResponseRequestSection/>
            case 5:
                return <DeadlineRequestSection/>
            case 6:
                return <SupervisorFeedbakRequestSection listener={true}/>
            case 7:
                return <DirectorySection/>
            case 8:
                return <SendSection refreshCount={refreshCount} setRefreshCount={setRefreshCount}/>
            case 9:
                return <IncomingRequestItem currentItem="{currentItem}"/>
            default:
                return <IncomingRequestSection/>
        }
    }

    useEffect(() => {
        // console.log("this is redux->",me)
        if (!localStorage.getItem(STORAGE_NAME)) {
            history.push("/auth/login")
        }

    }, []);

    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/message',
            headers: {
                Authorization: localStorage.getItem(STORAGE_NAME)
            }
        }).then((res) => {
            console.log(res);
            let c = 0;
            let d = res?.data?.object;
            for (let i = 0; i < d?.length; i++) {
                c += d[i].count;
            }
            console.log(c);
            setCount(c);
        });

        axios({
            method: 'get',
            url: API_URL + '/message/get-counts',
            headers: {
                Authorization: localStorage.getItem(STORAGE_NAME)
            }
        }).then((res) => {
            console.log(res);
            setCounts(res?.data?.object);
        })
    }, [n, refreshCount]);

    const getPage = (n) => {
        setIdUser(n);
        setN(n)
    }

    return (
        <div>
            <div className="nav">
                <NavTop/>
                <div className="nav-center container-fluit12">
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
                                            <Badge count={counts?.incoming} showZero>
                                                <Link to={"#"}
                                                      onClick={() => getPage(1)}>{t("Incoming requests")}</Link>
                                            </Badge>
                                        </li>
                                        <li>
                                            <Badge count={counts?.answer} showZero>
                                                <Link to={"#"}
                                                      onClick={() => getPage(2)}>{t("Responses to requests")}</Link>
                                            </Badge>
                                        </li>
                                        <li>
                                            <Link to={"#"}
                                                  onClick={() => getPage(3)}>{t("Deadline for the execution of requests")}</Link>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <Link to={"#"} onClick={() => getPage(4)}>{t("Appeals")}</Link>*/}
                                        {/*</li>*/}
                                        <li>
                                            <Link to={"#"} onClick={() => getPage(5)}>{t("Call flow")}</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"} onClick={() => getPage(6)}>{t("Your feedback")}</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}
                                                  onClick={() => getPage(7)}>{t("Legal and regulatory framework")}</Link>
                                        </li>
                                        <li>
                                            <Badge count={count} showZero>
                                                <Link to={"#"} onClick={() => getPage(8)}>{t("Message center")}</Link>
                                            </Badge>
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
            </div>
            <div className="personal-account-listnear container-fluit12" style={{paddingTop: '100px'}}>
                <div className="container12">
                    <section className="section-body">
                        <div>
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <Badge count={counts?.incoming ? counts?.incoming : 0} showZero>
                                            <li className="navbar-items" id={idUser === 1 ? 'active' : ''}>
                                                <Link to={"#"}
                                                      onClick={() => getPage(1)}>{t("Incoming requests")}</Link>
                                            </li>
                                        </Badge>
                                        <Badge count={counts?.answer ? counts?.answer : 0} showZero>
                                            <li className="navbar-items" id={idUser === 2 ? 'active' : ''}>
                                                <Link to={"#"}
                                                      onClick={() => getPage(2)}>{t("Responses to requests")}</Link>
                                            </li>
                                        </Badge>
                                        <li className="navbar-items" id={idUser === 3 ? 'active' : ''}>
                                            <Link to={"#"}
                                                  onClick={() => getPage(3)}>{t("Deadline for the execution of requests")}</Link>
                                        </li>
                                        {/*<li className="navbar-items" id={idUser === 4 ? 'active' : ''}>*/}
                                        {/*    <Link to={"#"} onClick={() => getPage(4)}>{t("Appeals")}</Link>*/}
                                        {/*</li>*/}
                                        <li className="navbar-items" id={idUser === 5 ? 'active' : ''}>
                                            <Link to={"#"} onClick={() => getPage(5)}>{t("Call flow")}</Link>
                                        </li>
                                        <li className="navbar-items" id={idUser === 6 ? 'active' : ''}>
                                            <Link to={"#"} onClick={() => getPage(6)}>{t("Your feedback")}</Link>
                                        </li>
                                        <li className="navbar-items" id={idUser === 7 ? 'active' : ''}>
                                            <Link to={"#"}
                                                  onClick={() => getPage(7)}>{t("Legal and regulatory framework")}</Link>
                                        </li>
                                        <Badge count={count ? count : 0} showZero>
                                            <li className="navbar-items" id={idUser === 8 ? 'active' : ''}>
                                                <Link to={"#"} onClick={() => getPage(8)}>{t("Message center")}</Link>
                                            </li>
                                        </Badge>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{minHeight: "75vh"}} className="content-wrapper">
                            {

                                Applications(idUser)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(PersonalAccountListener);
