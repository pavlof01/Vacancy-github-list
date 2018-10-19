import { all, fork } from 'redux-saga/effects';
import { fetchGithubJobsData } from './jobsSaga';

const rootSagas = function* root() {
  yield all([fork(fetchGithubJobsData)]);
};

export default rootSagas;