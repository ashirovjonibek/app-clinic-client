import React from "react";

const DocumentProsses = () => {
    return (
        <div className="document-prosses">
            <div className="new">
                <h3 style={{ color: "#222D44" }}>Новое</h3>
                <div className="prosses-item">
                    <div className="prosses-item-active"></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="progressing">
                <h3>В обработке</h3>
                <div className="prosses-item"></div>
            </div>
            <div className="line"></div>
            <div className="close">
                <h3>Закрыто</h3>
                <div className="prosses-item"></div>
            </div>
        </div>
    );
}

export default DocumentProsses;
