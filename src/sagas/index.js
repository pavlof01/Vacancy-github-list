import { all, fork } from 'redux-saga/effects';
import { fetchGithubJobsData } from './jobsSaga';
import { fetchStackOveflowPostsData } from './sfPosts';
import { fetchUsersRepsData } from './githubReps';

const rootSagas = function* root() {
  yield all([
    fork(fetchGithubJobsData),
    fork(fetchStackOveflowPostsData),
    fork(fetchUsersRepsData),
  ]);
};

export default rootSagas;