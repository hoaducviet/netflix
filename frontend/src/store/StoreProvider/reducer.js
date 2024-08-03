import { SET_ACCOUNT, SET_LIST_USER, SET_CURRENT_USER } from './constants';

const initState = {
    account: { _id: '66abf6f997ea6c6dd652480d' },
    listUser: [],
    currentUser: { _id: '66ac731018500d14a5aab5d4' },
};

// _id: '66ac731018500d14a5aab5d4'

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

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
