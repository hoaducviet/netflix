import { useState } from 'react';
import NotificationPropper from './NotificationPropper';

import classNames from 'classnames/bind';
import styles from './Notification.module.scss';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const notificationItems = [
    {
        imageUrl: 'https://marketplace.canva.com/EAFvpcP6DrQ/1/0/1131w/canva-green-black-classic-minimalist-fantasy-movie-poster-njyzykFuCug.jpg',
        detail: 'This content will deleted. The last change for watch',
        time: '30 minutes ago'
    },
    {
        imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1636999411',
        detail: 'This content watched, try again more times',
        time: '2 hours ago'
    },
    {
        imageUrl: 'https://i.ebayimg.com/images/g/qbsAAOSwZOpkjEzl/s-l1200.jpg',
        detail: 'This content will publish at 24:00 today',
        time: '1 week ago'
    }
]

function Notification() {
    return (
        <NotificationPropper notificationItems={notificationItems}>
            <div className={cx('notifications')}>
                <button className={cx('notification-menu')}>
                    <FontAwesomeIcon className={cx('notification-icon')} icon={faBell} />
                </button>
            </div>
        </NotificationPropper>
    );
}

export default Notification;
