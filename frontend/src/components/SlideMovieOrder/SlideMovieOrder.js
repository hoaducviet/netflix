import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons';

import CardMovieOrder from '~/components/CardMovieOrder';
import classNames from 'classnames/bind';
import styles from './SlideMovieOrder.module.scss';
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

const iconsNumbers = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9];
function SlideMovieOrder({ item }) {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    let Comp = 'div';
    const props = {};
    if (item.to) {
        Comp = Link;
        props.to = item.to;
    }

    const slideData = item.data.map((slide, index) => ({
        ...slide,
        iconNumber: <FontAwesomeIcon icon={iconsNumbers[index]} />,
    }));

    return (
        <div className={cx('container')}>
            <h2 className={cx('row-header')}>
                <Comp {...props} className={cx('more-row-header')}>
                    <div className={cx('more-row-header-title')}>{item.heading}</div>
                </Comp>
            </h2>
            <div className={cx('row-slider')}>
                <Slider {...settings}>
                    {slideData.map((movie, index) => {
                        return <CardMovieOrder key={index} movie={movie} className={cx('card')} />;
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default SlideMovieOrder;
