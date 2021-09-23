import React from "react";
import TestStatistics from "../../../requests/TestStatistics";
import {withTranslation} from "react-i18next";
import RegionStatistics from "./Statistics/StatisticsByRegion";

const StatisticRegions = ({t}) => {
    return (
        <div className="statistic-regions">
            <div className="statistic-section-item-title">
                <h5>{t("In the context of regions (district, city, region)")}</h5>
            </div>

            <div className="statistic-section-item-body">
                <RegionStatistics/>
            </div>

        </div>
    );
}

export default withTranslation()(StatisticRegions);
