import Information from '~/components/Information';

import classNames from 'classnames/bind';
import styles from './Movies.module.scss';

const cx = classNames.bind(styles);

const movie = {
    title: 'Avengers Infinity War',
    detail: 'This is detail of fiml Avengers Infinity War',
    videoURL: '/media/AvengersInfinityWar.mp4',
    imageURL:
        'https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp',
};

function Movies() {
    return (
        <div className={cx('container')}>
        </div>
    );
}

export default Movies;
