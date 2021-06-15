import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";
import ButtonWhite from "../ButtonWhite";

const SupervisorResponsesRequests = () => {
    return (
        <div className="content">
            <div className="content-item">
                <UserName text="Aliyev Vali" />
                <DocumentText />
                <div style={{ marginTop: '20px' }}>
                    <SectionCategory />
                </div>
                <div className="content-line"></div>
                <UserItem />
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
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

export default SupervisorResponsesRequests;
