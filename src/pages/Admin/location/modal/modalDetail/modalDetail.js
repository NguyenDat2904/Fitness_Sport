import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './modalDetail.module.scss';
import { AppContext } from '~/hook/context/AppContext';
const cx = classNames.bind(styles);

const ModalDetailLocation = () => {
    const { detailLocation,callAPILocationDetail } = useContext(AppContext);

    return detailLocation.map((product) => {
        return (
            <div key={product._id} className={cx('modalDetail')}>
                <div className={cx('leftDetail')}>
                    <h3>Ảnh Khóa học </h3>
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
                                    <span> Tên chi nhánh:</span> {product.name}.
                                </p>
                                <p className={cx('p')}>
                                    <span>Số điện thoại:</span> {product.phone}.
                                </p>
                            </div>
                            <div className={cx('infoUserRight')}>
                                <p className={cx('schedule')}>Thời gian hoạt động: </p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Thời gian hoạt động</th>
                                            <th>Ngày hoạt động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.times_days.map((item, index) => {
                                            return (
                                                <tr key={item._id}>
                                                    <td>{index}</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.day}</td>
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
                            <span>Địa chỉ chi nhánh:</span>{' '}
                            {`${product.city} - ${product.district} - ${product.ward} - ${product.street}`}.{' '}
                        </p>
                        <p className={cx('p')}>
                            <span>Mô tả:</span> {product.desc}
                        </p>
                    </div>
                    <hr />
                    <div className={cx('button')}>
                        <button onClick={callAPILocationDetail} >Trở lại</button>
                    </div>
                </div>
            </div>
        );
    });
};
export default ModalDetailLocation;
