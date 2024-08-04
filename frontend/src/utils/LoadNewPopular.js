import { MediaServices } from '~/services';

export const setNewPopular = async (dispatch, actions) => {
    const newonnetfilx = await MediaServices.getMediaAll();
    const comingnextweek = await MediaServices.getMediaAll();
    const comingthisweek = await MediaServices.getMediaAll();
    const worththewait = await MediaServices.getMediaAll();

    const data = {
        newonnetfilx: newonnetfilx.data ? newonnetfilx.data : [],
        comingnextweek: comingnextweek.data ? comingnextweek.data : [],
        comingthisweek: comingthisweek.data ? comingthisweek.data : [],
        worththewait: worththewait.data ? worththewait.data : [],
    };

    dispatch(actions.setNewPopular(data));

    return;
};
