import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import userReducer from "./userReducer/UserReducer";


const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})

export default rootReducer;