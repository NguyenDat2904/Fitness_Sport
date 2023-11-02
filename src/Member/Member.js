import React from 'react';
import classNames from 'classnames/bind';
import style from './Member.module.scss';
import Banner from '~/pages/Course/Banner/Banner';
import Slide from '~/pages/Course/Slide/Slide';
import { data_card, data_member, data_member_stone, data_quest_yoga } from '~/components/Data/Data';
import FormRegister from '~/components/FormRegister/FormRegister';
import Quest from '~/components/Quest/Quest';
const cx = classNames.bind(style);
function Member() {
    return (
        <div className={cx('black-container')}>
            <Banner img="https://cali.vn/storage/app/media/2023/MBS/Headbanner/Member_Desktop_1900x800px.jpg"></Banner>
            <div className={cx('space-practice')}>
                <div className={cx('left-container')}>
                    <div className={cx('big-title')}>
                        <h1>CHƯƠNG TRÌNH TẬP LUYỆN KHÔNG GIỚI HẠN</h1>
                    </div>
                    <div className={cx('space-practice-sub-description')}>
                        <span className={cx('sub-content')}>
                            <p dir="ltr">
                                <span>
                                    Dù cho bạn là người mới hay người đã có nền tảng tập luyện, chương trình tập luyện
                                    tại California được thiết kế bởi các chuyên gia thể hình hàng đầu sẽ luôn đáp ứng
                                    mọi mục tiêu tập luyện của bạn.
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
                <div className={cx('right-container')}>
                    <Slide
                        data={data_member}
                        slide={{
                            slidesToShow: 1,
                            autoplay: true,
                        }}
                    />
                </div>
            </div>
            <div className={cx('space-practice')}>
                <div className={cx('left-container')}>
                    <div className={cx('big-title')}>
                        <h1>KẾT NỐI KHÔNG NGỪNG CÙNG LIVWELL</h1>
                    </div>
                    <div className={cx('space-practice-sub-description')}>
                        <span className={cx('sub-content')}>
                            <p dir="ltr">
                                <span>
                                    Để khuyến khích Hội viên xây dựng thói quen tập luyện và sinh hoạt lành mạnh, đặt
                                    lịch tập luyện dễ dàng tại các CLB California và nhận thưởng từ việc tập luyện qua
                                    ứng dụng Livwell.
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
                <div className={cx('right-container')}>
                    <img src="https://cali.vn/storage/app/media/2021/Membership/livwell-app_900x600.jpeg" alt="" />
                </div>
            </div>
            <div className={cx('space-practice')}>
                <div className={cx('left-container')}>
                    <div className={cx('big-title')}>
                        <h1>HỆ THỐNG CLB CHUẨN 5 SAO HÀNG ĐẦU VIỆT NAM</h1>
                    </div>
                    <div className={cx('space-practice-sub-description')}>
                        <span className={cx('sub-content')}>
                            <p dir="ltr">
                                <span>
                                    Mọi phòng tập tại California đều được thiết kế theo tiêu chuẩn Quốc Tế - không gian
                                    tập luyện tích hợp khu vực phục hồi năng lượng nhằm mang lại sự an toàn, cảm hứng
                                    tập luyện cho quý hội viên.
                                </span>
                            </p>
                            <p dir="ltr">
                                <span>
                                    Với tình hình dịch Covid-19, chúng tôi thường xuyên khử trùng CLB và bổ sung các
                                    trạm nước rửa tay tại các Câu lạc bộ
                                </span>
                            </p>
                        </span>
                    </div>
                </div>
                <div className={cx('right-container')}>
                    <Slide
                        data={data_member_stone}
                        slide={{
                            slidesToShow: 1,
                            autoplay: true,
                        }}
                    />
                </div>
            </div>
            <div className={cx('card-section')}>
                <div className={cx('title-container')}>
                    <h2>KHÁM PHÁ CHƯƠNG TRÌNH HỘI VIÊN TẠI CALIFORNIA</h2>
                </div>
                <div className={cx('content-section')}>
                    <Slide
                        data={data_card}
                        slide={{
                            slidesToShow: 3,
                            autoplay: true,
                        }}
                        styles="20px"
                        payment="/payment"
                    />
                </div>
            </div>
            <div className={cx('white-container')}>
                <FormRegister title="TRẢI NGHIỆM MIỄN PHÍ NGAY!" />
            </div>
            <Quest data={data_quest_yoga} check styles="100%" />
        </div>
    );
}

export default Member;
