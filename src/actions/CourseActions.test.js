import expect from 'expect';
import * as CourseActions from './courseActions';
import * as types from './ActionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'a', title: 'b'};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };
      // act
      const action = CourseActions.createCourseSuccess(course);
      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', function () {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // example call to nock
    // nock('http://example.com')
    //   .get('/courses')
    //   .reply(200, { body: {course: [{id: 1, firstName: 'A', lastName:' B'}]}});

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      { type: types.LOAD_COURSES_SUCCESS, body: { courses:  [{ id: 'a', title: 'a' }] } }
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(CourseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });

  });
});
