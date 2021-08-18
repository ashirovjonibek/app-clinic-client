import React from "react";
import iconSearch from "../assets/icon/icon-search.svg";
import SortDate from "./SortDate";
import {withTranslation} from "react-i18next";

const ContentTop = ({t}) => {
    return (
        <div className="content-top">
            <div className="request-items">
                <p>{t("Incoming requests")}:</p>
                <p className="reuest-item-number">15</p>
            </div>
            <div className="request-search">
                <form role="search" method="get" action="#" className="search-form">
                    <input type="" placeholder={t("Search")+"..."} />
                    <button type=""><img src={iconSearch}
                        alt="search-icon" /></button>
                </form>
            </div>
            <SortDate />
        </div>

    );
}

export default withTranslation()(ContentTop);
