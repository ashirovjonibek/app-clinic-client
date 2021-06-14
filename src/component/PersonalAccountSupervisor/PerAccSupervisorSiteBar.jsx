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
                            <Link to="/supervisorIncomingRequests">Поступившие обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/supervisorResponsesRequests">Ответы на обращения </Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/perAccAppResponseRequest">Заявители</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/sendSection">Обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/perAccAppCallFlow">Ход обращений</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/perAccAppPeriodSection">Отзывы по обращений </Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/perAccAppResponseRequest">Нормативно-правовая база</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/sendSection">Рейтинг слушателей</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/perAccAppResponseRequest">Статистика и отчеты</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/sendSection">Архив</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PerAccSupervisorSiteBar;
