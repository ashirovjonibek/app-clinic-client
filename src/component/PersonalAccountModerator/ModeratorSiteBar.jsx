import React from "react";
import { Link } from "react-router-dom";

const ModeratorSiteBar = () => {
    return (
        <div>
            <div className="navbar-wrapper">
                <div className="navbarr">
                    <ul>
                        <li className="navbar-items active">
                            <Link to="/">Начальники кафедр</Link>
                        </li>
                        <li className="navbar-items ">
                            <Link to="/moderatorPerformer">Назначение исполнителя</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorListnears">Слушатели</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorApplicants">Заявители</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorAppeals">Обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorFedbeckRequest">Отзывы обращений</Link>
                        </li>
                        <li className="navbar-items ">
                            <Link to="/moderatorLegalBase">Нормативно-правовая база</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorListnearReyting">Рейтинг слушателей</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="">Статистика и отчеты</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/moderatorArchive">Архив</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ModeratorSiteBar;
