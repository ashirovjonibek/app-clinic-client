import React from "react";
import "./assets/scss/style.scss";
import { Route, Switch } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import FooterUsaid from "./component/Footer/FooterUsaid";
import Home from "./component/Home/Home";
import ApplicantAppeal from "./component/PersonalAccountApplicant/ApplicantAppeal";
import PersonAccountListnear from "./component/PersonAccountListnear/PersonAccountListnear";
import RegistrationListnear from "./component/Registration/RegistrationListnear";
import RegistrationApplicant from "./component/Registration/RegistrationApplicant";
import Dashboard from "./component/Dashboard/Dashboard";
import Desctop7 from "./component/Registration/ReqoverAccount";
import NewPassword from "./component/Registration/NewPassword";
import PerAccAppCallFlowSection from "./component/PersonalAccountApplicant/PerAccAppCallFlowSection";
import Register from "./component/auth/Register";
import FirstHome from "./component/Home/FirstHome";
import Setting from "./component/setting/Setting";
import PersonalAccountSupervisor from "./component/PersonalAccountSupervisor/PersonalAccountSupervisor";
import PersonalAccountApplicant from "./component/PersonalAccountApplicant/PersonalAccountApplicant";
import PersonalAccountModerator from "./component/PersonalAccountModerator/PersonalAccountModerator";
import Login from "./component/Registration/Login";
import Admin from "./component/Admin/Admin";
import NavCenter from "./component/Nav/NavCenter";

function App() {
    return (
        <div className="App">
            {/* <Switch>
                <Route exact path="/" component={FirstHome}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/desctop3" component={Desctop3}/>
                <Route exact path="/registrationApplicant" component={RegistrationApplicant}/>
                <Route exact path="/registrationListnear" component={RegistrationListnear}/>
                <Route exact path="/personAccountListnear" component={PersonAccountListnear}/>
                <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant}/>
                <Route exact path="/personalAccountSupervisor" component={PersonalAccountSupervisor}/>
                <Route exact path="/personalAccountModerator" component={PersonalAccountModerator} />
            </Switch> */}

            {/* <PersonAccountListnear />
            <PersonalAccountApplicant /> */}
            {/* <PersonalAccountSupervisor /> */}
            {/* <PersonalAccountModerator /> */}
            {/* <RegistrationListnear /> */}
            {/* <RegistrationApplicant/> */}
            {/* <ApplicantAppeal /> */}
            <Admin />
            {/* <Dashboard /> */}
            {/* <div className="nav">
                <NavCenter />
            </div> */}

            {/* <FirstHome /> */}
        </div>
    );
}

export default App;
