import React, { useCallback, useEffect, useState } from "react";
import "./assets/scss/style.scss";
import { Route, Switch } from "react-router-dom";
import RegistrationListener from "./component/Registration/RegistrationListener";
import RegistrationApplicant from "./component/Registration/RegistrationApplicant";
import Dashboard from "./component/Dashboard/Dashboard";
import FirstHome from "./component/Home/FirstHome";
import PersonalAccountSupervisor from "./component/PersonalAccountSupervisor/PersonalAccountSupervisor";
import PersonalAccountApplicant from "./component/PersonalAccountApplicant/PersonalAccountApplicant";
import PersonalAccountModerator from "./component/PersonalAccountModerator/PersonalAccountModerator";
import Login from "./component/Registration/Login";
import NewPassword from "./component/Registration/NewPassword";
import Admin from "./component/Admin/Admin";
import Nav from "./component/Nav/Nav";
import ApplicantAppeal from './component/PersonalAccountApplicant/ApplicantAppeal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserAppealItem from "./component/UserAppealItem";
import { withRouter } from 'react-router-dom';
import PersonalAccountListener from "./component/PersonalAccountListener/PersonalAccountListener";
import { useHistory, useLocation } from 'react-router-dom'
import { openPages } from "./utils/config";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "./utils/constant";
import { ApiContext } from "./utils/ApiContext";
import AdminListAppeal from "./component/Admin/AdminListAppeal";
import IncomingRequestItem from "./component/PersonalAccountListener/IncomingRequestItem";

// import {userMe} from "./utils/UserService";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [idUser, setIdUser] = useState(1);
    const [currentItem, setCurrentItem] = useState([]);
    const history = useHistory();
    const location = useLocation();

    console.log(idUser);

    useEffect(() => {
        if (!openPages.includes(location.pathname)) {
            userMe(location.pathname);
        }
    }, []);


    const userMe = (pathname) => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            url: 'http://localhost:8080/api/auth/me',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(res => {
            // console.log(res)
            if (!res.data.success) {
                localStorage.removeItem(STORAGE_NAME);
                history.push('/auth/login');
                setCurrentUser({})
            } else {
                if (res.data.object != null) {
                    setCurrentUser(res.data.object);
                } else {
                    history.push('/auth/login')
                }

            }
        })
    };

    return (
        location.pathname !== '/admin' ?
            <div className="App">
                <ApiContext.Provider value={{ currentUser, idUser, setIdUser, setCurrentItem, currentItem }}>
                    <ToastContainer />
                    <Switch>
                        <Route exact path="/" component={FirstHome} />
                        <Route exact path="/auth/login" component={Login} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/auth/registrationApplicant" component={RegistrationApplicant} />
                        <Route exact path="/auth/registrationListener" component={RegistrationListener} />
                        <Route exact path="/personalAccountListener" component={PersonalAccountListener} />
                        <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant} />
                        <Route exact path="/personalAccountSupervisor" component={PersonalAccountSupervisor} />
                        <Route exact path="/personalAccountModerator" component={PersonalAccountModerator} />
                        <Route exact path="/newPassword" component={NewPassword} />
                        <Route exact path="/userAppealItem" component={UserAppealItem} />
                        <Route exact path="/applicantAppeal" component={ApplicantAppeal} />
                    </Switch>
                </ApiContext.Provider>
            </div>
            : <Switch>
                <Route exact path="/admin" component={Admin} />
            </Switch>
    );
}

export default App;
