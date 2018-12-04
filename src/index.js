import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from "./components/globalStyles/globalStyles";
import store from "./store/store";
import {Provider} from "react-redux";
import ThemeProviderConnected from "./components/themeProviderConnected/themeProviderConnected";
import Appbar from "./components/appbar/appbar";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProviderConnected>
            <div>
                <GlobalStyles/>
                <Appbar/>
            </div>
        </ThemeProviderConnected>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
