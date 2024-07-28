import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <div className={cx('nav-logo')}>
                            <Link to={config.routes.intro} className={cx('logo-link')}>
                                <img src={images.logo} alt="Netflix" className={cx('logo')} />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('item')}></div>
                </div>
            </header>
        </>
    );
}

export default Header;
