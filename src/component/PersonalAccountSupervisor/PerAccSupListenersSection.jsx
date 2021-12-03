import React, {useEffect, useState} from "react";
import SortDate from "../SortDate";

import PerAccSupListenersItem from "./PerAccSupListenersItem";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import axios from "axios";
import {withTranslation} from "react-i18next";
import CustomPagination from "../catalog/Pagenation";

const PerAccSupListenersSection = ({t}) => {
    const [listeners, setListeners] = useState();
    let token = localStorage.getItem(STORAGE_NAME);
    const [size, setSize] = useState(5);
    const [active, setActive] = useState(1);
    const [totalEl, setTotalEl] = useState();
    const [totalPage, setTotalPage] = useState();
    useEffect(() => {
        const config = {
            method: 'get',
            url: API_URL + '/auth/listeners?page' + (active - 1) + '&size=' + size,
            headers: {
                'Authorization': token
            }
        };
        axios(config)
            .then(function (response) {
                setListeners(response?.data?.object)
                setTotalEl(response?.data?.totalElements);
                setTotalPage(response?.data?.totalPages);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const refresh = () => {
        const config = {
            method: 'get',
            url: API_URL + '/auth/listeners',
            headers: {
                'Authorization': token
            }
        };
        axios(config)
            .then(function (response) {
                setListeners(response?.data?.object)
                setTotalEl(response?.data?.totalElements);
                setTotalPage(response?.data?.totalPages);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="peraccsup-listeners-section">
            {/*<div className="listnears-section-top">*/}
            {/*    <div className="list-generation">*/}
            {/*        {t("Generate link")}*/}
            {/*    </div>*/}

            {/*    <SortDate />*/}
            {/*</div>*/}
            {
                listeners && listeners.map((item, i) =>
                    <PerAccSupListenersItem key={i} refresh={refresh} item={item}/>
                )
            }
            {
                totalEl > 5 ?
                    <CustomPagination
                        pageLength={totalPage}
                        active={active}
                        setActive={setActive}
                        size={size}
                        setSize={setSize}
                    /> : ""
            }
        </div>
    );
}

export default withTranslation()(PerAccSupListenersSection);
