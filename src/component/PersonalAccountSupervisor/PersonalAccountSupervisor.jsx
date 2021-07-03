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
                                <PerAccSupListenersSection />
                                <SupervisorIncomingRequestSection />
                                <SupervisorResponsesSection />
                                <SupervisorApplicantSection />
                                <SupervisorAppealSection />
                                <SupervisorCallFlowSection />
                                <SupervisorFeedbakRequestSection />
                                <SupervisorDirectorySection />
                                <SupervisorReytingListnear />
                                <SupervisorStatisticSection />
                                <SupervisorArchive />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountSupervisor;
