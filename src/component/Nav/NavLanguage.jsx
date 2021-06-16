import React from "react";
import "../../assets/scss/language-select.css";

const NavLanguage = () => {
    return (
        <div className="navlanguage">
            <div className="navlanguage-item uzb-item">UZB</div>
            <div className="navlanguage-content">
                <a href="#" className="uzb-item">УЗБ</a>
                <a href="#" className="rus-item">РУС</a>
                <a href="#" className="ang-item">ANG</a>
            </div>
        </div>
    );
}

export default NavLanguage;
