import AccountPropper from './AccountPropper';

import classNames from 'classnames/bind';
import styles from './AccountImage.module.scss';

import avatars from '~/assets/avatars';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

// Image pattern

const accountItems = [
    {
        avatarUrl: avatars.avatar5,
        name: 'Jennifer',
    },
    {
        avatarUrl: avatars.avatar2,
        name: 'Robert',
    },
    {
        avatarUrl: avatars.avatar3,
        name: 'Maxnumpy',
    },
    {
        avatarUrl: avatars.avatar4,
        name: 'Beyonces',
    },
];

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

function AccountImage() {
    return (
        <AccountPropper accountItems={accountItems} optionItems={optionItems}>
            <div className={cx('account-items')}>
                <div className={cx('avatar-button')}>
                    <button className={cx('avatar')}>
                        <span className={cx('avatar-link')}>
                            <img src={avatars.avatar2} alt="avatar" className={cx('avatar-icon')} />
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

export default AccountImage;
