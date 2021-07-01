import React from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const IncomingRequestItem = () => {
    return (
        <div className="incoming-request-item">
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
                <div className="category-audio"></div>
                <div className="request-bottom">
                    <a href="">Отправить модератору на замену исполнителя</a>
                    <a href="">Написать сообщение</a>
                    <ButtonDefault type="submit" text="Ответить" />
                </div>
            </div>
        </div>
    );
}

export default IncomingRequestItem;
