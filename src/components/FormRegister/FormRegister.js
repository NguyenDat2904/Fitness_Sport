import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './FormRegister.module.scss';
const cx = classNames.bind(style);

function FormRegister({ title }) {
    const [showError, setShowError] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        if (name === '') {
            setShowError(true);
        }

        e.preventDefault();
    };
    return (
        <div className={cx('submit-trying')}>
            <div className={cx('submit-trying-left')}>
                <div className={cx('title-big')}>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className={cx('submit-trying-right')}>
                <form action="" className={cx('form-contact-trial')} onSubmit={handleSubmit}>
                    <div>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="Họ và tên *"
                        />
                        {showError && <span className={cx('message-err')}>Vui lòng nhập tên!</span>}
                    </div>
                    <div>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tex"
                            name="phone"
                            placeholder="Số điện thoại *"
                        />
                        {showError && <span className={cx('message-err')}>Vui lòng nhập số điện thoại!</span>}
                    </div>
                    <div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Email *"
                        />
                        {showError && <span className={cx('message-err')}>Vui lòng nhập địa chỉ Email!</span>}
                    </div>
                    <button className={cx('btn-submit')} type="submit">
                        ĐĂNG KÝ
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormRegister;
