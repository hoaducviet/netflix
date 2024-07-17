import classNames from 'classnames/bind';
import styles from './CardMovie.module.scss';
const cx = classNames.bind(styles);

function CardMovie({ movie }) {
    return (
        <div className={cx('container')}>
            <div className={cx('image-movie')}>
                <img src={movie.imageURL} alt={movie.title} className={cx('image')}/>
            </div>
        </div>
    );
}

export default CardMovie;
