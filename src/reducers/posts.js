import { fromJS, List } from 'immutable';
import * as postActions from '../actions/sfPosts';

const initialState = fromJS({
  isRefreshing: false,
  isFetching: false,
  items: [],
  error: null,
});

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActions.FETCH_POSTS_STARTED:
      return state
        .set('isFetching', true)
        .set('error', null);
    case postActions.REFRESH_POSTS:
      return state
        .set('isRefreshing', true)
        .set('items', List([]))
        .set('error', null);
    case postActions.FETCH_POSTS_SUCCESS:
      return state
        .set('isRefreshing', false)
        .set('isFetching', false)
        .set('items', List(action.payload))
        .set('error', null);
    default:
      return state;
  }
};

export default jobsReducer;
