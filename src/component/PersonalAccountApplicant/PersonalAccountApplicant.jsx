import React, { useState } from "react";
import Title from "../Title";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";
import { Link, Route, Switch } from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";

const PersonalAccountApplicant = () => {

    const [pageQount, setPageQount] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <YourAppealSection />
            case 2:
                return <PerAccAppCallFlowSection />
            case 3:
                return <PerAccAppPeriodSection />
            case 4:
                return <PerAccAppResponseRequest />
            case 5:
                return <SendSection />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
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
                                        <Link onClick={() => getPage(1)}>Ваше обращение</Link>
                                    </li>
                                    <li className="navbar-items ">
                                        <Link onClick={() => getPage(2)}>Статус документа</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link onClick={() => getPage(3)}>Срок рассмотрения</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link onClick={() => getPage(4)}>Ответы на обращения</Link>
                                    </li>
                                    <li className="navbar-items">
                                        <Link onClick={() => getPage(5)}>Центр сообщений</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-wrapper">
                            {
                                pushBar(pageQount)
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountApplicant;
