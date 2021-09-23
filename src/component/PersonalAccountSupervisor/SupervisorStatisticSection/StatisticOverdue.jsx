import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByOverdue from "./Statistics/StatisticsByOverdue";

const StatisticOverdue = ({t}) => {
    return (
        <div className="statistic-overdue">
            <div className="statistic-section-item-title">
                <h5>{t("Overdue responses")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByOverdue/>

            </div>

        </div>
    );
}

export default withTranslation()(StatisticOverdue);
