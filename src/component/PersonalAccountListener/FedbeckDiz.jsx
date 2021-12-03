import React from "react";
import Label from "../Label";
import UserName from "../UserName";

const FedbeckDiz = () => {
    return (
        <div className="content">
            <div className="fedbeck">
                <UserName text="Турсунов Тулкин Мирзаевич"/>
                <div className="request-content-title-date">
                    <button className="fedbeck-red-btn">Неудовлетворительно</button>
                </div>
            </div>
            <div className="fedbeck-content">
                <Label text="Комментарий:"/>
                <p>Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость
                    включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы
                    обучения.</p>
            </div>
        </div>
    )
}

export default FedbeckDiz;
