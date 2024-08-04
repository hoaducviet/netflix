import { httpRequest } from '~/utils';

export const getMyListbyIdUser = async (idUser) => {
    try {
        if (!idUser) {
            return { data: null };
        }

        const res = await httpRequest.get(`mylist/byiduser/${idUser}`);

        if (res.status !== 200) {
            return { data: null };
        }

        return res.data;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
