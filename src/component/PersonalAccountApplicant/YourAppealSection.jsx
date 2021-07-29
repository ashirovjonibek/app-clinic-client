import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import axios from "axios";
import UserAppealItem from "../UserAppealItem";
import CheckboxConfidensial from "../CheckboxConfidensial";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const YourAppealSection = () => {

    const [appeal, setAppeal] = useState([]);

    // pagination \/

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const [pageNumberLimit, setPageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(appeal.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = appeal.slice(indexOfFirstItem, indexOfLastItem)

    const renderPageNumbers = pages.map(number => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            )
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }

    // pagination /\

    useEffect(() => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            headers: {
                'Authorization': token
            },
            url: API_URL + "/application/myApplications",
            method: 'GET'
        }).then(res => {
            setAppeal(res.data.object.object)
        })
        // axios.get(API_URL + "/application/myApplications").then(res => {
        //     setAppeal(res.data.object);
        // });
    }, []);

    return (
        <div className="your-appeal-item-section">
            {appeal && appeal.slice(indexOfFirstItem, indexOfLastItem).map((item, i) =>
                <div className="content" key={i} value={item.id}>
                    <div className="document-text">
                        <div className="document-text-title">
                            <h4>Тема обращения:</h4>
                            <p>{item.title}</p>
                        </div>
                        <div className="document-text-item">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="categories">
                        <ul>
                            <li>
                                <label for="">Категория обращения</label>
                                <div className="category-item">{item.section.title.ru}</div>
                            </li>
                            <li>
                                <label for="">Файл</label>
                                <div className="file-item">{item.section.id}</div>
                            </li>
                        </ul>
                    </div>
                    <CheckboxConfidensial />
                </div>
            )}

            {/* <UserAppealItem /> */}
            <div className="content-line"></div>
            <div className="new-request">
                <a href="">Создать новое обращение</a>
            </div>
            <ul className="page-numbers">
                <li>
                    <button disabled={currentPage == pages[0] ? true : false} onClick={handlePrevbtn}>
                        <ChevronLeftIcon/>
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button onClick={handleNextbtn}>
                        <ChevronRightIcon />
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default YourAppealSection;
