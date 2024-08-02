import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import * as MediaServices from '~/services/MediaServices';

import medias from '~/assets/medias';

import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;

function Watch() {
    const [media, setMedia] = useState(null);
    const [isIntroPlaying, setIsIntroPlaying] = useState(true);
    const [isPause, setIsPause] = useState(false);

    const playerRef = useRef();
    const overlayRef = useRef();

    const { id } = useParams();

    useEffect(() => {
        if (!isIntroPlaying && playerRef.current) {
            playerRef.current.seekTo(0); // Đặt video về đầu khi component được render
        }
    }, [isIntroPlaying]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await MediaServices.getMediaById(id);

            if (!res.data) {
                return setMedia(null);
            }
            return setMedia(res.data);
        };
        fetchAPI();
    }, []);

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

    const videoURL = media ? `${API}${media.videoURL}` : '';

    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video')}>
                {isIntroPlaying ? (
                    <ReactPlayer
                        ref={playerRef}
                        url={medias.videointro}
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
                        url={videoURL}
                        playing={!isPause}
                        controls={true}
                        width="100%"
                        height="100%"
                        muted={false}
                        playbackRate={1}
                        onPlay={handlePlay}
                        onPause={handlePause}
                    />
                )}
            </div>
            {isPause && (
                <div ref={overlayRef} className={cx('overlay')} onClick={handleOverlayClick}>
                    <div className={cx('information')}>
                        <p className={cx('title')}>{media.title}</p>
                        <p className={cx('detail')}>{media.detail}</p>
                    </div>
                    <img src="/logo192.png" alt="logo" className={cx('overlay-image')} />
                    <p className={cx('pause')}>Pause</p>
                </div>
            )}
        </div>
    );
}

export default Watch;
