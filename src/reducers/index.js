import { changeCounting, showLoading } from "./countings"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    changeCounting, showLoading
})

export default rootReducer;

