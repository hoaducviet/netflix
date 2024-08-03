import { LoginProvider } from '~/store/LoginProvider';

import Header from './Header';
import Footer from './Footer';

import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    return (
        <div className={cx('container')}>
            <LoginProvider>
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
