import React, {useEffect, useState} from "react";
import {Delete, Edit} from '@material-ui/icons';
import {withTranslation} from "react-i18next";
import SettingModal from "./SettingModal";
import RequestFunctions from "../../requests/RequestFunctions";
import Swal from "sweetalert2";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "../../utils/constant";
import {apiPath} from "../../requests/apiPath";
import {configHeader} from "../../requests/congifHeader";
import CustomPagination from "../catalog/Pagenation";
import i18next from "i18next";
import {green, red} from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";

const AdminListSetting = ({t, searchTerm}) => {
    const [departments, setDepartments] = useState([
        {
            id: 0,
            title: {
                ru: "loading...",
                uz: "loading...",
                en: "loading..."
            },
            description: {
                ru: "loading...",
                uz: "loading...",
                en: "loading..."
            }
        }
    ]);
    const [links, setLinks] = useState([]);
    const [active, setActive] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [size, setSize] = useState(10);
    const [loader, setLoader] = useState(false);
    const [reset, setReset] = useState(false);
    const [forLink, setForLink] = useState({
        open: false,
        item: null,
    });

    const [error, setError] = useState({
        nameuz: false,
        nameru: false,
        nameen: false,
        urluz: false,
        urlru: false,
        urlen: false
    });
    const [item, setItem] = useState({
        nameuz: "",
        nameru: "",
        nameen: "",
        urluz: "",
        urlru: "",
        urlen: ""
    });


    useEffect(() => {
        getSections();
        return () => {
            setDepartments([]); // This worked for me
        };

    }, []);

    useEffect(() => {
        axios({
            method: 'get',
            url: API_URL + '/words?page=' + (active - 1) + '&size=' + size
        }).then((response) => {
            console.log(response);
            setLinks(response?.data?.object);
            setTotalPages(response?.data?.totalPages);

        })
    }, [active, size, reset]);

    const linkList = () => {

    };

    const getSections = () => {
        RequestFunctions.getSections()
            .then(res => {
                    setDepartments(res)
                }
            ).catch(error => {
            console.log(error)
        })
    }

    const deleteMethod = (id) => {
        Swal.fire({
            title: t("Delete") + "?",
            cancelButtonText: t("Cancel"),
            confirmButtonText: t("Delete"),
            confirmButtonColor: "red",
            showCancelButton: true,
            icon: "warning"
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios.delete(API_URL + apiPath.deleteSection + id, {
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME),
                    }
                })
                    .then(res => {
                            if (res.status === 200) {
                                Swal.fire(t("Deleted") + "", "", "success").then((r) => {
                                    getSections()
                                })
                            } else {
                                Swal.fire(t("An error occurred") + "!!!", "", "error").then((r) => {
                                    getSections()
                                })
                            }
                        }
                    ).catch(error => {
                    Swal.fire(t("An error occurred") + "!!!", "", "error").then((r) => {
                        getSections()
                    })
                })
            }
        });

    };

    const deleteLink = (id) => {
        Swal.fire({
            showCancelButton: true,
            cancelButtonText: "Yo'q",
            confirmButtonText: "Ha",
            confirmButtonColor: red[400],
            title: "Ma'lumot o'chirilsinmi",
            icon: "warning"
        }).then((confirm) => {
            if (confirm.isConfirmed) {
                axios({
                    headers: {
                        'Authorization': localStorage.getItem(STORAGE_NAME)
                    },
                    method: 'delete',
                    url: API_URL + '/words/' + id
                }).then((res) => {
                    Swal.fire("O'chirildi!!!", "", "success").then((conf) => {
                        setReset(!reset);
                    });
                })
            }
        })
    };

    return (
        <div className="admin">
            <div className="admin-list-setting">
                <SettingModal getSections={getSections}/>
                <div style={{margin: '20px 0'}}>
                    <div className="table-scroll" style={{marginTop: '10px'}}>
                        <h5 className="table-title">{t("Department")}</h5>
                        <table>
                            <tbody>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Bo'lim nomi</th>
                                <th className="table-border name-ru">Название кафедара</th>
                                <th className="table-border name-en">Department name</th>
                                {/*<th className="table-border edit">{t("Edit")}</th>*/}
                                <th className="table-border delete">{t("Delete")}</th>
                            </tr>
                            {departments && departments.filter(item => {
                                if (searchTerm === "") {
                                    return item
                                } else if (item.title["uz"].toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return item
                                }
                            }).map((item, i) =>
                                <tr key={item.id} value={item.id}>
                                    <td className="table-border ">{i + 1}</td>
                                    <td className="table-border">{item.title["uz"]}</td>
                                    <td className="table-border">{item.title["ru"]}</td>
                                    <td className="table-border">{item.title["en"]}</td>
                                    {/*<td className="table-border edit">*/}
                                    {/*    <EditIcon/>*/}
                                    {/*</td>*/}
                                    <td className="table-border delete">
                                        <button className="deleteIcon">
                                            <Delete onClick={() => deleteMethod(item.id)}/>
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="admin-list-setting" style={{
                marginTop: "5px"
            }}>
                <Dialog fullWidth={true} open={forLink.open} onClose={() => setForLink({item: null, open: false})}>
                    <h5 style={{padding: "7px", width: "100%"}} className="table-title">
                        <b>
                            {
                                forLink.item ? "Tahrirlash" : "Qo'shish"
                            }
                        </b>
                    </h5>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <table style={{padding: "7px", width: "100%"}}>
                            <thead>
                            <tr style={{padding: "7px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
                                <th style={{padding: "7px"}}>

                                </th>
                                <th style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>Name
                                </th>
                                <th style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderRight: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>Url
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{padding: "7px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <b>uz</b>
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input onChange={(e) => {
                                        setItem({
                                            ...item,
                                            nameuz: e.target.value
                                        })
                                        setError({
                                            ...error,
                                            nameuz: false
                                        })
                                    }} required={true} placeholder="Name(uz)" type="text"/>
                                    {
                                        error.nameuz ?
                                            <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""
                                    }
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)",
                                    borderRight: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input required={true} placeholder="Url(uz)" type="text"/>
                                    {
                                        error.urluz ?
                                            <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""
                                    }
                                </td>
                            </tr>
                            <tr style={{padding: "7px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <b>ru</b>
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input required={true} placeholder="Name(ru)" type="text"/>
                                    {
                                        error.nameru ?
                                            <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""
                                    }
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)",
                                    borderRight: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input required={true} placeholder="Url(ru)" type="text"/>
                                    {
                                        error.urlru ?
                                            <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""
                                    }
                                </td>
                            </tr>
                            <tr style={{padding: "7px", borderBottom: "1px solid rgba(0,0,0,0.3)"}}>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <b>en</b>
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input required={true} placeholder="Name(en)" type="text"/>
                                    {
                                        error.nameen ?
                                            <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""
                                    }
                                </td>
                                <td style={{
                                    padding: "7px",
                                    borderLeft: "1px solid rgba(0,0,0,0.3)",
                                    borderBottom: "1px solid rgba(0,0,0,0.3)",
                                    borderRight: "1px solid rgba(0,0,0,0.3)"
                                }}>
                                    <input required={true} placeholder="Url(en)" type="text"/>
                                    {error.urlen ? <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                    <div style={{
                        padding: "7px"
                    }}>
                        <button style={{
                            float: "right",
                            padding: "8px 6px",
                            backgroundColor: green[400],
                            borderRadius: "3px",
                            boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
                            color: "white"
                        }} type="submit">
                            Saqlash
                        </button>
                        <button style={{
                            float: "right",
                            padding: "8px 6px",
                            borderRadius: "3px",
                            boxShadow: "0 0 5px 0 rgba(0,0,0,0.3)",
                            marginRight: "5px"
                        }} onClick={() => setForLink({item: null, open: false})}>
                            Bekor qilish
                        </button>
                    </div>
                </Dialog>
                <div style={{margin: '20px 0'}}>
                    <div className="table-scroll" style={{marginTop: '10px'}}>
                        <h5 style={{
                            textDecoration: "underline",
                            cursor: "pointer"
                        }} onClick={() => {
                            setForLink({
                                open: true,
                                item: {}
                            })
                        }} className="table-title">
                            <span>
                                {t("Add link")}
                            </span>
                        </h5>
                        <table>
                            <tbody>
                            <tr>
                                <th className="table-border number">#</th>
                                <th className="table-border name-uz">Name</th>
                                <th className="table-border name-ru">Url</th>
                                <th className="table-border edit">{t("Edit")}</th>
                                <th className="table-border delete">{t("Delete")}</th>
                            </tr>
                            {links && links.map((item, i) =>
                                <tr key={i}>
                                    <td className="table-border ">{item.id}</td>
                                    <td className="table-border">{item.name[i18next.language]}</td>
                                    <td className="table-border">{item.url[i18next.language]}</td>
                                    <td className="table-border">
                                        <button className="editIcon">
                                            <Edit/>
                                        </button>
                                    </td>
                                    <td className="table-border delete">
                                        <button className="deleteIcon">
                                            <Delete onClick={() => deleteLink(item.id)}/>
                                        </button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <CustomPagination
                            pageLength={totalPages}
                            setActive={setActive}
                            active={active}
                            size={size}
                            setSize={setSize}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default withTranslation()(AdminListSetting);
