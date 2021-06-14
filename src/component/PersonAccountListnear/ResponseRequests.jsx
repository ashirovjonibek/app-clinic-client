import React from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import ResponseRequestItem2 from "./ResponseRequestItem2";
import UserName from "../UserName";

const ResponseRequest = () => {
    return (
        <div className="request-content">
            <div className="request-content-title">
                <div className="request-content-title-name">
                    <UserName text="Турсунов Тулкин Мирзаевич" />
                    <div>id: 12345</div>
                </div>
            </div>
            <div className="request-theme">
                <div>
                    <h3>Тема обращения:<span>Lorem ipsum dolor sit amet</span></h3>
                </div>
                <div>
                    <input type="checkbox" />
                    <label htmlFor="">Конфиденциально</label>
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
            <div className="category-audio"></div>
            <div className="response-request">
                <ResponseRequestItem1 />
                <ResponseRequestItem2 />
            </div>
        </div>
    )
};

export default ResponseRequest;
