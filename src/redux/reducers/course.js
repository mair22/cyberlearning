import {FETCH_COURSES, FETCH_COURSES_DETAILS} from '../actions/Type'
let initialState = {
    courses: [],
    coursesDetail: null,
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            state.courses = action.payload;
            return { ...state };
        case FETCH_COURSES_DETAILS:
            console.log("update Course Detail", state.coursesDetail, action.payload)
            state.coursesDetail = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default CourseReducer