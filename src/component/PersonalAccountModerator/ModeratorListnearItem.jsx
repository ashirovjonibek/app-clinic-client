import React from "react";
import UserItem from "../UserItem";

const ModeratorListnearItem = (props) => {
    return (
        <div className="moderator-listnear-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props.item}/>
                    <div className="supervisor-center-sends-right">
                        <div className="count-request">
                            <div style={{ marginBottom: '15px' }}>Количество обращений:<strong>15</strong></div>
                            <div>Количество обработанных:<strong>10</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorListnearItem;
