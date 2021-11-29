import React from "react";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";
import DocumentProsses from "../DocumentProsses";
import {Tag} from "antd";

const CallFlowItem = (props) => {
    const getDayDeadline=()=>{
        let a = new Date(props.item.deadLineDate);
        let b = new Date();
        let d = a.getTime() - b.getTime();
        let s=d / (1000 * 60 * 60 * 24)
        return s>0?parseInt(s)<s?parseInt(s+1):s:0;
    };
    return (
        <div className="call-flow-item">
            <div className="content">
                <DocumentProsses status={props?.item?.status}/>
                <hr/>
                <div style={{display:"inline-block"}} className="request-content-title-name">
                    <UserName text={props?.item.applicant?.fullName} />
                </div>
                <div style={{display:"inline-block",float:"right"}} className="request-content-title-date">
                    <div style={{display:"inline-block"}} className="date-label">
                        Ko'rib chiqish muddati:
                    </div>
                    <div style={{textAlign:"right",display:"inline-block"}}
                    >
                        <Tag color={getDayDeadline()>10?"green":getDayDeadline()<10&&getDayDeadline()>5?"yellow":"red"} style={{marginLeft:"5px"}} className="d-flex justify-content-center align-items-center rounded">
                            {"\t"+getDayDeadline()+" kun"}
                        </Tag>
                    </div>
                </div>
                <RequestTheme label={props?.item?.title} check={props?.item?.top}/>
            </div>
        </div>

    );
}

export default CallFlowItem;
