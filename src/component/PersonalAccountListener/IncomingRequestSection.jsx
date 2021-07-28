import React, { useState, useEffect } from "react";
import { API_URL, STORAGE_NAME } from "../../utils/constant";
import axios from "axios";
import ContentTop from "../ContentTop";
import IncomingRequestItem from "./IncomingRequestItem";
import ButtonDefault from "../ButtonDefault";
import UserName from "../UserName";
import RequestTheme from "../RequestTheme";

const IncomingRequestSection = () => {

    const [request, setRequest] = useState([]);

    useEffect(() => {
        const token=localStorage.getItem(STORAGE_NAME);
        axios({
            headers:{
                'Authorization':token
    },
            url: API_URL +"/application/myApplications",
            method:'GET'
        }).then(res=>{
            console.log(res)
        })
        // axios.get(API_URL + "/application/myApplications").then(res => {
        //     setRequest(res.data.object);
        //     console.log(res.data);
        // });
    }, []);

    // pagination \/

    const [page, setPage] = useState();
    const [size, setSize] = useState();
    const [paginations, setPaginations] = useState();
    const [pagination, setPagination] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [totalPages, setTotalPages] = useState();

    const getNewsPegeable = (page) => {
        this.setState({ currentPage: page + 1 })
        request({
                    url: API_URL + "/application/myApplications",
            method: 'GET',
            data: {
                page: page,
                size: size
            }
        }).then(res => {
            if (res.success) {
                this.setState({
                    news: res.content,
                    totalPages: res.totalPages,
                    size: res.size,
                    page: res.number,
                    paginations: pagination(res.pageable.pageNumber, res.totalPages)
                });
            }

        });
    }

    function pegination(page, totalPages) {
        let res = [];
        let from = 1;
        let to = totalPages;
        if (totalPages > 10) {
            from = Math.max(page - 2, 1);
            to = Math.max(Math.min(page + 2, totalPages), 5);
            if (to > 5) {
                res.push(1);
                if (from > 2) res.push(2);
                if (from > 3) {
                    if (from === 4) {
                        res.push(3);
                    } else {
                        res.push("...");
                    }
                }
            }
        }
        for (let i = from; i <= to; i++) {
            res.push(i);
        }

        if (totalPages > 10) {
            if (to < (totalPages - 2)) {
                if (to === 8) {
                    res.push(9);
                } else {
                    res.push("...");
                }
            }
            if (to < totalPages)
                res.push(totalPages - 1);
            if (to !== totalPages)
                res.push(totalPages);
        }
        return res;

    }

    // pagination /\

    return (
        <div className="incoming-request-section">
            <ContentTop />
            {request && request.map((item, i) =>
                <div className="incoming-request-item" key={i} value={item.id}>
                    <div className="content">
                        <div className="request-content-title">
                            <div className="request-content-title-name">
                                <UserName text="Турсунов Тулкин Мирзаевич" />
                                <div className="id">id: 12345</div>
                            </div>
                            <div className="request-content-title-date">
                                <div className="date-label">
                                    Осталось:
                                </div>
                                <div className="date-item">
                                    5 день
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="request-theme">
                                <div>
                                    <h3>Тема обращения:<span>{item.title}</span></h3>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label htmlFor="">Конфиденциально</label>
                                </div>
                            </div>
                            <div className="request-content-item">
                                <p>{item.description}</p>
                            </div>
                        </div>
                        {/* <RequestTheme /> */}
                        <div className="category-audio"></div>
                        <div className="request-bottom">
                            <a href="">Отправить модератору на замену исполнителя</a>
                            <a href="">Написать сообщение</a>
                            <ButtonDefault type="submit" text="Ответить" />
                        </div>
                    </div>
                </div>
            )}
            <nav className="pagination">
                <ul>
                    <li><a href="#1" onClick={page === 0 ? (e) => (e.preventDefault()) : () => getNewsPegeable(0)}>{"<<"}</a></li>
                    <li><a href="#1" onClick={page === 0 ? (e) => (e.preventDefault()) : () => getNewsPegeable(page - 1)}>{"<"}</a></li>
                    {paginations && paginations.map(i =>
                        <li key={i} className={currentPage === (i) ? "current" : ''}><a href="#1" onClick={page === (i - 1) || i === '...' ? (e) => (e.preventDefault()) : () => getNewsPegeable(i - 1)}>{i}</a></li>
                    )}
                    <li><a href="#1" onClick={(totalPages - 1) === page ? (e) => (e.preventDefault()) : () => getNewsPegeable(page + 1)} >{'>'}</a></li>
                    <li><a href="#1" onClick={(totalPages - 1) === page ? (e) => (e.preventDefault()) : () => getNewsPegeable(totalPages - 1)} >{'>>'}</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default IncomingRequestSection;


