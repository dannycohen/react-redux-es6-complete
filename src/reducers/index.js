import {combineReducers} from 'redux';
import courses from './CourseReducer';

// root reducer
const rootReducer = combineReducers({
    courses
});

export default rootReducer;


