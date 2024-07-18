import { Link } from 'react-router-dom';
import CardMovieOrder from '~/components/CardMovieOrder';

import classNames from 'classnames/bind';
import styles from './SlideMovieOrder.module.scss';

const cx = classNames.bind(styles);

function SlideMovieOrder({ heading, movies }) {
    return (
        <div className={cx('container')}>
            <h2 className={cx('row-header')}>
                <Link to="/movie" className={cx('more-row-header')}>
                    <div className={cx('more-row-header-title')}>{heading}</div>
                </Link>
            </h2>
            <div className={cx('row-slider')}>
                {movies.map((movie, index) => {
                    return <CardMovieOrder key={index} movie={movie} className={cx('card')} />;
                })}
            </div>
        </div>
    );
}

export default SlideMovieOrder;
