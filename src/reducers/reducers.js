import themeReducer from "./theme.reducer";
import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";

const reducers = combineReducers({
    theme: themeReducer,
    auth: authReducer
});

export default reducers;