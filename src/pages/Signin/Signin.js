import React, { useState, useEffect } from 'react';
import './Signin.scss'
function Signin() {
  const [formdata,setFormData]=useState({
    name:'',
    password:'',

  })
  useEffect(()=>{
    const storedData=localStorage.getItem('formdata');
    if(storedData){
        setFormData(JSON.parse(storedData));
    }
  },[])
  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
        ...formdata,
        [name]:value
    });
  }
    const handleSignin=(e)=>{
      e.preventDefault();
        localStorage.setItem('formdata', JSON.stringify(formdata));
      
    }

  return (
    <>
        <div className="br-sign-in">
            <form className="form" onSubmit={handleSignin}>
                  <input type="text" name='name' value={formdata.name} onChange={handleInputChange}  placeholder='Ten Dang Nhap' />  
                  <input type="password" name='password' value={formdata.password} onChange={handleInputChange}  placeholder='Mat Khau' /> 
                  <div>
                  <a href="#">Quen Mat Khau?</a> 
                  </div>
                  <button className="btn" type='submit'>Dang Nhap</button>
            </form>
        </div>
       
        </>
    
  )
}

export default Signin
