import { useState, useEffect, memo } from 'react';
import { useStore } from '~/hooks';

import CardMovie from '~/components/CardMovie';
import classNames from 'classnames/bind';
import styles from './MyList.module.scss';
const cx = classNames.bind(styles);

function MyList() {
    const [state] = useStore();
    const { mylist } = state;
    const [media, setMedia] = useState([]);

    useEffect(() => {
        if (mylist.length) {
            setMedia(mylist);
        }
    }, [mylist]);

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

export default memo(MyList);
