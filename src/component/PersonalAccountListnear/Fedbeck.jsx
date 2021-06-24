import React from "react";
import ButtonWhite from "../ButtonWhite";
import UserName from "../UserName";

const Fedbeck = (props) => {
    return (
        <div className="content">
            <div className="fedbeck">
                <UserName text="Турсунов Тулкин Мирзаевич" />
                <div className="request-content-title-date">
                    <ButtonWhite />
                </div>
            </div>
        </div>

    )
}

export default Fedbeck;
