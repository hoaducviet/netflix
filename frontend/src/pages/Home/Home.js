import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useStore } from '~/hooks';
import { contentHome } from '~/data';
import icons from '~/assets/icons';

import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';
import Information from '~/components/Information';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const API = process.env.REACT_APP_API_SERVER_STREAM;
function Home() {
    const [state] = useStore();
    const { movies } = state;
    const [contentContainer, setContentContainer] = useState([]);
    const [playing, setPlaying] = useState(false);
    const player = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlaying(true);
        }, 3000);

        const fetchAPI = async () => {
            setContentContainer(contentHome(state, SlideMovie, SlideMovieOrder));
        };
        fetchAPI();

        return () => clearTimeout(timer);
    }, []);

    const handleEnded = () => {
        setPlaying(false);
    };

    const mediaCurrent = movies.top10movies[Math.floor(Math.random() * movies.top10movies.length)];
    const videoURL = mediaCurrent ? `${API}${mediaCurrent.videoURL}` : '';

    return (
        <div className={cx('container')}>
            <div className={cx('background-layer')}>
                <div className={cx('bill-board')}>
                    <div className={cx('hero-image-wrapper')}>
                        {!playing ? (
                            <img src={mediaCurrent.imageURL} alt="imag" className={cx('image-wrapper')} />
                        ) : (
                            <ReactPlayer
                                className={cx('video-wrapper')}
                                ref={player}
                                url={videoURL}
                                playing={playing}
                                width="100%"
                                height="100%"
                                muted={false}
                                onEnded={handleEnded}
                            />
                        )}
                    </div>
                    <div className={cx('hero-image-bottom')}></div>
                </div>
            </div>

            <div className={cx('main-layer')}>
                <div className={cx('media-information-container')}>
                    <div className={cx('information-container')}>
                        <Information movie={mediaCurrent} />
                    </div>
                    <div className={cx('information-button-label')}>
                        <div className={cx('icon-label')}>
                            <img src={icons.load} alt="icon" className={cx('icon')} />
                        </div>
                        <div className={cx('heading-label')}></div>
                        <div className={cx('label')}>{mediaCurrent.label}</div>
                    </div>
                </div>
                <div className={cx('main-container')}>
                    {contentContainer.length &&
                        contentContainer.map((item, index) => {
                            return <item.component key={index} item={item} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Home;
