import React, {useEffect, useState} from "react";
import UserItem from "../UserItem";
import {withTranslation} from "react-i18next";

const ModeratorListnearItem = (props) => {
    const [info,setInfo]=useState({});

    useEffect(()=>{
        props?.info?.map((item)=>{
            if (props.item?.id===item?.user?.id){
                setInfo(item)
            }
        })

    },[props]);

    return (
        <div className="moderator-listnear-item">
            <div className="content">
                <div className="fedbeck">
                    <UserItem p={props.item}/>
                    <div className="supervisor-center-sends-right">
                        <div className="count-request">
                            <div style={{ marginBottom: '15px' }}>{props.t("Number of appeals")}:<strong>15</strong></div>
                            <div>{props.t("Number of processed")}:<strong>{
                                info?.count>0?info?.count:0
                            }</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (ModeratorListnearItem);
