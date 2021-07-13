import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import ButtonDefault from "../../ButtonDefault";
import StatisticYearCategories from "./StatisticYearCategories";
import StatisticGender from "./StatisticGender";
import StatisticOverdue from "./StatisticOverdue";
import StatisticRegions from "./StatisticRegions";
import StatisticStatus from "./StatisticStatus";
import StatisticCategories from "./StatisticCategories";
import StatisticLgots from "./StatisticLgots";
import StatisticPeriods from "./StatisticPeriods";

const SupervisorStatisticSection = () => {

    const [statisticItem, setStatisticItem] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <StatisticRegions />
            case 2:
                return <StatisticYearCategories />
            case 3:
                return <StatisticGender />
            case 4:
                return <StatisticOverdue />
            case 5:
                return <StatisticStatus />
            case 6:
                return <StatisticCategories />
            case 7:
                return <StatisticLgots />
            case 8:
                return <StatisticPeriods />
        }
    }

    const getStatistic = (n) => {
        setStatisticItem(n)
    }

    return (
        <div className="supervisor-statistic-section">
            <div className="statistic-section-nav-top">
                <div className="nav-top-buttons">
                    <ul>
                        <li>
                            <Link onClick={() => getStatistic(1)} >В разрезе<br /> регионов </Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(2)}>По возрастным<br /> категориям </Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(3)}>По гендерном<br /> признаку </Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(4)}>Просроченные<br /> ответы </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-top-buttons">
                    <ul>
                        <li>
                            <Link onClick={() => getStatistic(5)}>По статусу </Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(6)}>По категориям </Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(7)}>По видам льгот</Link>
                        </li>
                        <li>
                            <Link onClick={() => getStatistic(8)}>За периоды </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <select className="responsive-nav-top" >
                <option className="responsive-nav-top-show">В разрезе регионов</option>
                <option className="responsive-nav-top-hidden">По возрастным категориям</option>
                <option className="responsive-nav-top-hidden">По гендерном признаку</option>
                <option className="responsive-nav-top-hidden">Просроченные ответы</option>
                <option className="responsive-nav-top-hidden">По статусу</option>
                <option className="responsive-nav-top-hidden">По категориям</option>
                <option className="responsive-nav-top-hidden">По видам льгот</option>
                <option className="responsive-nav-top-hidden">За периоды</option>
            </select>
            <div className="statistic-section-item">
                {
                    pushBar(statisticItem)
                }
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0 10px 0' }}>
                <ButtonDefault text="Экспорт" />
            </div>
        </div>
    );
}

export default SupervisorStatisticSection;
