import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Introduce.module.scss';
import { AppContext } from '~/hook/context/AppContext';
import { put } from '~/uliti/htppRequest';
import { AiOutlineLoading } from 'react-icons/ai';
const cx = classNames.bind(style);

function Introduce() {
    const { userInfoProfile, userParse, loadingProfile } = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState({
        name: userInfoProfile.name,
        email: userInfoProfile.email,
        phone: userInfoProfile.phone,
        address: userInfoProfile.address,
        gender: userInfoProfile.gender,
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

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
        setErrors(newErrors);

        if (!hasError) {
            setLoading(false);
            const user = await put(
                `https://fitness-sport.onrender.com/user/put/${userParse._id}`,
                {
                    name: value.name,
                    email: value.email,
                    phone: value.phone,
                    address: value.address,
                    gender: value.gender,
                },
                { headers: { refresh_token: `${userParse.refreshToken}`, authorization: `${userParse.accessToken}` } },
            );
            if (user.status === 200) {
                window.location.reload();
            }
            if (user.status === 400) {
                newErrors.email = 'Email hoặc Mật khẩu của bạn không đúng';
                setErrors(newErrors);
            }
            setLoading(true);
        }
    };

    return (
        <div>
            <div className={cx('wrapper-intro')}>
                <div className={cx('container')}>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className={cx('user_details')}>
                            <div className={cx('input_box')}>
                                <label htmlFor="name">Họ tên</label>
                                <input
                                    value={value.name}
                                    onChange={handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Họ và tên"
                                />
                                <div>{errors.name}</div>
                            </div>
                            <div className={cx('input_box')}>
                                <label htmlFor="email">Email</label>
                                <input
                                    value={value.email}
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Địa chỉ Email"
                                />
                                <div>{errors.email}</div>
                            </div>
                            <div className={cx('input_box')}>
                                <label htmlFor="phone">Số điện thoại</label>
                                <input
                                    value={value.phone}
                                    onChange={handleChange}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Số điện thoại"
                                />
                                <div>{errors.phone}</div>
                            </div>
                            <div className={cx('input_box')}>
                                <label htmlFor="address">Địa chỉ</label>
                                <input
                                    value={value.address}
                                    onChange={handleChange}
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Địa chỉ"
                                />
                            </div>
                        </div>
                        <div className={cx('gender')}>
                            <span className={cx('gender_title')}>Giới tính</span>
                            <div className={cx('category')}>
                                <div className={cx('check-gender')}>
                                    <input
                                        onChange={handleChange}
                                        value="male"
                                        checked={value.gender === 'male'}
                                        type="radio"
                                        name="gender"
                                        id="radio_1"
                                    />
                                    <label htmlFor="radio_1">
                                        <span>Nam</span>
                                    </label>
                                </div>
                                <div className={cx('check-gender')}>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        value="female"
                                        checked={value.gender === 'female'}
                                        name="gender"
                                        id="radio_2"
                                    />
                                    <label htmlFor="radio_2">
                                        <span>Nữ</span>
                                    </label>
                                </div>
                                <div className={cx('check-gender')}>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        value="other"
                                        checked={value.gender === 'other'}
                                        name="gender"
                                        id="radio_3"
                                    />
                                    <label htmlFor="radio_3">
                                        <span>Tôi không muốn nói</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={cx('reg_btn')}>
                            <button className={cx('btn')} type="submit">
                                {loading ? 'Lưu' : <AiOutlineLoading className={cx('loading-icon')} />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            ; ;
        </div>
    );
}

export default Introduce;
