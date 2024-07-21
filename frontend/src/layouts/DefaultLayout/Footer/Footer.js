import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const socialItems = [
    {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        name: 'Facebook',
        to: '/facebook',
    },
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        name: 'Instagram',
        to: '/instagram',
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        name: 'Twitter',
        to: '/twitter',
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        name: 'Youtube',
        to: '/youtube',
    },
];

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

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('social-links')}>
                {socialItems.map((item, index) => {
                    return (
                        <p key={index} className={cx('social-icon')}>
                            {item.icon}
                        </p>
                    );
                })}
            </div>
            <div className={cx('footer-links')}>
                {footerItems.map((item, index) => {
                    return (
                        <Link key={index} to={item.to} className={cx('item-link')}>
                            <button className={cx('footer-item')}>{item.name}</button>
                        </Link>
                    );
                })}
            </div>
            <div className={cx('footer-service')}>
                <button className={cx('service-code')}>
                    <span>Service Code</span>
                </button>
            </div>
            <div className={cx('footer-copyright')}>
                <p className={cx('copyright-infor')}>© 1997-2024 Nerflix, Inc.</p>
            </div>
        </div>
    );
}

export default Footer;
