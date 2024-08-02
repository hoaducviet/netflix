import * as httpRequest from '~/utils/httpRequest';

export const signIn = async (email, password) => {
    try {
        const res = await httpRequest.post('search', {
            email: email,
            password: password,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
