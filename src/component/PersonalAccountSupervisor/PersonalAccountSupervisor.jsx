import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavCenter from "../Nav/NavCenter";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorIncomingRequestSection from "./SupervisorIncomingRequestSection";
import SupervisorResponsesSection from "./SupervisorResponsesRequestSection";
import SupervisorApplicantItem from "./SupervisorApplicantItem";
import SupervisorAppealSection from "./SupervisorAppealSection";
import SupervisorCallFlowSection from "./SupervisorCallFlowSection";
import SupervisorFeedbakRequestSection from "./SupervisorFeedbakRequestSection";
import SupervisorDirectorySection from "./SupervisorDirectorySection";
import SupervisorReytingListnear from "./SupervisorReytingListnear";
import SupervisorArchive from "./SupervisorArchive";
import SupervisorApplicantSection from "./SupervisorApplicantSection";
import SupervisorStatisticSection from "./SupervisorStatisticSection/SupervisorStatisticSection";

const PersonalAccountSupervisor = () => {

    const [pageQount, setPageQount] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <PerAccSupListenersSection />
            case 2:
                return <SupervisorIncomingRequestSection />
            case 3:
                return <SupervisorResponsesSection />
            case 4:
                return <SupervisorApplicantSection />
            case 5:
                return <SupervisorAppealSection />
            case 6:
                return <SupervisorCallFlowSection />
            case 7:
                return <SupervisorFeedbakRequestSection />
            case 8:
                return <SupervisorDirectorySection />
            case 9:
                return <SupervisorReytingListnear />
            case 10:
                return <SupervisorStatisticSection />
            case 11:
                return <SupervisorArchive />
        }
    }

    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
            <div>
                {/* <div className="nav">
                    <NavCenter />
                </div> */}
                <div className="personal-account-supervisor container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <li className="navbar-items active">
                                            <Link onClick={() => getPage(1)}>Слушатели</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(2)}>Поступившие обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(3)}>Ответы на обращения </Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(4)}>Заявители</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(5)}>Обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(6)}>Ход обращений</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(7)}>Отзывы по обращений </Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(8)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(9)}>Рейтинг слушателей</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(10)}>Статистика и отчеты</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(11)}>Архив</Link>
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
        </div>
    );
}

export default PersonalAccountSupervisor;
