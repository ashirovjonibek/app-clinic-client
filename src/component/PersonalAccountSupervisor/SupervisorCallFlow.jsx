import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const SupervisorCallFlow = () => {
    return (
        <div className="content">
            <div className="content-item">
                <DocumentProsses />
                <DocumentText />
            </div>
            <div className="content-item">
                <DocumentProsses />
                <DocumentText />
            </div>
        </div>
    );
}

export default SupervisorCallFlow;
