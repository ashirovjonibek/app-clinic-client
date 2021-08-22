import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const PerAccAppCallFlowItem = ({appeal}) => {
    return (
        <div className="content">
            <DocumentProsses status={appeal.status}/>
            <DocumentText appeal={appeal}/>
        </div>
    );
}

export default PerAccAppCallFlowItem;
