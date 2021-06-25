import React, {useEffect} from "react";
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
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserAppealItem from "./component/UserAppealItem";
import {withRouter} from 'react-router-dom';
import PersonalAccountListener from "./component/PersonalAccountListener/PersonalAccountListener";

function App(props) {

    const {history} = props;
    useEffect(() => {
        history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state)
        });
    })


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

export default withRouter(App);
