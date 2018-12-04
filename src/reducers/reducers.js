import themeReducer from "./theme.reducer";
import {combineReducers} from "redux";

const reducers = combineReducers({
    theme: themeReducer
});

export default reducers;