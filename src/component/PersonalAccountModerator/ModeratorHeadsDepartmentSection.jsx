import React from "react";
import SortDate from "../SortDate";
import ModeratorHeadsDepartmentItem from "./ModeratorHeadsDepartmentItem";

const ModeratorHeadsDepartmentSection = () => {
    return (
        <div className="moderator-heads-department-section">
            <div className="listnears-section-top">
                <div className="send-list">
                    Отправить список <br />администратору системы
                </div>
                <SortDate />
            </div>
            <ModeratorHeadsDepartmentItem />
        </div>
    );
}

export default ModeratorHeadsDepartmentSection;
