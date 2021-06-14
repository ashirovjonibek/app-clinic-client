import React from "react";
import UserName from "../UserName";

const Fedbeck = (props) => {
    return (
        <div className="fedbeck">
            <div className="fedbeck-title">
                <UserName text="Турсунов Тулкин Мирзаевич" />
                <div className="request-content-title-date">
                    <button>Удовлетворительно</button>
                </div>
            </div>
        </div>
    )
}

export default Fedbeck;
