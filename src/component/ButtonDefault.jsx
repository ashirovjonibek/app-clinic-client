import React from "react"

const ButtonDefault = (props) => {
    return (
        <button type={props.type} onClick={() =>{
            props.setOpenMessaage(!props.openMessaage);
            // props?.scrollTo();
        }}
                className="btn-default">{props.text}</button>
    );
}

export default ButtonDefault;
