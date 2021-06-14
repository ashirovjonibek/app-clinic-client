import React from "react";
import { Link } from "react-router-dom";

const PerAccLisSiteBar = () => {
    return (
        <div>
            <div className="navbar-wrapper">
                <div className="navbarr">
                    <ul>
                        <li className="navbar-items active">
                            <Link to="/">Поступившие обращения</Link>
                        </li>
                        <li className="navbar-items">
                            <Link to="/responseRequests">Ответы на обращения</Link>
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
    );
}

export default PerAccLisSiteBar;
