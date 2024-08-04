import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContext } from '~/store/LoginProvider';
import LoginForm from '~/components/LoginForm';

import { useStore } from '~/hooks';
import { actions } from '~/store/StoreProvider';
import * as AccountServices from '~/services/AccountServices';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [state, dispatch] = useStore();
    const { email, password, isSubmited, setIsSubmited } = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await AccountServices.signIn(email, password);

            if (result.data) {
                dispatch(actions.setAccount(result.data));
                if (result.data._id) {
                    navigate('/browse');
                }
            }
            setIsSubmited(false);
        };
        fetchAPI();
    }, [isSubmited]);

    return (
        <div className={cx('container')}>
            <div className={cx('form-login')}>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;
