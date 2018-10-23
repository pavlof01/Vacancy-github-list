import { combineReducers } from 'redux';
import jobs from './jobs';
import posts from './posts';
import reps from './reps';

const reducers = combineReducers({
    jobs,
    posts,
    reps
});

export default reducers;