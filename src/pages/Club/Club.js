import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Club.module.scss';
import axios from 'axios';
import WhiteContain from '~/components/WhiteContain/WhiteContain';
const cx = classNames.bind(style);

const Club = () => {
    const [show, setShow] = useState('');

    const onShow = () => {
        if (show == '') {
            setShow('show');
        } else {
            setShow('');
        }
    };

    return (
        <>
            <div className={cx('black-contain')}>
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
                                    style={{ objectFit: 'contain', paddingLeft: 20, cursor: 'pointer', zIndex: 6 }}
                                    alt="icon"
                                    src="https://cali.vn/themes/cfyc//assets/static/icon/search.svg"
                                    onClick={onShow}
                                />
                                <input
                                    type="text"
                                    placeholder="Chọn thành phố của bạn.."
                                    autoComplete="off"
                                    id={cx('myInput')}
                                    onClick={onShow}
                                />
                                <div className={cx('drop-box-mobile', { show })} id={cx('myDropdown')}>
                                    <div id={cx('myDropdown_inside')} className={cx('search-clb-dropdown-content')}>
                                        <p className={cx('mobile-header-search-box')}>Chọn thành phố</p>
                                        <a href="#">
                                            <input id="Hà Nội" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Hà Nội">Hà Nội</label>
                                        </a>
                                        <a href="#">
                                            <input id="Đà Nẵng" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Đà Nẵng">Đà Nẵng</label>
                                        </a>
                                        <a href="#">
                                            <input id="Khánh Hòa" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Khánh Hòa">Khánh Hòa</label>
                                        </a>
                                        <a href="#">
                                            <input id="Bình Dương" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Bình Dương">Bình Dương</label>
                                        </a>
                                        <a href="#">
                                            <input id="Đồng Nai" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Đồng Nai">Đồng Nai</label>
                                        </a>
                                        <a href="#">
                                            <input id="Bà Rịa - Vũng Tàu" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</label>
                                        </a>
                                        <a href="#">
                                            <input id="Hồ Chí Minh" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Hồ Chí Minh">Hồ Chí Minh</label>
                                        </a>
                                        <a href="#">
                                            <input id="Cần Thơ" type="radio" hidden name="check_box_search" />
                                            <label htmlFor="Cần Thơ">Cần Thơ</label>
                                        </a>
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
                                    transform: show == 'show' ? 'unset' : 'rotate(180deg)',
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
                    <div className={cx('clb-item')}>
                        <div className={cx('clb-left-contain')}>
                            <div className={cx('clb-left-content')}>
                                <div className={cx('item-title')}>
                                    <h2>Hà Nội</h2>
                                </div>
                                <div className={cx('description')}>Thành phố Hà Nội</div>
                            </div>
                            <div className={cx('explore-more')}>
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Hà Nội
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Đà Nẵng
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Khánh Hòa
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Bình Dương
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Đồng Nai
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Tỉnh Bà Rịa - Vũng Tàu
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Hồ Chí Minh
                                </a>
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
                                <a href="#" className={cx('clb-link')}>
                                    Xem phòng tập tại Thành phố Cần Thơ
                                </a>
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
