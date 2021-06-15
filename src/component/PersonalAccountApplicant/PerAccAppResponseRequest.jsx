import React from "react";
import InputFile from "../InputFile";
import Label from "../Label";
import SectionCategory from "../SectionCategory";
import CheckboxConfidensial from "../CheckboxConfidensial";
import UserItem from "../UserItem";
import DocumentText from "../DocumentText";
import ButtonWhite from "../ButtonWhite";

const PerAccAppResponseRequest = () => {
    return (
        <div className="content">
            <div className="request-theme" style={{ marginBottom: '40px' }}>
                <div>
                    <h3>Пришел ответ на ваше обращение от <strong>Тулкина Мирзавевича</strong></h3>
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <DocumentText />
            </div>
            <SectionCategory />
            <CheckboxConfidensial />
            <div className="response-request">
                <div className="content-line" />
                <div style={{ marginBottom: '20px' }}>
                    <UserItem />
                </div>
                <div className="file-upload">
                    <Label text="Ответ:" />
                    <InputFile />
                </div>
            </div>
            <div className="answer-score">
                <h4>Оценка ответа:</h4>
                <div className="answer-score-button">
                    <ButtonWhite>Неудовлетворительно</ButtonWhite>
                    <ButtonWhite>Удовлетворительно</ButtonWhite>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppResponseRequest;
