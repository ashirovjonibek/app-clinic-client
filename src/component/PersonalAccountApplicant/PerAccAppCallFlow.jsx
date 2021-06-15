import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const PerAccAppCallFlow = () => {
    return (

        <div className="content">
            <div className="content-item">
                <DocumentProsses />
                <DocumentText />
            </div>
        </div>
    );
}

export default PerAccAppCallFlow;
