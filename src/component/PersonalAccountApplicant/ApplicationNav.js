import React, {useState} from "react";
import NavTop from "../Nav/NavTop";
import MenuIcon from "@material-ui/icons/Menu";
import iconLogo from "../../assets/icon/icon-logo.svg";
import iconSearch from "../../assets/icon/icon-search.svg";
import NavLanguage from "../Nav/NavLanguage";
import iconGlass from "../../assets/icon/icon-glass.svg";
import Enter from "../Nav/Enter";
import {Link} from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import {withTranslation} from "react-i18next";

const ApplicationNav=(props)=>{
    const [showMenuIcon,setShowMenuIcon]=useState(false);

    window.addEventListener('resize',()=>{
       if (window.innerWidth<750){
           setShowMenuIcon(true)
       }else {
           setShowMenuIcon(false)
       }
    });

    return(
        <div className="nav">
            <NavTop />
            <div className="nav-center container-fluit">
                <div className="container">
                    <div className="navbar">
                        <div className="menu-icon" >
                           <MenuIcon
                                fontSize={'large'}
                                onClick={() => props.setSitebar(!props.sitebar)}/>
                        </div>
                        <div className="header-logo">
                            <a href="#">
                                <div className="logo-left">
                                    <img src={iconLogo} alt="logo" />
                                </div>
                                <div className="logo-right">
                                    <div>
                                        <span><strong>{props.t("Legal clinic")}</strong></span><br />
                                        {props.t("Academy of the General Prosecutor's Office of the Republic of Uzbekistan")}
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className="header-right">
                            <div className="header-right-desctop">
                                <form role="search" method="get" action="#" className="search-form">
                                    <input type="" placeholder={props.t("Search")+"..."} />
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
                <div className="desctop-navigation" id={props.sitebar ? "show-navigation" : ""}>
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
                                        <Link to="/applicantAppeal" onClick={()=>props.getPage(0)}>{props.t("Create a new appeal")}</Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => props.getPage(1)}>{props.t("Your appeal")}</Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => props.getPage(2)}>{props.t("Document status")}</Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => props.getPage(3)}>{props.t("Consideration period")}</Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => props.getPage(4)}>{props.t("Responses to requests")}</Link>
                                    </li>
                                    <li>
                                        <Link to="#" onClick={() => props.getPage(5)}>{props.t("Message center")}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="icon-disable">
                                <CloseIcon
                                    fontSize={'large'}
                                    style={{ color: 'white' }}
                                    onClick={() => props.setSitebar(!props.sitebar)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default withTranslation()(ApplicationNav)
