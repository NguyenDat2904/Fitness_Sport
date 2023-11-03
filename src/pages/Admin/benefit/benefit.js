import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '~/hook/context/AppContext';
import FormAddBenefit from './fontAdd/fontAdd';
import FontPutBenefit from './fontPut/fontPut';
import { AiOutlineLoading } from 'react-icons/ai';
import * as apiUser from '~/services/getData/getUserClient';
import * as deleteData from '~/services/getData/deleteData';
import { faUserXmark, faToolbox, faX, faPlus, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './benefit.module.scss';
const cx = classNames.bind(styles);
const Benefit = () => {
    const {
        dataBenefit,
        setdataBenefit,
        modalSaveLocation,
        displayTableBenefit,
        handleStyleFontAddBenefit,
        handleStyleFontPutBenefit,
        handleSaveLocation,
        displayFontAddBenefit,
        displayFontPutBenefit,
        handleBenefitId,
        idDetailBenefit,
    } = useContext(AppContext);
    const [isLoadingBenefit, setIsLoadingBenfit] = useState(false);
    useEffect(() => {
        const callApi = async () => {
            try {
                setIsLoadingBenfit(true);
                const benefit = await apiUser.getBenefit();
                setdataBenefit(benefit.data.benefits);
            } catch (error) {
                console.log('error Api');
            } finally {
                setIsLoadingBenfit(false);
            }
        };
        callApi();
    }, []);
    return (
        <div className={cx('benefit')}>
            {isLoadingBenefit ? (
                <div className={cx('loading')}>
                    <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')} />}</h3>
                </div>
            ) : (
                <div className={cx('client')}>
                    <div className={cx('tagBar')}>
                        <button onClick={handleStyleFontAddBenefit}>
                            <FontAwesomeIcon icon={faPlus} /> Thêm mới
                        </button>
                    </div>
                    <div className={cx(displayFontPutBenefit ? 'noneFontAdd' : 'fontAdd')}>
                        <FontPutBenefit />
                    </div>

                    <div className={cx(displayFontAddBenefit ? 'noneFontAdd' : 'fontAdd')}>
                        <FormAddBenefit />
                    </div>
                    <div className={cx(displayTableBenefit ? 'table' : 'noneTable')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Lợi ích </th>
                                    <th>Cấp bậc</th>
                                    <th>THời gian cập nhật</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataBenefit.length === 0 ? (
                                    <tr>
                                        <td className={cx('error')}> Không có thông tin cho loại dữ liệu này...</td>
                                    </tr>
                                ) : (
                                    dataBenefit.map((product, indext) => {
                                        const handleDedete = async (id) => {
                                            try {
                                                await handleSaveLocation();
                                                const accessToken = localStorage.getItem('accessToken');
                                                const refresh_token = localStorage.getItem('refresh_token');
                                                await deleteData.deleteDataBenefit(id, accessToken, refresh_token);
                                                const user = await apiUser.getBenefit();
                                                if (modalSaveLocation) {
                                                    setdataBenefit(user.data.benefits);
                                                }
                                            } catch (error) {
                                                console.log('can not delete data location!');
                                            }
                                        };
                                        return (
                                            <tr key={indext}>
                                                <td>{indext}</td>
                                                <td>{product.name}</td>
                                                <td>
                                                    <span
                                                        className={cx(
                                                            'no-color',
                                                            product.rank === 'Platinum' && 'platinum',
                                                            product.rank === 'Gold' && 'gold',
                                                            product.rank === 'Diamond' && 'diamond',
                                                        )}
                                                    >
                                                        {product.rank === '' ? '' : product.rank}
                                                    </span>
                                                </td>
                                                <td>{product.updatedAt.slice(0, 10)}</td>
                                                <td className={cx('detail')}>
                                                    <button
                                                        className={cx('buttonview')}
                                                        onClick={() => handleBenefitId(product._id)}
                                                    >
                                                        <FontAwesomeIcon icon={faEllipsis} />
                                                    </button>
                                                    <div
                                                        className={cx(
                                                            idDetailBenefit !== product._id
                                                                ? 'noneTableDetail'
                                                                : 'tableDetail',
                                                        )}
                                                    >
                                                        <div
                                                            className={cx('buttonX')}
                                                            onClick={() => handleBenefitId('default')}
                                                        >
                                                            <button>
                                                                <FontAwesomeIcon icon={faX} />
                                                            </button>
                                                        </div>

                                                        <button
                                                            className={cx('buttonFix')}
                                                            onClick={() => handleStyleFontPutBenefit(product)}
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
export default Benefit;
