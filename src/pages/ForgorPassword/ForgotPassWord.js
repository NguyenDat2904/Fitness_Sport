import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './ForgotPassword.module.scss';

import Member from '../Register/Member/Member';
import { patch, post } from '~/uliti/htppRequest';
import { AiOutlineLoading } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);
const ForgotPassWord = () => {
    const [value, setValue] = useState({
        email: '',
        code: '',
        password: '',
        cfmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const [errors, setErrors] = useState({
        email: '',
        code: '',
        password: '',
        cfmPassword: '',
    });
    const [loading, setLoading] = useState(true);
    const [formForgot, setFormForgot] = useState(true);
    const navigate = useNavigate();

    const validateEmail = (ipemail) => {
        return /\S+@\S+\.\S+/.test(ipemail);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        let hasError = false;

        if (!validateEmail(value.email) || value.email === '') {
            newErrors.email = 'Vui lòng điền đúng Email của bạn';
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            setLoading(false);
            const codeSecurity = await post('https://fitness-sport.onrender.com/auth/security', {
                email: value.email,
            });
            setLoading(true);
            if (codeSecurity.status === 400) {
                newErrors.email = 'Email không tồn tại. Vui lòng nhập đúng Email';
                hasError = true;
                setFormForgot(true);
            }
            setErrors(newErrors);
            if (codeSecurity.status === 200) {
                setFormForgot(false);
            }
        }
    }

    async function handleForgot(e) {
        e.preventDefault();
        const newErrors = {};
        let hasError = false;

        if (value.code === '') {
            newErrors.code = 'Vui lòng điền mã code';
            hasError = true;
        }
        if (value.password === '') {
            newErrors.password = 'Vui lòng điền nhập mật khẩu mới';
            hasError = true;
        }
        if (value.cfmPassword === '' || value.cfmPassword !== value.password) {
            newErrors.cfmPassword = 'Vui lòng nhập lại mật khẩu mới';
            hasError = true;
        }
        setErrors(newErrors);

        if (!hasError) {
            setLoading(false);
            const changForgot = await patch('https://fitness-sport.onrender.com/auth/forgot', {
                email: value.email,
                code: value.code,
                password: value.password,
            });
            setLoading(true);
            if (changForgot.status === 404) {
                newErrors.code = 'Mã code không chính xác. Vui lòng nhập lại đúng mã Code';
                hasError = true;
            }
            setErrors(newErrors);

            setErrors(newErrors);
            if (changForgot.status === 200) {
                navigate('/signin');
            }
        }
    }

    return (
        <>
            <div className={cx('main')}>
                <img src="https://cali.vn/storage/app/media/2021/Register/Register_head2_1900x800.jpg" alt="" />
            </div>
            <div className={cx('br-sign-in-forgot')}>
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
                <div className={cx('submit-trying')}>
                    {formForgot ? (
                        <form className={cx('form-forgot')} onSubmit={handleSubmit}>
                            <div>
                                <input
                                    className="input-infor"
                                    type="email"
                                    name="email"
                                    value={value.email}
                                    placeholder="Vui lòng điền Email mà bạn đã đăng ký"
                                    onChange={handleChange}
                                />
                                <span>{errors.email}</span>
                            </div>
                            <button className={cx('btn')} type="submit">
                                {loading ? 'Xác thực' : <AiOutlineLoading className={cx('loading-icon')} />}
                            </button>
                        </form>
                    ) : (
                        <form className={cx('form-forgot')} onSubmit={handleForgot}>
                            <div>
                                <input
                                    className="input-infor"
                                    type="text"
                                    name="code"
                                    value={value.code}
                                    placeholder="Nhập mã Code"
                                    onChange={handleChange}
                                />
                                <span>{errors.code}</span>
                            </div>
                            <div>
                                <input
                                    className="input-infor"
                                    type="password"
                                    name="password"
                                    value={value.password}
                                    placeholder="Nhập Mật Khẩu Mới"
                                    onChange={handleChange}
                                />
                                <span>{errors.password}</span>
                            </div>
                            <div>
                                <input
                                    className="input-infor"
                                    type="password"
                                    name="cfmPassword"
                                    value={value.cfmPassword}
                                    placeholder="Nhập Lại Mật Khẩu Mới"
                                    onChange={handleChange}
                                />
                                <span>{errors.cfmPassword}</span>
                            </div>
                            <button className={cx('btn')} type="submit">
                                {loading ? 'Đổi mật khẩu' : <AiOutlineLoading className={cx('loading-icon')} />}
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div>
                <Member />
            </div>
        </>
    );
};

export default ForgotPassWord;
