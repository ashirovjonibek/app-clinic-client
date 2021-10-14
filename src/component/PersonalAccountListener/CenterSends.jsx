import React, {useState} from "react";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import {withTranslation} from "react-i18next";

const CenterSends = (props) => {

    const [openMessaage, setOpenMessaage] = useState(false);

    return (
        <div>
            <div className="new">
                <div className="new-item">1</div>
            </div>
            <div className="content">
                <div className="fedbeck">

                    <UserName text={"Aliyev Vali Galievich"} fedbeck={"fedbeck"}/>

                    <div className="fedbeck-right">
                        <ButtonDefault text={openMessaage ? props.t("Close") : props.t("Open")}
                                       setOpenMessaage={setOpenMessaage} openMessaage={openMessaage}/>
                    </div>
                </div>

                {openMessaage && <div className="message-content">
                    <div className="message-paragrapgh">
                        <p>
                            Повседневная практика показывает, что сложившаяся структура организации создаёт
                            необходимость включения в производственный ?
                        </p>
                    </div>
                    <div className="message-input">
                        <input type="text" placeholder="Введите ваше сообщение"/>
                    </div>

                </div>}

                <div className="message-hours">
                    <p className="hours">12ч назад</p>
                </div>

            </div>
        </div>
    );
}

export default withTranslation()(CenterSends);
