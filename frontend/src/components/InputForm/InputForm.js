import { useState, useRef, useContext } from 'react';

import { LoginContext } from '~/store/LoginProvider';

import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

function InputForm({ type, label }) {
    const { setEmail, setPassword } = useContext(LoginContext);

    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        setIsFocused(true);

        inputRef.current.style.display = 'flex';
        inputRef.current.focus();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (value.trim() === '') {
            setValue('');
            inputRef.current.style.display = 'none';
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        if (type === 'email') {
            setEmail(e.target.value);
        } else if (type === 'password') {
            setPassword(e.target.value);
        }
    };

    return (
        <div className={cx('container')}>
            <button className={cx('inner')} onClick={handleClick}>
                <label className={cx('label-input', { 'label-focused': isFocused || value })}>{label}</label>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={cx('text-input')}
                    type={type}
                    style={{ display: value ? 'flex' : 'none' }}
                ></input>
            </button>
        </div>
    );
}

export default InputForm;
