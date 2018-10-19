import { call, put, takeLatest } from 'redux-saga/effects';
import * as jobsActions from '../actions/jobs';
import { fetchJobs, fetchJobsSuccess, fetchJobsFail } from '../actions/jobs';
import Api from '../api';

function* fetchGithubJobsFlow(action) {
  try {
    const responseData = yield call(Api.getListOfGithubJobs);
    console.warn(JSON.stringify(responseData.data, null, 2))    
  } catch (err) {
    console.warn(err);
  }
}

export function* fetchGithubJobsData() {
  yield takeLatest(jobsActions.FETCH_JOBS_STARTED, fetchGithubJobsFlow);
}
