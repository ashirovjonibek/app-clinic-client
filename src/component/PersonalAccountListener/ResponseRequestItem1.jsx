import React from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";

const ResponseRequestItem1 = ({t}) => {
    return (
        <div className="response-request">
            <div className="content-line" />
            <div style={{marginBottom: '20px'}}>
                <UserItem />
            </div>
            <div className="file-upload">
                <Label text={t("Answer")+":"} />
                <InputFile />
            </div>
            <div className="button">
                <ButtonDefault text={t("Submit for review")} />
            </div>
        </div>
    );
}

export default withTranslation()(ResponseRequestItem1);
