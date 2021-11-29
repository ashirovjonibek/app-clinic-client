import React from "react";
import user1Img from "../assets/img/user1.jpg";
import {Avatar, Image} from "antd";

const UserItem = (props) => {


    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }

    return (
        <div className="user-item">
            <div className="user-person-inform">
                <Avatar style={{background:stringToHslColor(props?.p?.fullName?props?.p?.fullName:"",50,50)}} size={45} src={props?.p?.image&&<Image src={props?.p?.image}/>}>{props?.p?.fullName[0]?.toUpperCase()}</Avatar>
                <div className="user-inform">
                    <div className="user-name" style={{marginLeft:"5px"}}>{props?.p?.fullName}</div>
                    {/*<div className="user-porofeesion">{props?.p?.roles[0]?.description}</div>*/}
                </div>
            </div>

        </div>
    );
}

export default UserItem;
