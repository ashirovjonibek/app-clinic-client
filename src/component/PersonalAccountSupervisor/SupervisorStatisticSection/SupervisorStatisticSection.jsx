import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ButtonDefault from "../../ButtonDefault";
import StatisticCategories from "./StatisticCategories";
import StatisticRegions from "./StatisticRegions";

const SupervisorStatisticSection = () => {
    return (
        <div className="supervisor-statistic-section">
            <div className="statistic-section-nav-top">
                <div className="nav-top-buttons">
                    <ul>
                        <li>
                            <Link>В разрезе<br /> регионов </Link>
                        </li>
                        <li>
                            <Link>По возрастным<br /> категориям </Link>
                        </li>
                        <li>
                            <Link>По гендерном<br /> признаку </Link>
                        </li>
                        <li>
                            <Link>Просроченные<br /> ответы </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-top-buttons">
                    <ul>
                        <li>
                            <Link>По статусу </Link>
                        </li>
                        <li>
                            <Link>По категориям </Link>
                        </li>
                        <li>
                            <Link>По видам льгот</Link>
                        </li>
                        <li>
                            <Link>За периоды </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="statistic-section-item">
                {/* <StatisticRegions /> */}
                <StatisticCategories />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0 10px 0' }}>
                <ButtonDefault text="Экспорт" />
            </div>
        </div>
    );
}

export default SupervisorStatisticSection;
