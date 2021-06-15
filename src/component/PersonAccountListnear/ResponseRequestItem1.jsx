import React from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";

const ResponseRequestItem1 = () => {
    return (
        <div className="response-request">
            <div className="content-line" />
            <UserItem />
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
