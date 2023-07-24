import * as ActionType from "../ActionType";

const initState = {
    courses: [],
    loading: false,
    error: null,
};

export const courseReduser = (state = initState, action) => {
    switch (action.type) {
        case ActionType.COURSE_LOADER:
            return {
                courses: [],
                loading: action.payload,
                error: null
            }
        case ActionType.COURSE_ERROR:
            return {
                courses: [],
                loading: false,
                error: action.payload
            }
        case ActionType.COURSE_GET:
            return {
                courses: action.payload,
                loading: false,
                error: null
            }
        case ActionType.COURSE_ADD:
            return {
                ...state,
                courses: state.courses.concat(action.payload)
            }
        case ActionType.COURSE_DELETE:
            return {
                ...state,
                courses: state.courses.filter((v) => v.id !== action.payload)
            }
        case ActionType.COURSE_UPDATE:
            return {
                ...state,
                courses: state.courses.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        default:
            return state;
    }
};
