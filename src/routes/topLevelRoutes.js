import React from 'react';
import {Route} from "react-router-dom";
import Home from "../views/home/home";
import ComercioEIndustria from "../views/comercioEIndustria/comercioEIndustria";
import AboutUs from "../views/aboutUs/aboutUs";
import Contact from "../views/contact/contact";
import Catalogo from "../views/catalogo/catalogo";
import EnsureUserOnly from "../components/authCheck/ensureUserOnly/ensureUserOnly";
import EnsureVisitorOnly from "../components/authCheck/ensureVisitorOnly/ensureVisitorOnly";
import Login from "../views/login/login";
import Admin from "../views/admin/admin";
import Blog from "../views/blog/blog";
import BlogPost from "../views/blog/blogPost/blogPost";
import Register from "../views/register/register";

const TopLevelRoutes = () => {
    return (
        <React.Fragment>
            <Route exact path={'/inicio'} component={Home}/>
            <Route path={'/blog/post/:postId'} component={BlogPost}/>
            <Route path={'/blog/:page'} component={Blog} exact/>
            <Route path={'/catalogo'} component={Catalogo}/>
            <Route path={'/contacto'} render={props => <Contact {...props} nameModal={"Contactanos"}/>}/>
            <Route path={'/unete'} component={ComercioEIndustria}/>
            <Route path={'/nosotros'} component={AboutUs}/>

            <EnsureVisitorOnly>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
            </EnsureVisitorOnly>

            <EnsureUserOnly>
                <Route path={'/admin'} component={Admin}/>
            </EnsureUserOnly>

        </React.Fragment>
    );
};

export default TopLevelRoutes;
