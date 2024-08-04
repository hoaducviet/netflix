import { useState, useEffect, memo } from 'react';
import { MediaServices } from '~/services';

import CardMovie from '~/components/CardMovie';
import classNames from 'classnames/bind';
import styles from './BrowseByLanguages.module.scss';
const cx = classNames.bind(styles);

function BrowseByLanguages() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await MediaServices.getMediaAll();
            if (res.data) {
                setMedia(res.data);
            }
        };
        fetchAPI();
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('sub-header')}>
                <p className={cx('title')}>Browse by Languages</p>
            </div>
            <div className={cx('content')}>
                <div className={cx('movie-container')}>
                    {media.length &&
                        media.map((movie, index) => {
                            return <CardMovie key={index} movie={movie} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default memo(BrowseByLanguages);
