import React from "react";
import {withTranslation} from "react-i18next";

const SortDate = ({t}) => {
    return (
        <form className="request-sort">
            <label htmlFor="cars">{t("Sort by")}:</label>
            <select name="cars" id="cars">
                <option value="volvo">{t("Date of creation")}</option>
                <option value="saab">{t("Period of execution")}</option>
                <option value="opel">{t("A priority")}</option>
            </select>
        </form>
    );
}

export default withTranslation()(SortDate);
