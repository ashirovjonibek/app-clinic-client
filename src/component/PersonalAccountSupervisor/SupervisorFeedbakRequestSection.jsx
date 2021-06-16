import React from "react";
import SupervisorFeedbakRequestItem from "./SupervisorFeedbakRequestItem";
import SupervisorFeedbakRequestItemDizz from "./SupervisorFeedbakRequestItemDizz";

const SupervisorFeedbakRequestSection = () => {
    return (
        <div className="supervisor-feedbak-request-section">
            <SupervisorFeedbakRequestItem />
            <SupervisorFeedbakRequestItemDizz />
        </div>
    );
}

export default SupervisorFeedbakRequestSection;
