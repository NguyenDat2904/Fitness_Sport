import { useState } from 'react';
import PostItem from '~/components/PostItems/PostItem';
import classNames from 'classnames/bind';
import style from './GreyContain.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const GreyContain = (props) => {
    const {} = props;
    const [post, setPost] = useState(['', '', '', '', '', '', '', '']);

    const mapPost = post.map((post) => <PostItem />);

    return (
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
                    <div className={cx('post-usefull-contain')}>{mapPost}</div>
                </div>
            </div>
        </div>
    );
};

export default GreyContain;
