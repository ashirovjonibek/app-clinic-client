import React from "react";
import "./assets/scss/style.scss";
import {Route, Switch} from "react-router-dom";
import Nav from "./component/Nav/Nav";
import Footer from "./component/Footer/Footer";
import FooterUsaid from "./component/Footer/FooterUsaid";
import Home from "./component/Home/Home";
import Desctop3 from "./component/Desctop3/Desctop3";
import PersonAccountListnear from "./component/PersonAccountListnear/PersonAccountListnear";
import RegistrationListnear from "./component/RegistrsationListnear/RegistrationListnear";
import RegistrationApplicant from "./component/RegistrationApplicant/RegistrationApplicant";
import PersonalAccountApplicant from "./component/PersonalAccountApplicant/PersonalAccountApplicant";
import Dashboard from "./component/Dashboard/Dashboard";
import Desctop7 from "./component/Desctop7/Desctop7";
import Desctop8 from "./component/Desctop8/Desctop8";
import PerAccAppCallFlow from "./component/PersonalAccountApplicant/PerAccAppCallFlow";
import Register from "./component/auth/Register";
import Header from "./component/Header/Header";
import FirstHome from "./component/Home/FirstHome";
import Setting from "./component/setting/Setting";
import PersonalAccountSupervisor from "./component/PersonalAccountSupervisor/PersonalAccountSupervisor";
import Login from "./component/Desctop4/Login";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={FirstHome}/>
                <Route exact path="/auth/login" component={Login}/>
                <Route exact path="/desctop3" component={Desctop3}/>
                <Route exact path="/registrationApplicant" component={RegistrationApplicant}/>
                <Route exact path="/registrationListnear" component={RegistrationListnear}/>
                <Route exact path="/personAccountListnear" component={PersonAccountListnear}/>
                <Route exact path="/personalAccountApplicant" component={PersonalAccountApplicant}/>
                <Route exact path="/personalAccountSupervisor" component={PersonalAccountApplicant}/>
            </Switch>
        </div>

    );
}

export default App;
