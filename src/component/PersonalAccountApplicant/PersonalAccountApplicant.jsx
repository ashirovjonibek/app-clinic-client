import React from "react";
import Title from "../Title";
import YouAppSiteBar from "./YouAppSiteBar";
import NavCenter from "../Nav/NavCenter";
import NavBottom from "../Nav/NavBottom";
import {Route, Switch} from "react-router-dom";
import YourAppealSection from "./YourAppealSection";
import PerAccAppCallFlowSection from "./PerAccAppCallFlowSection";
import PerAccAppPeriodSection from "./PerAccAppPeriodSection";
import PerAccAppResponseRequest from "./PerAccAppResponseRequest";
import SendSection from "../PersonalAccountListener/SendSection";
import Login from "../Registration/Login";

const PersonalAccountApplicant = () => {
    function pushBar(n) {
        switch (n) {
            case 1:
                return <Login/>
            case 2:
                return <Login/>
            case 3:
                return <Login/>
            case 4:
                return <Login/>
            case 5:
                return <Login/>
        }
    }

    return (
        <div>
            <div className="acount-applicant container-fluit">
                <div className="container">
                    <Title text="Личный кабинет"/>
                    <section className="section-body">
                        <YouAppSiteBar/>
                        <div className="content-wrapper">
                            {/* {
                                pushBar(2)
                            } */}
                            <YourAppealSection />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountApplicant;
