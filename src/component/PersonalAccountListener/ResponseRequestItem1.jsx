import React from "react";
import InputFile from "../InputFile";
import ButtonDefault from "../ButtonDefault";
import Label from "../Label";
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";

const ResponseRequestItem1 = ({t}) => {
    return (
        <div className="response-request">
            <div className="content-line" />
            <div>
                <Label text={t("Answer")+":"} />
                <textarea style={
                    {
                        border:"1px solid rgba(0,0,0,0.3)",
                        width:"100%",
                        borderRadius:"5px",
                        minHeight:"75px",
                        maxHeight:"85px",
                        marginBottom:"3px",
                        padding:"6px"
                    }
                }
                placeholder="Javob matnini kiriting"
                >

                </textarea>
            </div>
            <div className="button">
                <ButtonDefault text={t("Submit for review")} />
            </div>
        </div>
    );
}

export default withTranslation()(ResponseRequestItem1);
