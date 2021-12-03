import React from "react";
import Stars from "./Stars";


const ReactionStars = () => {
    return (
        <div className="user-reaction-stars">
            <div className="us-re-label">Оценка вашего ответа:</div>
            <Stars/>
        </div>
    );
}

export default ReactionStars;
