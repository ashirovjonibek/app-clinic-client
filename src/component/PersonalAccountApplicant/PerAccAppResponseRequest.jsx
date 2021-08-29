import React from "react";
import InputFile from "../InputFile";
import Label from "../Label";
import SectionCategory from "../SectionCategory";
import CheckboxConfidensial from "../CheckboxConfidensial";
import UserItem from "../UserItem";
import DocumentText from "../DocumentText";
import ButtonWhite from "../ButtonWhite";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const PerAccAppResponseRequest = ({appeal}) => {
    return (
        <div className="content per-acc-app-response-request">
            <div className="request-theme" style={{ marginBottom: '40px' }}>
                <div>
                    <h3>Пришел ответ на ваше обращение от <strong>Тулкина Мирзавевича</strong></h3>
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <DocumentText appeal={appeal}/>
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
                    <span style={{padding:"3px 5px",cursor:"pointer"}}>
                        <ThumbUpIcon/>
                    </span>
                    <span style={{padding:"3px 5px",cursor:"pointer"}}>
                        <ThumbDownIcon />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PerAccAppResponseRequest;
