import React from "react"
import UserItem from "../UserItem";

const SupervisorIncomingRequestItem = () => {
    return (
        <div className="supervisor-incoming-request-item">
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content">
                <div className="fedbeck">
                    <UserItem />
                    <div className="count-request">
                        <div style={{ marginBottom: '15px' }}>Количество обращений:<strong>15</strong></div>
                        <div>Количество обработанных:<strong>10</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorIncomingRequestItem;
