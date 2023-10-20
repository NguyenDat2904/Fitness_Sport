import style from './ProductDetails.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

const cx = classNames.bind(style);

const imgs = [
    'https://cali.vn/storage/app/media/old/club/qu%E1%BA%ADn%204/Facilties_1.png',
    'https://cali.vn/storage/app/media/old/club/qu%E1%BA%ADn%204/TNL-Plaza-Facilties_2.png',
    'https://cali.vn/storage/app/media/old/club/qu%E1%BA%ADn%204/TNL-Plaza-Facilties_3.jpg',
];

const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    autoplay: true,
    dotsClass: 'slick-dots',
    adaptiveHeight: true,
};

const ProductDetails = () => {
    return (
        <div className={cx('body-contain')}>
            <div className={cx('info-contain')}>
                <div className={cx('breadcrumb-wrap')}>
                    <div className={cx('breadcrum')}>
                        <ul>
                            <li className={cx('breadcrum-item')}>
                                <a href="https://cali.vn/phong-tap-gym-the-hinh-yoga-toan-quoc">Club</a>
                            </li>
                            <li className={cx('breadcrum-item')}>
                                <a href="https://cali.vn/phong-tap-gym-the-hinh-yoga/ha-noi">Hà Nội</a>
                            </li>
                            <li className={cx('breadcrum-item', 'breadcrum-title')}>
                                <a href="https://cali.vn/ha-noi/somerset-west-point">
                                    WPC - CenturyOn West Point - Q.Tây Hồ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('name-contain')}>
                    <h1>WEST POINT - QUẬN TÂY HỒ</h1>
                </div>
                <div className={cx('description-contain')}>
                    <div className={cx('description')}>
                        Sang trọng, đẳng cấp, tinh tế trong từng chi tiết đó chính là những trải nghiệm tuyệt vời chỉ có
                        khi bạn bước chân vào CLB California Centuryon West Point quận Tây Hồ. Một nơi tập luyện đạt
                        chuẩn quốc tế cùng với các tiện ích phục hồi năng lượng tích hợp, đặc biệt có hồ bơi thư giãn
                        chắc chắn sẽ mang lại cho bạn những trải nghiệm chưa từng có. Khám phá ngay hôm nay!
                    </div>
                    <div className={cx('bussiness-contain')}>
                        <div className={cx('address-contain')}>
                            Tầng 2 &amp; 3 , Somerset West Point, Số 2 Tây Hồ, P. Quảng An, Q. Tây Hồ, Hà Nội. <br />
                            <a href="tel:024 7300 1777">(024) 7300 1777 </a>
                        </div>
                        <div className={cx('oprerating-hours')}>
                            <div className={cx('opening-hour')}>
                                <div className={cx('day')}>Thời gian hoạt động:</div>
                                <div className={cx('hours')}></div>
                            </div>
                            <div className={cx('opening-hour')}>
                                <div className={cx('day')}>Thứ 2 - Chủ nhật:</div>
                                <div className={cx('hours')}>6:00 - 22:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('button-contain')}>
                    <a href="https://cali.vn/dang-ky">
                        <button className={cx('btn-submit-banner')}>ĐĂNG KÝ TẬP THỬ</button>
                    </a>
                </div>
            </div>
            <div className={cx('practice-room-slider', 'slick-initialized', 'slick-slider', 'slick-dotted')}>
                <Slider {...settings}>
                    {imgs.map((item, index) => {
                        return (
                            <div className={cx('image')} key={index}>
                                <img width="100%" height="100%" className="lazy" alt="slider" src={item} style={{}} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
            <div className={cx('service-contain')}>
                <div className={cx('title-service')}>
                    <div className={cx('title-big', 'sticky')}>
                        <div className={cx('title')}>
                            <h2>Các Dịch Vụ Tại California</h2>
                        </div>
                        <div className={cx('service-contain-readmore')}>
                            <span>
                                Là thương hiệu về sức khỏe lớn nhất Việt Nam, California Fitness &amp; Yoga được xây
                                dựng để mang lại hạnh phúc và tạo ra những khoảnh khắc viên mãn cho bạn trong cuộc sống
                                bằng việc cung cấp các dịch vụ phát triển sức khỏe thể chất, dinh dưỡng và tinh thần
                                toàn diện.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('item-contain')}>
                    <div className={cx('column-left')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className="lazy"
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2021/Homepage/Yogi_900x1200.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>TINH HOA YOGA ẤN ĐỘ</span>
                                    <div className={cx('text')}>
                                        Thực hành chuẩn xác Yoga với sự hướng dẫn của các bậc thầy Yoga Ấn Độ. Đạt đến
                                        trạng thái cân bằng hoàn hảo bằng cách xây dựng sức mạnh, độ linh hoạt và sự
                                        uyển chuyển cơ thể trong khi thư giãn hoàn toàn mọi giác quan và giải phóng tâm
                                        trí
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className="lazy"
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2021/Homepage/Lop%20group%20X_900x1200.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>LỚP TẬP NHÓM KHÔNG GIỚI HẠN</span>
                                    <div className={cx('text')}>
                                        Tận hưởng niềm vui bất tận với hơn 50 lớp tập nhóm bản quyền từ Lesmills như
                                        Body Combat, Body Jam, RPM, SH’Bam và các chương trình độc quyền do California
                                        thiết kế. Các phiên bản mới được cập nhật liên tục mỗi tháng.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className="lazy"
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2023/Home%20page/inspiring-comm.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        MỘT CỘNG ĐỒNG TRUYỀN CẢM HỨNG CHO BẠN TỐT HƠN NỮA
                                    </span>
                                    <div className={cx('text')}>
                                        &lt;p&gt;Cùng hàng ngàn hội viên lan toả lối sống lành mạnh ngay hôm nay! Đã đến
                                        lúc bạn nên thử những điều mới mẻ, hướng tới cuộc sống hứng khởi và tự tin toả
                                        sáng.&lt;/p&gt;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('column-right')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className={cx('lazy')}
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2021/Homepage/Chtrinh%20nhay_900x1200.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>CHƯƠNG TRÌNH NHẢY ĐỘC ĐÁO</span>
                                    <div className={cx('text')}>
                                        Hoà mình vào giai điệu yêu thích và đốt cháy calo với các lớp học nhảy sôi động.
                                        Thoả sức “phiêu” Pop dance, Sexy Dance, Pole dance hoặc Zumba dưới sự hướng dẫn
                                        của các HLV chuẩn Quốc Tế tại California
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className="lazy"
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2021/Homepage/PT_at_Cent.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>HLV CÁ NHÂN LUÔN ĐỒNG HÀNH CÙNG BẠN</span>
                                    <div className={cx('text')}>
                                        Các huấn luyện viên đạt chuẩn NASM của chúng tôi sẽ cùng bạn thiết lập chương
                                        trình tập luyện &amp; chế độ dinh dưỡng phù hợp với thể trạng của bạn. Đồng
                                        thời, các HLV cá nhân sẽ hướng dẫn bạn từng bước để chinh phục mục tiêu hình thể
                                        đã đặt ra.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <img
                                    className="lazy"
                                    alt="pt"
                                    src="https://cali.vn/storage/app/media/2021/Homepage/An%20uong%20khoa%20hoc_900x1200.jpg"
                                    style={{}}
                                />
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>ĂN UỐNG KHOA HỌC MỖI NGÀY</span>
                                    <div className={cx('text')}>
                                        Để đạt hiệu quả tốt nhất, bạn hãy kết hợp thói quen luyện tập với phương pháp
                                        dinh dưỡng khoa học. California cung cấp dịch vụ tư vấn dinh dưỡng 1 kèm 1 trực
                                        tiếp qua điện thoại mỗi ngày.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('item-contain-mobile', 'slick-initialized')}></div>
            </div>
            <div className={cx('clb-information-contain')}>
                <div className={cx('title-big')}>
                    <h2>THÔNG TIN CÂU LẠC BỘ</h2>
                </div>
                <div className={cx("infor-contain")}>
                    <div className={cx("address-contain")}>
                        <div className={cx("description")}>
                            Tọa lạc tại Somerset West Point - khu vực trung tâm phía Bắc Hà Nội, California Centuryon
                            quận Tây Hồ vượt xa định nghĩa của một trung tâm thể hình thông thường mà còn là phong cách
                            sống. Đây là phòng tập thuộc chuỗi phòng tập cao cấp bậc nhất tại California dành cho giới
                            thượng lưu tại Việt Nam.
                        </div>
                        <div className={cx("address")}>
                            Tầng 2 &amp; 3 , Somerset West Point, Số 2 Tây Hồ, P. Quảng An, Q. Tây Hồ, Hà Nội.
                            <a href="tel:024 7300 1777">(024) 7300 1777 </a>
                        </div>
                        <div className={cx("link-address")}>
                            <a
                                href="https://www.google.com/maps/place/Somerset+West+Point+Hanoi/@21.0655859,105.8254913,17.17z/data=!4m8!3m7!1s0x0:0x7cc83ede09542654!5m2!4m1!1i2!8m2!3d21.0664027!4d105.8262542"
                                className={cx("read_more_item")}
                                target="_blank"
                            >
                                <span>Xem địa chỉ CLB</span>
                                <img
                                    className={cx("icon-readmore",'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </a>
                        </div>
                    </div>
                    <div className={cx("clb-information-right-contain")}>
                        <hr />
                        <div className={cx("oprerating-hours")}>
                            <div className={cx("flex-item")}>
                                <div className={cx("title-small")}>THỜI GIAN</div>
                                <div className={cx("opening-hour")}>
                                    <div className={cx("day")}>Thời gian hoạt động:</div>
                                    <div className={cx("hours")}></div>
                                </div>
                                <div className={cx("opening-hour")}>
                                    <div className={cx("day")}>Thứ 2 - Chủ nhật:</div>
                                    <div className={cx("hours")}>6:00 - 22:00</div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className={cx("convenience-contain")}>
                            <div className={cx("flex-item")}>
                                <div className={cx("title-small")}>TIỆN NGHI</div>
                                <div className={cx("infor")}>
                                    <ul>
                                        <li>Khu vực gym</li>
                                        <li>Yoga studio</li>
                                        <li>Group X studio</li>
                                        <li>Cycling studio</li>
                                        <li>Quầy Califresh</li>
                                        <li>Sauna xông hơi</li>
                                        <li>Khu vực thư giãn</li>
                                        <li>Hồ bơi</li>
                                        <li>Lồng MMA</li>
                                        <li>Phòng trang điểm</li>
                                        <li>Phòng thay đồ</li>
                                        <li>Pilates Studio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* đăng ký */}
        </div>
    );
};

export default ProductDetails;
