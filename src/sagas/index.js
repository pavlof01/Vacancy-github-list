import { all, fork } from 'redux-saga/effects';
import { fetchGithubJobsData } from './jobsSaga';
import { fetchStackOveflowPostsData } from './sfPosts';

const rootSagas = function* root() {
  yield all([
    fork(fetchGithubJobsData),
    fork(fetchStackOveflowPostsData),
  ]);
};

export default rootSagas;