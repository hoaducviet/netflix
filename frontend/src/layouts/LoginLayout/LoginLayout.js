import Header from './Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default LoginLayout;
