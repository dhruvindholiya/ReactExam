import { combineReducers } from "redux";
import { courseReduser } from "./course.reduser";

export const rootReducer = combineReducers({
    course: courseReduser,
})


