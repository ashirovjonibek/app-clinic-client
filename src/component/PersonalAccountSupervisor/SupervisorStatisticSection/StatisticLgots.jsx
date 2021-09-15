import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsBySocialStatus from "./Statistics/StatisticsBySocialStatus";

const StatisticLgots = ({t}) => {

    return (
        <div className="statistic-lgots">
            <div className="statistic-section-item-title">
                <h5>{t("By types of benefits available to applicants")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsBySocialStatus/>
            </div>
        </div>
    );
}

export default withTranslation()(StatisticLgots);
