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
                <div className='avatar'>
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
