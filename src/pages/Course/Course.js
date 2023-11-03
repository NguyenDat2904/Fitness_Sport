import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import classNames from 'classnames/bind';
import style from './Course.module.scss';
import Banner from './Banner/Banner';
import Slide from './Slide/Slide';
import { Link } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { get } from '~/uliti/htppRequest';
import SlideBanner from '~/components/SlideBanner/SlideBanner';
import Quest from '~/components/Quest/Quest';
import { data_quest_yoga, data_yoga_feedback, data_yoga_fit } from '~/components/Data/Data';
import FormRegister from '~/components/FormRegister/FormRegister';
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Course() {
    const [show, setShow] = useState('');
    const [courses, setCourses] = useState({});
    const [loading, setLoading] = useState(false);

    const { setBuyCourse, setIsCheckPay } = useContext(AppContext);

    useEffect(() => {
        const apiCourses = async () => {
            try {
                setLoading(false);
                const course = await get('https://fitness-sport.onrender.com/admin/course?limit=27', {});
                setCourses(course.data);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        };
        apiCourses();
    }, []);
    const onShow = () => {
        if (show === '') {
            setShow('show');
        } else {
            setShow('');
        }
    };

    const filterYoga = courses.courses?.filter((dance) => dance.type === 'yoga');

    const renderService = filterYoga?.map((course) => {
        const handleGetCourse = () => {
            localStorage.setItem('course', JSON.stringify(course));
            setBuyCourse(course);
            localStorage.setItem('isCheckPay', JSON.stringify(true));
            setIsCheckPay(true);
        };
        const cost = course.price * 1.2;

        const formatted = moment(course.start).format('DD.MM.YYYY');
        const formattedPrice = course.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        const formattedCost = cost.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        const renderTime = course.schedule?.map((schedule, index) => {
            return (
                <div key={index}>
                    <span>{schedule.day}</span> - <span>{schedule.time}</span> - <span>{schedule.time_end}</span>
                </div>
            );
        });

        return (
            <div className={cx('clb-item')} key={course._id}>
                <div className={cx('clb-left-contain')}>
                    <div className={cx('clb-left-content')}>
                        <div className={cx('item-title')}>
                            <h2>{course.name}</h2>
                        </div>
                        <div className={cx('description')}>{course.desc}</div>
                        <div className={cx('information-content')}>
                            <div className={cx('price')}>
                                <div className={cx('cost')}>{formattedCost}</div>
                                <div className={cx('sale-price')}>{formattedPrice}</div>
                            </div>
                            <div className={cx('start')}>
                                <div className={cx('hours-item')}>Thời gian bắt đầu:</div>
                                <div className={cx('hours-item')}>{formatted}</div>
                            </div>
                            <div className={cx('schedule')}>
                                <div>
                                    <div className={cx('hours-item')}>Lịch học:</div>
                                    <div className={cx('time-out')}>{renderTime}</div>
                                </div>
                                <div className={cx('btn-submit')}>
                                    <Link to="/payment">
                                        <button onClick={handleGetCourse}>MUA NGAY</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                    <img className="lazy" width="100%" height="100%" alt="img of club" src={course.img} />
                </div>
            </div>
        );
    });
    return (
        <div className={cx('body-container')}>
            <Banner
                img="https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/headline1900x800px.jpg"
                title="NHIỀU CẤP ĐỘ"
                desc="Từ lớp cơ bản đến nâng cao"
                time="60 phút (Có lớp liên tục từ 6:15 - 19:00)"
            />
            <div className={cx('black-container')}>
                <div className={cx('service-container')}>
                    <div className={cx('left-container')}>
                        <div className={cx('big-title')}>
                            <h1>LỚP TẬP YOGA TẠI CALIFORNIA PHÙ HỢP VỚI</h1>
                        </div>
                    </div>
                    <div className={cx('right-container')}>
                        <Slide
                            data={data_yoga_fit}
                            slide={{
                                slidesToShow: 1,
                                autoplay: false,
                            }}
                        />
                    </div>
                </div>
                <div className={cx('yoga-classes-container')}>
                    <div className={cx('yoga-classes-container')}>
                        <div className={cx('search-contain')}>
                            <div className={cx('clb-count')}>
                                <h1>YOGA</h1>
                            </div>
                            <div className={cx('clb-count')}>
                                <p>
                                    Lịch tập nhiều khung giờ, có lớp sáng sớm Đa dạng các loại hình Yoga và cấp độ Giảng
                                    dạy bởi YogA Ấn Độ và Việt Nam Giáo án Quốc tế cập nhật hàng tuần
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={cx('list-item-contain')}>
                        {loading ? (
                            <>
                                {renderService}
                                <Pagination current={1} total={filterYoga?.length} className={cx('pagination')} />
                            </>
                        ) : (
                            <div className={cx('loading-course')}>
                                <FontAwesomeIcon icon={faCircleNotch} spin className={cx('loading-icon')} />
                                <div className={cx('loading-text')}>Đang tải dữ liệu...</div>
                            </div>
                        )}
                    </div>
                </div>
                <SlideBanner
                    title="THOẢI MÁI TẬP YOGA VỚI STUDIO CHUẨN QUỐC TẾ"
                    desc="Chúng tôi tạo nên môi trường Yoga đích thực với các tiện nghi cao cấp, vượt trội dành cho các tín đồ Yoga thực thụ."
                    images={[
                        'https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/Section04_1900x800p01.jpg',
                        'https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/Section04_1900x800px_02.jpg',
                        'https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/Section04_1900x800px_03.jpg',
                    ]}
                />
                <Quest
                    img="https://cali.vn/storage/app/media/2021/Services/Coaching/Yoga/Yoga-FAQ-800x1000.jpg"
                    data={data_quest_yoga}
                />
                <div className={cx('member-felling')}>
                    <div className={cx('left-container')}>
                        <div className={cx('big-title')}>
                            <h1>CẢM NHẬN CỦA HỘI VIÊN</h1>
                        </div>
                    </div>
                    <div className={cx('right-container')}>
                        <Slide
                            data={data_yoga_feedback}
                            slide={{
                                slidesToShow: 1,
                                autoplay: false,
                            }}
                        />
                    </div>
                </div>
                <div className={cx('white-container')}>
                    <FormRegister title="KẾT NỐI NGAY VỚI CÁC YOGA TẬN TÂM TẠI CALIFORNIA" />
                    <div className={cx('relate-service')}>
                        <div className={cx('left-container')}>
                            <div className={cx('big-title')}>
                                <h1>DỊCH VỤ LIÊN QUAN</h1>
                            </div>
                            <div className={cx('relate-service-readmore')}>
                                <span>
                                    Trải nghiệm chương trình tập luyện không giới hạn khi trở thành hội viên tại
                                    California Fitness & Yoga. Tham gia ngay hôm nay!
                                </span>
                            </div>
                        </div>
                        <div className={cx('right-container')}>
                            <div className={cx('column-left')}>
                                <div className={cx('item')}>
                                    <Link>
                                        <div className={cx('img')}>
                                            <img
                                                src="https://cali.vn/storage/app/media/2023/Home%20page/cali-community_900x1200px.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('content')}>
                                    <Link>
                                        <div className={cx('title')}>
                                            <h3>Chương Trình Nhảy Độc Đáo</h3>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className={cx('subdescription')}>
                                            Hoà mình vào giai điệu yêu thích và đốt cháy calo với các lớp học nhảy sôi
                                            động. Thoả sức “phiêu” Pop dance, Sexy Dance, Pole dance hoặc Zumba dưới sự
                                            hướng dẫn của các HLV chuẩn Quốc Tế tại California
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className={cx('column-right')}>
                                <div className={cx('item')}>
                                    <Link>
                                        <div className={cx('img')}>
                                            <img
                                                src="https://cali.vn/storage/app/media/2023/Home%20page/cali-community_900x1200px.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className={cx('content')}>
                                    <Link>
                                        <div className={cx('title')}>
                                            <h3>Chương Trình Nhảy Độc Đáo</h3>
                                        </div>
                                    </Link>
                                    <Link>
                                        <div className={cx('subdescription')}>
                                            Hoà mình vào giai điệu yêu thích và đốt cháy calo với các lớp học nhảy sôi
                                            động. Thoả sức “phiêu” Pop dance, Sexy Dance, Pole dance hoặc Zumba dưới sự
                                            hướng dẫn của các HLV chuẩn Quốc Tế tại California
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
