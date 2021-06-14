import React from "react";

const Title = (props) => {
    return (
        <div className="title">
            <h4 className="title-text">{props.text}</h4>
            <div className="title-bottom-line"></div>
        </div>
    );
}

export default Title;
