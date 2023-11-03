import React, { useContext } from 'react';
import { AppContext } from '~/hook/context/AppContext';
import { formatCurrencyVND } from '../../numBerToPrice/currency';
import classNames from 'classnames/bind';
import styles from './modaldetail.module.scss';
const cx = classNames.bind(styles);
const ModalDetailOrder = () => {
    const { handleTurnOnDetailOrder, profileDetailOrder } = useContext(AppContext);

    return (
        <div className={cx('modalDetail')}>
            <div className={cx('leftDetail')}>
                <h3>Ảnh đơn hàng </h3>
                <hr />
                {profileDetailOrder.map((product) => {
                    return product.courseID?.map((item) => {
                        return (
                            <div key={item._id} className={cx('img')}>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                        );
                    });
                })}
            </div>
            <div className={cx('rightDetail')}>
                <div className={cx('infoUser')}>
                    <h3>Thông tin cá nhân</h3>
                    <div className={cx('user')}>
                        {profileDetailOrder.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserLeft')}>
                                    <p className={cx('p')}>
                                        Họ và tên: <span>{product.userID === null ? '' : product.userID.name}</span>
                                    </p>
                                    <p className={cx('p')}>
                                        Tuổi: <span>{product.userID === null ? '' : product.userID.age}</span>
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
                                        SDT: <span>{product.userID === null ? '' : product.userID.phone}</span>
                                    </p>
                                </div>
                            );
                        })}
                        {profileDetailOrder.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserRight')}>
                                    <p className={cx('p')}>
                                        Emali: <span>{product.userID === null ? '' : product.userID.email}</span>
                                    </p>
                                    <p className={cx('p')}>
                                        Địa chỉ: <span>{product.userID === null ? '' : product.userID.address}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <hr />
                <div className={cx('infoCourse')}>
                    <h3>Thông tin khóa học</h3>
                    <div className={cx('table')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên khóa học</th>
                                    <th>Giá</th>
                                    <th>Ngày đăng ký</th>
                                    <th>Trạng thái</th>
                                    <th>Ngày thanh toán</th>
                                </tr>
                            </thead>
                            <tbody>
                                {profileDetailOrder.map((product) => {
                                    console.log(product);

                                    return product.courseID?.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{formatCurrencyVND(item.price)}</td>
                                                <td>{item.updatedAt?.slice(0, 10)}</td>
                                                <td>{item.status}</td>
                                                <td>{product.timePrice?.slice(0, 10)}</td>
                                            </tr>
                                        );
                                    });
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={cx('button')}>
                    <button onClick={handleTurnOnDetailOrder}>Trở lại</button>
                </div>
            </div>
        </div>
    );
};
export default ModalDetailOrder;
