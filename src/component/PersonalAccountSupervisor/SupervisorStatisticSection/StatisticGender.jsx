import React from "react";
import {withTranslation} from "react-i18next";
import StatisticsByGender from "./Statistics/StatisticsByGender";

const StatisticGender = ({t}) => {
    return (
        <div className="statistic-gender">
            <div className="statistic-section-item-title">
                <h5>{t("By gender of applicants")}</h5>
            </div>
            <div className="statistic-section-item-body">
                <StatisticsByGender/>

            </div>
        </div>
    );
}

export default withTranslation() (StatisticGender);
