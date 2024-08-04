import { httpRequest } from '~/utils';

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

export const getMediaAll = async () => {
    try {
        const res = await httpRequest.get('media/all');

        if (res.status !== 200) {
            return { data: null };
        }

        return res.data;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
