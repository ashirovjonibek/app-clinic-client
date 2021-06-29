import React from "react";
import Title from "../Title";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";
import { Link, Route, Switch } from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";
import Login from "../Registration/Login";

const PersonalAccountApplicant = () => {
    function pushBar(n) {
        switch (n) {
            case 1:
                return <Login />
            case 2:
                return <Login />
            case 3:
                return <Login />
            case 4:
                return <Login />
            case 5:
                return <Login />
        }
    }

    return (
        <div>
            <div className="acount-applicant container-fluit">
                <div className="container">
                    <Title text="Личный кабинет" />
                    <section className="section-body">
                        <div className="navbar-wrapper">
                            <div className="navbarr">
                                <ul>
                                    <li className="navbar-items active">
                                        <Link to="/">Ваше обращение</Link>
                                    </li>
                                    <li className="navbar-items ">
                                        <Link to="/perAccAppCallFlow">Статус документа</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link to="/perAccAppPeriodSection">Срок рассмотрения</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link to="/perAccAppResponseRequest">Ответы на обращения</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link to="/sendSection">Центр сообщений</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {/* {
                                pushBar(2)
                            } */}
                            {/* <YourAppealSection /> */}
                            <PerAccAppCallFlowSection />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountApplicant;
