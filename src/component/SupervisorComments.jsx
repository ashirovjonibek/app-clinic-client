import React from "react";

const SupervisorComments = ({com}) => {
    return (
        <div className="comments">
            <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px' }}>Комментарий:</h6>
            <p style={{ fontSize: '14px', lineHeight: '22px' }}>{com}</p>
        </div>
    );
}

export default SupervisorComments;
