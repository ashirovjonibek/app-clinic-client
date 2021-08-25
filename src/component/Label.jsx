import React from "react";

const Label = (props) => {
    return (
        <div>
            <label className="label" htmlFor={props.for}>{props.text}</label>
        </div>
    );
}

export default Label;
