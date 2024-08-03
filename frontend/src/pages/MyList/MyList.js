import { useState, useEffect } from 'react';

import { useStore } from '~/hooks';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './MyList.module.scss';

import * as MyListServices from '~/services/MyListServices';

const cx = classNames.bind(styles);

function MyList() {
    const [state, dispatch] = useStore();
    const { currentUser } = state;
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await MyListServices.getMyListbyIdUser(currentUser._id);
            if (res.data) {
                setMedia(res.data);
            }
        };
        fetchAPI();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}>
                <p className={cx('title')}>My List</p>
            </div>
            <div className={cx('content')}>
                <div className={cx('movie-container')}>
                    {media.map((movie, index) => {
                        return <CardMovie key={index} movie={movie} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyList;
