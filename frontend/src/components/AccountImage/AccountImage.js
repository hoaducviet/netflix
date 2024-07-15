import Tippy from '@tippyjs/react';

import classNames from 'classnames/bind';
import styles from './AccountImage.module.scss';

import avatars from '~/assets/avatars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountImage() {
    return (
        <div className={cx('account-items')}>
            <div className={cx('avatar-button')}>
                <button className={cx('avatar')}>
                    <span className={cx('avatar-link')}>
                        <img src={avatars.avatar1} alt="avatar" className={cx('avatar-icon')} />
                    </span>
                </button>
                <span className={cx('caret')}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </div>
        </div>
    );
}

export default AccountImage;
