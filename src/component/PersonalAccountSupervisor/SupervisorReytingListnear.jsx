import React from "react";
import UserItem from "../UserItem";
import Stars from "../Stars";

const SupervisorReytingListnear = () => {
    return (
        <div className="content">
            <div className="fedbeck">
                <UserItem />
                <div className="reyting-stars" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{marginRight: '10px'}}>Рейтинг:</div>
                    <Stars />
                </div>
            </div>
        </div>
    );
}

export default SupervisorReytingListnear;
