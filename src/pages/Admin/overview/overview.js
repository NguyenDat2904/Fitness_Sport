import React from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    
    faUserGroup,
    faPersonWalkingWithCane,
    faMoneyBill,
    faCalendarMinus,

} from '@fortawesome/free-solid-svg-icons';
import styles from "./overview.module.scss";
import CanvasJSReact from '@canvasjs/react-charts';
const cx=classNames.bind(styles)
const Overview=({activeClass})=>{
    const  CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const user=[
        {
            id:1,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        },
        {
            id:2,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        },
        {
            id:3,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        },
        {
            id:4,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        },
        {
            id:5,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        },
        {
            id:6,
            name:"Tu",
            img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
            time:"Chủ nhật",
            course:"Gym",
            status:"Đã thanh toán",
            price:"300",
        }

    ]
    const options = {
      
        animationEnabled: true,
        title: {
            text: "Tỉ lệ giáo viên & khách hàng",
            fontSize:24,
            fontFamily:'Roboto'

        },
      
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 75, label: "Khách hàng" ,color:"#FF9A00"},
                { y: 25, label: "Giáo viên",color:"#FF165D" },
                
            ]
        }]
    }
    const options1 = {
       
        animationEnabled: true,
        title: {
            text: "Tỉ lệ thang gia các khóa học",
            fontSize:24,
            fontFamily:'Roboto'
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 18, label: "Gym" },
                { y: 49, label: "Yoga" },
                { y: 9, label: "Boxing" },
                
            ]
        }]
    }
    const options3 = {
        title: {
            text: "Biểu đồ thể hiện doanh thu hàng tháng",
            fontSize:24,
            fontFamily:'Roboto'
        },
         
        dataPointWidth: 50,
        axisY: {
           
            prefix: "",
            suffix: "k"
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "January",  y: 10  },
                { label: "February ", y: 15  },
                { label: "March ", y: 25  },
                { label: "April ",  y: 30  },
                { label: "May ",  y: 22 },
                { label: "June  ",  y:36  },
                { label: "July ",  y: 70  },
                { label: "August  ",  y: 79  },
                { label: " September ",  y: 35  },

                { label: "October ",  y: 96  },
                { label: "November ",  y: 23  },
                { label: " December ",  y: 25  },
               
            ]
        }
        ]
    }
    return(
        <div className={cx("overView")}>
            <div className={cx("cardProduct")}>
                <NavLink to={"client"} className={activeClass}>
                    <div className={cx("card")}>
                <div className={cx("bgrIcon")} style={{backgroundColor:"#FF2E63"}}>
                    <FontAwesomeIcon icon={faUserGroup} className={cx('icon')} />
                </div>
                
                <div>
                    <h6> Khách hàng</h6>
                   <p>10</p></div>
                </div>
                   
                </NavLink>
                <NavLink to={"coach"}className={activeClass}>
                    <div className={cx("card")}>
                <div className={cx("bgrIcon")} style={{backgroundColor:"#08D9D6"}}>
                    <FontAwesomeIcon icon={faPersonWalkingWithCane} className={cx('icon')} />
                </div>
                
                   <div>
                     <h6>
                    Giáo viên
                   </h6>
                   <p>10</p>
                   </div>
                  
                     </div>
                </NavLink>
                <NavLink to={"course"} className={activeClass}>
                     <div className={cx("card")}>
                <div className={cx("bgrIcon")} style={{backgroundColor:"#252A34"}}>
                                    <FontAwesomeIcon icon={faCalendarMinus} className={cx('icon')} />
                </div>

                  <div>
                      <h6>
                         Khóa học 
                    </h6>
                    <p>
                        6
                    </p>
                  </div>
                  
                   </div>
                </NavLink>
                <NavLink to={"order"}className={activeClass}>
                      <div className={cx("card")}>
                    <div className={cx("bgrIcon")} style={{backgroundColor:"#E23E57"}}>
                         <FontAwesomeIcon icon={faCartPlus} className={cx('icon')} />
                    </div>
               
                  <div>
                     <h6> Đơn hàng</h6>
                   <p>100k</p>
                  </div>
                  
                   </div>
                </NavLink>
               
                      <div className={cx("card")}>
                <div className={cx("bgrIcon")} style={{backgroundColor:"#364F6B"}}>
                     <FontAwesomeIcon icon={faMoneyBill} className={cx('icon')}/>
                </div>
               
                <div>
                    <h6>
                        Doanh thu
                    </h6>
                    <p>1M</p> 
                </div>
                   
                    </div>
               
                
                
               
              

            </div>
            <div className={cx("chartPir")}>
            
                <div className={cx("pir")}>
                    <CanvasJSChart options = {options} />
            
                </div>
               
			
         

            <div className={cx("clientCoach")}>
                    <div className={cx("client")}>
                        <h3>Khách hàng</h3>
                        <div className={cx("clientProduct")}>
                           {user.map((product)=>{
                            return(
                                <div className={cx("mapClient")} key={product.id}>
                                    <img src={product.img} alt="" />
                                    <p>{product.name}</p>
                                    <p>{product.time}</p>
                                </div>
                            )
                        })} 
                        </div>
                        <h4>Xem tất cả khách hàng</h4>
                    </div>

                    <div className={cx("Coach")}>
                    <h3>Giáo viên</h3>
                    <div className={cx("coachProduct")}>
                                  {user.map((product)=>{
                            return(
                                <div className={cx("mapClient")}  key={product.id}>
                                    <img src={product.img} alt="" />
                                    <p>{product.name}</p>
                                    <p>{product.time}</p>
                                </div>
                            )
                        })}
                    </div>
                    <h4>Xem tất cả giáo viên</h4>
                    </div>
            </div>
            </div>
             <div className={cx("charPirCourse")}>
             <div className={cx("infoPir")}>
                        <h3>Khóa học</h3>
                        <div className={cx("course")}>
                            <img src="https://thethaodonga.com/wp-content/uploads/2022/01/Sergi-Constance-2.jpg" alt="" />
                            <div className={cx("info")}>
                                <div  className={cx("infoDetail")}>
                                    <h5>GYM</h5>
                                    <button style={{backgroundColor:"red"}}>
                                        600k
                                    </button>
                                </div>
                                Body chuẩn dáng đẹp...
                            </div>
                        </div>
                        <div  className={cx("course")}>
                        <img src="https://img.lovepik.com/photo/50771/8447.jpg_wh860.jpg" alt="" />
                            <div className={cx("info")}>
                                <div  className={cx("infoDetail")}>
                                    <h5>YOGA</h5>
                                    <button style={{backgroundColor:"#001524"}}>
                                        600k
                                    </button>
                                </div>
                               Ngăn ngừa thoái hóa khớp...
                            </div>
                        </div>
                        <div  className={cx("course")}>
                        <img src="https://danviet.mediacdn.vn/upload/3-2017/images/2017-07-22/150071143025408-diemmy1.jpg" alt="" />
                            <div className={cx("info")}>
                                <div className={cx("infoDetail")}>
                                    <h5>BOXING</h5>
                                    <button style={{backgroundColor:"blue"}}>
                                        600k
                                    </button>
                                </div>
                               Rèn luyện bản thân...
                            </div>
                        </div>
                        <h4>Xem tất cả Khóa học</h4>
                </div>
                <div className={cx("pirCourse")}>
                      <CanvasJSChart options = {options1} />
                </div>
               
             </div>
             <div className={cx("chartColumn")}>
                <div className={cx("infoColumn")}>
                    <h3>
                    Đơn đặt hàng
                </h3>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Khóa học </th>
                            <th>Trạng thái</th>
                            <th>Giá tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((product,indext)=>{
                            return <tr key={indext}>
                                <td>{indext}</td>
                                <td><img src={product.img} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.course}</td>
                                <td>{product.status}</td>
                                <td>{product.price}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <h4>Xem tất cả các đơn đặt hàng</h4>
                </div>
                <div className={cx("chartColumn")}>
                        <div className={cx("asd")}>
                               <CanvasJSChart options = {options3}   />
                        </div>
                     
            
                
                </div>
             </div>

        </div>
    )
}
export default Overview;