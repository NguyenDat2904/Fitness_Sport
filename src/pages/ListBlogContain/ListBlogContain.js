import { useState } from 'react';
import style from './ListBlogContain.module.scss';
import classNames from 'classnames/bind';
import { Pagination } from 'antd';

const cx = classNames.bind(style);

const ListBlogContain = () => {
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
    return (
        <div className={cx('list-blog-contain')}>
            <div className={cx('contain-left')}>
                <div className="category-column">
                    <div className={cx('item')}>
                        <input type="checkbox" hidden id="cate-news" name="category" />
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                        <label htmlFor="cate-news">
                            <button className={cx('btn')}>+</button>
                        </label>
                    </div>
                    <div className={cx('item')}>
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className="big-title">
                            <a href="https://cali.vn/blog/news/1">
                                <h2>Tin tức</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('contain-right')}>
                <div className="big-title">
                    <a href="https://cali.vn/blog/news/1">
                        <h2>Tin tức</h2>
                    </a>
                </div>
            </div>
            <Pagination current={current} onChange={onChange} total={100} style={{ paddingTop: '100px' }} />
        </div>
    );
};

export default ListBlogContain;
