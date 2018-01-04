import {combineReducers} from 'redux';
import courses from './CourseReducer';
import authors from './AuthorReducer';
import ajaxCallsInProgress from './AjaxStatusReducer';

// root reducer
const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;


