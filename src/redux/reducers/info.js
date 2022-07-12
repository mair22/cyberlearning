import { FETCH_INFO } from "../actions/Type";

let initialState = {
    infoDetail: null
};

const InfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INFO:
            console.log("reducerInfo",state.infoDetail, action.payload)
            state.infoDetail = action.payload;
            return { ...state };
        default:
            return state;
    }
};

export default InfoReducer