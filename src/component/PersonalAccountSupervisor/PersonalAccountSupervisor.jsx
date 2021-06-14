import React from "react";
import NavCenter from "../Nav/NavCenter";
import { Route, Switch } from "react-router";
import PerAccSupervisorSiteBar from "./PerAccSupervisorSiteBar";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorIncomingRequests from "./SupervisorIncomingRequests";
import SupervisorResponsesRequests from "./SupervisorResponsesRequests";

const PersonalAccountSupervisor = () => {
    return (
        <div>
            <div>
                <div className="nav">
                    <NavCenter />
                </div>
                <div className="acount-applicant container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <PerAccSupervisorSiteBar />
                            <div className="content-wrapper">
                                <Switch>
                                    <Route exact path="/" component={PerAccSupListenersSection} />
                                    <Route exact path="/supervisorIncomingRequests" component={SupervisorIncomingRequests} />
                                    <Route exact path="/supervisorResponsesRequests" component={SupervisorResponsesRequests} />
                                    {/* <Route exact path="/perAccAppResponseRequest" component={PerAccAppResponseRequest} />
                                    <Route exact path="/sendSection" component={SendSection} /> */}
                                </Switch>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountSupervisor;
