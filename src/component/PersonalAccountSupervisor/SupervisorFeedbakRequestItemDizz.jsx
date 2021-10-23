import React from "react";
import UserItem from "../UserItem";
import UserName from "../UserName";
import SupervisorComments from "../SupervisorComments";
import {withTranslation} from "react-i18next";
import i18next from "i18next";

const SupervisorFeedbakRequestItemDizz = ({t,item}) => {
    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    return (
        <div className="supervisor-feedbak-request-dizz">
            <div className="content">
                <div className="user-item">
                    <div className="user-person-inform">
                        <div className="user-img" style={
                            {
                                backgroundColor:stringToHslColor(item.listenerName,50,50),
                                textAlign:"center",
                                color:"white",
                                fontWeight:600,
                                fontSize:"25px",
                                lineHeight:"54px"
                            }
                        }>{item.listenerName[0]?.toUpperCase()}</div>
                        <div className="user-inform">
                            <div className="user-name">{item.listenerName}</div>
                            <div className="user-porofeesion">{item?.section?.title[i18next.language]} bo'limi xodimi</div>
                        </div>
                    </div>

                </div>
                <div className="content-line" />
                <div className="avatar">
                    <UserName text={item.applicantName} />
                    <button className="red-btn">{t("Unsatisfactory")}</button>
                </div>
                <SupervisorComments com={item?.comment} />
            </div>
        </div>
    );
}

export default withTranslation() (SupervisorFeedbakRequestItemDizz);
