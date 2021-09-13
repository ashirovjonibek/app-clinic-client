import React, {useEffect, useState} from "react"
import UserItem from "../UserItem";

const SupervisorIncomingRequestItem = (props) => {
    console.log(props.info)
    return (
        <div className="supervisor-incoming-request-item">
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props.info.listener}/>
                    <div className="count-request">
                        <div style={{ marginBottom: '15px' }}>Количество обращений:<strong>15</strong></div>
                        <div>Количество обработанных:<strong>{props.info?.counts[0]?.count}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorIncomingRequestItem;
