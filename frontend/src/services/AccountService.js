import * as httpRequest from '~/utils/httpRequest';

export const signIn = async (email, password) => {
    try {
        if (!email || !password) {
            return { data: null };
        }
        const res = await httpRequest.post('signin', {
            email: email,
            password: password,
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
