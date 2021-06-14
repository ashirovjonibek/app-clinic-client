import React from "react";
import UserAppealItem from "../UserAppealItem";

const YourAppeal = () => {
    return (
        <div>
            <div className="content">
                <UserAppealItem />
                <UserAppealItem />
            </div>
            <div className="content-line"></div>
            <div className="new-request">
                <a href="">Создать новое обращение</a>
            </div>
        </div>
    );
}

export default YourAppeal;
