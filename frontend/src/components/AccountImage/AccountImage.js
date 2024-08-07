import { memo } from 'react';
import { useStore } from '~/hooks';
import AccountPropper from './AccountPropper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountImage.module.scss';
const cx = classNames.bind(styles);

const optionItems = [
    {
        icon: <FontAwesomeIcon icon={faPencil} />,
        title: 'Manage Profiles',
        to: '/profiles/manage',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Transfer Profiles',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Account',
        to: '/',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Help Center',
        to: '/help',
    },
];

const API = process.env.REACT_APP_API_SERVER_STREAM;

function AccountImage() {
    const [state] = useStore();
    const { listUser, currentUser } = state;
    const listUserMinus = listUser.filter((user) => user._id !== currentUser._id);

    return (
        <AccountPropper listUser={listUserMinus} optionItems={optionItems}>
            <div className={cx('account-items')}>
                <div className={cx('avatar-button')}>
                    <button className={cx('avatar')}>
                        <span className={cx('avatar-link')}>
                            <img src={`${API}${currentUser.imageURL}`} alt="avatar" className={cx('avatar-icon')} />
                        </span>
                    </button>
                    <span className={cx('caret')}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                </div>
            </div>
        </AccountPropper>
    );
}

export default memo(AccountImage);
