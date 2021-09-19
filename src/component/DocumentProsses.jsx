import React from "react";
import {withTranslation} from "react-i18next";

const DocumentProsses = ({status,t}) => {
    return (
        <div className="document-prosses">
            <div className="new">
                <h3 style={{ color: "#222D44" }}>{t("New")}</h3>
                <div className="prosses-item">
                    {status==="CREATE"?<div className="prosses-item-active"></div>:<div className="prosses-item"></div>}
                </div>
            </div>
            <div className="line"></div>
            <div className="progressing">
                <h3>{t("In processing")}</h3>
                <div className="prosses-item">
                {status==="INPROCESS"?<div className="prosses-item-active bg-warning"></div>:<div className="prosses-item"></div>}
                </div>
            </div>
            <div className="line"></div>
            <div className="close">
                <h3>{t("Closed")}</h3>
                <div className="prosses-item">
                {status==="DENIED"||status==="COMPLETED"?<div className="prosses-item-active"></div>:<div className="prosses-item"></div>}
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(DocumentProsses);
