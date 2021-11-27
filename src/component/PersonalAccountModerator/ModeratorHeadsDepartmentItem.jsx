import React from "react";
import user1Img from "../../assets/img/user1.jpg";
import {useTranslation, withTranslation} from "react-i18next";
import SimpleModal from "../Admin/SimpleModal";
import {Avatar, Image} from "antd";

const ModeratorHeadsDepartmentItem = (props) => {
    const {i18n}=useTranslation();

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    return (
        <div className="moderator-heads-department-item">
            <div className="content">
                <div className="fedbeck">
                    <div className="user-item">
                        <div className="user-person-inform">
                            {/*<div className="user-img" style={{*/}
                            {/*    backgroundColor:stringToHslColor(props?.item?.fullName,50,50),*/}
                            {/*    textAlign:"center",*/}
                            {/*    color:"white",*/}
                            {/*    fontWeight:600,*/}
                            {/*    fontSize:"35px",*/}
                            {/*}*/}
                            {/*}>*/}
                            {/*    {props.item.fullName[0].toUpperCase()}*/}
                            {/*</div>*/}
                            <Avatar src={props?.item?.image&&<Image src={props?.item?.image}/>} size={45} style={{background:stringToHslColor(props?.item?.fullName?props?.item?.fullName:"",50, 50)}} className="me-1">{props?.item?.fullName[0].toUpperCase()}</Avatar>
                            <div className="user-inform">
                                <div className="user-name">{props?.item?.fullName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="supervisor-applicants">
                        <div className="departmens">
                            <h6>{props.t("Section")}:<strong>{props?.item?.section?.title[i18n.language]}</strong></h6>
                            {/*<SimpleModal*/}
                            {/*    item={props.item}*/}
                            {/*    getListeners={props.refresh}/>*/}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default withTranslation() (ModeratorHeadsDepartmentItem);
