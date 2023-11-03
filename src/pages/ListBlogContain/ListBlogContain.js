import { useContext, useEffect, useState } from 'react';
import style from './ListBlogContain.module.scss';
import classNames from 'classnames/bind';
import { Pagination } from 'antd';
import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ItemBlog from '~/components/ItemBlog/ItemBlog';
import { getBlogData } from '~/services/getData/getDataUser';
import { AppContext } from '~/hook/context/AppContext';
import IsLoading from '~/components/IsLoading/IsLoading';

const cx = classNames.bind(style);

const ListBlogContain = () => {
    const [current, setCurrent] = useState(1);
    const [itemBlog, setItemBlog] = useState([]);

    const values = useContext(AppContext);
    const { loading, setLoading } = values;

    const onChange = (page) => {
        setCurrent(page);
    };


    useEffect(() => {
        setLoading(true);
        getBlogData()
            .then((data) => {
                const result = data.filter((item) => {
                    return item._id;
                });
                setItemBlog(result);
                console.log(data);
            })
            .catch();
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            <IsLoading isLoading={loading} />
            <div className={cx('body-contain')}>
                <div className={cx('list-blog-contain')}>
                    <div className={cx('contain-left')}>
                        <div className={cx('category-column')}>
                            <div className={cx('item')}>
                                <input type="checkbox" id="cate-news" name="category" />
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>Tin tức</h2>
                                    </Link>
                                    <label htmlFor="cate-news"></label>
                                    <div className={cx('icon-more')}>
                                        <span />
                                        <span />
                                    </div>
                                    <div className={cx('icon-more')}>
                                        <span />
                                        <span />
                                    </div>
                                </div>
                                <div className={cx('list-sub-category')}>
                                    <div className={cx('sub-category')}>
                                        <Link to="">
                                            <span>Video</span>
                                            <span> ( 1 )</span>
                                        </Link>
                                    </div>
                                    <hr />
                                    <div className={cx('sub-category')}>
                                        <Link to="">
                                            <span>Tin tức & Sự kiện</span>
                                            <span> ( 3 )</span>
                                        </Link>
                                    </div>
                                    <hr />
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>KIẾN THỨC LUYỆN TẬP</h2>
                                    </Link>
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <input type="checkbox" id="clb-bai-tap" name="category" />
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>BÀI TẬP</h2>
                                    </Link>
                                    <label htmlFor="clb-bai-tap"></label>
                                    <div className={cx('icon-more')}>
                                        <span />
                                        <span />
                                    </div>
                                    <div className={cx('icon-more')}>
                                        <span />
                                        <span />
                                    </div>
                                </div>
                                <div className={cx('list-sub-category')}>
                                    <div className={cx('sub-category')}>
                                        <Link to="">
                                            <span>Yoga</span>
                                            <span> ( 520 )</span>
                                        </Link>
                                    </div>
                                    <hr />
                                    <div className={cx('sub-category')}>
                                        <Link to="">
                                            <span>Tăng cơ</span>
                                            <span> ( 240 )</span>
                                        </Link>
                                    </div>
                                    <hr />
                                    <div className={cx('sub-category')}>
                                        <Link to="">
                                            <span>Giảm cân</span>
                                            <span> ( 624 )</span>
                                        </Link>
                                    </div>
                                    <hr />
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>YOGA</h2>
                                    </Link>
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>KICKFIT & MMA</h2>
                                    </Link>
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('big-title')}>
                                    <Link to="">
                                        <h2>DINH DUONG</h2>
                                    </Link>
                                </div>
                                <div className={cx('list-blog-mobile')}>
                                    <ItemBlog />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('contain-right')}>
                        <div className={cx('column-left')}>
                            {itemBlog
                                ? itemBlog.slice(0, 5).map((item) => {
                                      return <ItemBlog item={item} />;
                                  })
                                : ''}
                        </div>
                        <div className={cx('column-right')}>
                            {itemBlog
                                ? itemBlog.slice(-5).map((item) => {
                                      return <ItemBlog item={item} />;
                                  })
                                : ''}
                        </div>
                        <div className={cx('pagination')}>
                            <Pagination
                                current={current}
                                onChange={onChange}
                                total={100}
                                style={{ paddingTop: '100px' }}
                            />
                        </div>
                    </div>
                </div>
                <Pagination current={current} onChange={onChange} total={8} style={{ paddingTop: '100px' }} />
            </div>
        </>
    );
};

export default ListBlogContain;
