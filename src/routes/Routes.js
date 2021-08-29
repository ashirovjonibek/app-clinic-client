import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {allRoles} from "./authRoles";
import {adminRoute, applicantRoute, listenerRoute, moderatorRoute, supervisorRoute} from "./allRoutes";
import {Redirect, Route, Switch} from "react-router-dom";
import FirstHome from "../component/Home/FirstHome";
import Login from "../component/Registration/Login";
import Dashboard from "../component/Dashboard/Dashboard";
import RegistrationApplicant from "../component/Registration/RegistrationApplicant";
import RegistrationListener from "../component/Registration/RegistrationListener";
import NotFound from "../component/catalog/NotFound";
import Authmiddleware from "./routesConfig";

export const Routes=()=>{
    const userRole=useSelector(state => state.meReducer)

    useEffect(()=>{
        console.log(userRole)
    },[])

    const roleRoute=(role)=>{
        console.log(userRole)
        switch (role){
            case allRoles.ADMIN[0]: return adminRoute;
            case allRoles.BOSS[0]: return supervisorRoute;
            case allRoles.MODERATOR[0]: return moderatorRoute;
            case allRoles.LISTENER[0]: return listenerRoute;
            case allRoles.USER[0]: return applicantRoute;
            default:return null
        }

    }

    useEffect(()=>{
        console.log(userRole?.role[0])
        console.log(roleRoute(userRole?.role[0]))

    })


    return(
        <Switch>
            <Route exact path="/" component={FirstHome}/>
            <Route exact path="/auth/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/auth/registrationApplicant" component={RegistrationApplicant}/>
            <Route exact path="/auth/registrationListener" component={RegistrationListener}/>
            {
                roleRoute(userRole?.role[0])?.map((route,i)=>
                    <Authmiddleware path={route.path}
                                    component={route.component}
                                    key={i}
                                    exact
                    />
                )
            }

            <Route path="/404" component={NotFound}/>
            <Redirect to="/404"/>
        </Switch>
    )
}