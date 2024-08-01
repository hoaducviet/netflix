import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

import CardProfile from '~/components/CardProfile';

import avatars from '~/assets/avatars';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const accountItems = [
    {
        id: 1,
        imageURL: avatars.avatar5,
        name: 'Jennifer',
    },
    {
        id: 2,
        imageURL: avatars.avatar2,
        name: 'Robert',
    },
    {
        id: 3,
        imageURL: avatars.avatar3,
        name: 'Maxnumpy',
    },
    {
        id: 4,
        imageURL: avatars.avatar4,
        name: 'Beyonces',
    },
    {
        id: 5,
        imageURL: avatars.avatar4,
        name: 'Beyonces',
    },
];

function DefaultLayout({ children }) {
    const [idChoose, setIdChoose] = useState(null);

    return (
        <div className={cx('container')}>
            {!!idChoose ? (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            ) : (
                <div className={cx('profiles-gate-container')}>
                    <div className={cx('profiles-gate-content')}>
                        <p className={cx('heading-content')}>Who Are Watching?</p>
                        <div className={cx('list-profiles')}>
                            {accountItems.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className={cx('card-profile')}
                                        onClick={() => setIdChoose(item.id)}
                                    >
                                        <CardProfile data={item} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DefaultLayout;
