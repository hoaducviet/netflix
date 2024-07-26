import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Information.module.scss';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const buttons = [
    {
        icon: <FontAwesomeIcon icon={faPlay} />,
        content: 'Play',
        to: '',
        color: 'primary',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        content: 'More Information',
        to: '',
        color: 'gray',
    },
];

function Information({ movie }) {
    buttons[0].to = `/watch/${movie.id}`;
    return (
        <div className={cx('container')}>
            <div className={cx('title')}>{movie.title}</div>
            <div className={cx('detail')}>{movie.detail}</div>
            <div className={cx('group-button')}>
                {buttons.map((item, index) => {
                    return <Button key={index} item={item} />;
                })}
            </div>
        </div>
    );
}

export default Information;
