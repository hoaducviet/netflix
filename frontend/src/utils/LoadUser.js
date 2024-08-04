import { UserServices } from '~/services';

export const setListUser = async (dispatch, actions, idAccount) => {
    const res = await UserServices.getUserAllbyAccount(idAccount);
    if (res.data) {
        dispatch(actions.setListUser(res.data));
    }
    return;
};

export const setCurrentUser = async (dispatch, actions, listUser, idUser) => {
    const userCurrent = listUser.find((user) => user._id === idUser);
    dispatch(actions.setCurrentUser(userCurrent));

    return;
};
