import React, { useContext} from "react";
import { AppContext } from "~/hook/context/AppContext";
import classNames from "classnames/bind";
import styles from "./modaldetail.module.scss"
const cx=classNames.bind(styles)
const ModalDetailOrder=()=>{
    const{  nameCourseOrder,
        priceCourseOrder,
        timeRegisterOrder,
        statusCourseOrder,timePayment,handleTurnOnDetailOrder, profileDetailOrder}=useContext(AppContext)
   

    return <div className={cx("modalDetail")}>
        <div className={cx("leftDetail")}>
            <h3>Ảnh đơn hàng </h3>
            <hr />
            {
            profileDetailOrder.map((product)=>{
                return product.courseID.map((item)=>{
                    console.log(item.name)
                   return <div key={item._id} className={cx("img")}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                 </div>
                })
            })
            }
        </div>
        <div className={cx("rightDetail")}>
            <div className={cx("infoUser")}>
                <h3>Thông tin cá nhân</h3>
                <div className={cx("user")}>
                        {profileDetailOrder.map((product)=>{
                return(
                    <div key={product._id}  className={cx("infoUserLeft")}>
                        <p className={cx("p")}><span> Họ và tên:</span> {product.userID===null?"": product.userID.name}.</p>
                        <p  className={cx("p")}><span>Tuổi:</span>  {product.userID===null?"":product.userID.age}.</p>
                        <p className={cx("p")}> <span>Cấp bậc:</span> {product.userID===null?"":product.userID.rank}.</p>
                        <p className={cx("p")}><span>SDT:</span> {product.userID===null?"":product.userID.phone}.</p>
                       
                    </div>
                )
               })}
                 {profileDetailOrder.map((product)=>{
                return(
                    <div key={product._id} className={cx("infoUserRight")}>
                        <p className={cx("p")}><span>Emali: </span>{product.userID===null?"":product.userID.email}.</p>
                        <p className={cx("p")}><span>Địa chỉ: </span>{product.userID===null?"":product.userID.address}.</p>
                       
                    </div>
                )
               })}
                </div>
           
               
            </div>
            <hr />
            <div className={cx("infoCourse")}>
            <h3>Thông tin khóa học</h3>
           
                <p className={cx("p")}><span>Tên khóa học:</span> {nameCourseOrder}. </p>
                <p className={cx("p")}><span>Giá khóa học:</span> {priceCourseOrder}.</p>
                <p className={cx("p")}><span>Thời gian đăng ký:</span> {timeRegisterOrder}.</p>
                <p className={cx("p")}><span>Trạng thái thanh toán:</span> {statusCourseOrder}.</p>
                <p className={cx("p")}><span>Thời gian thanh toán:</span> {timePayment}.</p>

            </div>
            <hr />
        <div className={cx("button")}>
             <button onClick={handleTurnOnDetailOrder}>Trở lại</button>
        </div>

        </div>
       
       

    </div>
}
export default ModalDetailOrder