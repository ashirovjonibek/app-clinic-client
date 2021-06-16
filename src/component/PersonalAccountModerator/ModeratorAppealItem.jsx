import React from "react";
import ContentTop from "../ContentTop";
import DocumentProsses from "../DocumentProsses";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const ModeratorAppealItem = () => {
    return (
        <div className="moderator-appeals-item">
            <div className="content">
                <DocumentProsses />
                <div className="request-content">
                    <div className="request-content-title">
                        <div className="request-content-title-name">
                            <UserName text="Турсунов Тулкин Мирзаевич" />
                            <div>id: 12345</div>
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
                    <div className="category-audio"></div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorAppealItem;
