import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginProvider } from '~/store/LoginProvider';
import { useStore } from '~/hooks';

import Header from './Header';
import Footer from './Footer';

import { actions } from '~/store/StoreProvider';
import images from '~/assets/images';

import * as Account from '~/services/AccountService';

import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    const [state, dispatch] = useStore();
    const { account } = state;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmited, setIsSubmited] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        setIsSubmited(true);
    };

    const value = {
        setEmail,
        setPassword,
        handleSubmit,
    };

    useEffect(() => {
        setIsSubmited(false);
        const fetchAPI = async () => {
            const result = await Account.signIn(email, password);

            if (result) {
                dispatch(actions.setAccount(result.data));
                if (result.data._id) {
                    navigate('/browse');
                }
            }
        };
        fetchAPI();
    }, [isSubmited]);

    return (
        <div className={cx('container')}>
            <LoginProvider value={value}>
                <div className={cx('background-image')}>
                    <img src={images.login} alt="imag" className={cx('image')} />
                </div>
                <div className={cx('content')}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </LoginProvider>
        </div>
    );
}

export default LoginLayout;
