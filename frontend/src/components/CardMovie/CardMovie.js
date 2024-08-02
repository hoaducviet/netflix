import classNames from 'classnames/bind';
import styles from './CardMovie.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

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
