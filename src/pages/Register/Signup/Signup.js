import { useState } from 'react';
import register from '~/service/resgister.service';
function Signup() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function isVietnamesePhoneNumberValid(number) {
        return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(number);
    }

    const validateEmail = (ipemail) => {
        return /\S+@\S+\.\S+/.test(ipemail);
            
        
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (!isVietnamesePhoneNumberValid(phone) || !validateEmail(email)) {
            alert('valid');
            return;
        } else {
            register(name, email, phone, password);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input-infor" type="text" name="ten" onChange={(e) => setName(e.target.value)} placeholder="Họ và tên*" />
            <input className="input-infor" type="number" name="sdt" onChange={(e) => setPhone(e.target.value)} placeholder="Số Điện Thoại" />
            <input className="input-infor" type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input className="input-infor"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <div>
                <button className="btn-take">Lấy Mã</button>
                <input className="input-code" type="text" placeholder='Nhập Mã Code Ở Đây  ' />
            </div>
            <button className="btn" type='submit'>Đăng Ký</button>
        </form>
    );
}

export default Signup;
