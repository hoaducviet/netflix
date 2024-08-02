import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import InputForm from '../InputForm';

import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

const buttons = [
    {
        content: 'Sign In',
        color: 'signin',
        to: '',
    },
    {
        content: 'Use a Sign-In Code',
        color: 'text',
        to: '',
    },
];

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = async (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = async (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        // e.preventDefault();
        console.log(email, password);
    };
    return (
        <div className={cx('container')}>
            <header className={cx('header')}>
                <p>Sign In</p>
            </header>
            <form className={cx('form')}>
                <div className={cx('form-email')}>
                    <InputForm value={email} onChange={handleEmailChange} label={'Email or mobile number'} />
                </div>
                <div className={cx('form-password')}>
                    <InputForm value={password} onChange={handlePasswordChange} label={'Password'} />
                </div>
                <Button onClick={handleSubmit} item={buttons[0]} className={cx('button')} />
                <p className={cx('form-text')}>OR</p>
                <Button item={buttons[1]} className={cx('button')} />
                <Link className={cx('form-forgot-text')}>
                    <span>Forgot password</span>
                </Link>
            </form>
            <footer className={cx('footer')}>
                <div className={cx('remember')}>
                    <input type="checkbox" className={cx('box')} />
                    <span className={cx('text-box')}>Remember me</span>
                </div>
                <div className={cx('signup-now')}>
                    <span className={cx('signup-now-text')}>New to Netflix?</span>
                    <span className={cx('signup-now-link')}>Sign up now.</span>
                </div>
                <div className={cx('note')}>
                    <span className={cx('note-text')}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </span>
                    <span className={cx('note-link')}>Learn more</span>
                </div>
            </footer>
        </div>
    );
}

export default LoginForm;
