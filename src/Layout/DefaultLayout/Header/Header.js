import { useState } from 'react';
import style from './Header.module.scss';
import classnames from 'classnames/bind';
import { AiOutlineDown, AiOutlineRight, AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { publicRoutes } from '~/routes/routes';

const cx = classnames.bind(style);

function Header() {
    const [active, setActive] = useState('');
    const [showMenu, setShowMenu] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const publicRoute = publicRoutes[1];

    const onShowActiveHandle = () => {
        if (active === '') {
            setActive('active');
        } else {
            setActive('');
        }
    };

    const onShowMenuHandle = () => {
        if (showMenu === '') {
            setShowMenu('show');
        } else {
            setShowMenu('');
        }
    };

    const handleOptionChange = (event) => {
        const value = event.target.value || '';
        console.log(value);
        setSelectedOption((prevSelectedOption) => {
            if (prevSelectedOption === value) {
                return '';
            } else {
                return value;
            }
        });
    };

    const handleOptionChangeSub = (event) => {
        const value = event.target.value || '';
        console.log(value);
        setSelectedOption((prevSelectedOption) => {
            if (prevSelectedOption === value) {
                return '';
            } else {
                return value;
            }
        });
    };

    return (
        <div className={cx('header-contain')}>
            <div className={cx('header')}>
                <div className={cx('logo_header')}>
                    <a href="">
                        <img
                            src="https://cali.vn/storage/app/media/brand_logo/Cali-OriginalLogo-2x.png"
                            width="100%"
                            height="100%"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className={cx('menu_bar')}>
                    <ul style={active === '' ? { visibility: 'unset' } : { visibility: 'hidden' }}>
                        <li className={cx('downbtn')}>
                            <a href="">
                                DỊCH VỤ <AiOutlineDown className={cx('ai')} size={'1rem'} color="#fff" />
                            </a>
                            <div className={cx('dropdown_menu')}>
                                <ul>
                                    <li className={cx('downbtn_1')}>
                                        Lớp Học <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_1')}>
                                            <ul>
                                                <li>Yoga</li>
                                                <li>Dance</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={cx('downbtn_2')}>
                                        Huấn Luyện <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_2')}>
                                            <ul>
                                                <li>California NutriFit</li>
                                                <li>Huấn luyện viên cá nhân</li>
                                                <li>Kickfit & MMA</li>
                                                <li>Công nghệ giảm mỡ Hypoxi</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx('downbtn')}>
                            <Link to={publicRoute.path}>
                                CÂU LẠC BỘ <AiOutlineDown className={cx('ai')} size={'1rem'} color="#fff" />
                            </Link>
                            <div className={cx('dropdown_menu')}>
                                <ul className={cx('dropdown-content-mobile')}>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Hà Nội
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Đà Nẵng
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Khánh Hòa
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Bình Dương
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Đồng Nai
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Bà Rịa - Vũng Tàu
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Hồ Chí Minh
                                        </a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a href="" className={cx('nav-sub-link')}>
                                            Cần Thơ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={cx('downbtn')}>
                            <a href="">
                                BLOG <AiOutlineDown className={cx('ai')} size={'1rem'} color="#fff" />
                            </a>
                            <div className={cx('dropdown_menu')}>
                                <ul>
                                    <li className={cx('downbtn_4')}>
                                        Tin Tức <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_4')}>
                                            <ul>
                                                <li>Gym Quận 6</li>
                                                <li>Phòng gym quận 3</li>
                                                <li>Gym Quận 10</li>
                                                <li>Gym Thủ Đức</li>
                                                <li>Phòng gym Cầu Giấy</li>
                                                <li>Phòng gym quận Tân Bình</li>
                                                <li>Phòng gym quận 11</li>
                                                <li>Gym quận 12</li>
                                                <li>Phòng tập gym</li>
                                                <li>Gym Đà Nẵng</li>
                                                <li>Phòng gym Cần Thơ</li>
                                                <li>Phòng tập gym Nha Trang</li>
                                                <li>Gym Phú Nhuận</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={cx('downbtn_5')}>
                                        Kiến Thức Luyện Tập{' '}
                                        <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_5')}>
                                            <ul>
                                                <li>Cách giảm mỡ đùi</li>
                                                <li>Cách giảm nọng cằm</li>
                                                <li>Ngồi thiền có tác dụng gì?</li>
                                                <li>Tập cơ bụng tại nhà</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={cx('downbtn_6')}>
                                        Bài Tập <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_6')}>
                                            <ul>
                                                <li>Yoga</li>
                                                <li>Giảm mỡ bắp tay</li>
                                                <li>Giảm cân</li>
                                                <li>Cardio là gì</li>
                                                <li>Cardio tại nhà</li>
                                                <li>HIIT là gì</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={cx('downbtn_7')}>
                                        Yoga <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_7')}>
                                            <ul>
                                                <li>Yoga giảm mỡ bụng</li>
                                                <li>Giảm cân tại nhà</li>
                                                <li>Ngồi thiền đúng cách</li>
                                                <li>Câu lạc bộ yoga</li>
                                                <li>Yoga quận 6</li>
                                                <li>Yoga quận 11</li>
                                                <li>Yoga Thủ Đức</li>
                                                <li>Yoga Cần Thơ</li>
                                                <li>Yoga Hà Nội</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>Kickfit & MMA</li>
                                    <li className={cx('downbtn_8')}>
                                        Dinh Dưỡng <AiOutlineRight size={'15px'} className={cx('fas')} color="#fff" />
                                        <div className={cx('dropdown_menu_8')}>
                                            <ul>
                                                <li>Yến mạch bao nhiêu calo</li>
                                                <li>Uống gì để giảm mỡ bụng</li>
                                                <li>Chế độ ăn giảm mỡ bụng</li>
                                                <li>Thực đơn giảm cân trong 7 ngày</li>
                                                <li>Ăn bún có béo không</li>
                                                <li>Ăn trứng có béo không</li>
                                                <li>Ăn chuối có béo không</li>
                                                <li>Bánh tráng trộn nhiêu calo</li>
                                                <li>Sữa đậu nành tăng vòng 1</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="">LỊCH TẬP / SCHEDULE</a>
                        </li>
                        <li className={cx('downbtn')}>
                            <a href="">
                                HỘI VIÊN <AiOutlineDown className={cx('ai')} size={'1rem'} color="#fff" />
                            </a>
                            <div className={cx('dropdown_menu')}>
                                <ul>
                                    <li>HẠNG PLATINUM PLUS</li>
                                    <li>HẠNG GOLD</li>
                                    <li>Hội viên California Active</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className={cx('form-search', active)}>
                        <label
                            htmlFor="search"
                            id={cx('search')}
                            className={cx('btn-search')}
                            onClick={onShowActiveHandle}
                            style={{ cursor: 'pointer' }}
                        >
                            <AiOutlineSearch className={cx('icon-search')} color="#fff" />
                        </label>
                        <form
                            method="get"
                            className={cx('form-search-box', active)}
                            style={{ width: '100%', height: '80%' }}
                        >
                            <input
                                className={cx('input_search')}
                                type="text"
                                name="search"
                                placeholder="Nhập thông tin cần tìm"
                            />
                            <span
                                className={cx('icon-close-form')}
                                onClick={onShowActiveHandle}
                                style={{ cursor: 'pointer' }}
                            >
                                <AiOutlineClose color="#fff" />
                            </span>
                        </form>
                    </div>
                </div>
                <div className={cx('contain-right')}>
                    <a
                        href=""
                        style={{
                            color: '#fff',
                            position: 'relative',
                            zIndex: '999',
                            textDecoration: 'none',
                        }}
                    >
                        <div className={cx('group-input')}>
                            <div className={cx('box-trying')}>TẬP THỬ </div>
                            <div className={cx('box-trying')}>ĐĂNG NHẬP</div>
                        </div>
                    </a>
                    <div className={cx('block-header-mobile')}>
                        <input id={cx('burger-menu-checker')} type="checkbox" hidden />
                        <label id={cx('burger-menu-cfyc')} style={{ cursor: 'pointer' }} onClick={onShowMenuHandle}>
                            {showMenu === '' ? (
                                <AiOutlineMenu color="#fff" size={28} />
                            ) : (
                                <AiOutlineClose color="#fff" size={28} />
                            )}
                        </label>
                        <ul id={cx('menu')} className={cx(showMenu)}>
                            <li className={cx('main-item')}>
                                <form
                                    action=""
                                    className={cx('form-search-main')}
                                    style={{ position: 'relative', padding: '8px 0' }}
                                >
                                    <label
                                        htmlFor="search"
                                        id={cx('search')}
                                        className={cx('label-search')}
                                        style={{ padding: '0 10px' }}
                                    >
                                        <AiOutlineSearch className={cx('icon-search-mobile')} color="#fff" />
                                    </label>
                                    <input
                                        className={cx('input_search-mobile')}
                                        type="text"
                                        name="search"
                                        placeholder="Nhập thông tin cần tìm"
                                    />
                                    <span className={cx('icon-close-search-mobile')} style={{ cursor: 'pointer' }}>
                                        <AiOutlineClose color="#fff" />
                                    </span>
                                </form>
                            </li>
                            <li className={cx('main-item')}>
                                <input
                                    id={0}
                                    type="checkbox"
                                    className={cx('check')}
                                    hidden
                                    name="drop-down-content-mobile"
                                    value="1"
                                    checked={selectedOption === '1'}
                                    onChange={handleOptionChange}
                                />
                                <label for={0}>
                                    <div>
                                        <a href="" className={cx('navbar-item-header')}>
                                            DỊCH VỤ
                                        </a>
                                    </div>
                                    <AiOutlineDown className={cx('icon-sub-menu')} color="#fff" />
                                </label>
                                <ul className={cx('dropdown-content-mobile')}>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <input
                                            type="checkbox"
                                            id="training"
                                            hidden
                                            // value={'1'}
                                            // checked={selectedOption === '1'}
                                            // onchange={handleOptionChangeSub}
                                            name="drop-down-sub-content-mobile"
                                        />
                                        <label for="training">
                                            <span className={cx('nav-sub-link')}>Lớp Học</span>
                                            <AiOutlineDown className={cx('icon-sub-sub-menu')} color="#fff" />
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    Yoga
                                                </a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    Dance
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <input
                                            type="checkbox"
                                            id="coaching"
                                            hidden
                                            // value={"2"}
                                            // checked={selectedOption === "2"}
                                            // onchange={handleOptionChangeSub}
                                            name="drop-down-sub-content-mobile"
                                        />
                                        <label for="coaching">
                                            <span className={cx('nav-sub-link')}>Huấn Luyện</span>
                                            <AiOutlineDown className={cx('icon-sub-sub-menu')} color="#fff" />
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    California NutriFit
                                                </a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    Huấn luyện viên cá nhân
                                                </a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    Kickfit & MMA
                                                </a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a href="" className={cx('dropdowm-submenu-item')}>
                                                    Công nghệ giảm mỡ Hypoxi
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx('main-item')}>
                                <input
                                    type="checkbox"
                                    id={1}
                                    hidden
                                    value={'4'}
                                    checked={selectedOption === '4'}
                                    onChange={handleOptionChange}
                                    name="drop-down-content-mobile"
                                />
                                <label htmlFor={1}>
                                    <div>
                                        <a className={cx('navbar-item-header')}>CÂU LẠC BỘ</a>
                                    </div>
                                    <AiOutlineDown className={cx('icon-sub-menu')} color="#fff" />
                                </label>
                                <ul className={cx('dropdown-content-mobile')}>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Hà Nội</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Đà Nẵng</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Khánh Hòa</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Bình Dương</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className="nav-sub-link">Đồng Nai</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Bà Rịa - Vũng Tàu</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Hồ Chí Minh</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <a className={cx('nav-sub-link')}>Cần Thơ</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx('main-item')}>
                                <input
                                    type="checkbox"
                                    id={2}
                                    hidden
                                    value={'5'}
                                    checked={selectedOption === '5'}
                                    onChange={handleOptionChange}
                                    name="drop-down-content-mobile"
                                />
                                <label htmlFor={2}>
                                    <div>
                                        <a className={cx('navbar-item-header')}>BLOG</a>
                                    </div>
                                    <AiOutlineDown className={cx('icon-sub-menu')} color="#fff" />
                                </label>
                                <ul className={cx('dropdown-content-mobile')}>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <input
                                            type="checkbox"
                                            id="news"
                                            hidden
                                            // value={'3'}
                                            // checked={selectedOption === '3'}
                                            // onChange={handleOptionChangeSub}
                                            name="drop-down-sub-content-mobile"
                                        />
                                        <label htmlFor="news" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Tin tức</a>
                                            </div>
                                            <AiOutlineDown className={cx('icon-sub-sub-menu')} color="#fff" />
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a className={cx('dropdowm-submenu-item')}>Video</a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a className={cx('dropdowm-submenu-item')}>Tin tức & Sự kiện</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <label htmlFor="kien-thuc-tap-luyen" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Kiến thức tập luyện</a>
                                            </div>
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}></ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <input
                                            type="checkbox"
                                            id="bai-tap"
                                            hidden
                                            // value={'4'}
                                            // checked={selectedOption === '4'}
                                            // onChange={handleOptionChangeSub}
                                            name="drop-down-sub-content-mobile"
                                        />
                                        <label htmlFor="bai-tap" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Bài tập</a>
                                            </div>
                                            <AiOutlineDown className={cx('icon-sub-sub-menu')} color="#fff" />
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a className={cx('dropdowm-submenu-item')}>Yoga</a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a className={cx('dropdowm-submenu-item')}>Tăng cơ</a>
                                            </li>
                                            <li className={cx('dropdown-sub-content-item')}>
                                                <a className={cx('dropdowm-submenu-item')}>Giảm cân</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <label htmlFor="yoga" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Yoga</a>
                                            </div>
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}></ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <label htmlFor="kickfit-mma" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Kickfit & MMA</a>
                                            </div>
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}></ul>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')}>
                                        <label htmlFor="dinh-duong" style={{ padding: '0' }}>
                                            <div className={cx('group-blog-cate')}>
                                                <a className={cx('nav-sub-link')}>Dinh dưỡng</a>
                                            </div>
                                        </label>
                                        <ul className={cx('dropdown-sub-content-mobile')}></ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx('main-item')}>
                                <label htmlFor={3}>
                                    <div>
                                        <a className={cx('navbar-item-header')}>LỊCH TẬP / SCHEDULE</a>
                                    </div>
                                </label>
                            </li>
                            <li className={cx('main-item')}>
                                <input
                                    type="checkbox"
                                    id={4}
                                    hidden
                                    value={'8'}
                                    checked={selectedOption === '8'}
                                    onChange={handleOptionChange}
                                    name="drop-down-content-mobile"
                                />
                                <label htmlFor={4}>
                                    <div>
                                        <a className="navbar-item-header">HỘI VIÊN</a>
                                    </div>
                                    <AiOutlineDown className={cx('icon-sub-menu')} color="#fff" />
                                </label>

                                <ul className={cx('dropdown-content-mobile')}>
                                    <li className={cx('dropdown-group-mobile')} style={{ padding: '5px 0' }}>
                                        <a className={cx('nav-sub-link')}>HẠNG CENTURYON</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')} style={{ paddingBottom: '5px' }}>
                                        <a className={cx('nav-sub-link')}>HẠNG ICONIC</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')} style={{ paddingBottom: '5px' }}>
                                        <a className={cx('nav-sub-link')}>HẠNG PLATINUM PLUS</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')} style={{ paddingBottom: '5px' }}>
                                        <a className={cx('nav-sub-link')}>HẠNG GOLD</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')} style={{ paddingBottom: '5px' }}>
                                        <a className={cx('nav-sub-link')}>HẠNG PRESTIGE</a>
                                    </li>
                                    <li className={cx('dropdown-group-mobile')} style={{ paddingBottom: '5px' }}>
                                        <a className={cx('nav-sub-link')}>Hội viên California Active</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
