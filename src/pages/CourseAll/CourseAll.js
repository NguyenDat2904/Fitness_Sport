import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './CourseAll.module.scss';
import WhiteContain from '~/components/WhiteContain/WhiteContain';
import { Link } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { get } from '~/uliti/htppRequest';
import moment from 'moment';
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

const CourseAll = () => {
    const [show, setShow] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { courses, setCourses, setBuyCourse, setIsCheckPay } = useContext(AppContext);

    const apiCourses = async () => {
        try {
            setLoading(false);
            const course = await get(`/admin/course?page=${currentPage}`, {});
            setCourses(course.data);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        apiCourses();
    }, [currentPage]);

    const onShow = () => {
        if (show === '') {
            setShow('show');
        } else {
            setShow('');
        }
    };
    const onChange = (page) => {
        setCurrentPage(page);
    };
    const renderService = courses.courses?.map((course) => {
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

        const handleGetCourse = () => {
            localStorage.setItem('course', JSON.stringify(course));
            setBuyCourse(course);
            localStorage.setItem('isCheckPay', JSON.stringify(true));
            setIsCheckPay(true);
        };

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

                <div className={cx('list-item-contain')}>
                    {loading ? (
                        <>
                            {renderService}
                            <Pagination
                                current={currentPage}
                                onChange={onChange}
                                total={courses.totalCourse}
                                className={cx('pagination')}
                            />
                        </>
                    ) : (
                        <div className={cx('loading-course')}>
                            <FontAwesomeIcon icon={faCircleNotch} spin className={cx('loading-icon')} />
                            <div className={cx('loading-text')}>Đang tải dữ liệu...</div>
                        </div>
                    )}
                </div>
            </div>

            <WhiteContain />
        </>
    );
};

export default CourseAll;
