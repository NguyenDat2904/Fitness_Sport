import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cwPassword, setCwPassword]=useState('');
    const [code,setCode]=useState('');
    const [error,setError]=useState(false);
    const [erroName,setErrorName]=useState('');
    const validateEmail = (ipemail) => {
        return /\S+@\S+\.\S+/.test(ipemail);
            
        
    };
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== cwPassword){
            setError(true);
        }
        if(name.length ===0){
            setErrorName(true);
           
        }
        if (!validateEmail(email)) {
            alert('valid');
            return;
        } else {
            const user = await verify('https://fitness-sport.onrender.com/auth/register', {
                name,
                email,
                password,
                role: 'normal',
                code,
            });
            console.log(user)
            if (user) {
                navigate('/signin');
            }
        }
    }
    
    const verify = async (url, data) => {
        // check data co hay k
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json();

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
        <input
            className="input-infor"
            type="text"
            name="ten"
            onChange={(e) => setName(e.target.value)}
            placeholder="Họ và tên*"
        />
        </div>
       {erroName? <label>Tên Không Được Để Trống</label>:""}
        <input
            className="input-infor"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
            className="input-infor"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật Khẩu"
        />
        <div>
        <input
            className="input-infor"
            type="password"
            name="confirm"
            onChange={(e) => setCwPassword(e.target.value)}
            placeholder="Xác Nhận Mật Khẩu"
        />
        </div>
       {error? <label>Mật Khẩu Không Khớp</label>:""}
        <div>
            <button className="btn-take" type="button" onClick={() => verify('https://fitness-sport.onrender.com/auth/verify', { name, email })}>
                Lấy Mã
            </button>
            <input className="input-code" onChange={(e)=>setCode(e.target.value)} type="text" placeholder="Nhập Mã Code Ở Đây  " />
        </div>
        <button className="btn" type="submit">
            Đăng Ký
        </button>
    </form>
    );
}

export default Signup;
