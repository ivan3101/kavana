import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from "./components/globalStyles/globalStyles";
import store from "./store/store";
import {Provider} from "react-redux";
import ThemeProviderConnected from "./components/themeProviderConnected/themeProviderConnected";
import Appbar from "./components/appbar/appbar";
import {BrowserRouter as Router} from "react-router-dom";
import TopLevelRoutes from "./routes/topLevelRoutes";
import Footer from "./components/footer/footer";
import StickyAppbar from "./components/appbar/stickyAppbar/stickyAppbar";


ReactDOM.render(
    <Provider store={store}>
        <ThemeProviderConnected>
            <Router>
                <div>
                    <GlobalStyles/>
                    <Appbar/>
                    <StickyAppbar/>
                    <TopLevelRoutes/>
                    <Footer/>
                </div>
            </Router>
        </ThemeProviderConnected>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
