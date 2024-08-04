import { MyListServices } from '~/services';

export const setMyList = async (dispatch, actions, idUserCurrent) => {
    const res = await MyListServices.getMyListbyIdUser(idUserCurrent);

    if (res.data) {
        dispatch(actions.setMyList(res.data));
    }

    return;
};
