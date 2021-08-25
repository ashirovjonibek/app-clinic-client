import React from "react";
import UserItem from "../UserItem";

const PerAccSupListenersItem = (props) => {
    return (
        <div className="peraccsup-listnears-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem />
                    <div className="fedbeck-right">
                        <div>
                            <button className="button-white">Включить</button>
                            <button className="button-white" style={{borderColor: 'white', marginLeft: '10px'}}>Включить</button>
                        </div>
                        <div className="redaction-date">
                            <a href="/#">Редактировать данные</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccSupListenersItem;
