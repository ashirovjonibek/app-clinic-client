import React from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";

const SupervisorReytingListnear = () => {
    return (
        <div className="supervisor-reyting-listnear-section">
            <div className="supervisor-reyting-listnear-item">
                <div className="content">
                    <div className="fedbeck">
                        <UserItem />
                        <div className="reyting-stars" >
                            <div style={{ marginRight: '10px' }}>Рейтинг:</div>
                            <Stars />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SupervisorReytingListnear;
