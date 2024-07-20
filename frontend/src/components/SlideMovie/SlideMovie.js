import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CardMovie from '~/components/CardMovie';

import classNames from 'classnames/bind';
import styles from './SlideMovie.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CustomPrevArrow({ onClick }) {
    return (
        <div className={cx('prev-arrow')} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} className={cx('icon-prev')} />
        </div>
    );
}

function CustomNextArrow({ onClick }) {
    return (
        <div className={cx('next-arrow')} onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} className={cx('icon-next')} />
        </div>
    );
}

function SlideMovie({ heading, movies }) {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className={cx('container')}>
            <h2 className={cx('row-header')}>
                <Link to="/movie" className={cx('more-row-header')}>
                    <div className={cx('more-row-header-title')}>{heading}</div>
                </Link>
            </h2>
            <div className={cx('row-slider')}>
                <Slider {...settings}>
                    {movies.map((movie, index) => {
                        return <CardMovie key={index} movie={movie} className={cx('card')} />;
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default SlideMovie;
