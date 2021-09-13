import React, {useEffect, useState} from "react";
import UserItem from "../UserItem";

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
                            <div style={{ marginBottom: '15px' }}>Количество обращений:<strong>15</strong></div>
                            <div>Количество обработанных:<strong>{
                                info?.count>0?info?.count:0
                            }</strong></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorListnearItem;
