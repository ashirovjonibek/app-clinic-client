import React from "react";
import user1Img from "../assets/img/user1.jpg";

const UserItem = () => {
    return (
        <div className="user-item">
            <div className="user-person-inform">
                <div className="user-img">
                    <img height="55px" width="55px" src={user1Img} alt="" />
                </div>
                <div className="user-inform">
                    <div className="user-name">Турсунов Тулкин </div>
                    <div className="user-porofeesion">Эксперт по гражданскому праву</div>
                </div>
            </div>

        </div>
    );
}

export default UserItem;
