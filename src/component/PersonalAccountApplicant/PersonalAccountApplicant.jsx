import React, { useState } from "react";
import Title from "../Title";
import { Link} from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";
import ApplicationNav from "./ApplicationNav";

const PersonalAccountApplicant = () => {

    const [pageQount, setPageQount] = useState(1);
    const [sitebar, setSitebar] = useState(false);
    const [appeal, setAppeal] = useState([]);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <YourAppealSection setAppeal={setAppeal}/>
            case 2:
                return <PerAccAppCallFlowSection />
            case 3:
                return <PerAccAppPeriodSection />
            case 4:
                return <PerAccAppResponseRequest appeal={appeal}/>
            case 5:
                return <SendSection />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
            <ApplicationNav getPage={getPage} setSitebar={setSitebar} sitebar={sitebar}/>
            <div className="acount-applicant container-fluit" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <Title text="Личный кабинет" />
                    <section className="section-body">
                        <div className="navbar-wrapper">
                            <div className="navbarr">
                                <ul>
                                    <li className="navbar-items ">
                                        <Link to="/applicantAppeal">Создать новое обращение</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 1 ? "active" : ""}>
                                        <Link onClick={() => getPage(1)}>Ваше обращение</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 2 ? "active" : ""}>
                                        <Link onClick={() => getPage(2)}>Статус документа</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 3 ? "active" : ""}>
                                        <Link onClick={() => getPage(3)}>Срок рассмотрения</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 4 ? "active" : ""}>
                                        <Link onClick={() => getPage(4)}>Ответы на обращения</Link>
                                    </li>
                                    <li className="navbar-items" id={pageQount === 5 ? "active" : ""}>
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
