import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";
import ButtonWhite from "../ButtonWhite";

const SupervisorResponsesRequestItem = () => {
    return (
        <div className="supervisor-response-request-item">
            <div className="content">
                <UserName text="Aliyev Vali" />
                <DocumentText />
                <div style={{ marginTop: '20px' }}>
                    <SectionCategory />
                </div>
                <div className="content-line"></div>
                <div style={{ marginBottom: '20px' }}>
                    <UserItem />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div className="file-upload">
                        <Label text="Ответ:" />
                        <InputFile />
                    </div>
                    <div>
                        <ButtonWhite />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorResponsesRequestItem;
