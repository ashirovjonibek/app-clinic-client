import React from "react";
import UserName from "../UserName";

const ModeratorApplicantItem = () => {
    return (
        <div className="moderator-applicant-item">
            <div className="content">
                <div className="fedbeck">
                    <UserName text="Турсунов Тулкин Мирзаевич" />
                    <div className="supervisor-applicants">
                        <h5 >Приоритет №1</h5>
                        <p>Количество обращений:<strong >2</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorApplicantItem;
