import React from "react";
import { Link } from "react-router-dom";

const YouAppSiteBar = () => {
    return (
        <div>
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
        </div>
    );
}

export default YouAppSiteBar;
