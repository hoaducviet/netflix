import { useState } from 'react';
import ReactPlayer from 'react-player';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const Urls = ["https://www.youtube.com/watch?v=gPh0Jifw2oI","https://www.youtube.com/watch?v=c1psIq1oXuA"]

function Watch() {

    const [currentVideo, setCurrentVideo] = useState(0)

    const handleEnded = () => {
        setCurrentVideo(prev => (prev + 1)%Urls.length)
    }
    
    return (
        <div className={cx('video-wrapper')}>
            <ReactPlayer url={Urls} 
                playing={true}
               
                controls
                width='100%'
                height='100%'
                muted={true}
            />

        </div>
    );
}

export default Watch;
