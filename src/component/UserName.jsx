import React, {useState} from "react";
import {withTranslation} from "react-i18next";
import {API_URL} from "../utils/constant";
import Dialog from "@material-ui/core/Dialog";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
const UserName = (props) => {
    const [open,setOpen]=useState(false);
    const me=useSelector(state => state.meReducer);
    const history = useHistory()

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
                        overflow:"hidden",
                        fontWeight:600,
                        fontSize:props?.fontSize?props.fontSize:"25px",
                        lineHeight:!props?.avatar?props?.lineHeight?props.lineHeight:"38px":""
                    }
                }>
                    {props.avatar?
                    <img onClick={()=>setOpen(true)} src={API_URL+props.avatar} width={"100%"} height={"100%"} alt=""/>
                    : props.text[0].toUpperCase()}
                </div>
                {!props.top?<div className="name" onClick={()=>{
                    history.push(me.role[1])
                }}>{props?.text}</div>:""}
            </div>
            {
                props.des?<div className="user-inform">
                    <div className="user-porofeesion">{props.t("Civil Law Expert")}</div>
                </div>:""
            }
            <Dialog fullWidth={true} open={open}
                    onClose={() => setOpen(false)}>
                <div style={{width:"100%",position:"relative"}}>
                                        <span style={{backgroundColor:"rgba(0,0,0,0.4)",position:"absolute",margin:"10px",color:"white",fontSize:"20px",right:0,cursor:"pointer"}}
                                              onClick={() => setOpen(false)}
                                        >
                                            <b>X</b></span>
                </div>
                <div style={{padding: "1px"}}>
                    {props.avatar? <img width="100%" height="100%"
                                                           src={API_URL + props?.avatar}
                                                           alt=""/> : ""}
                </div>
            </Dialog>
        </>
    );
}

export default withTranslation() (UserName);
