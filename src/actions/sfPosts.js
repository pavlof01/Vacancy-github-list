export const REFRESH_POSTS = 'REFRESH_POSTS';
export const FETCH_POSTS_STARTED = 'FETCH_POSTS_STARTED';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export function fetchPosts(){
    return {
        type:FETCH_POSTS_STARTED,            
    }
};

export function fetchPostsSuccess(payload){
    return {
        type:FETCH_POSTS_SUCCESS,
        payload        
    }
};

export function fetchPostsFail(){
    return {
        type:FETCH_POSTS_FAILURE,        
    }
};