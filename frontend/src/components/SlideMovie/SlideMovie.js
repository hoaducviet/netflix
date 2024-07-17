import { Link } from 'react-router-dom';
import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './SlideMovie.module.scss';

const cx = classNames.bind(styles);

function SlideMovie({ header, movies }) {
    return (
        <div className={cx('container')}>
            <h2 className={cx('row-header')}>
                <Link to='/movie' className={cx('more-row-header')}>
                    <div className={cx('more-row-header-title')}>
                    {header}
                    </div>
                </Link>
            </h2>
            <div className={cx('row-slider')}>
                {movies.map((movie, index) => {
                    return <CardMovie key={index} movie={movie} className={cx('card')} />;
                })}
            </div>
        </div>
    );
}

export default SlideMovie;
