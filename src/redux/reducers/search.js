let initialState = {
    search: null
};

const SeachReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            state.search = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default SeachReducer