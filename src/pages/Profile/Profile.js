import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import style from './Profile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEnvelope, faLocationDot, faPhone, faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { put } from '~/uliti/htppRequest';
import Header from '~/Layout/DefaultLayout/Header/Header';

const cx = classNames.bind(style);

function Profile({ children }) {
    const { userParse, userInfoProfile } = useContext(AppContext);

    if (!userParse) {
        return <Navigate to="/signin" />;
    } else {
        const handleImgAvt = async (e) => {
            const files = e.target.files;
            const formData = new FormData();
            formData.append('img', files[0]);

            const uploadImg = await put(`https://fitness-sport.onrender.com/user/put/${userParse._id}`, formData, {
                headers: {
                    refresh_token: `${userParse.refreshToken}`,
                    authorization: `${userParse.accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (uploadImg.status === 200) {
                window.location.reload();
            }
        };

        const handleImgCover = async (e) => {
            const files = e.target.files;
            const formData = new FormData();
            formData.append('img_cover', files[0]);

            const uploadImg = await put(`https://fitness-sport.onrender.com/user/put/${userParse._id}`, formData, {
                headers: {
                    refresh_token: `${userParse.refreshToken}`,
                    authorization: `${userParse.accessToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (uploadImg.status === 200) {
                window.location.reload();
            }
        };

        return (
            <>
                <Header />
                <div className={cx('header__wrapper')}>
                    <header>
                        <div className={cx('cover-img')}>
                            <img
                                src={
                                    userInfoProfile.img_cover
                                        ? userInfoProfile.img_cover
                                        : 'https://www.uplevo.com/img/designbox/anh-bia-facebook-dep-troi-sao.jpg'
                                }
                                alt=""
                            />
                            <form>
                                <input type="file" name="img_cover" id="img_cover" onChange={handleImgCover} />
                                <label className={cx('upload_cover')} htmlFor="img_cover">
                                    <FontAwesomeIcon icon={faCamera} class={cx('upload_cover-icon')} />
                                    <span>Thêm ảnh bìa</span>
                                </label>
                            </form>
                        </div>
                    </header>
                    <div className={cx('cols__container')}>
                        <div className={cx('left__col')}>
                            <div className={cx('img__container')}>
                                <img
                                    src={
                                        userInfoProfile.img
                                            ? userInfoProfile.img
                                            : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                                    }
                                    alt="Anna Smith"
                                />
                                <form>
                                    <input
                                        className={cx('upload')}
                                        type="file"
                                        name="img"
                                        id="img_avt"
                                        onChange={handleImgAvt}
                                    />
                                    <label className={cx('upload_avt')} htmlFor="img_avt">
                                        <FontAwesomeIcon icon={faCamera} class={cx('upload_avt-icon')} />
                                    </label>
                                </form>
                            </div>
                            <h2>{userInfoProfile.name}</h2>
                            <div className={cx('info-user')}>
                                <h3>Thông tin</h3>
                                <div className={cx('card-info')}>
                                    <div className={cx('card-item')}>
                                        <div className={cx('card-item-icon')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </div>
                                        <div className={cx('card-item-text')}>
                                            {userInfoProfile.address ? (
                                                userInfoProfile.address
                                            ) : (
                                                <div>
                                                    <span>Thêm địa chỉ</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('card-item')}>
                                        <div className={cx('card-item-icon')}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className={cx('card-item-text')}>{userParse.email}</div>
                                    </div>
                                    <div className={cx('card-item')}>
                                        <div className={cx('card-item-icon')}>
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className={cx('card-item-text')}>
                                            {userInfoProfile.phone ? (
                                                userInfoProfile.phone
                                            ) : (
                                                <div>
                                                    <span>Thêm số điện thoại</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={cx('card-item')}>
                                        <div className={cx('card-item-icon')}>
                                            <FontAwesomeIcon icon={faRankingStar} />
                                        </div>
                                        <div className={cx('card-item-text')}>
                                            {userInfoProfile.rank ? (
                                                userInfoProfile.rank
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
                        <div className={cx('right__col')}>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/profile">Khóa Học</Link>
                                    </li>
                                    <li>
                                        <Link to="/introduce">Thông tin</Link>
                                    </li>
                                    <li>
                                        <Link to="/likes">Yêu Thích</Link>
                                    </li>
                                    <li>
                                        <Link to="/success">hoàn thàhh</Link>
                                    </li>
                                </ul>
                            </nav>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;
