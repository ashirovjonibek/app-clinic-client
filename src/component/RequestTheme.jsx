import React from "react";
import {withTranslation} from "react-i18next";

const RequestTheme = ({label,description,t,check}) => {
    return (
        <div>
            <div className="request-theme">
                <div>
                    <h3>{t("Subject of the appeal")}:<span>
                        {label&&label}
                    </span></h3>
                </div>
                <div>
                    <input type="checkbox" defaultChecked={check} />
                    <label htmlFor="">{t("Confidentially")}</label>
                </div>
            </div>
            <div className="request-content-item">
                <p>{description&&description}</p>

            </div>
        </div>
    )
}

export default withTranslation()(RequestTheme);
