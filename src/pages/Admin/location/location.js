import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormAddLocation from './fontAdd/fontAdd';
import { AiOutlineLoading } from 'react-icons/ai';
import FormPutLocation from './fontPut/fontPut';
import * as apiUser from '~/services/getData/getUserClient';
import * as deleteData from '~/services/getData/deleteData';
import { AppContext } from '~/hook/context/AppContext';
import { faUserXmark, faToolbox, faX, faPlus, faUserCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './location.module.scss';
const cx = classNames.bind(styles);
const Location = () => {
    const {
        displayFontAddLocation,
        displayTableLocation,
        handleStyleFontAddLocation,
        handleStyleFontPutLocation,
        callAPILocationDetail,
        userDataLocation,
        setUserLocation,
        handleLocationId,
        idDetailLocation,
        displayFontPutLocation,
        modalSaveLocation,
        handleSaveLocation,
    } = useContext(AppContext);

    //callAPI ALL User
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    useEffect(() => {
        const callApi = async () => {
            try {
                setIsLoadingLocation(true);
                const location = await apiUser.getLocation();
                setUserLocation(location.data.locations);
            } catch (error) {
                console.log('error Api');
            } finally {
                setIsLoadingLocation(false);
            }
        };
        callApi();
    }, []);

    return (
        <div className={cx('location')}>
            {isLoadingLocation ? (
                <div className={cx('loading')}>
                    <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')} />}</h3>
                </div>
            ) : (
                <div className={cx('client')}>
                    <div className={cx('tagBar')}>
                        <button onClick={handleStyleFontAddLocation}>
                            <FontAwesomeIcon icon={faPlus} /> Thêm mới
                        </button>
                    </div>
                    <div className={cx(displayFontPutLocation ? 'noneFontAdd' : 'fontAdd')}>
                        <FormPutLocation />
                    </div>

                    <div className={cx(displayFontAddLocation ? 'noneFontAdd' : 'fontAdd')}>
                        <FormAddLocation />
                    </div>
                    <div className={cx(displayTableLocation ? 'table' : 'noneTable')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Ảnh</th>
                                    <th>Tên chi nhánh</th>
                                    <th>Địa chỉ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {userDataLocation.length === 0 ? (
                                    <tr>
                                        <td className={cx('error')}> Không có thông tin cho loại dữ liệu này...</td>
                                    </tr>
                                ) : (
                                    userDataLocation.map((product, index) => {
                                        const handleDedete = async (id) => {
                                            try {
                                                await handleSaveLocation();
                                                const accessToken = localStorage.getItem('accessToken');
                                                const refresh_token = localStorage.getItem('refresh_token');
                                                await deleteData.deleteDataLocation(id, accessToken, refresh_token);
                                                const user = await apiUser.getLocation();
                                                if (modalSaveLocation) {
                                                    setUserLocation(user.data.locations);
                                                }
                                            } catch (error) {
                                                console.log('can not delete data location!');
                                            }
                                        };
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img src={product.img} alt="" />
                                                </td>
                                                <td>{product.name}</td>
                                                <td>{`${product.city}-${product.district}-${product.ward}-${product.street}`}</td>
                                                <td className={cx('detail')}>
                                                    <button
                                                        className={cx('buttonview')}
                                                        onClick={() => handleLocationId(product._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faEllipsis} />
                                                    </button>
                                                    <div
                                                        className={cx(
                                                            idDetailLocation !== product._id
                                                                ? 'noneTableDetail'
                                                                : 'tableDetail',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx('buttonX')}
                                                            onClick={() => handleLocationId('default')}
                                                        >
                                                            <button>
                                                                <FontAwesomeIcon icon={faX} />
                                                            </button>
                                                        </div>
                                                        <button
                                                            className={cx('buttonDetail')}
                                                            onClick={() => callAPILocationDetail(product._id)}
                                                        >
                                                            <FontAwesomeIcon icon={faUserCheck} />
                                                            <h5>Chi tiết</h5>
                                                        </button>
                                                        <button
                                                            className={cx('buttonFix')}
                                                            onClick={() => handleStyleFontPutLocation(product)}
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
                </div>
            )}
        </div>
    );
};
export default Location;
