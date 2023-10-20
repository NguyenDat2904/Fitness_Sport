import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Club.module.scss';
import axios from 'axios';
import WhiteContain from '~/components/WhiteContain/WhiteContain';
import { useContext } from 'react';
import { AppContext } from '~/hook/context/AppContext';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);

const Club = () => {
    const values = useContext(AppContext);

    const { show, onBlur, onShow, onMouseEnter, onMouseLeave } = values;

    return (
        <>
            <div className={cx('black-contain')} id="black">
                <div className={cx('search-contain')}>
                    <div className={cx('clb-count')}>
                        <h1>37+ CÂU LẠC BỘ</h1>
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
                                    style={{ objectFit: 'contain', paddingLeft: 20, zIndex: 6 }}
                                    alt="icon"
                                    src="https://cali.vn/themes/cfyc//assets/static/icon/search.svg"
                                />
                                <input
                                    type="text"
                                    placeholder="Chọn thành phố của bạn.."
                                    autoComplete="off"
                                    id={cx('myInput')}
                                    onClick={onShow}
                                    onBlur={onBlur}
                                />
                                <div className={cx('drop-box-mobile', { show })} id={cx('myDropdown')}>
                                    <div
                                        id={cx('myDropdown_inside')}
                                        className={cx('search-clb-dropdown-content')}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        <p className={cx('mobile-header-search-box')}>Chọn thành phố</p>
                                        <Link to="/club/Hà Nội">
                                            <input
                                                id="Hà Nội"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Hà Nội"
                                            />
                                            <label htmlFor="Hà Nội">Hà Nội</label>
                                        </Link>
                                        <Link to="/club/Đà Nẵng">
                                            <input
                                                id="Đà Nẵng"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Đà Nẵng"
                                            />
                                            <label htmlFor="Đà Nẵng">Đà Nẵng</label>
                                        </Link>
                                        <Link to="/club/Khánh Hòa">
                                            <input
                                                id="Khánh Hòa"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Khánh Hòa"
                                            />
                                            <label htmlFor="Khánh Hòa">Khánh Hòa</label>
                                        </Link>
                                        <Link to="/club/Bình Dương">
                                            <input
                                                id="Bình Dương"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Bình Dương"
                                            />
                                            <label htmlFor="Bình Dương">Bình Dương</label>
                                        </Link>
                                        <Link to="/club/Đồng Nai">
                                            <input
                                                id="Đồng Nai"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Đồng Nai"
                                            />
                                            <label htmlFor="Đồng Nai">Đồng Nai</label>
                                        </Link>
                                        <Link to="/club/Bà Rịa - Vũng Tàu">
                                            <input
                                                id="Bà Rịa - Vũng Tàu"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Bà Rịa - Vũng Tàu"
                                            />
                                            <label htmlFor="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</label>
                                        </Link>
                                        <Link to="/club/Hồ Chí Minh">
                                            <input
                                                id="Hồ Chí Minh"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Hồ Chí Minh"
                                            />
                                            <label htmlFor="Hồ Chí Minh">Hồ Chí Minh</label>
                                        </Link>
                                        <Link to="/club/Cần Thơ">
                                            <input
                                                id="Cần Thơ"
                                                type="checkbox"
                                                hidden
                                                name="check_box_search"
                                                defaultValue="Cần Thơ"
                                            />
                                            <label htmlFor="Cần Thơ">Cần Thơ</label>
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
                                    transform: show == 'show' ? 'unset' : 'rotate(180deg)',
                                    transition: 'all 0.3s ease',
                                }}
                                alt="Vector-submenu.svg"
                                src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-submenu.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('list-item-contain')}>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Hà Nội</h2>
                                </div>
                                <div className={cx('description')}>Thành phố Hà Nội</div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Hà Nội" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Hà Nội
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/old/club/Hanoi_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Đà Nẵng</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Đà Nẵng" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Đà Nẵng
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/old/club/Danang_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Khánh Hòa</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Khánh Hòa" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Khánh Hòa
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/2021/City/NhaTrang_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Bình Dương</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Bình Dương" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Bình Dương
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/2021/City/BinhDuong_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Đồng Nai</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Đồng Nai" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Đồng Nai
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/2021/City/DongNai_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Bà Rịa - Vũng Tàu</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Bà Rịa - Vũng Tàu" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Bà Rịa - Vũng Tàu
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/2021/Club/Vung%20Tau/VTC_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Hồ Chí Minh</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Hồ Chí Minh" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Hồ Chí Minh
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/old/club/HCM_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Cần Thơ</h2>
                                </div>
                                <div className={cx('description')}></div>
                            </div>
                            <div className={cx('explore-more')}>
                                <Link to="/club/Cần Thơ" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Cần Thơ
                                </Link>
                                <img
                                    className={cx('icon-readmore', 'lazy')}
                                    alt="icon read more"
                                    src="https://cali.vn/themes/cfyc/assets/static/icon/Vector-readmore-white.svg"
                                    style={{}}
                                />
                            </div>
                        </div>
                        <div className={cx('clb-right-contain', 'city-club-thumbnail')}>
                            <img
                                className="lazy"
                                width="100%"
                                height="100%"
                                alt="image of club"
                                src="https://cali.vn/storage/app/media/2021/City/Cantho_900x600.jpg"
                                style={{}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <WhiteContain />
        </>
    );
};

export default Club;
