import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import { actions } from '~/store/StoreProvider';

import * as UserService from '~/services/UserService';

import Header from './Header';
import Footer from './Footer';

import CardProfile from '~/components/CardProfile';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [state, dispatch] = useStore();
    const { account, listUser } = state;

    const [idChoose, setIdChoose] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!account._id) {
            return navigate('/');
        }

        const fetchAPI = async () => {
            const result = await UserService.getUserAllbyAccount(account._id);
            if (result.data) {
                dispatch(actions.setListUser(result.data));
            }
        };

        fetchAPI();
    }, []);

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
                            {listUser.map((item) => {
                                return (
                                    <div
                                        key={item._id}
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
