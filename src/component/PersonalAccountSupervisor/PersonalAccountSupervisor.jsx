import React from "react";
import NavCenter from "../Nav/NavCenter";
import { Route, Switch } from "react-router";
import PerAccSupervisorSiteBar from "./PerAccSupervisorSiteBar";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorIncomingRequests from "./SupervisorIncomingRequests";
import SupervisorResponsesRequests from "./SupervisorResponsesRequests";
import SupervisorApplicants from "./SupervisorApplicants";
import SupervisorAppeals from "./SupervisorAppeals";
import SupervisorCallFlow from "./SupervisorCallFlow";
import SupervisorFeedbakRequest from "./SupervisorFeedbakRequest";
import SupervisorDirectorySection from "./SupervisorDirectorySection";
import SupervisorReytingListnear from "./SupervisorReytingListnear";
import SupervisorArchive from "./SupervisorArchive";

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
                                    <Route exact path="/supervisorApplicants" component={SupervisorApplicants} />
                                    <Route exact path="/supervisorAppeals" component={SupervisorAppeals} />
                                    <Route exact path="/supervisorCallFlow" component={SupervisorCallFlow} />
                                    <Route exact path="/supervisorFeedbakRequest" component={SupervisorFeedbakRequest} />
                                    <Route exact path="/supervisorDirectorySection" component={SupervisorDirectorySection} />
                                    <Route exact path="/supervisorReytingListnear" component={SupervisorReytingListnear} />
                                    <Route exact path="/supervisorArchive" component={SupervisorArchive} />
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
