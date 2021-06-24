import React from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const AppealItem = () => {
    return (
        <div className="appeal-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич" />
                        <div>id: 12345</div>
                    </div>
                </div>
                <RequestTheme />
                <div className="category-audio"></div>
                <div className="response-request">
                    <ResponseRequestItem1 />
                </div>
            </div>
        </div>
    );
}

export default AppealItem;
