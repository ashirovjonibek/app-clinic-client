import React from "react";
import ButtonWhite from "../ButtonWhite";
import SortDate from "../SortDate";
import UserItem from "../UserItem";

const PerAccSupListenersSection = () => {
    return (
        <div>
            <div className="listnears-section-top">
                <div className="list-generation">
                    Сгенерировать ссылку
                </div>
                <div className="send-list">
                    Отправить список <br />администратору системы
                </div>
                <SortDate />
            </div>
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

export default PerAccSupListenersSection;
