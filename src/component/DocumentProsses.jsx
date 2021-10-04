import React from "react";
import {withTranslation} from "react-i18next";

const DocumentProsses = ({status,t}) => {
    return (
        <div className="document-prosses" >
            <div className="new">
                <h3 style={{ color: "#222D44" }}>{t("New")}</h3>
                <div className="prosses-item"
                     style={ status==="CREATED"? {backgroundColor:"#29B6F6", borderColor:"#78909C"} : {backgroundColor:"#ffffff"}}>
                    {/*{status==="CREATED"?<div style={{backgroundColor:"#78909C"}} className="prosses-item-active bg-warning"/>:<div className="prosses-item"/>}*/}
                </div>
            </div>
            <div className="line" style={ {backgroundColor:"#CFD8DC"}}/>
            <div className="progressing">
                <h3>{t("In processing")}</h3>
                <div className="prosses-item" style={ status==="INPROCESS"? {backgroundColor:"#76FF03", borderColor:"#76FF03"} : {backgroundColor:"#ffffff"}}>
                {/*{status==="INPROCESS"?<div style={{backgroundColor:"#76FF03"}} className="prosses-item-active bg-warning"/>:<div className="prosses-item"/>}*/}
                </div>
            </div>
            <div className="line" style={ {backgroundColor:"#CFD8DC"}}/>
            <div className="close">
                <h3>{t("Closed")}</h3>
                <div className="prosses-item" style={ status==="DENIED"||status==="COMPLETED" ? {backgroundColor:"#D50000", borderColor:"#D50000"} : {backgroundColor:"#ffffff"}}>
                {/*{status==="DENIED"||status==="COMPLETED"?<div style={{backgroundColor:"#D50000"}}  className="prosses-item-active"/>:<div className="prosses-item"/>}*/}
                </div>
            </div>
        </div>
    );
}

export default withTranslation()(DocumentProsses);
