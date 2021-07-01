import React from "react";
import NavCenter from "../Nav/NavCenter";
import { Route, Switch } from "react-router";
import PerAccSupervisorSiteBar from "./PerAccSupervisorSiteBar";
import PerAccSupListenersSection from "./PerAccSupListenersSection";
import SupervisorIncomingRequestSection from "./SupervisorIncomingRequestSection";
import SupervisorResponsesSection from "./SupervisorResponsesRequestSection";
import SupervisorApplicantItem from "./SupervisorApplicantItem";
import SupervisorAppealSection from "./SupervisorAppealSection";
import SupervisorCallFlowSection from "./SupervisorCallFlowSection";
import SupervisorFeedbakRequestSection from "./SupervisorFeedbakRequestSection";
import SupervisorDirectorySection from "./SupervisorDirectorySection";
import SupervisorReytingListnear from "./SupervisorReytingListnear";
import SupervisorArchive from "./SupervisorArchive";
import SupervisorApplicantSection from "./SupervisorApplicantSection";
import SupervisorStatisticSection from "./SupervisorStatisticSection/SupervisorStatisticSection";

const PersonalAccountSupervisor = () => {
    return (
        <div>
            <div>
                {/* <div className="nav">
                    <NavCenter />
                </div> */}
                <div className="personal-account-supervisor container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <PerAccSupervisorSiteBar />
                            <div className="content-wrapper">
                                <Switch>
                                    <Route exact path="/" component={PerAccSupListenersSection} />
                                    <Route exact path="/supervisorIncomingRequestSection" component={SupervisorIncomingRequestSection} />
                                    <Route exact path="/supervisorResponsesRequestSection" component={SupervisorResponsesSection} />
                                    <Route exact path="/supervisorApplicantSection" component={SupervisorApplicantSection} />
                                    <Route exact path="/supervisorAppeals" component={SupervisorAppealSection} />
                                    <Route exact path="/supervisorCallFlow" component={SupervisorCallFlowSection} />
                                    <Route exact path="/supervisorFeedbakRequest" component={SupervisorFeedbakRequestSection} />
                                    <Route exact path="/supervisorDirectorySection" component={SupervisorDirectorySection} />
                                    <Route exact path="/supervisorReytingListnear" component={SupervisorReytingListnear} />
                                    <Route exact path="/supervisorStatisticSection" component={SupervisorStatisticSection} />
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
