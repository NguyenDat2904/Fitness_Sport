import React from 'react';
import style from './Fooder.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

function Footer() {
    return (
        <div style={{ backgroundColor: '#141414', borderTop: '1px solid var(--white)' }}>
            <div className={cx('footer-contain')}>
                <div className={cx('block-menu-footer')}>
                    <div className={cx('list-cat')}>
                        <div className={cx('small-title')}>
                            <h3>DỊCH VỤ</h3>
                        </div>
                        <ul className={cx('list-menu-item-footer')}>
                            <li>
                                <Link to="#"> Dance </Link>
                            </li>
                            <li>
                                <Link to="#"> Group X </Link>
                            </li>
                            <li>
                                <Link to="#"> Yoga </Link>
                            </li>
                            <li>
                                <Link to="#"> Công nghệ giảm mỡ Hypoxi </Link>
                            </li>
                            <li>
                                <Link to="#"> Huấn luyện viên cá nhân </Link>
                            </li>
                            <li>
                                <Link to="#"> Kickfit & MMA </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('block-menu-network')}>
                    <div className={cx('list-cat')}>
                        <div className={cx('small-title')}>
                            <h3>CÔNG TY</h3>
                        </div>
                        <ul className={cx('list-menu-item-footer')}>
                            <li>
                                <Link to="#">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="">Điều kiện sử dụng</Link>
                            </li>
                            <li>
                                <Link to="">Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <Link to="">Chính sách thanh toán</Link>
                            </li>
                            <li>
                                <Link to="">Chính sách giải quyết khiếu nại</Link>
                            </li>
                            <li>
                                <Link to="" target="_blank">
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link to="">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('network-contain')}>
                        <div className={cx('phone-num-contain')}>
                            <h3>SUPPORT</h3>
                            <p>
                                <Link to="">1800 6995</Link>
                            </p>
                        </div>
                        <div className={cx('icon-contain')}>
                            <Link to="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/fb-icon.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/fb-icon.png"
                                    style={{}}
                                />
                            </Link>
                            <Link to="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/yt-1-white.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/yt-1-white.png"
                                    style={{}}
                                />
                            </Link>
                            <Link to="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/instagram-icon-white.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/instagram-icon-white.png"
                                    style={{}}
                                />
                            </Link>
                            <Link to="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/old/icon/social_spotify.svg"
                                    src="https://cali.vn/storage/app/media/old/icon/social_spotify.svg"
                                    style={{}}
                                />
                            </Link>
                            <Link to="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/2023/System/tiktok-icon.svg"
                                    src="https://cali.vn/storage/app/media/2023/System/tiktok-icon.svg"
                                    style={{}}
                                />
                            </Link>
                        </div>
                        <div className={cx('logo-guinness')}>
                            <Link to="" target="_blank">
                                <img
                                    alt="footer guinness"
                                    className={cx('lazy')}
                                    src="https://cali.vn/themes/cfyc/assets/static/image/Strap-GWR-White-Icon.png"
                                    style={{}}
                                />
                            </Link>
                        </div>
                        <div className={cx('logo-footer')}>
                            <Link to="" target="_blank">
                                <img
                                    alt="footer logo"
                                    className={cx('lazy')}
                                    src="https://cali.vn/themes/cfyc/assets/static/image/footer-logo.png"
                                    style={{}}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('information-contain')}>
                        <div className={cx('small-title')}>
                            <h3>THÔNG TIN</h3>
                        </div>
                        <div className={cx('text-infor-contain')}>
                            <p>
                                Công ty TNHH Trung Tâm Thể Dục Thể Hình &amp; Yoga California
                                <br />
                                Số 126 Hùng Vương, P.12, Q.5, Tp. Hồ Chí Minh, Việt Nam
                                <br />
                                Mã số thuế: 0305060028
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('logo-footer-mobile')}>
                    <Link to="http://online.gov.vn/Home/WebDetails/2697?AspxAutoDetectCookieSupport=1" target="_blank">
                        <img
                            alt="footer logo"
                            className={cx('lazy')}
                            src="https://cali.vn/themes/cfyc/assets/static/image/footer-logo.png"
                            style={{}}
                        />
                    </Link>
                </div>
            </div>
            <div className={cx('end-footer-contain')}>
                <p>© California Fitness & Yoga Center 2021</p>
            </div>
        </div>
    );
}

export default Footer;
