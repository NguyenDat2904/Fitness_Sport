import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './CourseAll.module.scss';
import WhiteContain from '~/components/WhiteContain/WhiteContain';
import { Link } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { get } from '~/uliti/htppRequest';
import moment from 'moment';
const cx = classNames.bind(style);

const CourseAll = () => {
    const [show, setShow] = useState('');
    const { courses, setCourses } = useContext(AppContext);

    const apiCourses = async () => {
        try {
            const course = await get('/admin/course', {});
            setCourses(course.data.courses);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        apiCourses();
    }, []);

    const onShow = () => {
        if (show === '') {
            setShow('show');
        } else {
            setShow('');
        }
    };

    const renderService = courses?.map((course) => {
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
                            <div className={cx('address')}>
                                Tầng 2 & 3 , Somerset West Point, Số 2 Tây Hồ, P. Quảng An, Q. Tây Hồ, Hà Nội.
                            </div>
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
                                    <Link>
                                        <button>ĐĂNG KÝ</button>
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
        <>
            <div className={cx('black-contain')}>
                <div className={cx('search-contain')}>
                    <div className={cx('clb-count')}>
                        <h1>ĐA DẠNG KHÓA HỌC</h1>
                    </div>
                    <div className={cx('search-position')}>
                        <div className={cx('search-group')}>
                            <div
                                className={cx('search-box')}
                                style={{ display: 'flex', width: '100%', position: 'relative' }}
                            >
                                <img
                                    className={cx('lazy')}
                                    id="icon-search"
                                    style={{ objectFit: 'contain', paddingLeft: 20, cursor: 'pointer', zIndex: 6 }}
                                    alt="icon"
                                    src="https://cali.vn/themes/cfyc//assets/static/icon/search.svg"
                                    onClick={onShow}
                                />
                                <input
                                    type="text"
                                    placeholder="Chọn môn học bạn muốn..."
                                    autoComplete="off"
                                    id={cx('myInput')}
                                    onClick={onShow}
                                />
                                <div className={cx('drop-box-mobile', { show })} id={cx('myDropdown')}>
                                    <div id={cx('myDropdown_inside')} className={cx('search-clb-dropdown-content')}>
                                        <p className={cx('mobile-header-search-box')}>Chọn môn học bạn muốn...</p>
                                        <Link to="/yoga">
                                            <input id="yoga" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="yoga">Yoga</label>
                                        </Link>
                                        <Link to="/dance">
                                            <input id="dance" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="dance">Dance</label>
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('mobile-shadow')} />
                            </div>
                            <img
                                className="lazy"
                                id="icon-search-dropdown"
                                style={{
                                    marginRight: 20,
                                    cursor: 'pointer',
                                    transform: show === 'show' ? 'unset' : 'rotate(180deg)',
                                    transition: 'all 0.3s ease',
                                }}
                                alt="Vector-submenu.svg"
                                src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-submenu.svg"
                                onClick={onShow}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('list-item-contain')}>{renderService}</div>
            </div>

            <WhiteContain />
        </>
    );
};

export default CourseAll;
