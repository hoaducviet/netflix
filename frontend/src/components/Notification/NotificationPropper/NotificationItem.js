import classNames from 'classnames/bind';
import styles from './NotificationItem.module.scss';

const cx = classNames.bind(styles);

function NotificationItem({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <img src={data.imageUrl} alt={data.name} className={cx('image-icon')} />
            </div>
            <div className={cx('information')}>
                <span className={cx('detail')}>{data.detail}</span>
                <span className={cx('time')}>{data.time}</span>
            </div>
        </div>
    );
}

export default NotificationItem;
