import { combineReducers } from 'redux';
import jobs from './jobs';
import posts from './posts';

const reducers = combineReducers({
    jobs,
    posts
});

export default reducers;