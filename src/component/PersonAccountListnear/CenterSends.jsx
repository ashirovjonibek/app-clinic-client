import React from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";

const CenterSends = (props) => {
    return (
        <div>
            <div className="center-sends">
                <UserName text="Турсунов Тулкин Мирзаевич" />
                <div className="center-sends-right">
                    <div className="new">1</div>
                    <ButtonDefault text="Открыть" />
                    <p>12ч назад</p>
                </div>
            </div>
        </div>
    );
}

export default CenterSends;
