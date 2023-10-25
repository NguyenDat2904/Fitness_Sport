import classNames from 'classnames/bind';
import style from './Signup.module.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '~/uliti/htppRequest';
import { AiOutlineLoading } from 'react-icons/ai';

const cx = classNames.bind(style);

function Signup() {
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        cfmPassword: '',
        code: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        cfmPassword: '',
        code: '',
    });
    const [loading, setLoading] = useState(true);
    const [loadingRegister, setLoadingRegister] = useState(true);

    const navigate = useNavigate();
    const submitCode = async () => {
        const newErrors = {};
        let hasError = false;
        if (value.name === '') {
            newErrors.name = 'Vui lòng không để trống tên của bạn';
            hasError = true;
        }
        if (!validateEmail(value.email) || value.email === '') {
            newErrors.email = 'Vui lòng điền vào đúng Email của bạn';
            hasError = true;
        }
        setErrors(newErrors);
        if (!hasError) {
            setLoading(false);
            const codeEmail = await post('/auth/verify', {
                name: value.name,
                email: value.email,
            });
            setLoading(true);
            if (codeEmail.status === 400) {
                newErrors.email = 'Email đã được đăng ký';
                hasError = true;
            }
            setErrors(newErrors);
        }
    };

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

    async function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        let hasError = false;

        if (value.password !== value.cfmPassword || value.cfmPassword === '') {
            newErrors.cfmPassword = 'Mật khẩu không trùng khớp';
            hasError = true;
        }
        if (value.name === '') {
            newErrors.name = 'Vui lòng không để trống tên của bạn';
            hasError = true;
        }

        if (!validateEmail(value.email) || value.emai === '') {
            newErrors.email = 'Vui lòng điền vào đúng Email của bạn';
            hasError = true;
        }

        if (value.code === '') {
            newErrors.code = 'Vui lòng điền vào đúng Mã xác thực';
            hasError = true;
        }

        if (value.password === '') {
            newErrors.password = 'Vui lòng điền vào mật khẩu đúng định dạng';
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            setLoadingRegister(false);
            const user = await post('/auth/register', {
                name: value.name,
                email: value.email,
                password: value.password,
                role: 'normal',
                code: value.code,
            });
            setLoadingRegister(true);
            if (user) {
                navigate('/signin');
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className={cx('form-contact-trial')}>
            <div>
                <input type="text" name="name" value={value.name} onChange={handleChange} placeholder="Họ và tên *" />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <input type="email" name="email" value={value.email} onChange={handleChange} placeholder="Email" />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={value.password}
                    onChange={handleChange}
                    placeholder="Mật Khẩu"
                />
                {errors.password && <span>{errors.password}</span>}
            </div>
            <div>
                <input
                    type="password"
                    name="cfmPassword"
                    value={value.cfmPassword}
                    onChange={handleChange}
                    placeholder="Xác Nhận Mật Khẩu"
                />
                {errors.cfmPassword && <span>{errors.cfmPassword}</span>}
            </div>
            <div>
                <button className={cx('btn-take')} type="button" onClick={submitCode}>
                    {loading ? 'Lấy Mã' : <AiOutlineLoading className={cx('loading-icon')} />}
                </button>
                <input
                    onChange={handleChange}
                    value={value.code}
                    type="text"
                    placeholder="Nhập Mã Code Ở Đây"
                    name="code"
                />
                {errors.code && <span>{errors.code}</span>}
            </div>
            <button className={cx('btn')} type="submit">
                {loadingRegister ? 'Đăng Ký ' : <AiOutlineLoading className={cx('loading-icon')} />}
            </button>
        </form>
    );
}

export default Signup;
