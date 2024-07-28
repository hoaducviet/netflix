import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import LanguagesBox from '~/components/LanguagesBox';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const item = {
    content: 'Sign In',
    color: 'signin',
    to: '/login',
};
const languages = [
    {
        name: 'English',
        symbol: 'en',
    },
    {
        name: 'Việt Nam',
        symbol: 'vi',
    },
    {
        name: '日本語',
        symbol: 'jn',
    },
];

function Header() {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('inner')}>
                        <div className={cx('nav-logo')}>
                            <Link to={config.routes.signup} className={cx('logo-link')}>
                                <img src={images.logo} alt="Netflix" className={cx('logo')} />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('languages-box')}>
                            <LanguagesBox languages={languages} />
                        </div>
                        <div className={cx('sigin-button')}>
                            <Button item={item} />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
