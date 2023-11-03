import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './modalDetail.module.scss';
import { AppContext } from '~/hook/context/AppContext';
const cx = classNames.bind(styles);

const ModalDetailCourse = () => {
    const { dataCourseDetail, addressCourse, callAPICourseDetail } = useContext(AppContext);
    return dataCourseDetail.map((product) => {
        const formatPrice = product.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return (
            <div key={product._id} className={cx('modalDetail')}>
                <div className={cx('leftDetail')}>
                    <h3>Ảnh Khóa học</h3>
                    <hr />
                    <div className={cx('img')}>
                        <img src={product.img} alt="" />
                        <p>{product.name}</p>
                    </div>
                </div>
                <div className={cx('rightDetail')}>
                    <div className={cx('infoUser')}>
                        <h3>Thông tin đơn hàng</h3>
                        <div className={cx('user')}>
                            <div className={cx('infoUserLeft')}>
                                <p className={cx('p')}>
                                    <span> Tên khóa học:</span> {product.name}.
                                </p>
                                <p className={cx('p')}>
                                    <span>Giá:</span> {formatPrice}.
                                </p>
                                <p className={cx('p')}>
                                    <span>Thời gian bắt đầu:</span> {product.start.slice(0, 10)}.
                                </p>
                                <p className={cx('p')}>
                                    <span>Thời gian kết thúc</span> {product.end.slice(0, 10)}.
                                </p>
                                <p className={cx('p')}>
                                    <span>Trạng thái hoạt động: </span>
                                    <span className={cx('done', product.status === 'Chưa thanh toán' && 'miss')}>
                                        {product.status}
                                    </span>
                                </p>
                            </div>
                            <div className={cx('infoUserRight')}>
                                <p className={cx('schedule')}>Lịch tập: </p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Ngày học</th>
                                            <th>Thời gian bắt đầu</th>
                                            <th>Thời gian kết thúc</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.schedule.map((item, index) => {
                                            return (
                                                <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.day}</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.time_end}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={cx('infoCourse')}>
                        <h3>Thông tin Khác</h3>

                        <p className={cx('p')}>
                            <span>Địa chỉ học:</span>{' '}
                            {addressCourse.map((product) => {
                                return `${product.city} - ${product.district} - ${product.ward} - ${product.street}`;
                            })}
                            .{' '}
                        </p>
                        <p className={cx('p')}>
                            <span>Mô tả: </span>
                            {product.desc ? product.desc : ''}
                        </p>
                    </div>
                    <hr />
                    <div className={cx('button')}>
                        <button onClick={callAPICourseDetail}>Trở lại</button>
                    </div>
                </div>
            </div>
        );
    });
};
export default ModalDetailCourse;
