import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function Watch() {
    const { id } = useParams();

    const Urls = [
        '/media/intro.mp4',
        'https://www.youtube.com/watch?v=gPh0Jifw2oI',
        'https://www.youtube.com/watch?v=c1psIq1oXuA',
    ];

    return (
        <div className={cx('video-wrapper')}>
            <ReactPlayer url={Urls} playing={true} controls width="100%" height="100%" />
        </div>
    );
}

export default Watch;
