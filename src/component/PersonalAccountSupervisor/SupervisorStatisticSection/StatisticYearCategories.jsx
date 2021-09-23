import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByAge from "./Statistics/StatisticsByAge";

const StatisticYearCategories = ({t}) => {
    return (
        <div className="statistic-year-categories">
            <div className="statistic-section-item-title">
                <h5>{t("By age categories of applicants")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByAge/>

            </div>
        </div>
    );
}

export default withTranslation() (StatisticYearCategories);
