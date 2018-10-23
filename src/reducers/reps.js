import { fromJS, List } from 'immutable';
import * as repsActions from '../actions/ghReps';

const initialState = fromJS({
  isRefreshing: false,
  isFetching: false,
  items: [],
  error: null,
});

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case repsActions.FETCH_REPS_STARTED:
      return state
        .set('isFetching', true)
        .set('error', null);
    case repsActions.REFRESH_REPS:
      return state
        .set('isRefreshing', true)
        .set('items', List([]))
        .set('error', null);
    case repsActions.FETCH_REPS_SUCCESS:
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
