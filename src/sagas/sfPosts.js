import { call, put, takeLatest } from 'redux-saga/effects';
import * as postsActions from '../actions/sfPosts';
import Api from '../api';

function* fetchStackOveflowPostsFlow() {
  try {      
    const response = yield call(Api.getStackOveflowPosts);       
    yield put(postsActions.fetchPostsSuccess(response.data));   
  } catch (err) {
    yield put(postsActions.fetchPostsFail(err));
  }
}

export function* fetchStackOveflowPostsData() {
  yield takeLatest(postsActions.FETCH_POSTS_STARTED, fetchStackOveflowPostsFlow);
}
