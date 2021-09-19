import React from "react";
import {withTranslation} from "react-i18next";

const   PerAccAppPeriodItem = ({item,t}) => {
    let a=new Date(item.deadLineDate)
    let b=new Date();
    let d=a.getTime()-b.getTime();
    return (
        <div>
            <div className="period-section-title">{t("The term for consideration of your appeal")}:<strong>{item?.deadlineDay} </strong>{t("days")}</div>
            <div className="content">
                <div className="period-section">
                    <div className="request-theme">
                        <div>
                            <h3>{t("Subject of the appeal")}:<span>{item.title}</span></h3>
                        </div>
                    </div>
                    <div className="request-content-item">
                        <p>{item.description}</p>
                    </div>
                    <div className="bottom-inform">
                        {t("Until the end is left")}:<strong>{parseInt(d/(1000*60*60*24))} </strong>{t("days")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(PerAccAppPeriodItem);
