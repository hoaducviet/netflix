import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div className={cx('notifications')}>
            <button className={cx('notification-menu')}>
                <FontAwesomeIcon className={cx('notification-icon')} icon={faBell} />
            </button>
        </div>
    );
}

export default Notification;
