import React, { useEffect, useState, useContext } from "react";
import { Route, Switch } from "react-router";

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
import { Link } from "react-router-dom";
import ResponseRequestItem from "./ResponseRequestItem";
import AppealItem from "./AppealItem";
import { ApiContext } from "../../utils/ApiContext";
import IncomingRequestItem from "./IncomingRequestItem";


const PersonalAccountListener = (props) => {
    const [pageQount, setPageQount] = useState(1);

    const { idUser, setIdUser, currentItem } = useContext(ApiContext);
    console.log(idUser);
    console.log(currentItem)

    function Applications(n) {
        switch (n) {
            case 1:
                return <IncomingRequestSection />
            case 2:
                return <AppealSection />
            case 3:
                return <CallFlowSection />
            case 4:
                return <ResponseRequestSection />
            case 5:
                return <DeadlineRequestSection />
            case 6:
                return <FedbeckSection />
            case 7:
                return <DirectorySection />
            case 8:
                return <SendSection />
            case 9:
                return <IncomingRequestItem currentItem={currentItem} />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
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
                                            <Link onClick={() => getPage(1)}>Поступившие обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(2)}>Ответы на обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(3)}>Срок исполнения обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(4)}>Обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(5)}>Ход обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(6)}>Ваши отзывы</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(7)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(8)}>Центр сообщений</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {

                                Applications(pageQount > idUser ? pageQount : idUser)
                            }
                        </div>
                    </section>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default PersonalAccountListener;
