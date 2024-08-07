import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '~/hooks';
import { actions } from '~/store/StoreProvider';
import { LoadUser, LoadData } from '~/utils';

import Header from './Header';
import Footer from './Footer';
import CardProfile from '~/components/CardProfile';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [state, dispatch] = useStore();
    const { account, listUser, loaded, currentUser } = state;
    const [isChoose, setIsChoose] = useState(!!currentUser._id);
    const [idUserCurrent, setIdUserCurrent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!account._id) {
            return navigate('/');
        }
        const fetchAPI = async () => {
            await LoadUser.setListUser(dispatch, actions, account._id);
        };

        fetchAPI();
        return navigate('/browse');
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            if (idUserCurrent) {
                await LoadUser.setCurrentUser(dispatch, actions, listUser, idUserCurrent);
                await LoadData.getData(dispatch, actions, idUserCurrent);
            }
        };
        fetchAPI();
    }, [isChoose]);

    return (
        <div className={cx('container')}>
            {!!isChoose ? (
                <>
                    {loaded && (
                        <>
                            <Header />
                            {children}
                            <Footer />
                        </>
                    )}
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
                                        onClick={() => {
                                            setIsChoose(true);
                                            setIdUserCurrent(item._id);
                                        }}
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
