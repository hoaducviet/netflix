import { MediaServices } from '~/services';

export const setMovies = async (dispatch, actions) => {
    const top10movies = await MediaServices.getMediaAll();

    const data = {
        top10movies: top10movies.data ? top10movies.data : [],
    };

    dispatch(actions.setMovies(data));

    return;
};
