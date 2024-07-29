import { useState, useRef, useEffect } from 'react';

import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';

import { movies, moviesOrder } from '~/assets/data';

import classNames from 'classnames/bind';
import styles from './NewPopular.module.scss';

const cx = classNames.bind(styles);

const slideContainer = [
    {
        heading: 'New on Netlix',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Top 10 TV Shows in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
        to: '',
    },
    {
        heading: 'Top 10 Movies in Vietnam Today',
        data: moviesOrder,
        component: SlideMovieOrder,
        to: '',
    },
    {
        heading: 'Coming Next Week',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Worth the Wait',
        data: movies,
        component: SlideMovie,
        to: '',
    },
    {
        heading: 'Coming This Week',
        data: movies,
        component: SlideMovie,
        to: '',
    },
];

function NewPopular() {
    return (
        <div className={cx('container')}>
            <div className={cx('main-content')}>
                {slideContainer.map((item, index) => {
                    return <item.component key={index} item={item} />;
                })}
            </div>
        </div>
    );
}

export default NewPopular;
