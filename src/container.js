import React, {useEffect, useState} from "react";
import {Switch, useHistory, useLocation} from 'react-router-dom'
import {openPages} from "./utils/config";
import axios from "axios";
import {API_URL, STORAGE_NAME} from "./utils/constant";
import {Routes} from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {IMAGE, LOADING, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE} from "./redux/me/actionType";
import {Loading} from "./component/catalog/Loading";
import {allRoles} from "./routes/authRoles";
import Footer from "./component/Footer/Footer";
import 'antd/dist/antd.css';

const Container = () => {
    const [i18] = useState(localStorage.getItem('I18N_LANGUAGE'));
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading);
    const path = window.location.pathname;
    console.log(path);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);

    console.log(offset);

    useEffect(() => {
        // axios.defaults.headers['Access-Control-Allow-Origin']='*';
        if (openPages.includes(location.pathname)) {
            dispatch({type: LOADING});
            const token = localStorage.getItem(STORAGE_NAME);
            axios({
                url: API_URL + '/auth/me',
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            }).then(res => {

                if (!res.data.success) {
                    localStorage.removeItem(STORAGE_NAME);
                    dispatch({type: LOADING});
                    history.push('/auth/login');
                } else {
                    if (res.data.object != null) {
                        console.log("success bo'ldi");
                        dispatch({type: ME_DATA, data: res?.data?.object});
                        dispatch({type: ME_USERNAME, data: res?.data?.object?.username});
                        dispatch({type: ME_EMAIL, data: res?.data?.object?.email});
                        dispatch({type: ME_FULL_NAME, data: res?.data?.object?.fullName});
                        dispatch({type: ROLE, data: allRoles[res?.data?.object?.roles[0]?.authority]});
                        dispatch({type: IMAGE, data: res?.data?.object?.image});
                        dispatch({type: LOADING});
                        history.push(location.pathname);
                        // localStorage.setItem("path",location.pathname);
                    } else {
                        history.push('/auth/login')
                    }
                }
            }).catch((e) => {
                history.push("/auth/login")
                localStorage.removeItem(STORAGE_NAME);
                dispatch({type: LOADING})
            })
        }
        ;
    }, []);


    return (
        <>

            {
                loading.isLoading ? <Loading/> :
                    <div>
                            <Routes/>
                            {
                                path === "/" ? "" : <Footer/>
                            }
                    </div>
            }
        </>
    );
};

export default Container