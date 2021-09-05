import React from "react";
import ResponseRequestItem1 from "./ResponseRequestItem1";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const AppealItem = (props) => {
    return (
        <div className="appeal-item">
            <div className="content">
                <div className="request-content-title">
                    <div className="request-content-title-name">
                        <UserName text={props?.item?.applicant?.fullName} />
                    </div>
                </div>
                <RequestTheme label={props?.item?.title} description={props?.item?.description} check={props?.item?.top} item={[props?.item]}/>
                {/*<div className="category-audio"></div>*/}
                <div className="response-request">
                    <ResponseRequestItem1 id={props?.item?.id} />
                </div>
            </div>
        </div>
    );
}

export default AppealItem;
