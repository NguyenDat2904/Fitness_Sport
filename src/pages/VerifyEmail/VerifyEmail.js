import React, { useState } from 'react';
import './VerifyEmail.scss'
import { useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
const [email,setEmail]=useState('');
const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        const user = await verify('https://fitness-sport.onrender.com/auth/security', {
            email,
            
        });
        if (user) {
            navigate('/forgot');
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
        <>
            <div className="br-sign-in-forgot">
                <form className="form-forgot" onSubmit={handleSubmit} >
                    <input
                        className="input-infor"
                        type="email"
                        name="email"
                        placeholder="Xac Thuc Email"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                      <button className="btn-veri" type="submit">
                        Đổi Mật Khẩu
                    </button>
                   
                </form>
            </div>
        </>
    );
}

export default VerifyEmail;
