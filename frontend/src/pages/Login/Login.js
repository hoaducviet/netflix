import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import images from '~/assets/images';
const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('background-image')}>
                <img src={images.authentication} alt="imag" className={cx('image-wrapper')} />
            </div>
            <div className={cx('form-login')}></div>
        </div>
    );
}

export default Login;
