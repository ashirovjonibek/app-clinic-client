import React, {useState, useRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {withTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME} from "../../redux/me/actionType";
import axios from "axios";
import UserName from "../UserName";


const Enter = ({t}) => {
    const me=useSelector(state => state.meReducer)
    const dispatch=useDispatch()
    const logOut = () => {
        dispatch({type:ME_DATA,data:{}})
        dispatch({type:ME_USERNAME,data:""})
        dispatch({type:ME_FULL_NAME,data:""})
        dispatch({type:ME_EMAIL,data:""})
        localStorage.removeItem(STORAGE_NAME);
    };

    useEffect(()=>{

    },[])


    return (
        <div className="enter" >
            <div className="enter-btn" style={{cursor:"pointer"}}>
                <div className="enter-img" style={{padding:"3px"}}>
                    <UserName width={"30px"} height={"30px"} fontSize={"20px"} lineHeight={"30px"} top={true} text={me.meFullName!==""?me.meFullName:me.meUsername?me.meUsername:t("Login")}/>
                </div>
                <span style={{paddingLeft:"3px",float:"left",textAlign:"left" }}> {me.meFullName!==""?me.meFullName:t("Login")}
                <p className="enter-btn-role">{me.meFullName!==""? "( "+me.me.roles[0].name+" )":""} </p>
                </span>
            </div>
            {
                me.meUsername===""?<div className="enter-content">
                    <ul>
                        <li>
                            <Link to="/auth/login">{t("Login")}</Link>
                        </li>
                        <li>
                            <Link to="/auth/registrationApplicant">{t("The applicant")}</Link>
                        </li>
                        <li>
                            <Link to="/auth/registrationListener">{t("Listener")}</Link>
                        </li>
                    </ul>
                </div>:
                <div className="enter-content" style={{height:"35px"}} >
                    <ul>
                        <li>
                            <Link onClick={logOut} to="/">{t("Go out")}</Link>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default withTranslation()(Enter);
