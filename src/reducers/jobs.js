import { fromJS } from 'immutable';

const initialState = fromJS({
  isRefreshing: false,
  isFetching: false,
  items: [],
  error: null,
});

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
};

export default jobsReducer;
