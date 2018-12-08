import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Messages from "../messages/messages";

const AdminRoutes = ({ match }) => {
    const { path, url } = match;

    return (
        <Switch>
            <Route path={`${path}/mensajes/:page`} component={Messages}/>
            <Route path={`${path}/productos/:page`}/>
            <Route path={`${path}/publicaciones/:page`}/>
            <Redirect to={`${url}/mensajes/1`}/>
        </Switch>
    );
};

export default withRouter(AdminRoutes);
