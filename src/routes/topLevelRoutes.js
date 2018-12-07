import React from 'react';
import {Route} from "react-router-dom";
import Home from "../views/home/home";
import ComercioEIndustria from "../views/comercioEIndustria/comercioEIndustria";
import AboutUs from "../views/aboutUs/aboutUs";
import Contact from "../views/contact/contact";
import Catalogo from "../views/catalogo/catalogo";
import EnsureUserOnly from "../components/authCheck/ensureUserOnly/ensureUserOnly";
import EnsureVisitorOnly from "../components/authCheck/ensureVisitorOnly/ensureVisitorOnly";

const TopLevelRoutes = () => {
    return (
        <React.Fragment>
            <Route exact path={'/inicio'} component={Home}/>
            <Route path={'/blog'}/>
            <Route path={'/catalogo'} component={Catalogo}/>
            <Route path={'/contacto'} component={Contact}/>
            <Route path={'/comercio-e-industria'} component={ComercioEIndustria}/>
            <Route path={'/nosotros'} component={AboutUs}/>

            <EnsureVisitorOnly>
                <Route path={'/login'} />
            </EnsureVisitorOnly>

            <EnsureUserOnly>
                <Route path={'/admin'}/>
            </EnsureUserOnly>

        </React.Fragment>
    );
};

export default TopLevelRoutes;
