import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Messages from "../messages/messages";

const AdminRoutes = ({ match }) => {
    const { path, url } = match;

    return (
        <Switch>
            <Route path={`${path}/mensajes`} component={Messages}/>
            <Route path={`${path}/productos`}/>
            <Route path={`${path}/publicaciones`}/>
            <Redirect to={`${url}/mensajes`}/>
        </Switch>
    );
};

export default withRouter(AdminRoutes);
