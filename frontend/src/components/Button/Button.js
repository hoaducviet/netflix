import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ item }) {
    let Comp = 'div';
    const props = {};
    if (!!item.to) {
        props.to = item.to;
        Comp = Link;
    }

    const classes = cx('container', `${item.color}`);

    console.log(classes);
    return (
        <Comp className={classes} {...props}>
            <div className={cx('icon')}>{item.icon}</div>
            <div className={cx('content')}>
                <span>{item.content}</span>
            </div>
        </Comp>
    );
}

export default Button;
