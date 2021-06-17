import React from "react";
import { Link } from "react-router-dom";

const PerAccSupervisorSiteBar = () => {
    return (
        <div>
            <div className="navbar-wrapper">
                <div className="navbarr">
                    <ul>
                        <li className="navbar-items active">
                            <Link to="/">Слушатели</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorIncomingRequestSection">Поступившие обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorResponsesRequestSection">Ответы на обращения </Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorApplicantSection">Заявители</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorAppeals">Обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorCallFlow">Ход обращений</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorFeedbakRequest">Отзывы по обращений </Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorDirectorySection">Нормативно-правовая база</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorReytingListnear">Рейтинг слушателей</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorStatisticSection">Статистика и отчеты</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorArchive">Архив</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PerAccSupervisorSiteBar;
