import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';
import Information from '~/components/Information';

import icons from '~/assets/icons';

import { movies, moviesOrder } from '~/assets/data';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const slideContainer = [
    {
        heading: 'Top 10 TV Shows in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
        to: '/home',
    },
    {
        heading: 'Continue Watching for You',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Made in Korea',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Blockbuster Movies',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Only on Netflix',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Top 10 Movies in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
        to: '',
    },
    {
        heading: "Today's Top Picks for You",
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Chinese Movies & TV',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'US TV Shows',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'New on Netflix',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'TV Comedies',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'My List',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Romantic Korean TV Comedies',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Anime',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Suspenseful TV Shows',
        data: movies,
        component: SlideMovie,
        to: '',
    },
];

const API = process.env.REACT_APP_API_SERVER_STREAM_VIDEOS;
function Home() {
    const [playing, setPlaying] = useState(false);

    const movieCurrent = movies[Math.floor(Math.random() * movies.length)];

    const player = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setPlaying(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleEnded = () => {
        setPlaying(false);
    };
    return (
        <div className={cx('container')}>
            <div className={cx('background-layer')}>
                <div className={cx('bill-board')}>
                    <div className={cx('hero-image-wrapper')}>
                        {!playing ? (
                            <img src={movieCurrent.imageURL} alt="imag" className={cx('image-wrapper')} />
                        ) : (
                            <ReactPlayer
                                className={cx('video-wrapper')}
                                ref={player}
                                url={`${API}/captain`}
                                playing={playing}
                                width="100%"
                                height="100%"
                                muted={true}
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
                        <Information movie={movieCurrent} />
                    </div>
                    <div className={cx('information-button-label')}>
                        <div className={cx('icon-label')}>
                            <img src={icons.load} alt="icon" className={cx('icon')} />
                        </div>
                        <div className={cx('heading-label')}></div>
                        <div className={cx('label')}>{movieCurrent.label}</div>
                    </div>
                </div>
                <div className={cx('main-container')}>
                    {slideContainer.map((item, index) => {
                        return <item.component key={index} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
