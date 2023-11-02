import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Payment.module.scss';
import { NavLink, Navigate } from 'react-router-dom';
import { AppContext } from '~/hook/context/AppContext';
import { get, post, put } from '~/uliti/htppRequest';
import { AiOutlineLoading } from 'react-icons/ai';
const cx = classNames.bind(style);

function Payment() {
    const { clubLocation, loadingProfile, userInfoProfile, userParse, buyCourse, setLoadingProfile, isCheckPay } =
        useContext(AppContext);

    const [value, setValue] = useState({
        name: userInfoProfile.name,
        email: userInfoProfile.email,
        phone: userInfoProfile.phone,
        city: 'not-found',
        district: 'not-found',
        ward: 'not-found',
        street: 'not-found',
        paymentOffline: '',
        paymentOnline: '',
    });
    console.log(value);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        district: '',
        ward: '',
        street: '',
        paymentOffline: '',
        paymentOnline: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const formattedCost = buyCourse.price?.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        if (!loadingProfile) {
            setValue({
                name: userInfoProfile.name,
                email: userInfoProfile.email,
                phone: userInfoProfile.phone,
                address: userInfoProfile.address,
                gender: userInfoProfile.gender,
            });
        }
    }, [loadingProfile, userInfoProfile]);
    if (!userParse) {
        return <Navigate to="/signin" />;
    } else {
        const uniqueCity = [...new Set(clubLocation.locations?.map((item) => item.city))];

        const filteredDistricts = clubLocation.locations
            ?.filter((item) => item.city === value.city)
            .map((item) => item.district);
        const uniqueDistricts = [...new Set(filteredDistricts)];

        const filteredStreets = clubLocation.locations
            ?.filter((item) => item.city === value.city && item.district === value.district)
            .map((item) => item.street);
        const uniqueStreets = [...new Set(filteredStreets)];

        const handleSubmit = async (e) => {
            e.preventDefault();
            const newErrors = {};
            let hasError = false;
            if (value.name === '') {
                newErrors.name = 'Vui lòng điền họ tên của bạn';
                hasError = true;
            }
            if (value.email === '') {
                newErrors.email = 'Vui lòng điền địa chỉ Email';
                hasError = true;
            }
            if (value.phone === '') {
                newErrors.phone = 'Vui lòng điền số điện thoại';
                hasError = true;
            }
            if (value.city === '' || value.city === 'not-found' || value.city === undefined) {
                newErrors.city = 'Vui lòng chọn tỉnh/thành phố';
                hasError = true;
            }
            if (value.district === '' || value.district === 'not-found' || value.city === undefined) {
                newErrors.district = 'Vui lòng chọn quận/huyện';
                hasError = true;
            }
            if (value.street === '' || value.street === 'not-found' || value.city === undefined) {
                newErrors.street = 'Vui lòng chọn địa chỉ cơ sở gần bạn';
                hasError = true;
            }
            setErrors(newErrors);
            if (!hasError) {
                setLoadingProfile(true);
                const payment = await post(
                    'https://fitness-sport.onrender.com/payment/paypal',
                    {
                        userID: userInfoProfile._id,
                        courseID: [buyCourse._id],
                        totalPrice: buyCourse.price,
                        city: value.city,
                        district: value.district,
                        street: value.street,
                    },
                    {
                        headers: {
                            refresh_token: `${userParse.refreshToken}`,
                            authorization: `${userParse.accessToken}`,
                        },
                    },
                );
                if (payment.status === 200) {
                    window.location.href = payment.data.href;
                }
                if (payment.status === 400) {
                    console.log('Error');
                }
                setLoadingProfile(false);
            }
        };

        const handleSubmitRank = async (e) => {
            e.preventDefault();
            const newErrors = {};
            let hasError = false;
            if (value.name === '') {
                newErrors.name = 'Vui lòng điền họ tên của bạn';
                hasError = true;
            }
            if (value.email === '') {
                newErrors.email = 'Vui lòng điền địa chỉ Email';
                hasError = true;
            }
            if (value.phone === '') {
                newErrors.phone = 'Vui lòng điền số điện thoại';
                hasError = true;
            }
            if (value.city === '' || value.city === 'not-found' || value.city === undefined) {
                newErrors.city = 'Vui lòng chọn tỉnh/thành phố';
                hasError = true;
            }
            if (value.district === '' || value.district === 'not-found' || value.city === undefined) {
                newErrors.district = 'Vui lòng chọn quận/huyện';
                hasError = true;
            }
            if (value.street === '' || value.street === 'not-found' || value.city === undefined) {
                newErrors.street = 'Vui lòng chọn địa chỉ cơ sở gần bạn';
                hasError = true;
            }
            setErrors(newErrors);
            if (!hasError) {
                setLoadingProfile(true);
                const payment = await get(
                    `https://fitness-sport.onrender.com/payment/paypal/benefit/${buyCourse.rank}/${userInfoProfile._id}`,
                    {
                        headers: {
                            refresh_token: `${userInfoProfile.refreshToken}`,
                            authorization: `${userParse.accessToken}`,
                        },
                    },
                );
                if (payment.status === 200) {
                    window.location.href = payment.data.href;
                }
                if (payment.status === 400) {
                    console.log('Error');
                }
                setLoadingProfile(false);
            }
        };
        return (
            <div>
                <section className={cx('wrapper')}>
                    <div className={cx('payment')}>
                        <h3 className={cx('payment-title')}>Thanh Toán</h3>
                        <div className={cx('content')}>
                            <form action="">
                                <div className={cx('content-left')}>
                                    <h3 className={cx('payment-title-left', 'customer')}> Thông tin khách hàng</h3>
                                    <div className={cx('customer-info')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col')}>
                                                <div className={cx('row')}>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{errors.name}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Họ và tên"
                                                                value={userInfoProfile.name}
                                                                onChange={handleChange}
                                                                name="name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{errors.email}</span>
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                placeholder="Email"
                                                                value={userInfoProfile.email}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{errors.phone}</span>
                                                            <input
                                                                type="text"
                                                                placeholder="Điện thoại"
                                                                name="phone"
                                                                value={value.phone}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col')}>
                                                <div className={cx('row')}>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{errors.city}</span>
                                                            <select
                                                                name="city"
                                                                value={value.city}
                                                                onChange={handleChange}
                                                            >
                                                                <option value="not-found">Tỉnh/Thành phố</option>
                                                                {uniqueCity?.map((item) => (
                                                                    <option key={item} value={item}>
                                                                        {item}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>
                                                                {errors.district}
                                                            </span>
                                                            <select name="district" onChange={handleChange}>
                                                                <option value="not-found">Quận/Huyện</option>
                                                                {uniqueDistricts?.map((districts) => (
                                                                    <option key={districts} value={districts}>
                                                                        {districts}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className={cx('col-12')}>
                                                        <div className={cx('form-group')}>
                                                            <span className={cx('errorMessage')}>{errors.street}</span>
                                                            <select onChange={handleChange} name="street">
                                                                <option value="not-found">Câu lạc bộ</option>
                                                                {uniqueStreets.map((street) => (
                                                                    <option key={street} value={street}>
                                                                        {street}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className={cx('payment-title-left', 'money')}>Hình thức thanh toán</h3>
                                    <div className={cx('customer-info')}>
                                        <div className={cx('row')}>
                                            <div className={cx('col')}>
                                                <div className={cx('check-line')}>
                                                    <div className={cx('check-blue')}>
                                                        <input
                                                            value="offline"
                                                            checked={value.paymentOffline === 'offline'}
                                                            onChange={handleChange}
                                                            type="radio"
                                                            name="paymentOffline"
                                                            id="payment"
                                                        />
                                                        <label htmlFor="payment">
                                                            <h4 className={cx('payment-method', 'home')}>
                                                                Thanh toán trực tiếp
                                                            </h4>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('col')}>
                                                <div className={cx('payment-item')}>
                                                    <h4 className={cx('payment-method', 'online')}>
                                                        Thanh toán trực tuyến
                                                    </h4>
                                                </div>
                                                <div className={cx('payment-online')}>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input
                                                                type="radio"
                                                                value="online"
                                                                name="paymentOffline"
                                                                onChange={handleChange}
                                                                checked={value.paymentOffline === 'online'}
                                                                id="paayment"
                                                            />
                                                            <label htmlFor="paayment">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/paypal-payment.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán PayPal</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/thanh-toan-chuyen-kh.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán chuyển khoản</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/ngan-luong-p.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán NganLuong.vn</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/vnpay_qr.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán VNPAY</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/napas-payment.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán NaPas</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/ZaloPay_Logo.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán ZaloPay</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className={cx('payment-online-item')}>
                                                        <div className={cx('check-blue', 'check-radio')}>
                                                            <input type="radio" name="payment-method" />
                                                            <label htmlFor="">
                                                                <div className={cx('img-paayment')}>
                                                                    <img
                                                                        src="https://demo037126.web30s.vn/assets/images/payment/2022/momo-payment.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                <span>Thanh toán qua ví MoMo</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('content-right')}>
                                    <div className={cx('content-right-header')}>
                                        <h3 className={cx('payment-title-left', 'cart')}>Thông tin đơn hàng</h3>
                                        <NavLink to="/cart" className={cx('edit')}>
                                            Sửa
                                        </NavLink>
                                    </div>
                                    <div className={cx('payment-block')}>
                                        <div className={cx('payment-list-product')}>
                                            <div className={cx('payment-list-item')}>
                                                <div className={cx('payment-list-info')}>
                                                    <div className={cx('list-info-name')}>
                                                        <p className={cx('info-name')}>{buyCourse.name}</p>
                                                        <span className={cx('info-desc')}>{buyCourse.desc}</span>
                                                    </div>
                                                    <div className={cx('list-info-price')}>{formattedCost}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('box-price')}>
                                            <div className={cx('box-price-item')}>
                                                <span>Thành tiền</span>
                                                <div className={cx('price-first', 'price-total')}>{formattedCost}</div>
                                            </div>
                                        </div>
                                        <div className={cx('form-group')}>
                                            <textarea name="" id="" rows="3" placeholder="Ghi chú"></textarea>
                                        </div>
                                        {isCheckPay ? (
                                            <button className={cx('btn-payment')} type="submit" onClick={handleSubmit}>
                                                {!loadingProfile ? (
                                                    'Thanh toán'
                                                ) : (
                                                    <AiOutlineLoading className={cx('loading-icon')} />
                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                className={cx('btn-payment')}
                                                type="submit"
                                                onClick={handleSubmitRank}
                                            >
                                                {!loadingProfile ? (
                                                    'Thanh toán'
                                                ) : (
                                                    <AiOutlineLoading className={cx('loading-icon')} />
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Payment;
