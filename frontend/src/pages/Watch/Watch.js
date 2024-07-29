import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function Watch() {
    const { id } = useParams();

    const API = process.env.REACT_APP_API_SERVER_STREAM_VIDEOS;

    const playerRef = useRef();
    const [isIntroPlaying, setIsIntroPlaying] = useState(true);
    const [isPause, setIsPause] = useState(false);

    const Urls1 = ['/media/intro.mp4'];

    const movie = {
        id: 'spider',
        title: 'Avengers InfinityWar',
        image: 'avengers',
        author: 'viethoaduc',
    };

    const handlePlay = () => {
        setIsPause(false);
    };
    const handlePause = () => {
        setIsPause(true);
    };
    const handleOverlayClick = () => {
        setIsPause(false);
        playerRef.current.getInternalPlayer().play();
    };
    const handleEnterFullscreen = () => {
        if (playerRef.current) {
            const player = playerRef.current.getInternalPlayer();
            if (player) {
                if (player.requestFullscreen) {
                    player.requestFullscreen();
                } else if (player.mozRequestFullScreen) {
                    // Firefox
                    player.mozRequestFullScreen();
                } else if (player.webkitRequestFullscreen) {
                    // Chrome, Safari and Opera
                    player.webkitRequestFullscreen();
                } else if (player.msRequestFullscreen) {
                    // IE/Edge
                    player.msRequestFullscreen();
                }
            }
        }
    };

    return (
        <div className={cx('video-wrapper')}>
            {isIntroPlaying ? (
                <ReactPlayer
                    ref={playerRef}
                    url={Urls1}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    muted={false}
                    onEnded={() => {
                        setIsIntroPlaying(false);
                    }}
                />
            ) : (
                <ReactPlayer
                    ref={playerRef}
                    url={"http://127.0.0.1:11470/d48e44e1ec82a3631cd443209e58f8ebe7197ec6/0"}
                    // url={`${API}/${movie.id}`}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    muted={false}
                    playbackRate={1}
                    onPlay={handlePlay}
                    onPause={handlePause}
                />
            )}
            {isPause && (
                <div className={cx('overlay')} onClick={handleOverlayClick}>
                    {/* <img src="/logo192.png" alt="logo" className={cx('overlay-image')}/> */}
                </div>
            )}
        </div>
    );
}

export default Watch;
