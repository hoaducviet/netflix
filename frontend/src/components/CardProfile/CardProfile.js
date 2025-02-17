import classNames from 'classnames/bind';
import styles from './CardProfile.module.scss';
const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;
function CardProfile({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('image-profile')}>
                <img className={cx('image')} src={`${API}${data.imageURL}`} alt={data.name} />
            </div>
            <div className={cx('name-profile')}>
                <p className={cx('name')}>{data.name}</p>
            </div>
        </div>
    );
}

export default CardProfile;
