import { LoadTVShows, LoadMovies, LoadMyList, LoadNewPopular, LoadDone } from '~/utils';

export const getData = async (dispatch, actions, idUserCurrent) => {
    await LoadTVShows.setTVShows(dispatch, actions, idUserCurrent);
    await LoadMovies.setMovies(dispatch, actions, idUserCurrent);
    await LoadNewPopular.setNewPopular(dispatch, actions);
    await LoadMyList.setMyList(dispatch, actions, idUserCurrent);
    await LoadDone.setLoaded(dispatch, actions);

    return;
};

export const resetData = async (dispatch, actions) => {
    dispatch(actions.setReset(false));
    return;
};
