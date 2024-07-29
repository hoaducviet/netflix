import { movies } from '~/assets/data';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './BrowseByLanguages.module.scss';

const cx = classNames.bind(styles);

const moviesL = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies];
function BrowseByLanguages() {
    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}>
                <p className={cx('title')}>Browse by Languages</p>
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

export default BrowseByLanguages;
