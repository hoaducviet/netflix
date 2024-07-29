import { useState, useRef, useEffect } from 'react';

import SlideMovieOrder from '~/components/SlideMovieOrder';
import SlideMovie from '~/components/SlideMovie';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons';

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
