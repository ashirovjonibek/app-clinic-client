import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";

const SupervisorAppealItem = ({t}) => {
    return (
        <div className="supervisor-appeal-item">
            <div className="content">
                <UserName text="Aliyev Vali" />
                <DocumentText />
                <div className="request-categoriyes">
                    <SectionCategory />
                </div>
                <div className="content-line"/>
                <div className="request-categoriyes">
                    <UserItem />
                </div>
                <div className="request-bottom">
                    <div className="file-upload">
                        <Label text={t("Answer")+":"} />
                        <InputFile />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (SupervisorAppealItem);
