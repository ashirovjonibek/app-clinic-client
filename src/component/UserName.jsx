import React from "react";
import {withTranslation} from "react-i18next";

const UserName = (props) => {

    function stringToHslColor(str, s, l) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        let h = hash % 360;
        return 'hsl('+h+', '+s+'%, '+l+'%)';
    }
    return (
        <>
            <div className="request-content-title-name">
                <div className="applicant-image" style={
                    {
                        width:props?.width?props?.width:"45px",
                        height:props?.height?props?.height:"45px",
                        backgroundColor:stringToHslColor(props.text?props.text:"?",50,50),
                        textAlign:"center",
                        color:"white",
                        fontWeight:600,
                        fontSize:props?.fontSize?props.fontSize:"25px",
                        lineHeight:props?.lineHeight?props.lineHeight:"38px"
                    }
                }>{props.text[0].toUpperCase()}</div>
                {!props.top?<div className="name">{props?.text}</div>:""}
            </div>
            {
                props.des?<div className="user-inform">
                    <div className="user-porofeesion">{props.t("Civil Law Expert")}</div>
                </div>:""
            }
        </>
    );
}

export default withTranslation() (UserName);
