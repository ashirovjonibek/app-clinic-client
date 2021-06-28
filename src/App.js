import React, {useEffect, useState} from "react";
import "./assets/scss/style.scss";
import {Route, Switch} from "react-router-dom";
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
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserAppealItem from "./component/UserAppealItem";
import {withRouter} from 'react-router-dom';
import PersonalAccountListener from "./component/PersonalAccountListener/PersonalAccountListener";
import {useHistory, useLocation} from 'react-router-dom'
import {openPages} from "./utils/config";
import axios from "axios";
import {STORAGE_NAME} from "./utils/constant";
import {userMe} from "./utils/service";
import YourAppelSection from "./component/PersonalAccountApplicant/YourAppelSection";
import PerAccAppCallFlowSection from "./component/PersonalAccountApplicant/PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./component/PersonalAccountApplicant/PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./component/PersonalAccountApplicant/PerAccAppResponseRequest";
import SendSection from "./component/PersonalAccountListener/SendSection";
import AppealItem from "./component/PersonalAccountListener/AppealItem";
import IncomingRequestSection from "./component/PersonalAccountListener/IncomingRequestSection";
import ResponseRequestSection from "./component/PersonalAccountListener/ResponseRequestSection";
import DeadlineRequestSection from "./component/PersonalAccountListener/DeadlineRequestSection";
import AppealSection from "./component/PersonalAccountListener/AppealSection";
import CallFlowSection from "./component/PersonalAccountListener/CallFlowSection";
import FedbeckSection from "./component/PersonalAccountListener/FedbeckSection";
import DirectorySection from "./component/PersonalAccountListener/DirectorySection";
function App() {
    const [currentUser, setCurrentUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        if (!openPages.includes(history.location.pathname)) {
            // userMe(history.location.pathname);
        }
    });

    const userMe = (pathname) => {
        const token = localStorage.getItem(STORAGE_NAME);
        axios({
            url: '/api/auth/me',
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(res => {
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
        <div className="App">


            <Nav/>
            <ToastContainer/>
            <Switch>
                <Route exact path="/" component={FirstHome}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Admin" component={Admin}/>
                <Route exact path="/auth/registrationApplicant" component={RegistrationApplicant}/>
                <Route exact path="/auth/registrationListener" component={RegistrationListener}/>
                <Route exact path="/personalAccountListener" component={PersonalAccountListener}/>
                <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant}/>
                <Route exact path="/personalAccountSupervisor" component={PersonalAccountSupervisor}/>
                <Route exact path="/personalAccountModerator" component={PersonalAccountModerator}/>
                <Route exact path="/newPassword" component={NewPassword}/>
                <Route exact path="/userAppealItem" component={UserAppealItem}/>
            </Switch>
        </div>
    );
}

export default App;
