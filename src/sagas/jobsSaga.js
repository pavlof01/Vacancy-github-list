import { call, put, takeLatest } from 'redux-saga/effects';
import * as jobsActions from '../actions/jobs';
import Api from '../api';

function* fetchGithubJobsFlow(action) {
  try {
    const response = yield call(Api.getListOfGithubJobs, action.description, action.location);    
    yield put(jobsActions.fetchJobsSuccess(response.data));   
  } catch (err) {
    yield put(jobsActions.fetchJobsFail(err));
  }
}

export function* fetchGithubJobsData() {
  yield takeLatest(jobsActions.FETCH_JOBS_STARTED, fetchGithubJobsFlow);
}
