
import React from "react";
import {withTranslation} from "react-i18next";

const DocumentText = ({appeal,t,type}) => {
    return (
        <div className="document-text">
            {type!=="answer"?<div className="document-text-title">
                <h4>{t("Subject of the appeal")}:</h4>
                <p>{appeal?.title}</p>
            </div>:""}
            <div className="document-text-item">
                {
                    appeal?.description
                }
            </div>
        </div>

    );
}

export default withTranslation()(DocumentText);
