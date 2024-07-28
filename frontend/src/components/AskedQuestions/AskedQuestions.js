import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AskedQuestions.module.scss';

const cx = classNames.bind(styles);

function AskedQuestions({ item }) {
    const [icon, setIcon] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIcon((prev) => !prev);
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <button className={cx('container')} onClick={handleClick}>
                <div className={cx('content')}>
                    <span>{item.title}</span>
                    {icon ? (
                        <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                    )}
                </div>
            </button>
            <div className={cx('collapse')} style={{ display: isExpanded ? 'flex' : 'none' }}>
                {item.content}
            </div>
        </div>
    );
}

export default AskedQuestions;
