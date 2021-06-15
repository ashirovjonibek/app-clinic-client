import React from "react";
import { Route, Switch } from "react-router";

// import CenterSends from "./CenterSends";
import DirectoryPdf from "./DirectoryPdf";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import ResponseRequestSection from "./ResponseRequestSection";
import DeadlineRequestSection from "./DeadlineRequestSection";
import PerAccLisSiteBar from "./PerAccSiteBar";
import AppealSection from "./AppealSection";
import CallFlowSection from "./CallFlowSection";
import FedbeckSection from "./FedbeckSection";
import DirectorySection from "./DirectorySection";
import SendSection from "./SendSection";
import IncomingRequestSection from "./IncomingRequestSection";


const PersonAccountListnear = (props) => {
    return (
        <div>
            <div className="nav">
                <NavCenter />
            </div>
            <div className="personal-account-listnear container-fluit">
                <div className="container">
                    <section className="section-body">
                        <PerAccLisSiteBar />
                        <div className="content-wrapper">
                            <Switch>
                                <Route exact path="/" component={IncomingRequestSection} />
                                <Route exact path="/responseRequestSection" component={ResponseRequestSection} />
                                <Route exact path="/deadlineRequests" component={DeadlineRequestSection} />
                                <Route exact path="/appeals" component={AppealSection} />
                                <Route exact path="/callFlow" component={CallFlowSection} />
                                <Route exact path="/fedbeckSection" component={FedbeckSection} />
                                <Route exact path="/directorySection" component={DirectorySection} />
                                <Route exact path="/sendSection" component={SendSection} />
                            </Switch>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PersonAccountListnear;
