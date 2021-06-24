import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import DocumentProsses from "../DocumentProsses";

const CallFlowItem = () => {
    return (
        <div className="call-flow-item">
            <div className="content">
                <DocumentProsses />
                <UserName text="Турсунов Тулкин Мирзаевич" />
                <RequestTheme />
            </div>
        </div>

    );
}

export default CallFlowItem;
