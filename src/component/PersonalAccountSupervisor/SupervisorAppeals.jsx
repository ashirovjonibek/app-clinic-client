import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import ContentTop from "../ContentTop";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";

const SupervisorAppeals = () => {
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
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div>
                        <Label text="Ответ:" />
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <InputFile />
                    </div>
                </div>
            </div>
            <div className="content-item">
                <UserName text="Aliyev Vali" />
                <DocumentText />
                <div style={{ marginTop: '20px' }}>
                    <SectionCategory />
                </div>
                <div className="content-line"></div>
                <UserItem />
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

export default SupervisorAppeals;
