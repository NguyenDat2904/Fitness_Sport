import { useState } from 'react';
import axios from 'axios';
function Signup() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:3000/register', { name, phone, email, password })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="ten" onChange={(e) => setName(e.target.value)} placeholder="Họ và tên*" />
            <input type="number" name="sdt" onChange={(e) => setPhone(e.target.value)} placeholder="Số Điện Thoại" />
            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {/* <a href="#" className="btn">
                Đăng Ký
            </a> */}
            <button>Dang Ky</button>
        </form>
    );
}

export default Signup;
