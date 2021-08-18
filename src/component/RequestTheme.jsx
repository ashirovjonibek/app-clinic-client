import React from "react";
import {withTranslation} from "react-i18next";

const RequestTheme = ({t}) => {
    return (
        <div>
            <div className="request-theme">
                <div>
                    <h3>{t("Subject of the appeal")}:<span>Lorem ipsum dolor sit amet</span></h3>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">{t("Confidentially")}</label>
                </div>
            </div>
            <div className="request-content-item">
                <p>{t("Everyday practice shows that the existing structure of the organization creates need to be included in production plan for a number of extraordinary events taking into account the complex personnel training system corresponding urgent needs. Clear signs of the victory of institutionalization form the global economic network and at the same time-in are equally on their own. As well as independent states to this day day remain the lot of liberals who eager to be described in as much detail as possible.")}</p>

            </div>
        </div>
    )
}

export default withTranslation()(RequestTheme);
