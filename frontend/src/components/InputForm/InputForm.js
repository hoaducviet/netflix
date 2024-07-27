import { useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './InputForm.module.scss';

const cx = classNames.bind(styles);

function InputForm({ label }) {
    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.focus();
    };
    return (
        <div className={cx('container')}>
            <button className={cx('inner')} onClick={handleClick}>
                <label className={cx('label-input')}>{label}</label>
                <input ref={inputRef} className={cx('text-input')} type="text"></input>
            </button>
        </div>
    );
}

export default InputForm;
