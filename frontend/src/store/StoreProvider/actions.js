import {
    SET_ACCOUNT,
    SET_LIST_USER,
    SET_CURRENT_USER,
    SET_TVSHOWS,
    SET_MOVIES,
    SET_NEW_POPULAR,
    SET_MYLIST,
    SET_LOADED,
    SET_RESET,
} from './constants';

export const setAccount = (payload) => ({
    type: SET_ACCOUNT,
    payload,
});

export const setListUser = (payload) => ({
    type: SET_LIST_USER,
    payload,
});

export const setCurrentUser = (payload) => ({
    type: SET_CURRENT_USER,
    payload,
});

export const setTVShows = (payload) => ({
    type: SET_TVSHOWS,
    payload,
});

export const setMovies = (payload) => ({
    type: SET_MOVIES,
    payload,
});
export const setNewPopular = (payload) => ({
    type: SET_NEW_POPULAR,
    payload,
});

export const setMyList = (payload) => ({
    type: SET_MYLIST,
    payload,
});

export const setLoaded = (payload) => ({
    type: SET_LOADED,
    payload,
});

export const setReset = (payload) => ({
    type: SET_RESET,
    payload,
});
