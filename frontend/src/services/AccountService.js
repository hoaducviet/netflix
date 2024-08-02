import * as httpRequest from '~/utils/httpRequest';

export const signIn = async (email, password) => {
    try {
        if (!email || !password) {
            return null;
        }
        const res = await httpRequest.post('signin', {
            email: email,
            password: password,
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
