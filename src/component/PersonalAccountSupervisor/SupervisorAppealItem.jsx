import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";

const SupervisorAppealItem = () => {
    return (
        <div className="supervisor-appeal-item">
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
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div>
                        <Label text="Ответ:" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <InputFile />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorAppealItem;
