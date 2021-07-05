import React, {useState} from "react";
import NavCenter from "../Nav/NavCenter";
import {  Link } from "react-router-dom";
import ModeratorHeadsDepartmentSection from "./ModeratorHeadsDepartmentSection";
import ModeratorPerformerSection from "./ModeratorPerformerSection";
import ModeratorListnearSection from "./ModeratorListnearSection";
import ModeratorApplicantSection from "./ModeratorApplicantSection";
import ModeratorAppealSection from "./ModeratorAppealSection";
import ModeratorFedbeckRequestSection from "./ModeratorFedbeckRequestSection";
import ModeratorLegalBaseSection from "./ModeratorLegalBaseSection";
import ModeratorListnearReytingSection from "./ModeratorListnearReytingSection";
import ModeratorArchive from "./ModeratorArchive";

const PersonalAccountModerator = () => {

    const [pageQount, setPageQount] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <ModeratorHeadsDepartmentSection />

            case 2:
                return <ModeratorPerformerSection />

            case 3:
                return <ModeratorListnearSection />

            case 4:
                return <ModeratorApplicantSection />

            case 5:
                return <ModeratorAppealSection />

            case 6:
                return <ModeratorFedbeckRequestSection />

            case 7:
                return <ModeratorLegalBaseSection />

            case 8:
                return <ModeratorListnearReytingSection />

            case 9:
                return <ModeratorArchive />

        }
    }

    const getPage = (n) => {
        setPageQount(n);
    }

    return (
        <div>
            <div>
                <div className="nav">
                    <NavCenter />
                </div>
                <div className="account-moderator container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <div className="navbar-wrapper">
                                <div className="navbarr">
                                    <ul>
                                        <li className="navbar-items active">
                                            <Link onClick={() => getPage(1)}>Начальники кафедр</Link>
                                        </li>
                                        <li className="navbar-items ">
                                            <Link onClick={() => getPage(2)}>Назначение исполнителя</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(3)}>Слушатели</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(4)}>Заявители</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(5)}>Обращения</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(6)}>Отзывы обращений</Link>
                                        </li>
                                        <li className="navbar-items ">
                                            <Link onClick={() => getPage(7)}>Нормативно-правовая база</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(8)}>Рейтинг слушателей</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(9)}>Статистика и отчеты</Link>
                                        </li>
                                        <li className="navbar-items">
                                            <Link onClick={() => getPage(10)}>Архив</Link>
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

export default PersonalAccountModerator;
