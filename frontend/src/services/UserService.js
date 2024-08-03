import * as httpRequest from '~/utils/httpRequest';

export const getUserAllbyAccount = async (idAccount) => {
    try {
        if (!idAccount) {
            return null;
        }
        const res = await httpRequest.get(`userall/${idAccount}`);

        if (res.status !== 200) {
            return { data: null };
        }

        
        return res.data;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
