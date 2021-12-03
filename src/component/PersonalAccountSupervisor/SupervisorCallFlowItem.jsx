import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const SupervisorCallFlowItem = () => {
    return (
        <div className="sipervisor-call-falow-item">
            <div className="content">
                <DocumentProsses/>
                <DocumentText/>
            </div>
        </div>
    );
}

export default SupervisorCallFlowItem;
