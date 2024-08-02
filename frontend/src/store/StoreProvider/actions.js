import { SET_ACCOUNT, SET_LIST_USER, SET_CURRENT_USER } from './constants';

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
