import React from "react"
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";

const SupervisorIncomingRequestItem = (props) => {
    // console.log(props.info)
    return (
        <div className="supervisor-incoming-request-item">
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props.info.listener}/>
                    <div className="count-request">
                        <div style={{ marginBottom: '15px' }}>{props.t("Number of appeals")}:<strong>15</strong></div>
                        <div>{props.t("Number of processed")}:<strong>{props.info?.counts[0]?.count}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (SupervisorIncomingRequestItem);
