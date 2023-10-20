import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import PostItem from '~/components/PostItems/PostItem';
import { Slick } from './slick';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemContainMobile from '~/components/ItemContainMobile/ItemContainMobile.js';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Home() {
    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        autoplay: true,
        adaptiveHeight: false,
        ussCss: true,
    };

    const slickDesktop = [
        { urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/CFF_BBrun_1900x800px.jpg' },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/CFF_Concert_1900x800px.jpg',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/OLLW_Head_Desktop_v2_1900x800px.png',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/Dues_Headbanner_Desktop_1900x800.jpg',
        },
    ];

    const slickMobile = [
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/CFF_run_600x900px.jpg',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/CFF_concert_600x900px.jpg',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/OLLW_Head_MOBILE_600x900px.png',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Head%20Banner/Dues_Headbanner_Mobile_600x900_v2.jpg',
        },
    ];

    const slickContainMobile = [
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/cali-community_900x1200px.jpg',
            title: 'Chương Trình Nhảy Độc Đáo',
            text: 'Hoà mình vào giai điệu yêu thích và đốt cháy calo với các lớp học nhảy sôi động. Thoả sức “phiêu” Pop dance, Sexy Dance, Pole dance hoặc Zumba dưới sự hướng dẫn của các HLV chuẩn Quốc Tế tại California',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2021/Homepage/PT_at_Cent.jpg',
            title: 'HLV Cá Nhân Luôn Đồng Hành Cùng Bạn',
            text: 'Các huấn luyện viên đạt chuẩn NASM của chúng tôi sẽ cùng bạn thiết lập chương trình tập luyện & chế độ dinh dưỡng phù hợp với thể trạng của bạn. Đồng thời, các Huấn Luyện Viên Cá Nhân sẽ hướng dẫn bạn từng bước để chinh phục mục tiêu hình thể đã đặt ra',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/inspired-community-900x1200px.jpg',
            title: 'Cộng Đồng Truyền Cảm Hứng Cho Bạn Trở Nên Tốt Hơn Nữa',
            text: 'Cùng hàng ngàn hội viên lan toả lối sống lành mạnh ngay hôm nay! Đã đến lúc bạn nên thử những điều mới mẻ, hướng tới cuộc sống hứng khởi và tự tin toả sáng',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2023/Home%20page/Chtrinh%20nhay_900x1200.jpeg',
            title: 'Không Giới Hạn Lớp Tập Nhóm',
            text: 'Tận hưởng niềm vui bất tận với hơn 50 lớp tập nhóm bản quyền từ Lesmills như Body Combat, Body Jam, RPM, SH’Bam và các chương trình độc quyền do California thiết kế như CaliDrumfit, CaliStep. Các phiên bản mới được cập nhật liên tục mỗi tháng.',
        },
        {
            urlImg: 'https://cali.vn/storage/app/media/2021/Homepage/Yogi_900x1200.jpg',
            title: 'Tinh Hoa Yoga Ấn Độ Nguyên Bản',
            text: 'Thực hành chuẩn xác Yoga với sự hướng dẫn của các bậc thầy Yoga Ấn Độ. Đạt đến trạng thái cân bằng hoàn hảo bằng cách xây dựng sức mạnh, độ linh hoạt và sự uyển chuyển cơ thể trong khi thư giãn hoàn toàn mọi giác quan và giải phóng tâm trí',
        },
    ];

    const [sliderDesktop, setSliderDesktop] = useState(slickDesktop);
    const [sliderMobile, setSliderMobile] = useState(slickMobile);
    const [sliderContainMobile, setSliderContainMobile] = useState(slickContainMobile);

    const [post, setPost] = useState(['', '', '', '', '', '', '', '']);

    const mapPost = post.map((post, index) => <PostItem key={index} />);
    const mapItemContain = sliderContainMobile.map((item, index) => {
        return <ItemContainMobile item={item} index={index} key={index} />;
    });

    return (
        <div className={cx('body-contain')} style={{ background: '#141414' }}>
            <div className={cx('banner-contain', 'slick-initialized', 'slick-slider', 'slick-dotted')}>
                <div className={cx('slick-list', 'draggable')}>
                    <div className={cx('slickDesktop')}>
                        <Slick slider={sliderDesktop} />
                    </div>
                    <div className={cx('slickMobile')}>
                        <Slick slider={sliderMobile} />
                    </div>
                </div>
            </div>
            <div className={cx('service-contain')}>
                <div className={cx('title-service')}>
                    <div className={cx('title-big', 'sticky')}>
                        <h1>CHÚNG TÔI LÀ CALIFORNIA</h1>
                        <div className={cx('service-contain-readmore')}>
                            <span>
                                <p>
                                    Là thương hiệu về sức khỏe lớn nhất Việt Nam, California Fitness $ Yoga được xây
                                    dựng để mang lại hạnh phúc và tạo ra những khoảnh khắc viên mãn cho bạn trong cuộc
                                    sống bằng việc cung cấp các dịch vụ phát triển sức khỏe thể chất, dinh dưỡng và tinh
                                    thần toàn diện.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('item-contain')}>
                    <div className={cx('column-left')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <Link>
                                    <img
                                        className={cx('lazy', 'service-image')}
                                        alt="pt img"
                                        src="https://cali.vn/storage/app/media/2023/Home%20page/cali-community_900x1200px.jpg"
                                        style={{}}
                                    />
                                </Link>
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        <Link to="#">
                                            <h3>Chương Trình Nhảy Độc Đáo</h3>
                                        </Link>
                                    </span>
                                    <div className={cx('text')}>
                                        <Link to="#">
                                            Hoà mình vào giai điệu yêu thích và đốt cháy calo với các lớp học nhảy sôi
                                            động. Thoả sức “phiêu” Pop dance, Sexy Dance, Pole dance hoặc Zumba dưới sự
                                            hướng dẫn của các HLV chuẩn Quốc Tế tại California
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('read_more_place')}>
                                <Link to="#">
                                    <span>Tìm hiểu thêm</span>
                                    <img
                                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                        className={cx('lazy', 'icon-readmore')}
                                        alt="icon read more"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <Link to="#">
                                    <img
                                        className={cx('lazy', 'service-image')}
                                        alt="pt img"
                                        src="https://cali.vn/storage/app/media/2023/Home%20page/inspired-community-900x1200px.jpg"
                                        style={{}}
                                    />
                                </Link>
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        <Link to="#">
                                            <h3>Cộng Đồng Truyền Cảm Hứng Cho Bạn Trở Nên Tốt Hơn Nữa</h3>
                                        </Link>
                                    </span>
                                    <div className={cx('text')}>
                                        <Link to="#">
                                            Cùng hàng ngàn hội viên lan toả lối sống lành mạnh ngay hôm nay! Đã đến lúc
                                            bạn nên thử những điều mới mẻ, hướng tới cuộc sống hứng khởi và tự tin toả
                                            sáng
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('read_more_place')}>
                                <Link to="#">
                                    <span>Tìm hiểu thêm</span>
                                    <img
                                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                        className={cx('lazy', 'icon-readmore')}
                                        alt="icon read more"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <Link to="#">
                                    <img
                                        className={cx('lazy', 'service-image')}
                                        alt="pt img"
                                        src="https://cali.vn/storage/app/media/2021/Homepage/Yogi_900x1200.jpg"
                                        style={{}}
                                    />
                                </Link>
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        <Link to="#">
                                            <h3>Tinh Hoa Yoga Ấn Độ Nguyên Bản</h3>
                                        </Link>
                                    </span>
                                    <div className={cx('text')}>
                                        <Link to="#">
                                            Thực hành chuẩn xác Yoga với sự hướng dẫn của các bậc thầy Yoga Ấn Độ. Đạt
                                            đến trạng thái cân bằng hoàn hảo bằng cách xây dựng sức mạnh, độ linh hoạt
                                            và sự uyển chuyển cơ thể trong khi thư giãn hoàn toàn mọi giác quan và giải
                                            phóng tâm trí
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('read_more_place')}>
                                <Link to="#">
                                    <span>Tìm hiểu thêm</span>
                                    <img
                                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                        className={cx('lazy', 'icon-readmore')}
                                        alt="icon read more"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('column-right')}>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <Link to="#">
                                    <img
                                        className={cx('lazy', 'service-image')}
                                        alt="pt img"
                                        src="https://cali.vn/storage/app/media/2021/Homepage/PT_at_Cent.jpg"
                                        style={{}}
                                    />
                                </Link>
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        <Link to="#">
                                            <h3>HLV Cá Nhân Luôn Đồng Hành Cùng Bạn</h3>
                                        </Link>
                                    </span>
                                    <div className={cx('text')}>
                                        <Link to="#">
                                            Các huấn luyện viên đạt chuẩn NASM của chúng tôi sẽ cùng bạn thiết lập
                                            chương trình tập luyện & chế độ dinh dưỡng phù hợp với thể trạng của bạn.
                                            Đồng thời, các Huấn Luyện Viên Cá Nhân sẽ hướng dẫn bạn từng bước để chinh
                                            phục mục tiêu hình thể đã đặt ra
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('read_more_place')}>
                                <Link to="#">
                                    <span>Tìm hiểu thêm</span>
                                    <img
                                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                        className={cx('lazy', 'icon-readmore')}
                                        alt="icon read more"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('item')}>
                            <div className={cx('item-img')}>
                                <Link to="#">
                                    <img
                                        className={cx('lazy', 'service-image')}
                                        alt="pt img"
                                        src="https://cali.vn/storage/app/media/2023/Home%20page/Chtrinh%20nhay_900x1200.jpeg"
                                        style={{}}
                                    />
                                </Link>
                            </div>
                            <div className={cx('item-content')}>
                                <div className={cx('content')}>
                                    <span className={cx('title')}>
                                        <Link to="#">
                                            <h3>Không Giới Hạn Lớp Tập Nhóm</h3>
                                        </Link>
                                    </span>
                                    <div className={cx('text')}>
                                        <Link to="#">
                                            Tận hưởng niềm vui bất tận với hơn 50 lớp tập nhóm bản quyền từ Lesmills như
                                            Body Combat, Body Jam, RPM, SH’Bam và các chương trình độc quyền do
                                            California thiết kế như CaliDrumfit, CaliStep. Các phiên bản mới được cập
                                            nhật liên tục mỗi tháng.
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('read_more_place')}>
                                <Link to="#">
                                    <span>Tìm hiểu thêm</span>
                                    <img
                                        src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                        className={cx('lazy', 'icon-readmore')}
                                        alt="icon read more"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('item-contain-mobile')} id="slick">
                    <div className={cx('slick-list', 'draggable')} style={{ height: '100%' }}>
                        <Slider {...settings}>{mapItemContain}</Slider>
                    </div>
                </div>
            </div>
            <div className={cx('clb-nearly')}>
                <div className={cx('clb-nearly-left')}>
                    <div className={cx('title-big')}>
                        <h2>TIÊU CHUẨN CỦA SỰ SANG TRỌNG</h2>
                    </div>
                    <div className={cx('clb-nearly-readmore')}>
                        <span>
                            Tập luyện tại hơn 35+ Câu lạc bộ khắp cả nước và tận hưởng môi trường tập luyện đẳng cấp
                            được đầu tư trang thiết bị tốt nhất, khu vực VIP và các tiện ích đặc biệt như Xông hơi, Hồ
                            bơi và Bể sục Jacuzzi.
                        </span>
                        <Link to="#">
                            <span>Tìm Câu Lạc Bộ Gần Bạn</span>
                            <img
                                src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                className={cx('lazy', 'icon-readmore')}
                                alt="icon read more"
                            />
                        </Link>
                    </div>
                </div>
                <div className={cx('clb-nearly-right')}>
                    <img
                        width="100%"
                        className={cx('lazy')}
                        alt="img member"
                        src="https://cali.vn/storage/app/media/2021/Membership/Big-workout_area.jpg"
                        style={{}}
                    />
                </div>
            </div>
            <div className={cx('story-success')}>
                <div className={cx('story-success-left')}>
                    <div className={cx('title-big')}>
                        <h2>BIẾN GIẤC MƠ TRỞ THÀNH HIỆN THỰC</h2>
                    </div>
                    <div className={cx('story-success-sub-description')}>
                        <span>
                            Trong thập kỷ qua, hơn 350.000 người đã chọn chúng tôi để bắt đầu hành trình tập luyện. Hãy
                            cùng khám phá vì sao California được nhiều hội viên tin tưởng lựa chọn nhé!
                        </span>
                        <Link to="#">
                            <span>Tìm Hiểu Về Dịch Vụ Huấn Luyện Viên Cá Nhân</span>
                            <img
                                src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                className={cx('lazy', 'icon-readmore')}
                                alt="icon read more"
                            />
                        </Link>
                    </div>
                </div>
                <div className={cx('story-success-right')}>
                    <div className={cx('story-success-slider', 'slick-initialized', 'slick-slider')}>
                        <div className={cx('slick-list', 'draggable')}>
                            <div
                                className={cx('slick-track')}
                                style={{ opacity: 1, width: 600, transform: 'translate3d(0px, 0px, 0px)' }}
                            >
                                <div
                                    className={cx('item', 'slick-slide', 'slick-current', 'slick-active')}
                                    tabIndex={0}
                                    style={{ width: 600 }}
                                    data-slick-index={0}
                                    aria-hidden="false"
                                >
                                    <div className={cx('item-image')}>
                                        <img
                                            width="100%"
                                            height="100%"
                                            className={cx('lazy')}
                                            alt="banner-homepage"
                                            src="https://cali.vn/storage/app/media/2022/Challenges/California%20Transformation/Le%20Thi%20Kim%20My%20-%20900x600.png"
                                            style={{}}
                                        />
                                        /
                                    </div>
                                    <div className={cx('item-text')}>
                                        <h3>
                                            Hội viên Lê Thị Kim Mỹ - Chiến thắng bản thân là chiến thắng hiển hách nhất
                                        </h3>
                                        <div className={cx('content')}>
                                            "CTC 2022 đã và đang trở thành động lực giúp tôi thay đổi ngoạn mục, vượt
                                            qua giới hạn tuổi tác để thực hiện ước mơ “hot girl” của mình. Chỉ trong 2
                                            tháng, tôi đã giảm được 8kg mỡ với một sức khoẻ tốt và hình thể đẹp. Dù đã
                                            ngoài tuổi 60 nhưng đi đâu ai cũng dành nhiều lời khen. Từ đó đã truyền động
                                            lực rất lớn đến bản thân tôi và những người xung quanh."
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* đăng ký */}
            <div className={cx('grey-contain')}>
                <div className={cx('post-usefull')}>
                    <div className={cx('post-usefull-left')}>
                        <div className={cx('title-big')}>
                            <h3>BÀI VIẾT HỮU ÍCH </h3>
                        </div>
                        <div className={cx('readmore-contain')} style={{ minWidth: '140px' }}>
                            <Link to="#">
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
        </div>
    );
}

export default Home;
