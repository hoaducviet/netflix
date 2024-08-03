import * as httpRequest from '~/utils/httpRequest';

export const getMediaById = async (id) => {
    try {
        if (!id) {
            return { data: null };
        }

        const res = await httpRequest.get(`media/byid/${id}`);

        if (res.status !== 200) {
            return { data: null };
        }

        return res.data;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
