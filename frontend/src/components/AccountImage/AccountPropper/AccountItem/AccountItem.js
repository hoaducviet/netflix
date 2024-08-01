import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('container')}>
            <div className={cx('avatar-image')}>
                <img src={data.avatarUrl} alt={data.name} className={cx('avatar-icon')} />
            </div>
            <div className={cx('name-image')}>{data.name}</div>
        </div>
    );
}

export default AccountItem;
