import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../views/home/home";

const TopLevelRoutes = () => {
    return (
        <Switch>
            <Route exact path={'/inicio'} component={Home}/>
            <Route path={'/blog'}/>
            <Route path={'/servicios'}/>
            <Route path={'/catalogo'}/>
            <Route path={'/contacto'}/>
            <Redirect to={'/inicio'}/>

        </Switch>
    );
};

export default TopLevelRoutes;
