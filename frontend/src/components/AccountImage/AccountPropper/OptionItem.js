import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './OptionItem.module.scss';

const cx = classNames.bind(styles);

function OptionItem({ data }) {
    
    return (
        <Link className={cx('container')} to={data.to}>
            <div className={cx('option-icon')}>{data.icon}</div>
            <span className={cx('option-text')}>{data.title}</span>
        </Link>
    );
}

export default OptionItem;
