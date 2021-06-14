import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";

const SupervisorResponsesRequests = () => {
    return (
        <div className="content">
            <div className="content-item"> //wewew/////ewewewe
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
                    <div>
                        <InputFile />
                    </div>
                    <div>
                        <button>Удовлетворительно</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorResponsesRequests;
