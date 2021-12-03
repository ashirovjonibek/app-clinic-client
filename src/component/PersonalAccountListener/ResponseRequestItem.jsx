import React from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import ResponseRequestItem2 from "./ResponseRequestItem2";
import RequestTheme from "../RequestTheme";
import UserName from "../UserName";
import Label from "../Label";
import ButtonDefault from "../ButtonDefault";
import {withTranslation} from "react-i18next";

const ResponseRequestItem = ({t}) => {
    return (
        <div className="response-request-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text="Турсунов Тулкин Мирзаевич"/>
                        <div className="id">id: 12345</div>
                    </div>
                </div>
                <RequestTheme/>
                <div className="request-theme">
                    <div>
                        <h3>{t("Subject of the appeal")}:<span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque deleniti deserunt dolorem dolores, impedit ipsa quas qui ratione tempore! Aliquid cumque dolorem enim, esse labore mollitia repellat sint tempore?
                    </span></h3>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={true}/>
                        <label htmlFor="">{t("Confidentially")}</label>
                    </div>
                </div>
                <div className="request-content-item">
                    <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores beatae
                        deleniti dolorum eligendi error minima modi nam nostrum vel. Aperiam autem doloribus, esse
                        labore nam nobis perspiciatis suscipit voluptatum.</p>

                </div>
                <div className="response-request">
                    {/*<ResponseRequestItem2 />*/}
                    <div className="reponse-request-content">
                        <Label text="Комментарий к ответу:"/>
                        <p>Повседневная практика показывает, что сложившаяся структура организации создаёт необходимость
                            включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса
                            системы обучения кадров, соответствующей насущным потребностям. Явные признаки победы
                            институционализации.</p>
                    </div>
                    <div className="button">
                        <ButtonDefault text="Отправить заявителю"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withTranslation()(ResponseRequestItem)
