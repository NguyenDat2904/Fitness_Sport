import './Form.scss';
import Member from '../Member/Member';
import Signup from '../Signup/Signup';
function Form() {
  
    return (
        <>
        <main className="main">
            <div className="main-container grid grid--2-cols">
                <div className="main-container-inner">
                    <h1> TRẢI NGHIỆM TẬP MIỄN PHÍ</h1>
                    <p>
                        Hãy để lại thông tin và chúng tôi sẽ liên hệ với bạn trong vòng 24h!(Khi phát thanh toán vui
                        lòng chỉ thanh toán cho công ty California Fitness & Yoga, không giao dịch hay chuyển khoản vào
                        tài khoản không phải của Công ty California)
                    </p>
                </div>
                <Signup/>
            </div>
        </main>
        <div className="member-contaier">
            <Member/>
        </div>
        </>
    );
}

export default Form;