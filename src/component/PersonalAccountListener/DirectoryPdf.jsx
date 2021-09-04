import React from "react";
import Label from "../Label";
import {withTranslation} from "react-i18next";

const DirectoryPdf = ({t}) => {
    return (
        <div className="directory-pdf">
            <Label text={t("Directory title")} />
            <div className="directory-file">
                <input type="file" />
            </div>
        </div>
    );
}

export default withTranslation()(DirectoryPdf);
