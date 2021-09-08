import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import DocumentProsses from "../DocumentProsses";

const CallFlowItem = (props) => {
    return (
        <div className="call-flow-item">
            <div className="content">
                <DocumentProsses status={props?.item?.status}/>
                <div style={{display:"inline-block"}} className="request-content-title-name">
                    <UserName text={props?.item.applicant?.fullName} />
                </div>
                <div style={{display:"inline-block",float:"right"}} className="request-content-title-date">
                    <div style={{display:"inline-block"}} className="date-label">
                        Ko'rib chiqish muddati:
                    </div>
                    <div style={{textAlign:"right",display:"inline-block"}}
                        // style={{backgroundColor: new Date(
                        //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime()))
                        //                                          .getDate()>10?"#63AA55":new Date(
                        //                                          (new Date().getTime())-(new Date().getTime())).getDate()<=10&&new Date(
                        //                                          (new Date(item.deadLineDate).getTime())-(new Date().getTime())).getDate()>5?"#FBCE0E":"#d80027"}}
                        //                                        className="date-item"
                    >
                        {" "+props?.item?.deadLineDate} gacha
                    </div>
                </div>
                <RequestTheme label={props?.item?.title} check={props?.item?.top}/>
            </div>
        </div>

    );
}

export default CallFlowItem;
