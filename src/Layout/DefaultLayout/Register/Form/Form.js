import './Form.scss';
import Signup from '../Signup/Signup';
import Header from '../../Header/Header';
function Form() {
  
    return (
        <>
        <Header/>
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
        </>
    );
}

// function FormSignup({onSubmit}) {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     return (
//         <form onSubmit={onSubmit}>
//             <input type="text" name="ten" onChange={(e) => setName(e.target.value)} placeholder="Họ và tên*" />
//             <input type="number" name="sdt" onChange={(e) => setPhone(e.target.value)} placeholder="Số Điện Thoại" />
//             <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
//             <a href="#" className="btn">
//                 Đăng Ký
//             </a>
//         </form>
//     );
// }

export default Form;
