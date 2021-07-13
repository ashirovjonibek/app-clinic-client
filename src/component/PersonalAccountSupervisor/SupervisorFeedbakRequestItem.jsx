import React from "react";
import UserItem from "../UserItem";
import UserName from "../UserName";
import ButtonWhite from "../ButtonWhite";

const SupervisorFeedbakRequestItem = () => {
    return (
        <div className="supervisor-feedbak-request-item" style={{marginBottom: '15px'}}>
            <div className="content">
                <UserItem />
                <div className="content-line" />
                <div className='avatar'>
                    <UserName text="Aliyev Valijon" />
                    <button className="green-btn">Удовлетворительно</button>
                </div>
            </div>
        </div>
    );
}

export default SupervisorFeedbakRequestItem;
