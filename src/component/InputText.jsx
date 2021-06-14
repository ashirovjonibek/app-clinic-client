import React, {useContext} from "react";
import {ListenerContext} from "../utils/ListenerContext";

const InputText = ({nameFullName, text, nameEmail, namePhone}) => {
    const {fullName, setFullName, phone, setPhone, email, setEmail} = useContext(ListenerContext);
    const handleChangeName = (e) => {
        if (nameFullName !== undefined) {
            setFullName(e.target.value)
        }
        if (nameEmail !== undefined) {
            setEmail(e.target.value)
        }
        if (namePhone !== undefined) {
            setPhone(e.target.value)
        }
    }
    return (
        <div>
            <input onChange={handleChangeName} className="input-text" type="text" placeholder={text}/>
        </div>
    );
}

export default InputText;
