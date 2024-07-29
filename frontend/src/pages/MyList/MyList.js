import { movies } from '~/assets/data';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './MyList.module.scss';

const cx = classNames.bind(styles);

const moviesL = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies];
function MyList() {
    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}>
                <p className={cx('title')}>My List</p>
            </div>
            <div className={cx('content')}>
                <div className={cx('movie-container')}>
                    {moviesL.map((movie, index) => {
                        return <CardMovie key={index} movie={movie} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyList;
