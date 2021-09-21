import React, {useEffect, useState} from "react";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";

const ModeratorApplicantItem = (props) => {
    const [info,setInfo]=useState({});

    useEffect(()=>{
        props?.info?.map((item)=>{
            if (props?.item?.id===item?.user?.id){
                setInfo(item);
            }
        })

    },[props]);

    console.log(info)
    return (
        <div className="moderator-applicant-item">
            <div className="content">
                <div className="fedbeck">
                    <UserName text={props.item.fullName} />
                    <div className="supervisor-applicants">
                        <h5 >{props.t("Priority")} №1</h5>
                        <p>{props.t("Number of appeals")}:<strong >{
                            info?.count>0?info?.count:0
                        }</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation() (ModeratorApplicantItem);
