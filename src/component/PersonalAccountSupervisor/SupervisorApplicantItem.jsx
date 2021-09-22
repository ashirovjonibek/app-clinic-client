import React from "react";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";

const SupervisorApplicantItem = (props) => {
    return (
        <div className="supervisor-applicant-item">
            <div className="content">
                <div className="fedbeck">
                    <UserName text={props?.item?.fullName} />
                    <div className="supervisor-applicants">
                        <h5 >{props.t("Priority")} №1</h5>
                        <p>{props.t("Number of appeals")}:<strong >2</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (SupervisorApplicantItem);
