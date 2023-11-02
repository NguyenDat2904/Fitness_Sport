import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as apiLogout from '~/services/getData/getDataUser';
import Overview from './overview/overview';
import Location from './location/location';
import Order from './order/order';
import Client from './client/client';

import Course from './course/course';
import Benefit from './benefit/benefit';
import ModalDetailLocation from './location/modal/modalDetail/modalDetail';
import ModalSaveLocation from './location/modal/modalSave/modalSave';
import ModalSave from './client/modal/modalSave/modalSave';
import ModalDetail from './client/modal/modaldetail/modaldetail';
import ModalDetailOrder from './order/modaldetail/modaldetail';
import ModalSaveCourse from './course/modal/modalSave/modalSave';
import ModalDetailCourse from './course/modal/modalDetail/modalDetail';
import logo from './logo-fitnesss.png';
import { Routes, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './admin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faHouse,
    faUserGroup,
    faArrowRightFromBracket,
    faMagnifyingGlass,
    faCalendarMinus,
    faLocationDot,
    faGift,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '~/hook/context/AppContext';
import { AiOutlineLoading } from 'react-icons/ai';
const cx = classNames.bind(styles);

function Admin() {
    const navigate = useNavigate();
    const {
        statusLogout,
        idLogout,
        modal,
        modalCourse,
        modalSaveLocation,
        modalLocation,
        modalDetail,
        modalDetailOrder,
        modalSaveCourse,
    } = useContext(AppContext);
    const [active, setactive] = useState(true);
    const [menu, setMenu] = useState(true);
    const [activeText, setActiveText] = useState(true);
    const [activeTitle, setActiveTitle] = useState(true);
    const [isLoadingLogout,setIsLoadingLogout]=useState(false)
    const boolModal = [
        { bool: modal },
        { bool: modalCourse },
        { bool: modalSaveLocation },
        { bool: modalLocation },
        { bool: modalDetail },
        { bool: modalDetailOrder },
        { bool: modalSaveCourse },
    ];

    const hendlerProfile = () => {
        if (active === true) {
            setactive(false);
        } else {
            setactive(true);
        }
    };
    const hendlerProfile2 = () => {
        if (menu === true) {
            setTimeout(() => {
                setActiveText(false);
            }, 300);

            setActiveTitle(false);

            setMenu(false);
        } else {
            setTimeout(() => {
                setActiveText(true);
            }, 300);
            setTimeout(() => {
                setActiveTitle(true);
            }, 500);

            setMenu(true);
        }
    };

    const hendleLogout = async () => {
        try {
            setIsLoadingLogout(true)
            await apiLogout.logOut(idLogout);
            navigate('/login/admin');
            if (statusLogout === 200) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refresh_token');
            }
        } catch (error) {
            console.log('error Logout');
        }
        finally{
            setIsLoadingLogout(false)
        }
    };

    const activeClass = (params) => {
        return params.isActive ? cx('active2') : cx('categories');
    };
    const arrayModal = boolModal.filter((product) => product.bool === false);
    if (arrayModal.length > 0) {
        arrayModal.forEach((element) => {
            if (element.bool === false) {
                document.body.style.overflow = 'hidden';
            }
        });
    } else {
        document.body.style.overflowY = 'auto';
    }

    return (
        <div className={cx("adminLogOut")}>
            {
                isLoadingLogout?<div className={cx("loading")}>
                <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')}/>}</h3>
                </div>: <div className={cx('admin')}>
            <div className={cx(modalSaveLocation ? 'noneModal' : 'modal')}>
                <ModalSaveLocation />
            </div>
            <div className={cx(modalLocation ? 'noneModal' : 'modal')}>
                <ModalDetailLocation />
            </div>
            <div className={cx(modalCourse ? 'noneModal' : 'modal')}>
                <ModalDetailCourse />
            </div>
            <div className={cx(modalSaveCourse ? 'noneModal' : 'modal')}>
                <ModalSaveCourse />
            </div>
            <div className={cx(modalDetailOrder ? 'noneModal' : 'modal')}>
                <ModalDetailOrder />
            </div>
            <div className={cx(modalDetail ? 'noneModal' : 'modal')}>
                <ModalDetail />
            </div>
            <div className={cx(modal ? 'noneModal' : 'modal')}>
                <ModalSave />
            </div>
            <div className={cx('informationTitle')}>
                <div
                    className={cx('mainCategories')}
                    style={{ width: menu ? '20%' : '8%', transition: menu ? '1s' : '1s' }}
                >
                    <div
                        className={cx('mainFixed')}
                        style={{ width: menu ? '20%' : '8%', transition: menu ? '1s' : '1s' }}
                    >
                        <div className={cx('logoImg')}>
                            <img src={logo} alt="" />
                            <span
                                style={{
                                    display: activeTitle ? 'block' : 'none',
                                }}
                            >
                                FITNESS
                            </span>
                        </div>

                        <div className={cx('main')}>
                            <NavLink to={'overView'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '1s',
                                        }}
                                    >
                                        Tổng quan
                                    </h3>
                                </div>
                            </NavLink>

                            <NavLink to={'client'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faUserGroup} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '',
                                        }}
                                    >
                                        Khách hàng
                                    </h3>
                                </div>
                            </NavLink>
                            <NavLink to={'order'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '',
                                        }}
                                    >
                                        Đặt hàng
                                    </h3>
                                </div>
                            </NavLink>

                            <NavLink to={'course'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '',
                                        }}
                                    >
                                        Các khóa học
                                    </h3>
                                </div>
                            </NavLink>

                            <NavLink to={'branch'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '',
                                        }}
                                    >
                                        Chi nhánh
                                    </h3>
                                </div>
                            </NavLink>

                            <NavLink to={'benefit'} className={activeClass}>
                                <div className={cx('categoriCss')}>
                                    <FontAwesomeIcon icon={faGift} className={cx('icon')} />
                                    <h3
                                        style={{
                                            display: activeText ? 'block' : 'none',
                                            transition: activeText ? '1s' : '',
                                        }}
                                    >
                                        Ưu đãi
                                    </h3>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={cx('logo')} style={{ width: menu ? '80%' : '92%', transition: menu ? '0.7s' : '1.5s' }}>
                    <div className={cx('TitleBar')}>
                        <div className={cx('menuBar')}>
                            <div className={cx('menu')}>
                                <FontAwesomeIcon icon={faBars} onClick={hendlerProfile2} />
                            </div>
                        </div>

                        <div className={cx('searchTitleBar')}>
                            <div className={cx('search')}>
                                <input type="text" placeholder="Search here..." className={cx('input')} />
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('iconSearch')} />
                            </div>
                        </div>
                        <div className={cx('informationAdmin')}>
                            <div className={cx('profile')} onClick={hendlerProfile}>
                                <img
                                    src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
                                    alt=""
                                    className={cx('img')}
                                />
                                <span>Hùng Nguyễn</span>
                            </div>
                            <div className={cx(active ? 'orDetail' : 'infoDetail')}>
                                <div className={cx('imgProfile')}>
                                    <img
                                        src="https://bloganchoi.com/wp-content/uploads/2022/02/avatar-trang-y-nghia.jpeg"
                                        alt=""
                                        className={cx('img')}
                                    />
                                </div>
                                <h3>Hùng Nguyễn</h3>
                                <p>0862625207</p>
                                <p>vanhungnvh1712004@gmail.com</p>
                                <button className={cx('detail')}>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={cx('icon')} />
                                    <h4 onClick={hendleLogout}>Đăng xuất</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('infoCategori')}>
                        <Routes>
                            <Route path="/overView" element={<Overview activeClass={activeClass}  />} />
                            <Route path="/client" element={<Client />} />

                            <Route path="/order" element={<Order />} />
                            <Route path="/course" element={<Course />} />
                            <Route path="/branch" element={<Location />} />
                            <Route path="/benefit" element={<Benefit />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
            }
        </div>
       
    );
}

export default Admin;
