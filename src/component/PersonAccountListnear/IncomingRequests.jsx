import React from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import PerAccLisBarContentTop from "./PerAccLisBarContentTop";

const IncomingRequest = () => {
    return (
        <div>
            <PerAccLisBarContentTop />
            <div className="request-content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич" />
                        <div>id: 12345</div>
                    </div>
                    <div className="request-content-title-date">
                        <div className="date-label">
                            Осталось:
                                        </div>
                        <div className="date-item">
                            5 день
                                        </div>
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
                <div className="request-bottom">
                    <a href="" className="request-bottom-left">Отправить модератору на замену исполнителя</a>
                    <div className="request-bottom-right">
                        <a href="">Написать сообщение</a>
                        <ButtonDefault type="submit" text="Ответить" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomingRequest;
