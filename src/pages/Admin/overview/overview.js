import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import * as apiUser from '~/services/getData/getUserClient';
import { AiOutlineLoading } from 'react-icons/ai';
import { formatCurrencyVND } from '../numBerToPrice/currency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserGroup, faMoneyBill, faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './overview.module.scss';
import CanvasJSReact from '@canvasjs/react-charts';
const cx = classNames.bind(styles);
const Overview = ({ activeClass }) => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const [dataCourse, setDataCourse] = useState([]);
    const [dataClient, setDataClient] = useState([]);
    const [dataOrder, setDataOrder] = useState([]);
    const [isloadingOverView,setIsloatdingOverView]=useState(false)
    useEffect(() => {
        const apiUsers = async () => {
            try {
                setIsloatdingOverView(true)
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                const course = await apiUser.getCourse();
                setDataCourse(course.data.courses);
                const client = await apiUser.getUserClien(accessToken, refresh_token);
                setDataClient(client.data.users);
                const order = await apiUser.getOrder(accessToken, refresh_token);
                setDataOrder(order.data.orders);
            } catch (error) {
                console.log('error data Overview');
            }
            finally{
                setIsloatdingOverView(false)
            }
        };
        apiUsers();
    }, []);

    const sliceDataClient = dataClient.slice(dataClient.length - 6, dataClient.length);
    const silcedataOrder = dataOrder.slice(dataOrder.length - 6, dataOrder.length);
    const silcedataCourses = dataCourse.slice(dataCourse.length - 3, dataCourse.length);
    const total = dataOrder.reduce((a, b) => a + b.totalPrice, 0);
    const yogaNewPeople = dataClient.filter((product) => {
        return product.courseID.filter((item) => item.name === 'Yoga cho người mới bắt đầu').length > 0;
    });
    const dance = dataClient.filter((product) => {
        return product.courseID.filter((item) => item.name === 'SEXY DANCE - NỔI BẬT ĐƯỜNG CONG').length > 0;
    });
    const yogaPeople = dataClient.filter((product) => {
        return product.courseID.filter((item) => item.name === 'Khóa học yoga cho người làm văn phòng').length > 0;
    });

    
    const options1 = {
        animationEnabled: true,
        title: {
            text: 'Tỉ lệ thang gia các khóa học',
            fontSize: 24,
            fontFamily: 'sans-serif',
        },
        data: [
            {
                type: 'pie',
                startAngle: 75,
                toolTipContent: '<b>{label}</b>: {y}%',
                showInLegend: 'true',
                legendText: '{label}',
                indexLabelFontSize: 16,
                indexLabel: '{label} - {y}%',
                dataPoints: [
                    {
                        y: (yogaPeople.length * 100) / (yogaNewPeople.length + dance.length + yogaPeople.length),
                        label: 'YOGA  cho người văn phòng',
                    },
                    {
                        y: (yogaNewPeople.length * 100) / (yogaNewPeople.length + dance.length + yogaPeople.length),
                        label: 'YOGA cho người mới',
                    },
                    {
                        y: (dance.length * 100) / (yogaNewPeople.length + dance.length + yogaPeople.length),
                        label: 'SEXY DANCE',
                    },
                ],
            },
        ],
    };
    const options3 = {
        title: {
            text: 'Biểu đồ thể hiện doanh thu hàng tháng',
            fontSize: 24,
            fontFamily: 'sans-serif',
        },

        dataPointWidth: 50,
        axisY: {
            prefix: '',
            suffix: 'k',
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: 'column',
                dataPoints: [
                    {
                        label: 'January',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '1')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'February ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '2')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'March ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '3')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'April ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '4')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'May ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '5')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'June  ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '6')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'July ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '7')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'August  ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '8')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: ' September ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '9')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'October ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '10')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: 'November ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '11')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                    {
                        label: ' December ',
                        y: dataOrder
                            .filter((product) => product.createdAt.slice(5, 7) === '12')
                            .reduce((a, b) => a + b.totalPrice, 0),
                    },
                ],
            },
        ],
    };

    return (
        <div className={cx("view")}>  
        {isloadingOverView?<div className={cx("loading")}>
            <h3>Loading.....{<AiOutlineLoading className={cx('loading-icon')}/>}</h3>
            </div>:
         <div className={cx('overView')}>
            <div className={cx('cardProduct')}>
                <NavLink to={'client'} className={activeClass}>
                    <div className={cx('card')}>
                        <div className={cx('bgrIcon')} style={{ backgroundColor: '#FF2E63' }}>
                            <FontAwesomeIcon icon={faUserGroup} className={cx('icon')} />
                        </div>

                        <div>
                            <h6> Khách hàng</h6>
                            <p>{dataClient.length}</p>
                        </div>
                    </div>
                </NavLink>

                <NavLink to={'course'} className={activeClass}>
                    <div className={cx('card')}>
                        <div className={cx('bgrIcon')} style={{ backgroundColor: '#252A34' }}>
                            <FontAwesomeIcon icon={faCalendarMinus} className={cx('icon')} />
                        </div>

                        <div>
                            <h6>Khóa học</h6>
                            <p>{dataCourse.length}</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'order'} className={activeClass}>
                    <div className={cx('card')}>
                        <div className={cx('bgrIcon')} style={{ backgroundColor: '#E23E57' }}>
                            <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
                        </div>

                        <div>
                            <h6> Đơn hàng</h6>
                            <p>{dataOrder.length}</p>
                        </div>
                    </div>
                </NavLink>

                <div className={cx('card')}>
                    <div className={cx('bgrIcon')} style={{ backgroundColor: '#364F6B' }}>
                        <FontAwesomeIcon icon={faMoneyBill} className={cx('icon')} />
                    </div>

                    <div>
                        <h6>Doanh thu</h6>
                        <p>{formatCurrencyVND(total)}</p>
                    </div>
                </div>
            </div>
            <div className={cx('chartPir')}>
                <div className={cx('pir')}>
                    <h3>Khách hàng gần nhất </h3>
                  
                      <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Tuổi</th>
                                <th>Địa chỉ email</th>
                                <th>Số điện thoại</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sliceDataClient.map((product, index) => {
                                return (
                                    <tr key={product._id}>
                                        <td>{index}</td>
                                        <td>{product.name}</td>
                                        <td>{product.age ? product.age : 'null'}</td>
                                        <td>{product.email}</td>
                                        <td>{product.phone ? product.phone : 'null'}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    
                  
                </div>

                <div className={cx('clientCoach')}>
                    <div className={cx('client')}>
                        <h3>Khách hàng</h3>

                        <div className={cx('clientProduct')}>
                            {sliceDataClient.map((product) => {
                                return (
                                    <div className={cx('mapClient')} key={product._id}>
                                        <img
                                            src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
                                            alt=""
                                        />
                                        <p>{product.name}</p>
                                        <p>{product.createdAt.slice(0, 10)}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <NavLink to={'client'}>
                            <h4>Xem tất cả khách hàng</h4>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={cx('charPirCourse')}>
                <div className={cx('infoPir')}>
                    <h3>Khóa học</h3>
                    {silcedataCourses.map((product) => {
                        return (
                            <div key={product._id} className={cx('course')}>
                                <img src={product.img} alt="" />
                                <div className={cx('info')}>
                                    <div className={cx('infoDetail')}>
                                        <h5>{product.name}</h5>
                                        <button>{formatCurrencyVND(product.price)}</button>
                                    </div>
                                    {product.desc?product.desc.slice(0, 40):" "}...
                                </div>
                            </div>
                        );
                    })}

                    <NavLink to={'course'}>
                        <h4>Xem tất cả Khóa học</h4>
                    </NavLink>
                </div>
                <div className={cx('pirCourse')}>
                    <CanvasJSChart options={options1} />
                </div>
            </div>
            <div className={cx('chartColumn')}>
                <div className={cx('infoColumn')}>
                    <h3>Đơn đặt hàng</h3>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Ảnh</th>
                                <th>Tên</th>
                                <th>Khóa học </th>
                                <th>Trạng thái</th>
                                <th>Giá tiền</th>
                                <th>Thời gian đăng ký</th>
                            </tr>
                        </thead>
                        <tbody>
                            {silcedataOrder.map((product, indext) => {
                                return (
                                    <tr key={indext}>
                                        <td>{indext}</td>
                                        <td>
                                            {product.courseID.map((item) => {
                                                return (
                                                    <div key={item._id} className={cx('imgOrder')}>
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                );
                                            })}
                                        </td>
                                        <td>{product.name ? product.name : 'null'}</td>
                                        <td>{product.courseID.map((item) => item.name)}</td>
                                        <td>{product.status}</td>
                                        <td>{product.totalPrice}</td>
                                        <td>{product.createdAt?product.createdAt.slice(0, 10):""}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <NavLink to={'order'}>
                        <h4>Xem tất cả các đơn đặt hàng</h4>
                    </NavLink>
                </div>
                <div className={cx('chartColumn')}>
                    <div className={cx('asd')}>
                        <CanvasJSChart options={options3} />
                    </div>
                </div>
            </div>
        </div>
        }
       
        </div>
      
    );
};
export default Overview;
