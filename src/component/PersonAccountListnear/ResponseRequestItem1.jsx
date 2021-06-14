import React from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import user1Img from "../../assets/img/user1.jpg";

const ResponseRequestItem1 = () => {
    return (
        <div className="response-request">
            <div className="content-line" />
            <div className="user-item">
                <div className="user-person-inform">
                    <div className="user-img">
                        <img height="55px" width="55px" src={user1Img} alt="" />
                    </div>
                    <div className="user-inform">
                        <div className="user-name">Турсунов Тулкин Мирзаевич</div>
                        <div className="user-porofeesion">Эксперт по гражданскому праву</div>
                    </div>
                </div>

            </div>
            <div className="file-upload">
                <Label text="Ответ:" />
                <InputFile />
            </div>
            <div className="button">
                <ButtonDefault text="Отправить на рассмотрение" />
            </div>
        </div>
    );
}

export default ResponseRequestItem1;
