import React from "react";
import SortDate from "../SortDate";

import PerAccSupListenersItem from "./PerAccSupListenersItem";

const PerAccSupListenersSection = () => {
    return (
        <div className="peraccsup-listeners-section">
            <div className="listnears-section-top">
                <div className="list-generation">
                    Сгенерировать ссылку
                </div>
                <div className="send-list">
                    Отправить список <br />администратору системы
                </div>
                <SortDate />
            </div>
            <PerAccSupListenersItem />
        </div>
    );
}

export default PerAccSupListenersSection;
