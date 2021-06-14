import React from "react";
import iconSearch from "../../assets/icon/icon-search.svg";
import SortDate from "../SortDate";

const PerAccLisBarContentTop = () => {
    return (
        <div className="content-top">
            <div className="request-items">
                <p>Поступивших обращений:</p>
                <p className="reuest-item-number">15</p>
            </div>
            <div className="request-search">
                <form role="search" method="get" action="#" className="search-form">
                    <input type="" placeholder="Поиск..." />
                    <button type=""><img src={iconSearch}
                        alt="search-icon" /></button>
                </form>
            </div>
            <SortDate />
        </div>

    );
}

export default PerAccLisBarContentTop;
