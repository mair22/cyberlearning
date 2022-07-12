let initialState = {
    seach: null
};

const SeachReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COURSES_DETAIL":
            state.coursesDetail = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default SeachReducer