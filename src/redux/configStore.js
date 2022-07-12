import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import CourseReducer from '../redux/reducers/course';
import SeachReducer from './reducers/search';
const rootReducers = combineReducers({
    course: CourseReducer,
    search: SeachReducer

});

let middleWare = applyMiddleware(reduxThunk);

let composeCustom = compose(middleWare,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducers, composeCustom);