import React, {useState, useRef, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import enterImg from '../../assets/img/enter-img.svg'
import {withTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME} from "../../redux/me/actionType";
import axios from "axios";
import TestRequests from "../../requests/TestRequests";


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
        if (localStorage.getItem(STORAGE_NAME)){
            const token=localStorage.getItem(STORAGE_NAME)
            axios({
                url: API_URL + '/auth/me',
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            }).then((res)=>{
                console.log(res)
                // dispatch({type:ME_DATA,data:res.data.object})
                // dispatch({type:ME_USERNAME,data:res.data.object.username})
                // dispatch({type:ME_EMAIL,data:res.data.object.email})
                // dispatch({type:ME_FULL_NAME,data:res.data.object.fullName})

            })
        }

    },[])
    const getRed=()=>{
        console.log(me)
    }
    return (
        <div className="enter" >
            <div className="enter-btn" onClick={getRed} style={{cursor:"pointer"}}>
                <div className="enter-img">
                    <img src={enterImg} alt="enter img"/>
                </div>
                {me.meFullName!==""?me.meFullName:t("Login")}
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
