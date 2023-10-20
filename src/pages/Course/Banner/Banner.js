import React from 'react';
import classNames from 'classnames/bind';
import style from './Banner.module.scss';
const cx = classNames.bind(style);
function Banner({ img, title, desc, time }) {
    return (
        <div className={cx('banner-container')}>
            <div className={cx('item')}>
                <img src={img} alt="training-banner" />
                <div className={cx('submit-container-header')}>
                    <div className={cx('submit-container-content')}>
                        <div className={cx('left-box')}>
                            <h2 className={cx('big-text')}>{title}</h2>
                            <p className={cx('small-text')}>{desc}</p>
                        </div>
                        <div className={cx('right-box')}>
                            <div>
                                <h2 className={cx('big-text')}>Thời gian</h2>
                                <p className={cx('small-text')}>{time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
