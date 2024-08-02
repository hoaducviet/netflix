import * as httpRequest from '~/utils/httpRequest';

export const getMyListbyIdUser = async (idUser) => {
    try {
        const res = await httpRequest.get(`mylist/byiduser/${idUser}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};


 