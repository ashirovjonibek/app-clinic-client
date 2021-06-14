import React from "react";

const UserName = (props) => {
    return (
        <div className="request-content-title-name">
            <div className="applicant-image"></div>
            <div className="name">{props.text}</div>
        </div>
    );
}

export default UserName;
