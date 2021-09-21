import React from "react";
import UserItem from "../UserItem";
import UserName from "../UserName";
import SupervisorComments from "../SupervisorComments";
import {withTranslation} from "react-i18next";

const SupervisorFeedbakRequestItemDizz = ({t}) => {
    return (
        <div className="supervisor-feedbak-request-dizz">
            <div className="content">
                <UserItem />
                <div className="content-line" />
                <div className="avatar">
                    <UserName text="Aliyev Valijon" />
                    <button className="red-btn">{t("Unsatisfactory")}</button>
                </div>
                <SupervisorComments />
            </div>
        </div>
    );
}

export default withTranslation() (SupervisorFeedbakRequestItemDizz);
