import { httpRequest } from '~/utils';

export const search = async (q) => {
    try {
        if (!q) {
            return { data: null };
        }

        const res = await httpRequest.get('search', {
            params: {
                q,
            },
        });

        if (res.status !== 200) {
            return { data: null };
        }

        return res.data;
    } catch (error) {
        console.log(error);
        return { data: null };
    }
};
