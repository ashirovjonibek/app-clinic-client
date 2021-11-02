import React, {useState} from "react";
import Title from "../Title";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {FormHelperText} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {useHistory} from 'react-router-dom'
import {Loading} from "../catalog/Loading";
import {withTranslation} from "react-i18next";
import NavTop from "../Nav/NavTop";
import NavCenter from "../Nav/NavCenter";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import InputMask from 'react-input-mask'

const RequestNewPassword = ({t}) => {
    const [email,setEmail]=useState("");
    const [isSending,setIsSending]=useState(false);
    const [message,setMessage]=useState("");
    const history=useHistory();
    const sendRequest=()=>{
        setIsSending(true);
        if (email.length>0){
            axios({
                method:'post',
                url:API_URL+'/auth/resetPassword',
                params:{
                    phone:email
                }
            }).then((r)=>{
                if (r.status===200){
                    setIsSending(false);
                    setMessage(r?.data?.message);
                    history.push({
                        pathname:"/auth/login",
                        state:{
                            message:r?.data?.message
                        }
                    })
                }
            }).catch((err)=>{
                setMessage(err?.response?.data?.message);
                setIsSending(false);

            })
        }
    };

    return (
        <>
            <div className="nav" >
                <NavTop />
                <NavCenter />
                {/*<NavBottom/>*/}
            </div>
        <div className="newpassword container-fluit" >
            <div className="container" >
                <Title text={<span style={{cursor:"pointer"}} onClick={()=>{
                    history.push("/")
                }}><KeyboardBackspaceIcon titleAccess="Bosh sahifaga"  style={{marginRight:"17px",cursor:"pointer"}}/>{

                    t("Reset password")}
                        </span>} />
                <div className="form">
                    {
                        isSending?<Loading/>:
                            <>
                                <form onSubmit={(e)=>e.preventDefault()}>
                                    <ul>
                                        <FormHelperText error={true}>{message?t(message.substring(0,message.indexOf(" :")))+email:""}</FormHelperText>
                                        <li>
                                            <label className="label" htmlFor="">{t("Phone number")}</label>
                                            <InputMask mask="+\9\98(99)999 99 99" required onChange={(e)=>{setEmail(e.target.value
                                                .replaceAll(" ","")
                                                .replaceAll("(","")
                                                .replaceAll(")",""));
                                            setMessage("")
                                            }} className="input-text" type="phone" placeholder={t("Input phone number")} />
                                        </li>
                                        <li>
                                            <button onClick={sendRequest} className="btn-default">{t("Send")}</button>
                                        </li>
                                    </ul>
                                </form>
                            </>
                    }
                </div>
            </div>
        </div>
            </>
    );
}

export default withTranslation()(RequestNewPassword);
