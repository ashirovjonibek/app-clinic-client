import React from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import ResponseRequestItem2 from "./ResponseRequestItem2";
import RequestTheme from "../RequestTheme";
import UserName from "../UserName";

const ResponseRequestItem = () => {
    return (
        <div className="response-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич" />
                        <div className="id">id: 12345</div>
                    </div>
                </div>
                <RequestTheme />
                <div className="response-request">
                    <ResponseRequestItem1 />
                    <ResponseRequestItem2 />
                </div>
            </div>
        </div>

    )
}

export default ResponseRequestItem
