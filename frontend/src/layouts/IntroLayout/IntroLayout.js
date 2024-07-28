import Header from './Header';
import Footer from './Footer';

import images from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './IntroLayout.module.scss';

const cx = classNames.bind(styles);

function IntroLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('background-image')}>
                <img src={images.intro} alt="imag" className={cx('image')} />
            </div>
            <div className={cx('content')}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default IntroLayout;
