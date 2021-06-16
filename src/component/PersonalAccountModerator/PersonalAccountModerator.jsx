import React from "react";
import NavCenter from "../Nav/NavCenter";
import { Route, Switch } from "react-router";
import ModeratorSiteBar from "./ModeratorSiteBar";
import ModeratorHeadsDepartmentSection from "./ModeratorHeadsDepartmentSection";
import ModeratorPerformerSection from "./ModeratorPerformerSection";
import ModeratorListnearSection from "./ModeratorListnearSection";
import ModeratorApplicantSection from "./ModeratorApplicantSection";
import ModeratorAppealSection from "./ModeratorAppealSection";
import ModeratorFedbeckRequestSection from "./ModeratorFedbeckRequestSection";
import ModeratorLegalBaseSection from "./ModeratorLegalBaseSection";
import ModeratorListnearReytingSection from "./ModeratorListnearReytingSection";
import ModeratorArchive from "./ModeratorArchive";

const PersonalAccountModerator = () => {
    return (
        <div>
            <div>
                <div className="nav">
                    <NavCenter />
                </div>
                <div className="acount-applicant container-fluit">
                    <div className="container">
                        <section className="section-body">
                            <ModeratorSiteBar />
                            <div className="content-wrapper">
                                <Switch>
                                    <Route exact path="/" component={ModeratorHeadsDepartmentSection} />
                                    <Route exact path="/moderatorPerformer" component={ModeratorPerformerSection} />
                                    <Route exact path="/moderatorListnears" component={ModeratorListnearSection} />
                                    <Route exact path="/moderatorApplicants" component={ModeratorApplicantSection} />
                                    <Route exact path="/moderatorAppeals" component={ModeratorAppealSection} />
                                    <Route exact path="/moderatorFedbeckRequest" component={ModeratorFedbeckRequestSection} />
                                    <Route exact path="/moderatorLegalBase" component={ModeratorLegalBaseSection} />
                                    <Route exact path="/moderatorListnearReyting" component={ModeratorListnearReytingSection} />
                                    <Route exact path="/moderatorArchive" component={ModeratorArchive} />
                                </Switch>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountModerator;
