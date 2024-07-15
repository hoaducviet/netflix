import { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '~/components/SearchBox';
import Notification from '~/components/Notification';
import AccountImage from '~/components/AccountImage';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const [isChoose, setIsChoose] = useState(0);
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Netflix" className={cx('logo')} />
                    </Link>
                    <div className={cx('primary-navigation')}>
                        {config.navlinks.map((navlink, index) => {
                            return (
                                <div className={cx('navigation-tab')}>
                                    <Link
                                        to={navlink.path}
                                        key={index}
                                        className={cx('text-navigation', { active: isChoose === index })}
                                        onClick={() => setIsChoose(index)}
                                    >
                                        {navlink.name}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('secondary-navigation')}>
                        <div className={cx('nav-element')}>
                            <SearchBox />
                        </div>
                        <div className={cx('nav-element')}>
                            <Notification />
                        </div>
                        <div className={cx('nav-element')}>
                            <AccountImage />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
