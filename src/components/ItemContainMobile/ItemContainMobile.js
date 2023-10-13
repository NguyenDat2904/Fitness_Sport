import style from './ItemContainMobile.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(style);

const ItemContainMobile = (props) => {
    const { item, index } = props;
    const { urlImg, title, text } = item;

    return (
        <div className={cx('item')} key={index} style={{height:'80%'}}>
            <div className={cx('item-img')}>
                <a href="#">
                    <img
                        className={cx('lazy', 'service-image')}
                        width="100%"
                        height="100%"
                        src={urlImg}
                        alt="pt image"
                    />
                </a>
            </div>
            <div className={cx('item-content')} style={{ position: 'absolute' }}>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <a href="#">
                            <h3>{title}</h3>
                        </a>
                    </span>
                    <div className={cx('text')}>
                        <a href="#">{text}</a>
                    </div>
                </div>
            </div>
            <div className={cx('read_more_place')} style={{ position: 'absolute' }}>
                <a href="#">
                    <span>Tìm hiểu thêm</span>
                    <img
                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                        className={cx('lazy', 'icon-readmore')}
                        alt="icon read more"
                    />
                </a>
            </div>
        </div>
    );
};

export default ItemContainMobile;
