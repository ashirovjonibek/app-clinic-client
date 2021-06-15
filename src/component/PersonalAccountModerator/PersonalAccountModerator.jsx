import React from "react";
import NavCenter from "../Nav/NavCenter";
import { Route, Switch } from "react-router";
import ModeratorSiteBar from "./ModeratorSiteBar";
import ModeratorHeadsDepartments from "./ModeratorHeadsDepartments";
import ModeratorPerformer from "./ModeratorPerformer";
import ModeratorListnears from "./ModeratorListnears";
import ModeratorApplicants from "./ModeratorApplicants";
import ModeratorAppeals from "./ModeratorAppeals";
import ModeratorFedbeckRequest from "./ModeratorFedbeckRequest";
import ModeratorLegalBase from "./ModeratorLegalBase";
import ModeratorListnearReyting from "./ModeratorListnearReyting";
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
                                    <Route exact path="/" component={ModeratorHeadsDepartments} />
                                    <Route exact path="/moderatorPerformer" component={ModeratorPerformer} />
                                    <Route exact path="/moderatorListnears" component={ModeratorListnears} />
                                    <Route exact path="/moderatorApplicants" component={ModeratorApplicants} />
                                    <Route exact path="/moderatorAppeals" component={ModeratorAppeals} />
                                    <Route exact path="/moderatorFedbeckRequest" component={ModeratorFedbeckRequest} />
                                    <Route exact path="/moderatorLegalBase" component={ModeratorLegalBase} />
                                    <Route exact path="/moderatorListnearReyting" component={ModeratorListnearReyting} />
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
