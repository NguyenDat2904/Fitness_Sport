import React, { useContext, useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import style from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCamera,
    faCircleNotch,
    faEnvelope,
    faLocationDot,
    faPhone,
    faRankingStar,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import moment from 'moment';
import { get } from '~/uliti/htppRequest';

const cx = classNames.bind(style);

function Profile() {
    const { userParse, setUserParse } = useContext(AppContext);
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    useEffect(() => {
        setUserParse(JSON.parse(localStorage.getItem('user')));
        const fetchAPI = async () => {
            setLoading(true);
            const user = await get(`https://fitness-sport.onrender.com/user/${userParse._id}`, {
                headers: { refresh_token: `${userParse.refreshToken}`, authorization: `${userParse.accessToken}` },
            });
            if (user.status === 200) {
                setUserInfo(user.data);
            }
            setLoading(false);
        };
        fetchAPI();
    }, []);

    const renderCourse = !userInfo.courseID
        ? null
        : userInfo.courseID?.map((course, index) => {
              const formattedStart = moment(course.start).format('DD.MM.YYYY');
              const formattedEnd = moment(course.end).format('DD.MM.YYYY');

              const renderTime = course.schedule?.map((schedule, index) => {
                  return (
                      <div key={index}>
                          <span>{schedule.time}</span> - <span>{schedule.day}</span>
                      </div>
                  );
              });

              return (
                  <ul class={cx('list-item-course')}>
                      <li>{index + 1}</li>
                      <li>{course.name}</li>
                      <li>{course.status}</li>
                      <li>{renderTime}</li>
                      <li>{formattedStart}</li>
                      <li>{formattedEnd}</li>
                  </ul>
              );
          });

    return (
        <div class={cx('header__wrapper')}>
            <header>
                <div class={cx('cover-img')}>
                    <img
                        src={
                            userInfo.img_cover
                                ? userInfo.img_cover
                                : 'https://www.uplevo.com/img/designbox/anh-bia-facebook-dep-troi-sao.jpg'
                        }
                        alt=""
                    />
                </div>
            </header>
            <div class={cx('cols__container')}>
                <div class={cx('left__col')}>
                    <div class={cx('img__container')}>
                        <img
                            src={
                                userInfo.img
                                    ? userInfo.img
                                    : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                            }
                            alt="Anna Smith"
                        />
                        <div class={cx('upload_avt')}>
                            <FontAwesomeIcon icon={faCamera} class={cx('upload_avt-icon')} />
                        </div>
                    </div>
                    <h2>{ userParse.name}</h2>
                    <div class={cx('info-user')}>
                        <h3>Thông tin</h3>
                        <div class={cx('card-info')}>
                            <div class={cx('card-item')}>
                                <div class={cx('card-item-icon')}>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>
                                <div class={cx('card-item-text')}>
                                    {userInfo.address ? (
                                        userInfo.address
                                    ) : (
                                        <div>
                                            <span>Thêm địa chỉ</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class={cx('card-item')}>
                                <div class={cx('card-item-icon')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div class={cx('card-item-text')}>{userParse.email}</div>
                            </div>
                            <div class={cx('card-item')}>
                                <div class={cx('card-item-icon')}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div class={cx('card-item-text')}>
                                    {userInfo.phone ? (
                                        userInfo.phone
                                    ) : (
                                        <div>
                                            <span>Thêm số điện thoại</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class={cx('card-item')}>
                                <div class={cx('card-item-icon')}>
                                    <FontAwesomeIcon icon={faRankingStar} />
                                </div>
                                <div class={cx('card-item-text')}>
                                    {userInfo.rank ? (
                                        userInfo.rank
                                    ) : (
                                        <div>
                                            <span>Nâng cấp tài khoản</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class={cx('right__col')}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="">Khóa Học</Link>
                            </li>
                            <li>
                                <Link href="">Thông tin</Link>
                            </li>
                            <li>
                                <Link href="">Yêu Thích</Link>
                            </li>
                            <li>
                                <Link href="">hoàn thàhh</Link>
                            </li>
                        </ul>
                    </nav>
                    <div class={cx('course')}>
                        <div class={cx('list-header')}>
                            <ul class={cx('list-menu')}>
                                <li>STT</li>
                                <li>Tên khóa học</li>
                                <li>Trạng thái</li>
                                <li>Thời gian học</li>
                                <li>Ngày bắt đầu</li>
                                <li>Ngày kết thúc </li>
                            </ul>
                        </div>
                        <div class={cx('list-course')}>
                            {!loading ? (
                                <>
                                    {renderCourse ? (
                                        renderCourse
                                    ) : (
                                        <div class={cx('course-link')}>
                                            Bạn chưa đăng ký học học nào. <Link to="/course">Đăng ký ngay</Link>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className={cx('loading-course')}>
                                    <FontAwesomeIcon icon={faCircleNotch} spin className={cx('loading-icon')} />
                                    <div className={cx('loading-text')}>Đang tải dữ liệu...</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
