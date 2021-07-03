import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const DeadlineRequestItem = () => {
    return (
        <div className="deadline-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич" />
                        <div className="id">id: 12345</div>
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                                        </div>
                        <div className="date-item">
                            5 день
                                        </div>
                    </div>
                </div>
                <RequestTheme />
            </div>
        </div>
    );
}

export default DeadlineRequestItem;
