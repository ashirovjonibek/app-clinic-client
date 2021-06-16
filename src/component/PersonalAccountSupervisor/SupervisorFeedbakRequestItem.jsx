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
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <UserName text="Aliyev Valijon" />
                    <div>
                        <ButtonWhite />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupervisorFeedbakRequestItem;
