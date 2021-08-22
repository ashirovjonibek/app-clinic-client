
import React from "react";

const DocumentText = ({appeal}) => {
    return (
        <div className="document-text">
            <div className="document-text-title">
                <h4>Тема обращения:</h4>
                <p>{appeal?.title}</p>
            </div>
            <div className="document-text-item">
                {
                    appeal?.description
                }
            </div>
        </div>

    );
}

export default DocumentText;
