import React from "react";
import {withTranslation} from "react-i18next";
import {green, yellow} from "@material-ui/core/colors";

const PerAccAppPeriodItem = ({item, t}) => {

    const getDayDeadline = () => {
        let a = new Date(item.deadLineDate);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s = d / (1000 * 60 * 60 * 24)
        return s > 0 ? parseInt(s) < s ? parseInt(s + 1) : s : 0;
    };

    return (
        <div>
            <div className="period-section-title">
                {t("The term for consideration of your appeal")}:
                <span
                    style={{
                        color: item.deadLineDate ? green[400] : yellow[600],
                    }}
                >
          {" "}
                    {item.deadLineDate ? item?.deadlineDay : "Belgilanmagan!!!"}{" "}
        </span>
                {t("days")}
            </div>
            <div className="content">
                <div className="period-section">
                    <div className="request-theme">
                        <div>
                            <h3>
                                {t("Subject of the appeal")}:<span style={{wordBreak: "break-all"}}>{item.title}</span>
                            </h3>
                        </div>
                    </div>
                    <hr
                        style={{
                            color: "#CACFD2",
                            backgroundColor: "#CACFD2",
                            height: 1,
                            margin: "0 0 5px 0",
                        }}
                    />
                    <div className="request-content-item">
                        <p>{item.description}</p>
                    </div>
                    <div className="bottom-inform">
                        {t("Until the end is left")}:
                        <span
                            style={{
                                color: item.deadLineDate ? green[400] : yellow[600],
                            }}
                        >
              {item.deadLineDate
                  ? getDayDeadline()
                  : "Belgilanmagan!!!"}{" "}
            </span>
                        {t("days")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(PerAccAppPeriodItem);
