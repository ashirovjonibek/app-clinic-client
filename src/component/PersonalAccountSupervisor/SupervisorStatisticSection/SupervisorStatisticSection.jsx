import React, {useState} from "react";
import {Link} from "react-router-dom";
import StatisticYearCategories from "./StatisticYearCategories";
import StatisticGender from "./StatisticGender";
import StatisticOverdue from "./StatisticOverdue";
import StatisticRegions from "./StatisticRegions";
import StatisticStatus from "./StatisticStatus";
import StatisticCategories from "./StatisticCategories";
import StatisticLgots from "./StatisticLgots";
import StatisticPeriods from "./StatisticPeriods";
import {withTranslation} from "react-i18next";

const SupervisorStatisticSection = ({t}) => {

    const [statisticItem, setStatisticItem] = useState(1);

    function pushBar(n) {
        switch (n) {
            case 1:
                return <StatisticRegions/>
            case 2:
                return <StatisticYearCategories/>
            case 3:
                return <StatisticGender/>
            case 4:
                return <StatisticOverdue/>
            case 5:
                return <StatisticStatus/>
            case 6:
                return <StatisticCategories/>
            case 7:
                return <StatisticLgots/>
            case 8:
                return <StatisticPeriods/>
            default:
                return <StatisticRegions/>
        }
    }

    const getStatistic = (n) => {
        setStatisticItem(n)
    }
    const getStatisticMobile = (e) => {
        let n = parseInt(e.target.value)
        getStatistic(n)
    }

    return (
        <div className="supervisor-statistic-section">
            <div className="statistic-section-nav-top">
                <div className="nav-top-buttons">
                    <ul>
                        <li>
                            <Link to="#" onClick={() => getStatistic(1)}>{t("In the context of regions")}</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => getStatistic(2)}>{t("By age categories")}</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => getStatistic(3)}>{t("By gender")}</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="#" onClick={() => getStatistic(4)}>{t("Overdue responses")}</Link>*/}
                        {/*</li>*/}
                        {/*</ul>*/}
                        {/*</div>*/}
                        {/*<div className="nav-top-buttons">*/}
                        {/*    <ul>*/}
                        <li>
                            <Link to="#" onClick={() => getStatistic(5)}>{t("By status")}</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => getStatistic(6)}>{t("By category")}</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => getStatistic(7)}>{t("By type of benefits")}</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link onClick={() => getStatistic(8)}>{t("For periods")} </Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
            <select className="responsive-nav-top" onChange={getStatisticMobile}>
                <option className="responsive-nav-top-show" value="1">{t("In the context of regions")}</option>
                <option className="responsive-nav-top-hidden" value="2">{t("By age categories")}</option>
                <option className="responsive-nav-top-hidden" value="3">{t("By gender")}</option>
                <option className="responsive-nav-top-hidden" value="4">{t("Overdue responses")}</option>
                <option className="responsive-nav-top-hidden" value="5">{t("By status")}</option>
                <option className="responsive-nav-top-hidden" value="6">{t("By category")}</option>
                <option className="responsive-nav-top-hidden" value="7">{t("By type of benefits")}</option>
                {/*<option className="responsive-nav-top-hidden" value="8">{t("For periods")}</option>*/}
            </select>
            <div className="statistic-section-item">
                {
                    pushBar(statisticItem)
                }
            </div>
            {/*<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0 10px 0'}}>*/}
            {/*    <ButtonDefault text={t("??????????????")}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default withTranslation()(SupervisorStatisticSection);
