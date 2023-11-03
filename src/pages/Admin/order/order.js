import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import * as apiUser from '~/services/getData/getUserClient';
import * as deleteData from '~/services/getData/deleteData';
import { AppContext } from '~/hook/context/AppContext';
import classNames from 'classnames/bind';
import styles from './order.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark, faUserCheck, faX, faEllipsis } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Order = () => {
    const {
        userDataOrder,
        setUserOrder,
        handleTurnOnDetailOrder,
        handleTableStyleOrder,
        tableDetailId,
    } = useContext(AppContext);
    const [selectCourse, setSelectCourse] = useState('');
    const [isloadingOrder,setIsloadingOrder]=useState(true)
    const [courseData, setCourseData] = useState([]);

    //callAPI ALL User

    useEffect(() => {
        const callApi = async () => {
            try {
                setIsloadingOrder(true)
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                const user = await apiUser.getOrder(accessToken, refresh_token);
                setUserOrder(user.data.orders);
                const course = await apiUser.getCourse();
                setCourseData(course.data.courses);
            } catch (error) {
                console.log('error Api Admin');
            }
            finally{
                setIsloadingOrder(false)
            }
        };
        callApi();
    }, []);
    const onChangeCourse = (e) => {
        setSelectCourse(e.target.value);
    };
    const tableOrder=userDataOrder.filter((product)=>{
        if(selectCourse !== ''){
            return product.courseID.filter((item) => item.name === selectCourse).length !== 0;
        }
        return true
    })
    return (
        <div className={cx("order")}>
             {isloadingOrder?<div className={cx("loading")}>
            <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')}/>}</h3>
            </div>:
             <div className={cx('client')}>
            <div className={cx('tagBar')}>
                <div className={cx('courseLever')}>
                    <select name="" id="" onChange={onChangeCourse}>
                        <option className={cx('opacity')} value="">
                            Chọn khóa học...
                        </option>
                        {courseData.map((item) => {
                            return (
                                <option key={item._id} value={item.name}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className={cx('table')}>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>

                            <th>Địa chỉ</th>
                            <th>Khóa học</th>

                            <th>Trạng thái</th>
                            <th>Thời gian ĐK</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableOrder.length === 0 ? (
                            <tr>
                                <td className={cx('error')}> Không có thông tin cho loại dữ liệu này...</td>
                            </tr>
                        ) : (
                            tableOrder.map((product, indext) => {
                                const handleDedete = async (id) => {
                                    try {
                                        const accessToken = localStorage.getItem('accessToken');
                                        const refresh_token = localStorage.getItem('refresh_token');
                                        await deleteData.deleteDataOrder(id, accessToken, refresh_token);
                                        const user = await apiUser.getOrder(accessToken, refresh_token);
                                        setUserOrder(user.data.users);
                                    } catch (error) {
                                        console.log('can not delete data user!');
                                    }
                                };
                                return (
                                    <tr key={indext}>
                                        <td>{indext}</td>
                                        {product.userID === null ? (
                                            <>
                                                <td>Đã xóa</td>

                                                <td>Đã xóa</td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{product.userID.name}</td>

                                                <td>{product.userID.address}</td>
                                            </>
                                        )}
                                        <td>
                                            {product.courseID.map((item) => {
                                                return <p key={item._id}>{item.name}</p>;
                                            })}
                                        </td>

                                        <td>{product.status}</td>
                                        <td>{product.createdAt?product.createdAt.slice(0, 10):""}</td>
                                        <td className={cx('detail')}>
                                            <button
                                                className={cx('buttonview')}
                                                onClick={() => handleTableStyleOrder(product._id)}
                                            >
                                                <FontAwesomeIcon icon={faEllipsis} />
                                            </button>
                                            <div
                                                className={cx(
                                                    tableDetailId !== product._id ? 'noneTableDetail' : 'tableDetail',
                                                )}
                                            >
                                                <div
                                                    className={cx('buttonX')}
                                                    onClick={() => handleTableStyleOrder('default')}
                                                >
                                                    <button>
                                                        <FontAwesomeIcon icon={faX} />
                                                    </button>
                                                </div>

                                                <button
                                                    className={cx('buttonDetail')}
                                                    onClick={() => handleTurnOnDetailOrder(product._id)}
                                                >
                                                    <FontAwesomeIcon icon={faUserCheck} />
                                                    <h5>Chi tiết</h5>
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
        </div>}
        </div>
       
    );
};

export default Order;
