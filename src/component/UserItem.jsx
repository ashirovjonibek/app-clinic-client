import React from "react";
import user1Img from "../assets/img/user1.jpg";

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
                <div className="user-img" style={
                    {
                        width:props?.width?props?.width:"",
                        height:props?.height?props?.height:"",
                        backgroundColor:stringToHslColor(props?.p?.fullName?props?.p?.fullName:"A",50,50),
                        textAlign:"center",
                        color:"white",
                        fontWeight:600,
                        fontSize:"25px",
                        lineHeight:"54px"
                    }
                }>{props?.p?.fullName[0]?.toUpperCase()}</div>
                <div className="user-inform">
                    <div className="user-name">{props?.p?.fullName}</div>
                    <div className="user-porofeesion">Эксперт по гражданскому праву</div>
                </div>
            </div>

        </div>
    );
}

export default UserItem;
