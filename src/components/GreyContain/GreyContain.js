import { useContext, useEffect, useState } from 'react';
import PostItem from '~/components/PostItems/PostItem';
import classNames from 'classnames/bind';
import style from './GreyContain.module.scss';
import { Link } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { getBlogData } from '~/services/getData/getDataUser';
import IsLoading from '../IsLoading/IsLoading';

const cx = classNames.bind(style);

const GreyContain = (props) => {
    const {} = props;
    const values = useContext(AppContext);
    const { loading, setLoading } = values;
    const [itemBlog, setItemBlog] = useState([]);

    useEffect(() => {
        setLoading(true);
        getBlogData()
            .then((data) => {
                const result = data.filter((item) => {
                    return item._id;
                });

                setItemBlog(result);
                console.log(result);
            })
            .catch();
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <IsLoading isLoading={loading} />
            <div className={cx('grey-contain')}>
                <div className={cx('post-usefull')}>
                    <div className={cx('post-usefull-left')}>
                        <div className={cx('title-big')}>
                            <h3>BÀI VIẾT HỮU ÍCH </h3>
                        </div>
                        <div className={cx('readmore-contain')} style={{ minWidth: '140px' }}>
                            <Link href="#">
                                <span>Xem tất cả</span>
                                <img
                                    className={cx('lazy', 'icon-readmore')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore.svg"
                                    style={{}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('post-usefull-right')}>
                        <div className={cx('post-usefull-contain')}>
                            {itemBlog.map((item) => (
                                <PostItem item={item} />
                            ))}
                            );
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GreyContain;
