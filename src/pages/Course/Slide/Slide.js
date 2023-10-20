import React, { Fragment } from 'react';
import Slider from 'react-slick';

import classNames from 'classnames/bind';
import style from './Slide.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';

const cx = classNames.bind(style);

function Slide({ data }) {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} className={cx('btn-course btn-next-course')}>
                <AiOutlineCaretRight className={cx('icon')} />
            </button>
        );
    }

    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <button onClick={onClick} aria-label="Previous" className={cx('btn-course btn-prev-course')}>
                <AiOutlineCaretLeft className={cx('icon')} />
            </button>
        );
    }

    const renderSlide = data.map((data, index) => {
        return (
            <Fragment key={index}>
                <div className={cx('item')}>
                    <img src={data.img} alt={`slide ${index + 1}`} />
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <h3>{data.title}</h3>
                        </div>
                        <div className={cx('desc')}>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    });
    return (
        <div>
            <Slider {...settings}>{renderSlide}</Slider>
        </div>
    );
}

export default Slide;
