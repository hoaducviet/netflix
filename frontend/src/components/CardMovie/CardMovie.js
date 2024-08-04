import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CardMovie.module.scss';
const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;

// const imageURL = `${API}${movie.posterURL}`

function CardMovie({ movie }) {
    return (
        <Link to={`/watch/${movie._id}`} className={cx('container')}>
            <div className={cx('image-movie')}>
                <img src={movie.imageURL} alt={movie.title} className={cx('image')} />
            </div>
        </Link>
    );
}

export default CardMovie;
