import React from "react";
import UserAppealItem from "../UserAppealItem";

const YourAppelSection = () => {
    return (
        <div>
            <UserAppealItem />
            <UserAppealItem />
            <div className="content-line"></div>
            <div className="new-request">
                <a href="">Создать новое обращение</a>
            </div>
        </div>
    );
}

export default YourAppelSection;
