import Tippy from '@tippyjs/react/headless';

import OptionItem from '../OptionItem';
import AccountItem from '../AccountItem';
import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss';
const cx = classNames.bind(styles);

function AccountMenu({ children, listUser = [], optionItems = [], hideOnClick = false }) {
    const renderAccountItems = () => {
        return listUser.map((user) => {
            return <AccountItem key={user._id} user={user} className={cx('user-item')} />;
        });
    };

    const renderOptionItems = () => {
        return optionItems.map((optionItem, index) => {
            return <OptionItem key={index} data={optionItem} />;
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 300]}
            duration={100}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <div className={cx('menu-propper')}>
                        <div className={cx('menu-account-body')}>{renderAccountItems()}</div>
                        <div className={cx('menu-option-body')}>{renderOptionItems()}</div>
                    </div>
                    <div className={cx('menu-signout')}>
                        <p>Sign out of Netflix</p>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default AccountMenu;
