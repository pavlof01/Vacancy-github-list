import { call, put, takeLatest } from 'redux-saga/effects';
import * as repsActions from '../actions/ghReps';
import Api from '../api';

function* fetchUsersRepsFlow() {
  try {      
    const response = yield call(Api.getUsersReps);         
    yield put(repsActions.fetchRepsSuccess(response.data));   
  } catch (err) {
    yield put(repsActions.fetchRepsFail(err));
  }
}

export function* fetchUsersRepsData() {
  yield takeLatest(repsActions.FETCH_REPS_STARTED, fetchUsersRepsFlow);
}
