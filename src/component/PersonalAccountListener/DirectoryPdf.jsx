import React from "react";
import Label from "../Label";

const DirectoryPdf = () => {
    return (
        <div className="directory-pdf">
            <Label text="Название справочника" />
            <div className="directory-file">
                <input type="file" />
            </div>
        </div>
    );
}

export default DirectoryPdf;
