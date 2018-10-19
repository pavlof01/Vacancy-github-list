import { fromJS, List } from 'immutable';
import * as jobsActions from '../actions/jobs';

const initialState = fromJS({
  isRefreshing: false,
  isFetching: false,
  items: [],
  error: null,
});

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case jobsActions.FETCH_JOBS_STARTED:
      return state
        .set('isFetching', true)
        .set('error', null);
    case jobsActions.REFRESH_JOBS:
      return state
        .set('isRefreshing', true)
        .set('items', List([]))
        .set('error', null);
    case jobsActions.FETCH_JOBS_SUCCESS:
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
