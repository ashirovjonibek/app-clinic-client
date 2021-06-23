import React from "react";
import "./assets/scss/style.scss";
import {Route, Switch} from "react-router-dom";
import ApplicantAppeal from "./component/PersonalAccountApplicant/ApplicantAppeal";
import PersonalAccountListnear from "./component/PersonalAccountListnear/PersonalAccountListnear";
import RegistrationListnear from "./component/Registration/RegistrationListnear";
import RegistrationApplicant from "./component/Registration/RegistrationApplicant";
import Dashboard from "./component/Dashboard/Dashboard";
import FirstHome from "./component/Home/FirstHome";
import PersonalAccountSupervisor from "./component/PersonalAccountSupervisor/PersonalAccountSupervisor";
import PersonalAccountApplicant from "./component/PersonalAccountApplicant/PersonalAccountApplicant";
import PersonalAccountModerator from "./component/PersonalAccountModerator/PersonalAccountModerator";
import Login from "./component/Registration/Login";
import Admin from "./component/Admin/Admin";
import NavCenter from "./component/Nav/NavCenter";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import FooterUsaid from "./component/Footer/FooterUsaid";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Switch>
                <Route exact path="/" component={FirstHome}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Admin" component={Admin}/>
                <Route exact path="/registrationApplicant" component={RegistrationApplicant}/>
                <Route exact path="/registrationListnear" component={RegistrationListnear}/>
                <Route exact path="/personalAccountListnear" component={PersonalAccountListnear}/>
                <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant}/>
                <Route exact path="/personalAccountSupervisor" component={PersonalAccountSupervisor}/>
                <Route exact path="/personalAccountModerator" component={PersonalAccountModerator}/>
                <Route exact path="/applicantAppeal" component={ApplicantAppeal}/>
            </Switch>
            <Footer/>
            <FooterUsaid/>
            {/*<div className="nav">*/}
            {/*    <NavCenter/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
