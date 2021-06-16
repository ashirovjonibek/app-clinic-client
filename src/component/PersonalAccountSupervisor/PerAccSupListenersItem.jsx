import React from "react";
import ButtonWhite from "../ButtonWhite";
import UserItem from "../UserItem";

const PerAccSupListenersItem = () => {
    return (
        <div className="peraccsup-listnears-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem />
                    <div className="fedbeck-right">
                        <div>
                            <ButtonWhite>Включить</ButtonWhite>
                            <ButtonWhite>Включить</ButtonWhite>
                        </div>
                        <div className="redaction-date">
                            <a href="">Редактировать данные</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccSupListenersItem;
