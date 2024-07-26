import { Link } from 'react-router-dom';
import LanguagesBox from '~/components/LanguagesBox';

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const footerItems = [
    {
        name: 'Audio Description',
        to: '/audio',
    },
    {
        name: 'Help Center',
        to: '/audio',
    },
    {
        name: 'Gift Cards',
        to: '/audio',
    },
    {
        name: 'Media Center',
        to: '/audio',
    },
    {
        name: 'Investor Relations',
        to: '/audio',
    },
    {
        name: 'Jobs',
        to: '/audio',
    },
    {
        name: 'Terms of Use',
        to: '/audio',
    },
    {
        name: 'Privacy',
        to: '/audio',
    },
    {
        name: 'Legal Notices',
        to: '/audio',
    },
    {
        name: 'Cookie Preferences',
        to: '/audio',
    },
    {
        name: 'Corporate Information',
        to: '/audio',
    },
    {
        name: 'Contact Us',
        to: '/audio',
    },
];

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

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('social-links')}></div>
            <div className={cx('footer-links')}>
                {footerItems.map((item, index) => {
                    return (
                        <Link key={index} to={item.to} className={cx('item-link')}>
                            <button className={cx('footer-item')}>{item.name}</button>
                        </Link>
                    );
                })}
            </div>
            <div className={cx('footer-languages')}>
                <div className={cx('languages-code')}>
                    <LanguagesBox languages={languages}/>
                </div>
            </div>
            <div className={cx('footer-copyright')}>
                <p className={cx('copyright-infor')}>© 1997-2024 Nerflix, Inc.</p>
            </div>
        </div>
    );
}

export default Footer;
