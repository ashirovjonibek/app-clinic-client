import React from "react";
import SupervisorFeedbakRequestItem from "../PersonalAccountSupervisor/SupervisorFeedbakRequestItem";
import SupervisorFeedbakRequestItemDizz from "../PersonalAccountSupervisor/SupervisorFeedbakRequestItemDizz";

const ModeratorFedbeckRequestSection = () => {
    return (
        <div className="moderator-fedbeck-request-section">
            <SupervisorFeedbakRequestItem />
            <SupervisorFeedbakRequestItemDizz />
        </div>
    );
}

export default ModeratorFedbeckRequestSection;
