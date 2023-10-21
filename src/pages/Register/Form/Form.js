import classNames from 'classnames/bind';
import style from './Form.module.scss';
import Member from '../Member/Member';
import Signup from '../Signup/Signup';
function Form() {
    const cx = classNames.bind(style);

    return (
        <>
            <main className={cx('main')}>
                <img src="https://cali.vn/storage/app/media/2021/Register/Register_head2_1900x800.jpg" alt="" />
                <div className={cx('main-container')}>
                    <div className={cx('main-container-inner')}>
                        <div className={cx('big-title')}>
                            <h1> TRẢI NGHIỆM TẬP MIỄN PHÍ</h1>
                        </div>
                        <div className={cx('submit-trying-readmore')}>
                            <p>
                                Hãy để lại thông tin và chúng tôi sẽ liên hệ với bạn trong vòng 24h!(Khi phát thanh toán
                                vui lòng chỉ thanh toán cho công ty California Fitness & Yoga, không giao dịch hay
                                chuyển khoản vào tài khoản không phải của Công ty California)
                            </p>
                        </div>
                    </div>
                    <div className={cx('submit-trying')}>
                        <Signup />
                    </div>
                </div>
            </main>
            <div className={cx('member-contaier')}>
                <Member />
            </div>
        </>
    );
}

export default Form;
