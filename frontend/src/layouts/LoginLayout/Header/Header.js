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
                <div className={cx('inner')}>
                    <Link to={config.routes.login} className={cx('logo-link')}>
                        <img src={images.logo} alt="Netflix" className={cx('logo')} />
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
