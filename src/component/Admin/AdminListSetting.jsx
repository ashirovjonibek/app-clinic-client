import React, {useEffect, useState} from "react";
import {Delete, Edit, Visibility, VisibilityOff} from '@material-ui/icons';
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
import DirectoryPdf from "../PersonalAccountListener/DirectoryPdf";
import DirectorySection from "../PersonalAccountListener/DirectorySection";

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
    const [maxMin, setMaxMin] = useState({
        section: false,
        link: false,
        files: false
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

    const saveLink = (method) => {
        if (
            item.nameuz &&
            item.nameru &&
            item.nameen &&
            item.urluz &&
            item.urlru &&
            item.urlen
        ) {
            console.log(item, method)
            setForLink({
                ...forLink,
                open: false
            })
            Swal.fire({
                confirmButtonColor: green[400],
                confirmButtonText: "Ha",
                cancelButtonText: "Yo'q",
                cancelButtonColor: red[400],
                title: (item.id ? "Tahrirlash " : "Ma'lumot ") + "saqlansinmi!!!",
                icon: "warning"
            }).then((confirm) => {
                if (confirm.isConfirmed) {
                    axios({
                        method: method,
                        url: API_URL + '/words',
                        data: item
                    }).then((response) => {
                        Swal.fire("Ma'lumot saqlandi!!!", "", "success").then((conf) => {
                            setReset(!reset);
                            setItem(
                                {
                                    nameuz: "",
                                    nameru: "",
                                    nameen: "",
                                    urluz: "",
                                    urlru: "",
                                    urlen: ""
                                }
                            )
                        });
                        console.log(response)
                    }).catch((e) => {
                        Swal.fire("Xatolik yuz berdi!!!", "", "error").then((conf) => {
                            setForLink({
                                ...forLink,
                                open: true
                            })
                        });
                    })
                }
            })
        } else {
            let a = {};
            if (!item.nameuz) {
                a = {
                    ...a,
                    nameuz: true
                }
            }
            if (!item.nameru) {
                a = {
                    ...a,
                    nameru: true
                }
            }
            if (!item.nameen) {
                a = {
                    ...a,
                    nameen: true
                }
            }
            if (!item.urluz) {
                a = {
                    ...a,
                    urluz: true
                }
            }
            if (!item.urlru) {
                a = {
                    ...a,
                    urlru: true
                }
            }
            if (!item.urlen) {
                a = {
                    ...a,
                    urlen: true
                }
            }
            console.log(a);
            setError(a)

        }
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
            <div className="admin-list-setting ">
                <span style={{color: maxMin.section ? red[400] : green[400]}} onClick={() => setMaxMin({
                    ...maxMin,
                    section: !maxMin.section
                })}>
                    {
                        maxMin.section ? <VisibilityOff/> : <Visibility/>
                    }
                </span>
                <SettingModal getSections={getSections}/>
                <div style={{margin: '20px 0', display: maxMin.section ? "" : "none"}}>
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
            <div className="admin-list-setting " style={{
                marginTop: "5px"
            }}>
                <span style={{color: maxMin.link ? red[400] : green[400]}} onClick={() => setMaxMin({
                    ...maxMin,
                    link: !maxMin.link
                })}>
                    {
                        maxMin.link ? <VisibilityOff/> : <Visibility/>
                    }
                </span>
                <Dialog fullWidth={true} open={forLink.open} onClose={() => {
                    setForLink({item: null, open: false})
                    setError(
                        {
                            nameuz: false,
                            nameru: false,
                            nameen: false,
                            urluz: false,
                            urlru: false,
                            urlen: false
                        }
                    )
                    setItem({
                        nameuz: "",
                        nameru: "",
                        nameen: "",
                        urluz: "",
                        urlru: "",
                        urlen: ""
                    })
                }}>
                    <h5 style={{padding: "7px", width: "100%"}} className="table-title">
                        <b>
                            {
                                item.id ? "Tahrirlash" : "Qo'shish"
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
                                    <input value={item.nameuz} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            nameuz: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            nameuz: false
                                        });
                                        else setError({
                                            ...error,
                                            nameuz: true
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
                                    <input value={item.urluz} required={true} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            urluz: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            urluz: false
                                        });
                                        else setError({
                                            ...error,
                                            urluz: true
                                        })
                                    }} placeholder="Url(uz)" type="text"/>
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
                                    <input value={item.nameru} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            nameru: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            nameru: false
                                        });
                                        else setError({
                                            ...error,
                                            nameru: true
                                        })

                                    }} required={true} placeholder="Name(ru)" type="text"/>
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
                                    <input value={item.urlru} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            urlru: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            urlru: false
                                        });
                                        else setError({
                                            ...error,
                                            urlru: true
                                        })
                                    }} required={true} placeholder="Url(ru)" type="text"/>
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
                                    <input value={item.nameen} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            nameen: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            nameen: false
                                        });
                                        else setError({
                                            ...error,
                                            nameen: true
                                        })
                                    }} required={true} placeholder="Name(en)" type="text"/>
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
                                    <input value={item.urlen} onChange={(e) => {
                                        setItem({
                                            ...item,
                                            urlen: e.target.value
                                        })
                                        if (e.target.value.length > 0) setError({
                                            ...error,
                                            urlen: false
                                        });
                                        else setError({
                                            ...error,
                                            urlen: true
                                        })
                                    }} required={true} placeholder="Url(en)" type="text"/>
                                    {error.urlen ? <p style={{color: red[400]}}>Maydon to'ldirilishi shart!!!</p> : ""}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                    <div style={{
                        padding: "7px"
                    }}>
                        <button onClick={() => {
                            saveLink(item.id ? 'put' : 'post')
                        }} style={{
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
                        }} onClick={() => {
                            setForLink({item: null, open: false})

                            setError(
                                {
                                    nameuz: false,
                                    nameru: false,
                                    nameen: false,
                                    urluz: false,
                                    urlru: false,
                                    urlen: false
                                }
                            )
                            setItem({
                                nameuz: "",
                                nameru: "",
                                nameen: "",
                                urluz: "",
                                urlru: "",
                                urlen: ""
                            })

                        }}>
                            Bekor qilish
                        </button>
                    </div>
                </Dialog>
                <div>
                    <div className="table-scroll">
                        <h5 style={{
                            textDecoration: "underline",
                            cursor: "pointer",
                            display: "inline-block"
                        }} onClick={() => {
                            setForLink({
                                open: true,
                                item: {}
                            })
                        }} className="table-title">
                            {t("Add link")}
                        </h5>
                        <table style={{display: maxMin.link ? "" : "none"}}>
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
                                        <button onClick={() => {

                                            let a = {
                                                id: item.id,
                                                nameuz: item.name["uz"],
                                                nameru: item.name["ru"],
                                                nameen: item.name["en"],
                                                urluz: item.url["uz"],
                                                urlru: item.url["ru"],
                                                urlen: item.url["en"]
                                            };
                                            setForLink({item: item, open: true});
                                            setItem(a)
                                        }} className="editIcon">
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
                        <CustomPagination style={{display: maxMin.link ? "" : "none"}}
                                          pageLength={totalPages}
                                          setActive={setActive}
                                          active={active}
                                          size={size}
                                          setSize={setSize}
                        />
                    </div>
                </div>
            </div>
            <div className="admin-list-setting " style={{
                marginTop: "5px",

                height: maxMin.files ? "" : "70px",
                overflow: "hidden"
            }}>
                <span style={{color: maxMin.files ? red[400] : green[400]}} onClick={() => setMaxMin({
                    ...maxMin,
                    files: !maxMin.files
                })}>
                    {
                        maxMin.files ? <VisibilityOff/> : <Visibility/>
                    }
                </span>
                <DirectorySection/>
            </div>
        </div>
    );
}

export default withTranslation()(AdminListSetting);
