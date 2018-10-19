export const REFRESH_JOBS = 'REFRESH_JOBS';
export const FETCH_JOBS_STARTED = 'FETCH_JOBS_STARTED';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export function fetchJobs(description, location){
    return {
        type:FETCH_JOBS_STARTED,
        description,
        location        
    }
};

export function fetchJobsSuccess(payload){
    return {
        type:FETCH_JOBS_SUCCESS,
        payload        
    }
};

export function fetchJobsFail(){
    return {
        type:FETCH_JOBS_FAILURE,        
    }
};