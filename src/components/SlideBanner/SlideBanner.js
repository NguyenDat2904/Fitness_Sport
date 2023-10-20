import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import style from './SlideBanner.module.scss';
const cx = classNames.bind(style);
function SlideBanner({ title, desc, images }) {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    };

    const renderSlider = images?.map((img, index) => {
        return (
            <div className={cx('item')} key={index}>
                <img src={img} alt="Slide 1" />
                <div className={cx('black-shadow')}></div>
            </div>
        );
    });

    return (
        <div className={cx('yoga-global-standard')}>
            <Slider {...settings}>{renderSlider}</Slider>
            <div className={cx('text-container')}>
                <div className={cx('title')}>
                    <h2>{title}</h2>
                </div>
                <div className={cx('sub-title')}>{desc}</div>
            </div>
        </div>
    );
}

export default SlideBanner;
