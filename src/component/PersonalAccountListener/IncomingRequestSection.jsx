import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import ContentTop from "../ContentTop";
import IncomingRequestItem from "./IncomingRequestItem";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const IncomingRequestSection = () => {

    const [request, setRequest] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/application/myApplications").then(res => {
            setRequest(res.data.object);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="incoming-request-section">
            <ContentTop />
            {request && request.map((item, i) =>
                <div className="incoming-request-item" key={i} value={item.id}>
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
                        <div>
                            <div className="request-theme">
                                <div>
                                    <h3>Тема обращения:<span>{item.title}</span></h3>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Конфиденциально</label>
                                </div>
                            </div>
                            <div className="request-content-item">
                                <p>{item.description}</p>
                            </div>
                        </div>
                        {/* <RequestTheme /> */}
                        <div className="category-audio"></div>
                        <div className="request-bottom">
                            <a href="">Отправить модератору на замену исполнителя</a>
                            <a href="">Написать сообщение</a>
                            <ButtonDefault type="submit" text="Ответить" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IncomingRequestSection;
