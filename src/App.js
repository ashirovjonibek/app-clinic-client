import React from "react";
import "./assets/scss/style.scss";
import { Route, Switch } from "react-router-dom";
import ApplicantAppeal from "./component/PersonalAccountApplicant/ApplicantAppeal";
import PersonalAccountListener from "./component/PersonalAccountListener/PersonalAccountListener";
import RegistrationListnear from "./component/Registration/RegistrationListnear";
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            {/* <Nav />
            <ToastContainer />
            <Switch>
                <Route exact path="/" component={FirstHome} />
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/Admin" component={Admin} />
                <Route exact path="/registrationApplicant" component={RegistrationApplicant} />
                <Route exact path="/registrationListnear" component={RegistrationListener} />
                <Route exact path="/personalAccountListnear" component={PersonalAccountListener} />
                <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant} />
                <Route exact path="/personalAccountSupervisor" component={PersonalAccountSupervisor} />
                <Route exact path="/personalAccountModerator" component={PersonalAccountModerator} />
                <Route exact path="/newPassword" component={NewPassword} />
            </Switch> */}
            <RegistrationListnear />
        </div>
    );
}

export default App;
