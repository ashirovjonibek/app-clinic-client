import React from "react";
import Title from "../Title";
import YouAppSiteBar from "./YouAppSiteBar";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";
import { Route, Switch } from "react-router";
import YourAppelSection from "./YourAppelSection";
import PerAccAppCallFlow from "./PerAccAppCallFlow";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonAccountListnear/SendSection";

const PersonalAccountApplicant = () => {
    return (
        <div>
            <div className="nav">
                <NavCenter />
                <NavBottom />
            </div>
            <div className="acount-applicant container-fluit">
                <div className="container">
                    <Title text="Личный кабинет" />
                    <section className="section-body">
                        <YouAppSiteBar />
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path="/" component={YourAppelSection} />
                                <Route exact path="/perAccAppCallFlow" component={PerAccAppCallFlow} />
                                <Route exact path="/perAccAppPeriodSection" component={PerAccAppPeriodSection} />
                                <Route exact path="/perAccAppResponseRequest" component={PerAccAppResponseRequest} />
                                <Route exact path="/sendSection" component={SendSection} />
                            </Switch>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountApplicant;
