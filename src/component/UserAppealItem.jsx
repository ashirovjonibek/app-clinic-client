import React from "react";
import CheckboxConfidensial from "./CheckboxConfidensial";
import SectionCategory from "./SectionCategory";

const UserAppealItem = () => {
    return (
        <form className="content-item">
            <div className="theme">
                <label for="">Тема обращения:</label>
                <input className="theme-request" type="text" placeholder="Введите тему обращения"/>
            </div>
            <textarea name="" id="" cols="30" rows="10"
                      placeholder="Введите тему обращения"/>
            <SectionCategory/>
            <CheckboxConfidensial/>
        </form>
    );
}

export default UserAppealItem;
