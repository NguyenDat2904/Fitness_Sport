import React from 'react';
import classNames from 'classnames/bind';
import style from './ClubProvince.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '~/hook/context/AppContext';
import { getLocationData } from '~/services/getData/getDataUser';
import WhiteContain from '~/components/WhiteContain/WhiteContain';
import { useParams } from 'react-router-dom';
import IsLoading from '~/components/IsLoading/IsLoading.js';
import ItemSelectDistrict from '~/components/ItemSelectDistrict/ItemSelectDistrict';
import ClbItem from '~/components/ClbItem/ClbItem';
const cx = classNames.bind(style);

const ClubProvince = () => {
    const navigate = useNavigate();

    const district = {
        'Hà Nội': [
            'Quận Cầu Giấy',
            'Quận Hà Đông',
            'Quận Hai Bà Trưng',
            'Quận Hoàn Kiếm',
            'Quận Long Biên',
            'Quận Nam Từ Liêm',
            'Quận Tây Hồ',
            'Quận Thanh Xuân',
            'Quận Đống Đa',
        ],
        'Đằ Nẵng': ['Quận Thanh Khê'],
        'Khánh Hòa': ['Thành Phố Nha Trang'],
        'Bình Dương': ['Thành Phố Thủ Dầu Một'],
        'Đồng Nai': ['Thành Phố Biên Hòa'],
        'Bà Rịa - Vũng Tàu': ['Thành Phố Vũng Tàu'],
        'Hồ Chí Minh': [
            'Quận 1',
            'Quận 11',
            'Quận 2',
            'Quận 3',
            'Quận 4',
            'Quận 5',
            'Quận 6',
            'Quận 7',
            'Quận Bình Tân',
            'Quận Bình Thạch',
            'Quận Gò Vấp',
            'Quận Phú Nhuận',
            'Quận Tân Bình',
            'Quận Tân Phú',
            'Thành Phố Thủ Đức',
        ],
        'Cần Thơ': ['Quận Ninh Kiều'],
    };

    const cityName = useParams();
    console.log(cityName.city);
    const [locations, setLocations] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [changeValue, setChangValue] = useState('');

    // const districtCount = {};
    // for (const obj of locations) {
    //     const district = obj.district;
    //     if (districtCount[district]) {
    //         districtCount[district]++;
    //     } else {
    //         districtCount[district] = 1;
    //     }
    // }

    // const handleFilterDistrict = Object.keys(districtCount).filter((district) => districtCount[district] === 1);
    // setDistricts(handleDistrict);
    // console.log(handleFilterDistrict);

    const onChangeValue = (item) => {
        setChangValue(item.target.value);
        // console.log(changeValue);
    };

    const onSubmitHandle = () => {
        console.log(dis);
        setDis(changeValue);
    };

    const handleDistrict = (cityName) => {
        switch (cityName) {
            case 'Hà Nội':
                setDistricts(district['Hà Nội']);
                break;
            case 'Đằ Nẵng':
                setDistricts(district['Đằ Nẵng']);
                break;
            case 'Khánh Hòa':
                setDistricts(district['Khánh Hòa']);
                break;
            case 'Bình Dương':
                setDistricts(district['Bình Dương']);
                break;
            case 'Đồng Nai':
                setDistricts(district['Đồng Nai']);
                break;
            case 'Bà Rịa - Vũng Tàu':
                setDistricts(district['Bà Rịa - Vũng Tàu']);
                break;
            case 'Hồ Chí Minh':
                setDistricts(district['Hồ Chí Minh']);
                break;
            case 'Cần Thơ':
                setDistricts(district['Cần Thơ']);
                break;
            default:
                console.log('Error!');
                break;
        }
    };

    const values = useContext(AppContext);

    const {
        show,
        dis,
        loading,
        setLoading,
        onBlur,
        onShow,
        setShow,
        onMouseEnter,
        onMouseLeave,
        setStatusCode,
        setDis,
    } = values;

    useEffect(() => {
        setLoading(true);
        getLocationData(cityName.city, dis)
            .then((result) => {
                console.log(result);
                handleDistrict(cityName.city);
                setLocations(result);
            })
            .catch((error) => {
                if (error.response) {
                    setStatusCode(error.response.status);
                    navigate('error');
                    console.error(error);
                }
                console.error(error);
            });
        setShow('');
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [cityName, dis]);

    return (
        <>
            <IsLoading isLoading={loading} />
            <div className={cx('black-contain')} style={{ transition: 'all 0.3s ease' }}>
                <div className={cx('breadcrumb-wrap')}>
                    <div className={cx('breadcrum')}>
                        <ul>
                            <li className={cx('breadcrum-item')}>
                                <Link to="/club">Club</Link>
                            </li>
                            <li className={cx('breadcrum-item', 'breadcrum-title')}>
                                <Link to="/club">{cityName.city}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx('search-contain')}>
                    <div className={cx('clb-count')}>
                        <h1>{cityName.city}</h1>
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
                                    placeholder="Chọn quận của bạn"
                                    autoComplete="off"
                                    id={cx('myInput')}
                                    onClick={onShow}
                                    onBlur={onBlur}
                                    onChange={onChangeValue}
                                    onKeyDown={onSubmitHandle}
                                />
                                <div className={cx('drop-box-mobile', { show })} id={cx('myDropdown')}>
                                    <div
                                        id={cx('myDropdown_inside')}
                                        className={cx('search-clb-dropdown-content')}
                                        onMouseEnter={onMouseEnter}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        <p className={cx('mobile-header-search-box')}>Chọn quận</p>
                                        {districts.map((item) => {
                                            return <ItemSelectDistrict district={item} key={item._id} />;
                                        })}
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
                    {locations.length !== 0 ? (
                        locations.map((item, index) => {
                            return <ClbItem item={item} index={index} />;
                        })
                    ) : (
                        <h2 style={{ color: 'var(--white)' }}>Sorry we don't have any club at here</h2>
                    )}
                </div>
            </div>
            <WhiteContain />
        </>
    );
};

export default ClubProvince;
