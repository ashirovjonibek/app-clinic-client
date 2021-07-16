import React, { useState, useEffect } from "react";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import UserAppealItem from "../UserAppealItem";

const YourAppealSection = () => {

    const [appeal, setAppeal] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/application/myApplications").then(res => {
            console.log(res);
            setAppeal(res.data);
        });
    }, []);

    return (
        <div className="your-appeal-item-section">
            <UserAppealItem />
            <div className="content-line"></div>
            <div className="new-request">
                <a href="">Создать новое обращение</a>
            </div>
        </div>
    );
}

export default YourAppealSection;
