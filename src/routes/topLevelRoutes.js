import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../views/home/home";
import ComercioEIndustria from "../views/comercioEIndustria/comercioEIndustria";
import AboutUs from "../views/aboutUs/aboutUs";

const TopLevelRoutes = () => {
    return (
        <Switch>
            <Route exact path={'/inicio'} component={Home}/>
            <Route path={'/blog'}/>
            <Route path={'/servicios'}/>
            <Route path={'/catalogo'}/>
            <Route path={'/contacto'}/>
            <Route path={'/comercio-e-industria'} component={ComercioEIndustria}/>
            <Route path={'/nosotros'} component={AboutUs}/>
            <Redirect to={'/inicio'}/>
        </Switch>
    );
};

export default TopLevelRoutes;
