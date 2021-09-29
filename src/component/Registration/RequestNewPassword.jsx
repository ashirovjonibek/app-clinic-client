import React, {useState} from "react";
import Title from "../Title";
import axios from "axios";
import {API_URL} from "../../utils/constant";
import {FormHelperText} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import {useHistory} from 'react-router-dom'
import {Loading} from "../catalog/Loading";

const RequestNewPassword = () => {
    const [email,setEmail]=useState("");
    const [isSending,setIsSending]=useState(false);
    const [message,setMessage]=useState("");
    const history=useHistory();
    const sendRequest=()=>{
        setIsSending(true);
        if (email.length>0){
            axios({
                method:'post',
                url:API_URL+'/auth/resetPassword?email='+email
            }).then((r)=>{
                if (r.status===200){
                    setIsSending(false);
                    setMessage(r?.data?.message);
                    history.push({
                        pathname:"/newPassword",
                        state:{
                            message:r?.data?.message
                        }
                    })
                }
            }).catch((err)=>{
                setMessage(err?.response?.data?.message)
            })
        }
    };

    return (
        <div className="newpassword container-fluit" >
            <div className="container" >
                <Title text="Восстановление аккаунта" />
                <div className="form">
                    {
                        isSending?<Loading/>:
                            <>
                                <h3>Emailingizni yozing!!!</h3>
                                <form onSubmit={(e)=>e.preventDefault()}>
                                    <ul>
                                        <FormHelperText error={true}>{message}</FormHelperText>
                                        <li>
                                            <label className="label" htmlFor="">Email</label>
                                            <input required onChange={(e)=>setEmail(e.target.value)} className="input-text" type="email" placeholder="email" />
                                        </li>
                                        <li>
                                            <button onClick={sendRequest} className="btn-default">Yuborish</button>
                                        </li>
                                    </ul>
                                </form>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}

export default RequestNewPassword;
