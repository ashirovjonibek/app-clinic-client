import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import UserItem from "../UserItem";
import ButtonDefault from "../ButtonDefault";

const ModeratorPerformerItem = () => {
    return (
        <div className="moderator-performer-item">
            <div className="content">
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
                <div className="content-line"></div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <UserItem />
                    <ButtonDefault text="Заменить исполнителя" />
                </div>
            </div>
        </div>
    );
}

export default ModeratorPerformerItem;