import React from 'react';
import style from './PostItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

const PostItem = ({ item }) => {
    const { img, title } = item;
    return (
        <div className={cx('item')}>
            <Link to="#">
                <div className={cx('image')}>
                    <img
                        className={cx('lazy', 'blog-image')}
                        width="100%"
                        height="300px"
                        src={img}
                        alt="banner-homepage"
                    />
                </div>
            </Link>
            <div className={cx('item-text')}>
                <Link to="#">
                    <div className={cx('item-title')}>{title}</div>
                </Link>
            </div>
            <Link to="#">
                <span>Tìm hiểu thêm </span>
                <img
                    className={cx('lazy', 'icon-readmore')}
                    alt="icon read more"
                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore.svg"
                    style={{}}
                />
            </Link>
        </div>
    );
};

export default PostItem;
