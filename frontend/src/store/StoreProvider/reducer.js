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

const initState = {
    account: { _id: '66abf6f997ea6c6dd652480d' },
    listUser: [],
    currentUser: {},
    tvshows: {},
    movies: {},
    newpopular: {},
    mylist: [],
    loaded: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_ACCOUNT:
            return {
                ...state,
                account: action.payload,
            };
        case SET_LIST_USER:
            return {
                ...state,
                listUser: action.payload,
            };

        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        case SET_TVSHOWS:
            return {
                ...state,
                tvshows: action.payload,
            };
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case SET_NEW_POPULAR:
            return {
                ...state,
                newpopular: action.payload,
            };
        case SET_MYLIST:
            return {
                ...state,
                mylist: action.payload,
            };
        case SET_LOADED:
            return {
                ...state,
                loaded: action.payload,
            };
        case SET_RESET:
            return {
                ...state,
                currentUser: {},
                tvshows: {},
                movies: {},
                newpopular: {},
                mylist: [],
                loaded: action.payload,
            };

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
