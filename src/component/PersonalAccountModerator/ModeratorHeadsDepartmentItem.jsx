import React from "react";
import user1Img from "../../assets/img/user1.jpg";

const ModeratorHeadsDepartmentItem = () => {
    return (
        <div className="moderator-heads-department-item">
            <div className="content">
                <div className="fedbeck">
                    <div className="user-item">
                        <div className="user-person-inform">
                            <div className="user-img">
                                <img height="55px" width="55px" src={user1Img} alt="" />
                            </div>
                            <div className="user-inform">
                                <div className="user-name">Турсунов Тулкин Мирзаевич</div>
                            </div>
                        </div>
                    </div>
                    <div className="supervisor-applicants">
                        <div className="departmens">
                            <h6>Кафедра:<strong>Название кафедры</strong></h6>
                            <a href="/#">Редактировать данные</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModeratorHeadsDepartmentItem;
