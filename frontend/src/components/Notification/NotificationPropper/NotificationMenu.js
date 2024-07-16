import Tippy from '@tippyjs/react/headless';

import NotificationItem from './NotificationItem';

import classNames from 'classnames/bind';
import styles from './NotificationMenu.module.scss';

const cx = classNames.bind(styles);

function NotificationMenu({ children, notificationItems = [], hideOnClick = false }) {
    const renderItems = () => {
        return notificationItems.map((item, index) => {
            return <NotificationItem key={index} data={item} />;
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
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </div>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default NotificationMenu;
