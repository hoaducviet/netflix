import { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';
import Information from '~/components/Information';

import icons from '~/assets/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const movies = [
    {
        title: 'Avengers Infinity War',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp',
    },
    {
        title: 'Spider Man 2',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://images.moviesanywhere.com/980ffe0de224551b0dd5db82d98ac700/112b14f0-2f94-4dab-a684-aeba4d6b3463.jpg?w=2560&r=16x9',
    },
    {
        title: 'Doctor John',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfWwgDOzA_J3wgc2d0D6lWjZmX8zDY2zT2gabozKJbHCVkZfk87Nrczdt-mtKr5GTImC5Y08Bp4Y4ihguTkXFqb8PNppOmDm5jA.webp?r=bea',
    },
    {
        title: 'Journey 2: The Mysterious Island',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbxvfsLboJzdI4SRrH8GcJLg3NmfvbWyn_-z8hvRMJdV4mis01Kx3G7b30gONkjvF2p7P6VlO0Q_uJNQMwqJfUvz9EbuFAz96RnNtKMx9AOWJPECan9GGKinVTiozIMVTS5Xy5Fi91AtbuAtnlWRbJPJd4XcCbgaLys.webp?r=4be',
    },
    {
        title: 'Rampage',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRHOKwoq0s_DsVFV6kScYirjOVungcQaQ59yrRIdHPwanSaYZdB6CD7feAAoC-2Th5A-VbqMKBRO9wNs0feExbDiF4GkYVrPgIuF2y8ygNIMrUIyH-vsLD1a55DA0rbxlOYMpf7TC0lvZHDicLvMzsv0HllO1GyJJVk.webp?r=bdb',
    },
    {
        title: 'Top Gun: Maverrick',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTTCYivGvNYFZphZZRuv2y9me_OrNOZPa-PSxsFCdwZ0R9wx1Elbh7VDdKWUFY3t5Tqd40Nso7whR6Xi2FJoHWnjMnSPxlLrGEs.webp?r=67e',
    },
    {
        title: 'Avengers Infinity War',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp',
    },
    {
        title: 'Spider Man 2',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://images.moviesanywhere.com/980ffe0de224551b0dd5db82d98ac700/112b14f0-2f94-4dab-a684-aeba4d6b3463.jpg?w=2560&r=16x9',
    },
    {
        title: 'Doctor John',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfWwgDOzA_J3wgc2d0D6lWjZmX8zDY2zT2gabozKJbHCVkZfk87Nrczdt-mtKr5GTImC5Y08Bp4Y4ihguTkXFqb8PNppOmDm5jA.webp?r=bea',
    },
    {
        title: 'Journey 2: The Mysterious Island',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbxvfsLboJzdI4SRrH8GcJLg3NmfvbWyn_-z8hvRMJdV4mis01Kx3G7b30gONkjvF2p7P6VlO0Q_uJNQMwqJfUvz9EbuFAz96RnNtKMx9AOWJPECan9GGKinVTiozIMVTS5Xy5Fi91AtbuAtnlWRbJPJd4XcCbgaLys.webp?r=4be',
    },
    {
        title: 'Rampage',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRHOKwoq0s_DsVFV6kScYirjOVungcQaQ59yrRIdHPwanSaYZdB6CD7feAAoC-2Th5A-VbqMKBRO9wNs0feExbDiF4GkYVrPgIuF2y8ygNIMrUIyH-vsLD1a55DA0rbxlOYMpf7TC0lvZHDicLvMzsv0HllO1GyJJVk.webp?r=bdb',
    },
    {
        title: 'Top Gun: Maverrick',
        detail: 'This is detail of fiml Avengers Infinity War',
        label: '18+',

        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTTCYivGvNYFZphZZRuv2y9me_OrNOZPa-PSxsFCdwZ0R9wx1Elbh7VDdKWUFY3t5Tqd40Nso7whR6Xi2FJoHWnjMnSPxlLrGEs.webp?r=67e',
    },
];

const moviesOrder = [
    {
        iconNumber: <FontAwesomeIcon icon={fa1} />,
        title: 'Avengers Infinity War',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa2} />,
        title: 'Spider Man 2',
        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa3} />,
        title: 'Doctor John',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa4} />,
        title: 'Journey 2: The Mysterious Island',
        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa5} />,
        title: 'Rampage',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa6} />,
        title: 'Top Gun: Maverrick',
        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa7} />,

        title: 'Doctor John',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa8} />,
        title: 'Journey 2: The Mysterious Island',
        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa9} />,
        title: 'Rampage',
        videoURL: '/media/AvengersInfinityWar.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
    {
        iconNumber: <FontAwesomeIcon icon={fa0} />,
        title: 'Top Gun: Maverrick',
        videoURL: '/media/SpiderMan2.mp4',
        imageURL:
            'https://occ-0-325-395.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSjLq0f4YRzyNV2FSxh-mYLjy4Gdj_yVtC5YSd0GTAGVP1w35HOxPBxeBQeN31RBP-3j_8xFU_No1aAtcRsTZBnYJdU-QoVV9mCv.webp?r=8dc',
    },
];

const slideContainer = [
    {
        heading: 'Top 10 TV Shows in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
    },
    {
        heading: 'Continue Watching for You',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Made in Korea',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Blockbuster Movies',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Only on Netflix',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Top 10 Movies in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
    },
    {
        heading: "Today's Top Picks for You",
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Chinese Movies & TV',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'US TV Shows',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'New on Netflix',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'TV Comedies',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'My List',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Romantic Korean TV Comedies',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Anime',
        data: movies,
        component: SlideMovie,
    },
    {
        heading: 'Suspenseful TV Shows',
        data: movies,
        component: SlideMovie,
    },
];

const API = process.env.REACT_APP_API_SERVER_STREAM_VIDEOS;
function Home() {
    const movieCurrent = movies[Math.floor(Math.random() * movies.length)];

    const [playing, setPlaying] = useState(false);
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
                                url={`${API}/cdn`}
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
                        return <item.component key={index} heading={item.heading} movies={item.data} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
