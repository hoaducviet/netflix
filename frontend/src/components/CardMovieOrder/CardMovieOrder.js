import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CardMovieOrder.module.scss';
const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;
function CardMovieOrder({ movie }) {
    return (
        <Link to={`/watch/${movie._id}`} className={cx('container')}>
            <div className={cx('image-movie')}>
                <div className={cx('number')}>{movie.iconNumber}</div>
                <div className={cx('image-container')}>
                    <img src={`${API}${movie.posterURL}`} alt={movie.title} className={cx('image')} />
                </div>
            </div>
        </Link>
    );
}

export default CardMovieOrder;
