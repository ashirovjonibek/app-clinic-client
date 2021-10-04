import React from "react";
import DocumentProsses from "../DocumentProsses";
import DocumentText from "../DocumentText";

const PerAccAppCallFlowItem = ({appeal}) => {
    return (
        <div className="content"
             style={
                 appeal.status === "CREATED" ? {borderTop: "solid 15px #29B6F6"} :
                     appeal.status === "INPROCESS" ? {borderTop: "solid 15px #76FF03"} :
                         appeal.status === "DENIED" || appeal.status === "COMPLETED" ?
                             {borderTop: "solid 15px #D50000"} :
                             {borderTop: "#ffffff"}
             }
        >
            <DocumentProsses status={appeal.status}/>
            <DocumentText appeal={appeal}/>
        </div>
    );
}

export default PerAccAppCallFlowItem;
