import LoginForm from '~/components/LoginForm';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <div className={cx('form-login')}>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;
