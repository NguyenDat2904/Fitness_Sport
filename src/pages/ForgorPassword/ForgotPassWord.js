import { useState } from 'react';
import './ForgotPassword.scss';
import { useNavigate } from 'react-router-dom';

const ForgotPassWord = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [cwPassword, setCwPassword] = useState('');
    const [error,setError]=useState(false);
    const validateEmail = (ipemail) => {
        return /\S+@\S+\.\S+/.test(ipemail);
    };
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== cwPassword){
            setError(true);
        }
        if (!validateEmail(email)) {
            alert('valid');
            return;
        } else {
            const user = await verify('https://fitness-sport.onrender.com/auth/forgot', {
                email,
                password,
                code,
            });
            console.log(user);
            if (user) {
                navigate('/signin');
            }
        }
    }

    const verify = async (url, data) => {
        // check data co hay k
        const response = await fetch(url, {
            method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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
        <>
            <div className="br-sign-in-forgot">
                <form className="form-forgot" onSubmit={handleSubmit}>
                    <input
                        className="input-infor"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input-infor"
                        type="password"
                        name="email"
                        placeholder="Mật Khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                    <input
                        className="input-infor"
                        type="password"
                        name="cfPassword"
                        placeholder="Xác Nhận Mật Khẩu"
                        onChange={(e) => setCwPassword(e.target.value)}
                    />
                    </div>
                    {error? <label>Mật Khẩu Không Khớp</label>:""}
                    <div>
                        <input
                            className="input-code"
                            onChange={(e) => setCode(e.target.value)}
                            type="text"
                            placeholder="Nhập Mã Code Ở Đây "
                        />
                    </div>
                    <button  className="btn" type="submit">
                        Đổi Mật Khẩu
                    </button>
                </form>
            </div>
        </>
    );
};

export default ForgotPassWord;
