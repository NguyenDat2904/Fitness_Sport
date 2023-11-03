import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import FormPut from './fontPut/fontPut';
import styles from './client.module.scss';
import { AiOutlineLoading } from 'react-icons/ai';
import * as apiUser from '~/services/getData/getUserClient';
import * as deleteData from '~/services/getData/deleteData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '~/hook/context/AppContext';
import {
    faUserXmark,
    faToolbox,
    faUserCheck,
    faX,
    faKeyboard,
    faCaretDown,
    faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Client = () => {
    const { userData, setUser, handleTurnOnDetail, tableDetailId, handleTableStyle } = useContext(AppContext);
    const [selectInfo, setSelect] = useState(true);
    const [selectCourse, setSelectCourse] = useState('');
    const [selectLever, setSelectLever] = useState('');

    const [selectSort, setSelctSorrt] = useState('');

    const [courseData, setCourseData] = useState([]);
    const [locationData, setLocationData] = useState([]);

    const [benefitData, setbenefitData] = useState([]);
    const [rankBenefit, setRankBenefit] = useState([]);
    const [idPut, setidPut] = useState({});
    const [phoneUser, setPhoneUser] = useState('');

    const [putNewStyle, setPutnewStyle] = useState(true);
    const [isLoadingClient,setIsLoadingClient]=useState(false)
    //callAPI ALL User

    useEffect(() => {
        const callApi = async () => {
            try {
                setIsLoadingClient(true)
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                const user = await apiUser.getUserClien(accessToken, refresh_token);
                setUser(user.data.users);
                const course = await apiUser.getCourse();
                setCourseData(course.data.courses);
                const benefit = await apiUser.getBenefit();
                setbenefitData(benefit.data.benefits);
                const location = await apiUser.getLocation();
                setLocationData(location.data.locations);
            } catch (error) {
                console.log('error Api Admin');
            }
            finally{
                setIsLoadingClient(false)
            }
        };
        callApi();
    }, []);

    const handleRankBenefit = () => {
        const rankBenefit = benefitData.map((product) => {
            return product.rank;
        });
        const result = [...new Set(rankBenefit)];

        setRankBenefit(result);
    };
    useEffect(() => {
        handleRankBenefit();
    }, [benefitData]);

    const handlePutNew = (detail) => {
        setidPut(detail);
        if (putNewStyle === true) {
            setPutnewStyle(false);
        } else {
            setPutnewStyle(true);
        }
    };
    const onChangeSelectSort = (e) => {
        setSelctSorrt(e.target.value);
    };
    const onChangeSelectCourse = (e) => {
        setSelectCourse(e.target.value);
    };
    const onChangeSelectLever = (e) => {
        setSelectLever(e.target.value);
    };
    const onchangeSearchPhone = (e) => {
        setPhoneUser(e.target.value);
    };

    const clickSelect = () => {
        if (selectInfo === true) {
            setSelect(false);
        } else {
            setSelect(true);
        }
    };

    const result = userData?.filter((product) => {
        if (selectCourse && selectLever) {
            return (
                product.courseID?.filter((item) => item.name === selectCourse).length > 0 && product.rank === selectLever
            );
        }
        if (!selectCourse && selectLever) {
            return product.rank === selectLever;
        }
        if (selectCourse && !selectLever) {
            return product.courseID?.filter((item) => item.name === selectCourse).length > 0;
        }

        if (phoneUser) {
            return phoneUser && product && product.phone && product.phone.includes(phoneUser);
        }

        return true;
    });
    const resultSort = result?.sort((nv1, nv2) => {
        if (selectSort === 'a->z') {
            let a = nv1.name.toLowerCase();
            let b = nv2.name.toLowerCase();
            return a === b ? 0 : a > b ? 1 : -1;
        }
        if (selectSort === 'z->a') {
            let a = nv1.name.toLowerCase();
            let b = nv2.name.toLowerCase();
            return a === b ? 0 : b > a ? 1 : -1;
        }
        if (selectSort === '') {
            return result;
        }
        return true;
    });
    return (
        <div className={cx("users")}>
            {   isLoadingClient?<div className={cx("loading")}>
            <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')}/>}</h3>
            </div>:
                  <div className={cx('client')}>
            <div className={cx('tagBar')}>
                <div className={cx('search')}>
                    <input type="text" placeholder="Số điện thoại..." onChange={onchangeSearchPhone} />
                    <FontAwesomeIcon icon={faKeyboard} className={cx('icon')} />
                </div>
                <div className={cx('courseLever')}>
                    <button onClick={clickSelect}>
                        Lựa chọn thông tin
                        <FontAwesomeIcon icon={faCaretDown} className={cx('icon')} />
                    </button>
                    <div className={cx(selectInfo ? 'displayNone' : 'selectInfo')}>
                        <select name="" id="" onChange={onChangeSelectCourse}>
                            <option className={cx('opacity')} value="">
                                Khóa học...
                            </option>
                            {courseData.map((product) => {
                                return (
                                    <option key={product._id} value={product.name}>
                                        {product.name}
                                    </option>
                                );
                            })}
                        </select>
                        <select name="" id="" onChange={onChangeSelectLever}>
                            <option className={cx('opacity')} value="">
                                Cấp bậc...
                            </option>
                            {rankBenefit.map((product, index) => {
                                return (
                                    <option key={index} value={product}>
                                        {product}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <select className={cx('selectSort')} name="" id="" onChange={onChangeSelectSort}>
                    <option className={cx('opacity')} value="">
                        Sắp xếp
                    </option>
                    <option value="a->z">Từ a đến z</option>
                    <option value="z->a">Từ z đến a</option>
                </select>
            </div>

            {putNewStyle === false ? (
                <FormPut
                    setUser={setUser}
                    locationData={locationData}
                    benefitData={benefitData}
                    idPut={idPut}
                    courseData={courseData}
                    handlePutNew={handlePutNew}
                />
            ) : (
                <div className={cx('table')}>
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ email</th>
                                <th>Khóa học</th>
                                <th>Cấp bậc</th>
                                <th>Thời gian ĐK</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultSort?.length === 0 ? (
                                <tr>
                                    <td className={cx('error')}> Không có thông tin cho loại dữ liệu này...</td>
                                </tr>
                            ) : (
                                resultSort?.map((product, indext) => {
                                    const handleDedete = async (id) => {
                                        try {
                                            const accessToken = localStorage.getItem('accessToken');
                                            const refresh_token = localStorage.getItem('refresh_token');
                                            await deleteData.deleteDataUser(id, accessToken, refresh_token);
                                            const user = await apiUser.getUserClien(accessToken, refresh_token);
                                            setUser(user.data.users);
                                        } catch (error) {
                                            console.log('can not delete data user!');
                                        }
                                    };
                                    return (
                                        <tr key={indext}>
                                            <td>{indext}</td>
                                            <td>{product.name}</td>
                                            <td>{product.phone === undefined ? 'null' : product.phone}</td>
                                            <td>{product.email}</td>

                                            {product.courseID?.length === 0 ? (
                                                <td>null</td>
                                            ) : (
                                                <td>{`${product.courseID[0].name}...`}</td>
                                            )}
                                            <td>{product.rank === '' ? 'null' : product.rank}</td>
                                            <td>{product.updatedAt?product.updatedAt.slice(0, 10):""}</td>
                                            <td className={cx('detail')}>
                                                <button
                                                    className={cx('buttonview')}
                                                    onClick={() => handleTableStyle(product._id)}
                                                >
                                                    <FontAwesomeIcon icon={faEllipsis} />
                                                </button>
                                                <div
                                                    className={cx(
                                                        tableDetailId !== product._id
                                                            ? 'noneTableDetail'
                                                            : 'tableDetail',
                                                    )}
                                                >
                                                    <div
                                                        className={cx('buttonX')}
                                                        onClick={() => handleTableStyle('default')}
                                                    >
                                                        <button>
                                                            <FontAwesomeIcon icon={faX} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        className={cx('buttonDetail')}
                                                        onClick={() => handleTurnOnDetail(product._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faUserCheck} />
                                                        <h5>Chi tiết</h5>
                                                    </button>
                                                    <button
                                                        className={cx('buttonFix')}
                                                        onClick={() => handlePutNew(product)}
                                                    >
                                                        <FontAwesomeIcon icon={faToolbox} />
                                                        <h5>Sửa</h5>
                                                    </button>
                                                    <button
                                                        className={cx('buttonDetete')}
                                                        onClick={() => handleDedete(product._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faUserXmark} />
                                                        <h5>Xóa</h5>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
            }
        </div>
      
    );
};

export default Client;
