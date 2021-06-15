import React from "react";
import iconStar from "../assets/icon/icon-star.svg";

const Stars = () => {
    return (
        <div className="stars">
            <img height="20px" width="20px" src={iconStar} alt="" />
            <img height="20px" width="20px" src={iconStar} alt="" />
            <img height="20px" width="20px" src={iconStar} alt="" style={{ opacity: '0.6' }} />
            <img height="20px" width="20px" src={iconStar} alt="" style={{ opacity: '0.6' }} />
            <img height="20px" width="20px" src={iconStar} alt="" style={{ opacity: '0.6' }} />
        </div>
    );
}

export default Stars;
