import React from "react";

const Label = (props) => {
    return (
        <div>
            <label className="label" for={props.for}>{props.text}</label>
        </div>
    );
}

export default Label;
