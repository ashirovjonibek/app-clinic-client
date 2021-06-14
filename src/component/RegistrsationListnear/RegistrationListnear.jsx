import React, {useState} from "react";
import ButtonDefault from "../ButtonDefault";
import InputCategoriya from "../InputCategoriya";
import InputText from "../InputText";
import Label from "../Label";
import Title from "../Title";
import {ListenerContext} from "../../utils/ListenerContext";
import axios from "axios";

function RegistrationListnear(props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    const [category, setCategory] = useState('');
    const [position, setPosition] = useState('');
    const [chair, setChair] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        console.log(fullName)
        console.log(position)
        console.log(course)
        console.log(chair)
        console.log(phone)
        console.log(email)
        axios.post("/api/auth/create", {fullName, position, course, chair, phone, email}).then(res => console.log(res))

    }
    return (
        <div className="registration-listnear container-fluit">
            <div className="container">
                <div className="registration-listnear-wrapper">
                    <Title text="Регистрация"/>
                    <h5>Анкетные данные</h5>
                    <ListenerContext.Provider
                        value={{
                            fullName,
                            setFullName,
                            email,
                            setEmail,
                            address,
                            setAddress,
                            setCategory,
                            category,
                            setCourse,
                            course,
                            setPosition,
                            position,
                            setChair,
                            chair,
                            phone,
                            setPhone
                        }}>
                        <form onSubmit={handleSave}>
                            <div className="form-wrapper">
                                <ul className="form">
                                    <li className="form-first">
                                        <ul>
                                            <li>
                                                <Label for="" text="Ф.И.О"/>
                                                <InputText nameFullName={"fullName"} text="Введите ваше Ф.И.О"/>
                                            </li>
                                            <li>
                                                <Label for="" text="Должность"/>
                                                <InputCategoriya namePosition={"position"} for=""
                                                                 text=" Выберите ваш должность"/>
                                            </li>
                                            <li>
                                                <Label for="" text="Курс"/>
                                                <InputCategoriya nameCourse={"course"} for=""
                                                                 text="Выберите ваш курс если учитесь"/>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="form-last">
                                        <ul>
                                            <li>
                                                <Label for="" text="Кафедра"/>
                                                <InputCategoriya nameChair={"chair"} for="" text="Выберите кафедру"/>
                                            </li>
                                            <li>
                                                <Label for="" text="Телефон"/>
                                                <InputText namePhone={"phone"} text="+998 (__) ___-__-__"/>
                                            </li>
                                            <li>
                                                <Label for="" text="Почта"/>
                                                <InputText nameEmail={"email"} text="Введите вашу почту"/>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div style={{margin: '20px 0 0 auto'}}>
                                    <ButtonDefault type="submit" text="Регистрация"/>
                                </div>

                            </div>
                        </form>
                    </ListenerContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default RegistrationListnear;
