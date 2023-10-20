import React from 'react';
import style from './ClbItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ClbItem = (props) => {
    const { item, index } = props;

    const { name, city, district, ward, street, desc, times_days, img, phone } = item;

    return (
        <div className={cx('clb-item')}>
            <div className={cx('clb-left-contain')}>
                <div className={cx('clb-left-content')}>
                    <div className={cx('item-title')}>
                        <h2>
                            {name} - QUẬN {district.toUpperCase()}
                        </h2>
                    </div>
                    <div className={cx('description')}>{desc}</div>
                    <div className={cx('information-content')}>
                        <div className={cx('address')}>{street}</div>
                        <div className={cx('hot-line')}>{phone}</div>
                        <div className={cx('opening-hours')}>
                            <div className={cx('hour-item')}>Thời gian hoạt động:</div>
                            {times_days
                                ? times_days.map((item, index) => {
                                      return (
                                          <div className={cx('hour-item')} key={index}>
                                              {item.day} : {item.time}
                                          </div>
                                      );
                                  })
                                : ''}
                        </div>
                    </div>
                </div>
                <div className={cx('explore-contain')}>
                    <div className={cx('explore-more')}>
                        <a href="#" className={cx('clb-link')}>
                            Xem câu lạc bộ
                        </a>
                        <img
                            src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                            className={cx('icon-readmore')}
                            alt="icon read more"
                        />
                    </div>
                    <div className={cx('btn-submit')}>
                        <a href="#">
                            <button className={cx('btn', 'btn-block', 'submit-trial')} type="submit">
                                ĐĂNG KÝ
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('clb-right-contain')}>
                <img src={img} width="100%" height="100%" alt="image of club" />
            </div>
        </div>
    );
};

export default ClbItem;
