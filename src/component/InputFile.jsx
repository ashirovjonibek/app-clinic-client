import React from "react"

const InputFile = ({text}) => {
    return (
        <div className="file">
            {text}
            <input type="file" />
        </div>
    );
};

export default InputFile;
