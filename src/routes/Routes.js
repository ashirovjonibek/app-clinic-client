import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {allRoles} from "./authRoles";
import {
    adminRoute,
    applicantRoute,
    listenerRoute,
    moderatorAndSuperModeratorRoute,
    moderatorRoute,
    supervisorRoute
} from "./allRoutes";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../component/Registration/Login";
import Dashboard from "../component/Dashboard/Dashboard";
import RegistrationApplicant from "../component/Registration/RegistrationApplicant";
import RegistrationListener from "../component/Registration/RegistrationListener";
import NotFound from "../component/catalog/NotFound";
import Authmiddleware from "./routesConfig";
import NewPassword from "../component/Registration/NewPassword";
import RequestNewPassword from "../component/Registration/RequestNewPassword";
import ApplicantAppeal from "../component/PersonalAccountApplicant/ApplicantAppeal";
import NewHome from "../component/Home/newHome";

export const Routes = () => {
    const userRole = useSelector(state => state.meReducer);

    useEffect(() => {
    }, []);

    const roleRoute = (role) => {
        // console.log(userRole)
        switch (role) {
            case allRoles.ADMIN[0]:
                return adminRoute;
            case allRoles.MODERATOR[0]:
                return supervisorRoute;
            case allRoles.SUPER_MODERATOR[0]:
                return moderatorRoute;
            case allRoles.LISTENER[0]:
                return listenerRoute;
            case allRoles.USER[0]:
                return applicantRoute;
            case allRoles.SUPER_MODERATOR_AND_MODERATOR[0]:
                return moderatorAndSuperModeratorRoute;
            default:
                return null
        }
    }

    return (
        <Switch>
            <Route exact path="/" component={NewHome}/>
            <Route exact path="/auth/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/auth/registrationApplicant" component={RegistrationApplicant}/>
            <Route exact path="/auth/registrationListener" component={RegistrationListener}/>
            {
                roleRoute(userRole?.role[0])?.map((route, i) =>
                    <Authmiddleware path={route.path}
                                    component={route.component}
                                    key={i}
                                    exact
                    />
                )
            }

            <Route path="/applicantAppeal" component={ApplicantAppeal}/>
            <Route path="/requestNewPassword" component={RequestNewPassword}/>
            <Route path="/newPassword" component={NewPassword}/>
            <Route path="/404" component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>
    )
}
