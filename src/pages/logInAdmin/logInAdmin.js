import React,{useContext} from "react";
import classNames from "classnames/bind";
import * as login from "../../services/getData/getDataUser"
import styles from "./logInAdmin.module.scss";
import { AppContext } from "~/hook/context/AppContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const cx=classNames.bind(styles);

const LoginAdmin=()=>{
    const navigate=useNavigate()
    const {setIdLogOut,setStatusLogout}=useContext(AppContext)
    const formick=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Bạn vui lòng nhập đúng định dạng email").required("Bạn vui lòng nhập email"),
            password:Yup.string()
            .required("Bạn vui lòng nhập mật khẩu")
        }),
        onSubmit:async (value)=>{
            const email=value.email;
            const password=value.password
            try {
                const response=await login.getUserData(email,password)
                const accessToken = response.data.accessToken;
                const refresh_token=response.data.refreshToken;
                setStatusLogout(response.status)
                setIdLogOut(response.data._id)
                
                if (accessToken&&refresh_token) {
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem("refresh_token",refresh_token)
                    navigate('/admin');
                  }
            } catch (error) {
                console.log("Error Login!!!")
            }
        }
    })

    return(
        <div className={cx("login")}>
                <div className={cx("bgrtranparen")}>
                    <form onSubmit={formick.handleSubmit} className={cx("formLogin")}>
                    <h1>LOGIN</h1>
                        <hr />
                        <div className={cx("input")}>
                            {formick.errors.email&&formick.touched.email&&(
                                <p>{formick.errors.email}</p>
                            )}
                             <input name="email" type="email" placeholder="Địa chỉ email..." onChange={formick.handleChange} />
                        </div>
                        <div className={cx("input")}>
                        {formick.errors.password&&formick.touched.password&&(
                                <p>{formick.errors.password}</p>
                            )}
                             <input name="password" type="password" placeholder="Mật khẩu..." onChange={formick.handleChange}/>
                        </div>
                       
                       
                   
                    <button type="submit">Đăng nhập</button>
                </form>
                </div>
                
        </div>
    )
}
export default LoginAdmin;