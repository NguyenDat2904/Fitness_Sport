import React, { useContext, useEffect, useState } from 'react';
import { formatCurrencyVND } from '~/pages/Admin/numBerToPrice/currency';
import { AppContext } from '~/hook/context/AppContext';
import classNames from 'classnames/bind';
import styles from './modaldetail.module.scss';
const cx = classNames.bind(styles);
const ModalDetail = () => {
    const { benefitCourse, handleTurnOnDetail, profileDetail } = useContext(AppContext);
    const [checkData, setCheckData] = useState(false);
    const [checkDataBenefit, setCheckDataBenefit] = useState(false);

    const isCheckData = profileDetail?.some((img) => img.courseID?.length !== 0);
    const isCheckDataBenefit = profileDetail?.some((img) => img.benefitID?.length !== 0);
    useEffect(() => {
        setCheckData(isCheckData);
        setCheckDataBenefit(isCheckDataBenefit);
    }, [isCheckData, isCheckDataBenefit]);
    const imgAvt = profileDetail?.map((img, index) => {
        return (
            <img
                key={index}
                src={img.img ? img.img : 'https://thuthuatphanmem.vn/uploads/2018/04/10/avatar-den-1_051422423.png'}
                alt=""
            />
        );
    });
    return (
        <div className={cx('modalDetail')}>
            <div className={cx('leftDetail')}>
                <div className={cx('img')}>{imgAvt}</div>
            </div>
            <div className={cx('rightDetail')}>
                <div className={cx('infoUser')}>
                    <h3>Thông tin cá nhân</h3>
                    <div className={cx('user')}>
                        {profileDetail.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserLeft')}>
                                    <p className={cx('p')}>
                                        Họ và tên: <span>{product?.name}</span>
                                    </p>
                                    <p className={cx('p')}>
                                        Tuổi:<span>{product.age}</span>
                                    </p>
                                    <p className={cx('p')}>
                                        Cấp bậc:
                                        <span
                                            className={cx(
                                                product.rank === 'Gold' && 'gold',
                                                product.rank === 'Platinum' && 'platinum',
                                                product.rank === 'Diamond' && 'diamond',
                                            )}
                                        >
                                            {product.rank}
                                        </span>
                                    </p>
                                    <p className={cx('p')}>
                                        SDT: <span>{product.phone}</span>
                                    </p>
                                </div>
                            );
                        })}
                        {profileDetail?.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserRight')}>
                                    <p className={cx('p')}>
                                        Email: <span>{product.email}</span>
                                    </p>
                                    <p className={cx('p')}>
                                        Địa chỉ: <span>{product.address}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {checkData && (
                    <div className={cx('infoCourse')}>
                        <h3>Thông tin khóa học</h3>
                        <div className={cx('table')}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Tên khóa học</th>
                                        <th>Giá khóa học</th>
                                        <th>Thời gian đăng ký</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {profileDetail.map((product) => {
                                        return product.courseID?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td className={cx('td')}>{item.name}</td>
                                                <td className={cx('td')}>{formatCurrencyVND(item.price)}</td>
                                                <td className={cx('td')}>{item.updatedAt?.slice(0, 10)}</td>
                                            </tr>
                                        ));
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {checkDataBenefit && (
                    <div className={cx('infoCourse')}>
                        <h3>Đãi ngộ Khóa học</h3>
                        <p className={cx('p')}>
                            <span>Lợi ích:</span> {benefitCourse}
                        </p>
                    </div>
                )}

                <div className={cx('button')}>
                    <button onClick={handleTurnOnDetail}>Trở lại</button>
                </div>
            </div>
        </div>
    );
};
export default ModalDetail;
