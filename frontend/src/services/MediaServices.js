import * as httpRequest from '~/utils/httpRequest';

export const getMediaById = async (id) => {
    try {
        const res = await httpRequest.get(`media/byid/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
