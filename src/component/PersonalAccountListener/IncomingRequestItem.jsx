import React from "react";
import UserName from "../UserName";

const IncomingRequestItem = ({ currentItem }) => {
    console.log(currentItem)
    return (

        <div className="incoming-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text={currentItem} />
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
                <div className="request-theme">
                    <div className="request-theme-title">
                        <h3>Тема обращения:</h3>
                        <p>{currentItem.title}</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Конфиденциально</label>
                    </div>
                </div>
                <div className="request-content-item">
                    <p>{currentItem.description}</p>
                </div>
                <div className="categories">
                    <ul>
                        <li>
                            <label htmlFor="">Категория обращения</label>
                            <div className="category-item">{currentItem.section.title.uz}</div>
                        </li>
                        <li>
                            <label htmlFor="">Файл</label>
                            <div className="file-item">Обращение. Mp4</div>
                        </li>
                    </ul>
                </div>
                <div className="request-bottom">
                    <a href="/#">Отправить модератору на замену исполнителя</a>
                    <a href="/#">Написать сообщение</a>
                </div>
                <button type="submit" className="btn-default">Назад</button>
            </div>
        </div >
    );
}

export default IncomingRequestItem;
