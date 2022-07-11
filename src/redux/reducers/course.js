let initialState = {
    courses: [],
    coursesDetail: null
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COURSES":
            state.courses = action.payload;
            return { ...state };
        case "FETCH_COURSES_DETAIL":
            state.coursesDetail = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default CourseReducer