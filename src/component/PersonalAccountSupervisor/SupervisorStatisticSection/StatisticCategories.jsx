import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByCategory from "./Statistics/StatisticsByCategory";

const StatisticCategories = ({t}) => {
    return (
        <div className="statistic-categories">
            <div className="statistic-section-item-title">
                <h5>{t("By category")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByCategory/>

            </div>
        </div>
    );
}

export default withTranslation()(StatisticCategories);
