import React from "react";
import InputFile from "../InputFile";
import Label from "../Label";
import SectionCategory from "../SectionCategory";
import CheckboxConfidensial from "../CheckboxConfidensial";
import UserItem from "../UserItem";

const PerAccAppResponseRequest = () => {
    return (
        <div className="content">
            <div className="content-item">
                <div className="request-theme" style={{ marginBottom: '40px' }}>
                    <div>
                        <h3>Пришел ответ на ваше обращение от <strong>Тулкина Мирзавевича</strong></h3>
                    </div>
                </div>
                <div className="request-theme">
                    <div>
                        <h3>Тема обращения:<span>Тема</span></h3>
                    </div>
                </div>
                <div className="request-content-item">
                    <p>Повседневная практика показывает, что сложившаяся структура организации создаёт
                    необходимость включения в
                    производственный план целого ряда внеочередных мероприятий с учётом комплекса
                    системы обучения кадров, соответствующей
                    насущным потребностям. Явные признаки победы институционализации формируют
                    глобальную экономическую сеть и при этом - в
                    равной степени предоставлены сами себе. А также независимые государства и по сей
                    день остаются уделом либералов, которые
                                        жаждут быть описаны максимально подробно.</p>

                </div>
                <SectionCategory />
                <CheckboxConfidensial />
                <div className="response-request">
                    <div className="content-line" />
                    <UserItem />
                    <div className="file-upload">
                        <Label text="Ответ:" />
                        <InputFile />
                    </div>
                </div>
                <div className="answer-score">
                    <h4>Оценка ответа:</h4>
                    <div className="answer-score-button">
                        <button>Неудовлетворительно</button>
                        <button>Удовлетворительно</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppResponseRequest;
