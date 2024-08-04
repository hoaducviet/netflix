import { MediaServices } from '~/services';

export const setTVShows = async (dispatch, actions) => {
    const top10tvshows = await MediaServices.getMediaAll();

    const data = {
        top10tvshows: top10tvshows.data ? top10tvshows.data : [],
    };

    dispatch(actions.setTVShows(data));

    return;
};
