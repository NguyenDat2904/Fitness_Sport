import React, { useContext} from "react";
import { AppContext } from "~/hook/context/AppContext";
import classNames from "classnames/bind";
import styles from "./modaldetail.module.scss"
const cx=classNames.bind(styles)
const ModalDetail=()=>{
    const{  nameCourse,
        priceCourse,
        timeRegisterCourse,
        benefitCourse,handleTurnOnDetail, profileDetail}=useContext(AppContext)
   

    return <div className={cx("modalDetail")}>
        <div className={cx("leftDetail")}>
            <div className={cx("img")}>
                  <img src="https://thuthuatphanmem.vn/uploads/2018/04/10/avatar-den-1_051422423.png" alt="" />
            </div>
          

        </div>
        <div className={cx("rightDetail")}>
            <div className={cx("infoUser")}>
                <h3>Thông tin cá nhân</h3>
                <div className={cx("user")}>
                        {profileDetail.map((product)=>{
                return(
                    <div key={product._id}  className={cx("infoUserLeft")}>
                        <p className={cx("p")}><span> Họ và tên:</span> {product.name}.</p>
                        <p  className={cx("p")}><span>Tuổi:</span>  {product.age}.</p>
                        <p className={cx("p")}> <span>Cấp bậc:</span> {product.rank}.</p>
                        <p className={cx("p")}><span>SDT:</span> {product.phone}.</p>
                       
                    </div>
                )
               })}
                 {profileDetail.map((product)=>{
                return(
                    <div key={product._id} className={cx("infoUserRight")}>
                        <p className={cx("p")}><span>Emali: </span>{product.email}.</p>
                        <p className={cx("p")}><span>Địa chỉ: </span>{product.address}.</p>
                       
                    </div>
                )
               })}
                </div>
           
               
            </div>
            <hr />
            <div className={cx("infoCourse")}>
            <h3>Thông tin khóa học</h3>
           
                <p className={cx("p")}><span>Tên khóa học:</span> {nameCourse}. </p>
                <p className={cx("p")}><span>Giá khóa học:</span> {priceCourse}.</p>
                <p className={cx("p")}><span>Thời gian đăng ký:</span> {timeRegisterCourse}.</p>
                <p className={cx("p")}><span>Lợi ích:</span> {benefitCourse}.</p>

            </div>
            <hr />
        <div className={cx("button")}>
             <button onClick={handleTurnOnDetail}>Trở lại</button>
        </div>

        </div>
       
       

    </div>
}
export default ModalDetail