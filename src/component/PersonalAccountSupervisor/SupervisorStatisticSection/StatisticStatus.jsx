import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByStatus from "./Statistics/StatisticsByStatus";

const StatisticStatus = ({t}) => {
    return (
        <div className="statistic-status">
            <div className="statistic-section-item-title">
                <h5>{t("List of appeals")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByStatus/>
            </div>
        </div>
    );
}

export default withTranslation()(StatisticStatus);
