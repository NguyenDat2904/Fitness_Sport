import React, { Fragment, useContext } from 'react';
import Slider from 'react-slick';

import classNames from 'classnames/bind';
import style from './Slide.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';

const cx = classNames.bind(style);

function Slide({ data, slide, styles, payment }) {
    const { setBuyCourse, setIsCheckPay, userInfoProfile } = useContext(AppContext);

    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: slide.slidesToShow,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: slide.autoplay,
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
        const handleCourse = () => {
            localStorage.setItem('course', JSON.stringify(data));
            localStorage.setItem('isCheckPay', JSON.stringify(false));

            setBuyCourse(data);
            setIsCheckPay(false);
        };

        const isGoldDisabled = data.rank === userInfoProfile.rank;
        const isPlatinumDisabled = data.rank === 'Gold' || data.rank === 'Platinum';
        const isDiamondDisabled = data.rank === 'Gold' || data.rank === 'Platinum' || data.rank === 'Diamond';

        const isDisabled =
            userInfoProfile.rank === 'Gold'
                ? isGoldDisabled
                : userInfoProfile.rank === 'Platinum'
                ? isPlatinumDisabled
                : userInfoProfile.rank === 'Diamond'
                ? isDiamondDisabled
                : false;

        const buttonClass = cx('btn', { disabled: isDisabled });

        return (
            <Fragment key={index}>
                <div className={cx('item')} style={{ paddingRight: `${styles}` }}>
                    <img src={data.img} alt={`slide ${index + 1}`} />
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            <Link to={payment}>
                                <h3 onClick={handleCourse}>{data.name}</h3>
                            </Link>
                        </div>
                        <div className={cx('desc')}>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                </div>
                {payment && (
                    <div className={cx('btn-submit')}>
                        <Link to={!isDisabled && payment}>
                            <div onClick={handleCourse} className={buttonClass}>
                                ĐĂNG KÝ NGAY
                            </div>
                        </Link>
                    </div>
                )}
            </Fragment>
        );
    });
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>{renderSlide}</Slider>
        </div>
    );
}

export default Slide;
