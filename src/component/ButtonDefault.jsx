import React from "react"

const ButtonDefault = (props) => {
    return (
        <button type={props.type} className="btn">{props.text}</button>
    );
}

export default ButtonDefault;
