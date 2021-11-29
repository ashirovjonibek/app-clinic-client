import React from "react";
import {withTranslation} from "react-i18next";

const SupervisorComments = ({com,t}) => {
    return (
        <div className="comments">
            <p style={{ fontSize: '17px', lineHeight: '22px' }}><strong>{t("Comment")}: </strong>{com}</p>
        </div>
    );
}

export default withTranslation()(SupervisorComments);
