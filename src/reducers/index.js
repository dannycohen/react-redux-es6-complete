import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer';


// root reducer
const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;


