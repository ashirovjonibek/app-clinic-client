import React from "react";
import UserItem from "../UserItem";
import UserName from "../UserName";
import ButtonWhite from "../ButtonWhite";
import SupervisorComments from "../SupervisorComments";

const SupervisorFeedbakRequestItemDizz = () => {
    return (
        <div className="supervisor-feedbak-request-dizz">
            <div className="content">
                <UserItem />
                <div className="content-line" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <UserName text="Aliyev Valijon" />
                    <div>
                        <ButtonWhite />
                    </div>
                </div>
                <SupervisorComments />
            </div>
        </div>
    );
}

export default SupervisorFeedbakRequestItemDizz;
