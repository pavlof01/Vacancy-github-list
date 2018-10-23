export const REFRESH_REPS = 'REFRESH_REPS';
export const FETCH_REPS_STARTED = 'FETCH_REPS_STARTED';
export const FETCH_REPS_SUCCESS = 'FETCH_REPS_SUCCESS';
export const FETCH_REPS_FAILURE = 'FETCH_REPS_FAILURE';

export function fetchReps(){
    return {
        type:FETCH_REPS_STARTED,            
    }
};

export function fetchRepsSuccess(payload){
    return {
        type:FETCH_REPS_SUCCESS,
        payload        
    }
};

export function fetchRepsFail(){
    return {
        type:FETCH_REPS_FAILURE,        
    }
};