import React from "react"
import UserItem from "../UserItem";

const SupervisorIncomingRequests = () => {
    return (
        <div>
            <div className="content">
                <div className="fedbeck">
                    <UserItem />
                    <div className="supervisor-center-sends-right">
                        <div className="new">1</div>
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

export default SupervisorIncomingRequests;
