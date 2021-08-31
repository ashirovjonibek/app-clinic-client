import React from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";

const ModeratorListnearReytingItem = () => {
    return (
        <div className="moderator-listnear-reyting-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem />
                    <div className="reyting-stars">
                        <div style={{ marginRight: '10px' }}>Рейтинг:</div>
                        <Stars />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorListnearReytingItem;
