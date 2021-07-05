import React from "react";
import DocumentText from "../DocumentText";
import Label from "../Label";
import InputFile from "../InputFile";
import SectionCategory from "../SectionCategory";
import UserItem from "../UserItem";
import UserName from "../UserName";

const SupervisorResponsesRequestItem = () => {
    return (
        <div className="supervisor-response-request-item">
            <div className="content">
                <UserName text="Aliyev Vali" />
                <DocumentText />
                <div className="request-categoriyes">
                    <SectionCategory />
                </div>
                <div className="content-line"></div>
                <div className="request-categoriyes">
                    <UserItem />
                </div>
                <div className="request-bottom">
                    <div className="file-upload">
                        <Label text="Ответ:" />
                        <InputFile />
                    </div>
                    <div>
                        <button className="green-btn">Удовлетворительно</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorResponsesRequestItem;
