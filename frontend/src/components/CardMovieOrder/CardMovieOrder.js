import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './CardMovieOrder.module.scss';
const cx = classNames.bind(styles);

function CardMovieOrder({ movie }) {
    return (
        <Link to={`/watch/${movie.id}`} className={cx('container')}>
            <div className={cx('image-movie')}>
                <div className={cx('number')}>{movie.iconNumber}</div>
                <div className={cx('image-container')}>
                    <img src={movie.imageURL} alt={movie.title} className={cx('image')} />
                </div>
            </div>
        </Link>
    );
}

export default CardMovieOrder;
