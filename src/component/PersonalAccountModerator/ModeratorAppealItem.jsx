import React from "react";
import DocumentProsses from "../DocumentProsses";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const ModeratorAppealItem = (props) => {
    let a=new Date(props.item.deadLineDate)
    let b=new Date()
    let d=new Date(a.getTime()-b.getTime())

    return (
        <div className="moderator-appeals-item">
            <div className="content">
                <DocumentProsses status={props?.item?.status} />
                <div className="request-content">
                    <div className="request-content-title">
                        <div className="request-content-title-name with-margin-20">
                            <UserName text={`${props?.item?.applicant?.fullName}`} />
                        </div>
                        <div className="request-content-title-date">
                            <div className="date-label">
                                Осталось:
                            </div>
                            <div className="date-item">
                                {d.getDate()} kun
                            </div>
                        </div>
                    </div>
                    <RequestTheme label={props?.item?.title} description={props?.item?.description}/>
                    <div className="category-audio"/>
                </div>
            </div>
        </div>
    );
}

export default ModeratorAppealItem;
