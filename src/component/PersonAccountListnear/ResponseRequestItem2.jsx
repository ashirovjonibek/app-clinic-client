import React from "react";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";
import ReactionStars from "../ReactionStars";

const ResponseRequestItem2 = () => {
    return (
        <div className="response-request-2">
            <div className="content-line" />
            <div className="user-item">
                <UserItem />
                <ReactionStars />
            </div>
            <div className="reponse-request-content">
                <Label text="Комментарий к ответу:" />
                <p>Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы институционализации.</p>
            </div>
            <div className="button">
                <ButtonDefault text="Отправить заявителю" />
            </div>
        </div>

    );
}

export default ResponseRequestItem2;
