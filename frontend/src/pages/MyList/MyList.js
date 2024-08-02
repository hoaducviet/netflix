import { useState, useEffect } from 'react';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './MyList.module.scss';

import * as MyListServices from '~/services/MyListServices';

const cx = classNames.bind(styles);

const idUser = '66ac731018500d14a5aab5d4';

function MyList() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await MyListServices.getMyListbyIdUser(idUser);
            setMedia(res);
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
