import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router";

import CenterSends from "./CenterSends";
import DirectoryPdf from "./DirectoryPdf";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import ResponseRequestSection from "./ResponseRequestSection";
import DeadlineRequestSection from "./DeadlineRequestSection";
import PerAccLisSiteBar from "./PerAccSiteBar";
import AppealSection from "./AppealSection";
import CallFlowSection from "./CallFlowSection";
import FedbeckSection from "./FedbeckSection";
import DirectorySection from "./DirectorySection";
import SendSection from "./SendSection";
import IncomingRequestSection from "./IncomingRequestSection";
import axios from "axios";
import {Link} from "react-router-dom";
import ResponseRequestItem from "./ResponseRequestItem";
import AppealItem from "./AppealItem";


const PersonalAccountListener = (props) => {

    function Applications(n) {
        switch (n) {
            case 1:
                return <AppealSection/>
            case 2:
                return <ResponseRequestItem/>
        }
    }

    return (
        <div>
            <div className="personal-account-listnear container-fluit">
                <div className="container">
                    <section className="section-body">
                        <div>
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <li className="navbar-items active">
                                            <Link to="/">Поступившие обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/responseRequestSection">Ответы на обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/deadlineRequests">Срок исполнения обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/appeals">Обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/callFlow">Ход обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/fedbeckSection">Ваши отзывы</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="/directorySection">Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link to="sendSection">Центр сообщений</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            <IncomingRequestSection />
                           <AppealSection />
                           <CallFlowSection />
                           <ResponseRequestSection />
                           <DeadlineRequestSection /> 
                           <FedbeckSection />
                           <DirectorySection />
                           <SendSection />
                        </div>
                    </section>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default PersonalAccountListener;
