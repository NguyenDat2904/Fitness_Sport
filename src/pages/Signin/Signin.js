import React, { useState } from 'react';
import './Signin.scss'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Signin() {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  // useEffect(()=>{
  //   const storedData=localStorage.getItem('formdata');
  //   if(storedData){
  //       setFormData(JSON.parse(storedData));
  //   }
  // },[])

  const navigate = useNavigate();

    async function handleSignin(e){
      e.preventDefault();
      const user = await verify('https://fitness-sport.onrender.com/auth/login', {
        email,
        password,
        role: 'normal',
    });
       if(user) {
         localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
       }

      
    }
    const verify = async (url, data) => {
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
        <div className="br-sign-in">
            <form className="form" onSubmit={handleSignin}>
                  <input type="text" name='name' onChange={(e)=>setEmail(e.target.value)}  placeholder='Tên Đăng Nhập' />  
                  <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}  placeholder='Mật Khẩu' /> 
                  <div>
                    <NavLink to="/register">
                      Chưa Có Tài Khoản ?

                    </NavLink>
                    <NavLink to="/forgot" className="nav-link">
                    Quên Mật Khẩu?
                    </NavLink>
                  {/* <a href="#">Quên Mật Khẩu?</a>  */}
                  </div>
                  <button className="btn" type='submit'>Đăng Nhập</button>
            </form>
        </div>
        </>
    
  )
}

export default Signin