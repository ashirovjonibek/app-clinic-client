import React from "react";
import { Route, Switch } from "react-router";

// import CenterSends from "./CenterSends";
import DirectoryPdf from "./DirectoryPdf";
import Footer from "../Footer/Footer";
import NavCenter from "../Nav/NavCenter";
import ResponseRequests from "./ResponseRequests";
import DeadlineRequests from "./DeadlineRequests";
import IncomingRequests from "./IncomingRequests";
import PerAccLisSiteBar from "./PerAccSiteBar";
import Appeals from "./Appeals";
import CallFlow from "./CallFlow";
import FedbeckSection from "./FedbeckSection";
import DirectorySection from "./DirectorySection";
import SendSection from "./SendSection";

const PersonAccountListnear = (props) => {
    return (
        <div>
            <div className="nav">
                <NavCenter />
            </div>
            <div className="acount-listnear container-fluit">
                <div className="container">
                    <section className="section-body">
                        <PerAccLisSiteBar />
                        <div className="content-wrapper">
                            <div className="content">
                                <Switch>
                                    <Route exact path="/" component={IncomingRequests} />
                                    <Route exact path="/responseRequests" component={ResponseRequests} />
                                    <Route exact path="/deadlineRequests" component={DeadlineRequests} />
                                    <Route exact path="/appeals" component={Appeals} />
                                    <Route exact path="/callFlow" component={CallFlow} />
                                    <Route exact path="/fedbeckSection" component={FedbeckSection} />
                                    <Route exact path="/directorySection" component={DirectorySection} />
                                    <Route exact path="/sendSection" component={SendSection} />
                                </Switch>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default PersonAccountListnear;
