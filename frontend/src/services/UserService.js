import * as httpRequest from '~/utils/httpRequest';

export const getUserAllbyAccount = async (idAccount) => {
    try {
        if (!idAccount) {
            return null;
        }
        const res = await httpRequest.get(`userall/${idAccount}`);

        return res;
    } catch (error) {
        console.log(error);
    }
};
