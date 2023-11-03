import React from 'react';
import classNames from 'classnames/bind';
import style from './ItemBlog.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

const ItemBlog = ({ item }) => {
    const { date, img, title, _id } = item || {};
    return (
        <div className={cx('item')}>
            <Link to="">
                <div className={cx('item-img')}>
                    <img
                        className={cx('service-image', 'lazy')}
                        width="100%"
                        height="100%"
                        alt="blog feature"
                        src={img}
                        style={{}}
                    />
                </div>
            </Link>
            <div className={cx('item-content')}>
                <div className={cx('content')}>
                    <span className={cx('title')}>
                        <Link to="">
                            <h3>{title}</h3>
                        </Link>
                    </span>
                </div>
            </div>
            <div className={cx('read_more_place')}>
                <Link to={`/blog-details/${_id}`}>
                    <span>Tìm hiểu thêm</span>
                </Link>
                <img
                    className={cx('icon-readmore', 'lazy')}
                    alt="icon read more"
                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore.svg"
                    style={{}}
                />
            </div>
        </div>
    );
};

export default ItemBlog;
