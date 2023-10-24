import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Signin.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Member from '../Register/Member/Member';
import { post } from '~/uliti/htppRequest';
import { AiOutlineLoading } from 'react-icons/ai';
import { AppContext } from '~/hook/context/AppContext';

const cx = classNames.bind(style);

function Signin() {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [loadingLogin, setLoadingLogin] = useState(true);
    const { userInfo, setUserInfo } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setUserInfo(localStorage.getItem('user'));
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const validateEmail = (ipemail) => {
        return /\S+@\S+\.\S+/.test(ipemail);
    };

    async function handleSignin(e) {
        e.preventDefault();
        const newErrors = {};
        let hasError = false;
        if (value.password === '') {
            newErrors.password = 'Vui lòng điền vào đúng mật khẩu của bạn';
            hasError = true;
        }
        if (!validateEmail(value.email) || value.emai === '') {
            newErrors.email = 'Vui lòng điền vào đúng Email của bạn';
            hasError = true;
        }
        setErrors(newErrors);

        if (!hasError) {
            setLoadingLogin(false);
            const user = await post('https://fitness-sport.onrender.com/auth/login', {
                email: value.email,
                password: value.password,
            });
            if (user.status === 200) {
                localStorage.setItem('user', JSON.stringify(user.data));
                navigate('/');
            }
            if (user.status === 400) {
                newErrors.email = 'Email hoặc Mật khẩu của bạn không đúng';
                setErrors(newErrors);
            }
            setLoadingLogin(true);
        }
    }
    return (
        <>
            <div className={cx('main')}>
                <img src="https://cali.vn/storage/app/media/2021/Register/Register_head2_1900x800.jpg" alt="" />
            </div>
            <div className={cx('br-sign-in')}>
                <div className={cx('submit-trying')}>
                    <form className={cx('form')} onSubmit={handleSignin}>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={value.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                            <span>{errors.email}</span>
                        </div>
                        <div>
                            <input
                                type="password"
                                value={value.password}
                                name="password"
                                onChange={handleChange}
                                placeholder="Mật Khẩu"
                            />
                            <span>{errors.password}</span>
                        </div>
                        <div className={cx('text')}>
                            <NavLink to="/register">Đăng ký !</NavLink>
                            <NavLink to="/forgot" className="nav-link">
                                Quên Mật Khẩu?
                            </NavLink>
                        </div>
                        <button className={cx('btn')} type="submit">
                            {loadingLogin ? 'Đăng Nhập' : <AiOutlineLoading className={cx('loading-icon')} />}
                        </button>
                    </form>
                </div>
                <div className={cx('main-container-inner')}>
                    <div className={cx('big-title')}>
                        <h1> TRẢI NGHIỆM TẬP MIỄN PHÍ</h1>
                    </div>
                    <div className={cx('submit-trying-readmore')}>
                        <p>
                            Hãy để lại thông tin và chúng tôi sẽ liên hệ với bạn trong vòng 24h!(Khi phát thanh toán vui
                            lòng chỉ thanh toán cho công ty California Fitness & Yoga, không giao dịch hay chuyển khoản
                            vào tài khoản không phải của Công ty California)
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('member-contaier')}>
                <Member />
            </div>
        </>
    );
}

export default Signin;
