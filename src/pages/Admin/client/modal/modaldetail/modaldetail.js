import React, { useContext } from 'react';
import { formatCurrencyVND } from '~/pages/Admin/numBerToPrice/currency';
import { AppContext } from '~/hook/context/AppContext';
import classNames from 'classnames/bind';
import styles from './modaldetail.module.scss';
const cx = classNames.bind(styles);
const ModalDetail = () => {
    const { benefitCourse, handleTurnOnDetail, profileDetail } = useContext(AppContext);
    return (
        <div className={cx('modalDetail')}>
            <div className={cx('leftDetail')}>
                <div className={cx('img')}>
                    <img src="https://thuthuatphanmem.vn/uploads/2018/04/10/avatar-den-1_051422423.png" alt="" />
                </div>
            </div>
            <div className={cx('rightDetail')}>
                <div className={cx('infoUser')}>
                    <h3>Thông tin cá nhân</h3>
                    <div className={cx('user')}>
                        {profileDetail.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserLeft')}>
                                    <p className={cx('p')}>
                                        <span> Họ và tên:</span> {product.name}.
                                    </p>
                                    <p className={cx('p')}>
                                        <span>Tuổi:</span> {product.age}.
                                    </p>
                                    <p className={cx('p')}>
                                        {' '}
                                        <span>Cấp bậc:</span> {product.rank}.
                                    </p>
                                    <p className={cx('p')}>
                                        <span>SDT:</span> {product.phone}.
                                    </p>
                                </div>
                            );
                        })}
                        {profileDetail.map((product) => {
                            return (
                                <div key={product._id} className={cx('infoUserRight')}>
                                    <p className={cx('p')}>
                                        <span>Emali: </span>
                                        {product.email}.
                                    </p>
                                    <p className={cx('p')}>
                                        <span>Địa chỉ: </span>
                                        {product.address}.
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

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
                                    return product.courseID.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index}</td>
                                                <td className={cx('td')}>{item.name}</td>
                                                <td className={cx('td')}>{formatCurrencyVND(item.price)}</td>
                                                <td className={cx('td')}>{item.updatedAt.slice(0, 10)}</td>
                                            </tr>
                                        );
                                    });
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={cx('infoCourse')}>
                    <h3>Đãi ngộ Khóa học</h3>
                    <p className={cx('p')}>
                        <span>Lợi ích:</span> {benefitCourse}.
                    </p>
                </div>

                <div className={cx('button')}>
                    <button onClick={handleTurnOnDetail}>Trở lại</button>
                </div>
            </div>
        </div>
    );
};
export default ModalDetail;
