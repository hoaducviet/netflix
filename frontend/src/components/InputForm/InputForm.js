import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

function InputForm({ value, onChange, label }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const inputRef = useRef();
    const labelRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.focus();
    };

    return (
        <div className={cx('container')}>
            <button className={cx('inner')} onClick={handleClick}>
                <label ref={labelRef} className={cx('label-input')}>
                    {label}
                </label>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={onChange}
                    className={cx('text-input')}
                    type="text"
                ></input>
            </button>
        </div>
    );
}

export default InputForm;
