import React from 'react';
import style from './Fooder.module.scss';
import classNames from 'classnames/bind';
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
                                <a href="#"> Dance </a>
                            </li>
                            <li>
                                <a href="#"> Group X </a>
                            </li>
                            <li>
                                <a href="#"> Yoga </a>
                            </li>
                            <li>
                                <a href="#"> Công nghệ giảm mỡ Hypoxi </a>
                            </li>
                            <li>
                                <a href="#"> Huấn luyện viên cá nhân </a>
                            </li>
                            <li>
                                <a href="#"> Kickfit & MMA </a>
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
                                <a href="#">Về chúng tôi</a>
                            </li>
                            <li>
                                <a href="">Điều kiện sử dụng</a>
                            </li>
                            <li>
                                <a href="">Chính sách bảo mật</a>
                            </li>
                            <li>
                                <a href="">Chính sách thanh toán</a>
                            </li>
                            <li>
                                <a href="">Chính sách giải quyết khiếu nại</a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('network-contain')}>
                        <div className={cx('phone-num-contain')}>
                            <h3>SUPPORT</h3>
                            <p>
                                <a href="">1800 6995</a>
                            </p>
                        </div>
                        <div className={cx('icon-contain')}>
                            <a href="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/fb-icon.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/fb-icon.png"
                                    style={{}}
                                />
                            </a>
                            <a href="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/yt-1-white.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/yt-1-white.png"
                                    style={{}}
                                />
                            </a>
                            <a href="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/footer-icon/instagram-icon-white.png"
                                    src="https://cali.vn/storage/app/media/footer-icon/instagram-icon-white.png"
                                    style={{}}
                                />
                            </a>
                            <a href="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/old/icon/social_spotify.svg"
                                    src="https://cali.vn/storage/app/media/old/icon/social_spotify.svg"
                                    style={{}}
                                />
                            </a>
                            <a href="" target="_blank">
                                <img
                                    className={cx('network-icon', 'lazy')}
                                    alt="https://cali.vn/storage/app/media/2023/System/tiktok-icon.svg"
                                    src="https://cali.vn/storage/app/media/2023/System/tiktok-icon.svg"
                                    style={{}}
                                />
                            </a>
                        </div>
                        <div className={cx('logo-guinness')}>
                            <a href="" target="_blank">
                                <img
                                    alt="footer guinness"
                                    className={cx('lazy')}
                                    src="https://cali.vn/themes/cfyc/assets/static/image/Strap-GWR-White-Icon.png"
                                    style={{}}
                                />
                            </a>
                        </div>
                        <div className={cx('logo-footer')}>
                            <a href="" target="_blank">
                                <img
                                    alt="footer logo"
                                    className={cx('lazy')}
                                    src="https://cali.vn/themes/cfyc/assets/static/image/footer-logo.png"
                                    style={{}}
                                />
                            </a>
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
                <div className={cx("logo-footer-mobile")}>
                    <a href="http://online.gov.vn/Home/WebDetails/2697?AspxAutoDetectCookieSupport=1" target="_blank">
                        <img
                            alt="footer logo"
                            className={cx("lazy")}
                            src="https://cali.vn/themes/cfyc/assets/static/image/footer-logo.png"
                            style={{}}
                        />
                    </a>
                </div>
            </div>
            <div className={cx('end-footer-contain')}>
                <p>© California Fitness & Yoga Center 2021</p>
            </div>
        </div>
    );
}

export default Footer;
