import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import UserAppealItem from "../UserAppealItem";
import CheckboxConfidensial from "../CheckboxConfidensial";

const YourAppealSection = () => {

    const [appeal, setAppeal] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/application/myApplications").then(res => {
            setAppeal(res.data.object);
            console.log(res.data.object)
        });
    }, []);

    return (
        <div className="your-appeal-item-section">
            {appeal && appeal.map((item, i) =>
                <div className="content" key={i} value={item.id}>
                    <div className="document-text">
                        <div className="document-text-title">
                            <h4>Тема обращения:</h4>
                            <p>{item.title}</p>
                        </div>
                        <div className="document-text-item">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="categories">
                        <ul>
                            <li>
                                <label for="">Категория обращения</label>
                                <div className="category-item">{item.section.title.ru}</div>
                            </li>
                            <li>
                                <label for="">Файл</label>
                                <div className="file-item"></div>
                            </li>
                        </ul>
                    </div>
                    <CheckboxConfidensial />
                </div>
            )}

            {/* <UserAppealItem /> */}
            <div className="content-line"></div>
            <div className="new-request">
                <a href="">Создать новое обращение</a>
            </div>
        </div>
    );
}

export default YourAppealSection;
