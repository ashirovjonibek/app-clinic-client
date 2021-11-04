import React, {useEffect, useState} from "react";
import iconSearch from "../assets/icon/icon-search.svg";
import {withTranslation} from "react-i18next";
import axios from "axios";
import {API_URL} from "../utils/constant";

const ContentTop = (props) => {
    const {count, t, appealFilter, setAppealFilter, role} = props

    const [sections, setSections] = useState([]);

    useEffect(() => {
        axios.get(API_URL + "/section").then(res => {
            setSections(res.data);
        })
    }, [appealFilter])

    const handleChange = (e) => {
        setAppealFilter({
            ...appealFilter,
            [e.target.name]: e.target.name === "sectionId" ? parseInt(e.target.value) : e.target.value
        });
    }

    return (
        <div className="content-top">
            {
                role === "listener" ? "" :
                    <>
                        <div className="request-items">
                            <select onChange={handleChange} id="sectionId" name="sectionId"
                                    className="category" required>
                                <option value="0">{t("Filter by department")}</option>
                                {sections && sections?.map((item, i) =>
                                    <option key={i} value={item.id}>{item.title.uz}</option>
                                )}
                            </select>
                        </div>
                        <div className="request-items" style={{marginBottom:"10px"}}>
                            <select onChange={handleChange} id="sectionId" name="status"
                                    className="category" required>
                                <option value="ALL">{t("Filter by status")}</option>
                                <option value="CREATED">{t("Created")}</option>
                                <option value="INPROCESS">{t("Inprocess")}</option>
                                <option value="COMPLETED">{t("Completed")}</option>
                            </select>
                        </div>
                    </>
            }

            <div className="request-search">
                <form role="search" method="get" action="#" className="search-form">
                    <input type="text"
                           name="search"
                           value={appealFilter.search ? appealFilter.search : ""}
                           onChange={handleChange}
                           placeholder={t("Search") + "..."}/>
                    <button type="" disabled><img src={iconSearch}
                                                  alt="search-icon"/></button>
                </form>
            </div>


            {/*<SortDate />*/}

        </div>

    );
}

export default withTranslation()(ContentTop);
