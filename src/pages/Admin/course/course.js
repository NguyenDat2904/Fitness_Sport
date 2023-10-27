import React, { useEffect,useContext } from 'react';
import FormPutCourse from './fontPut/fontPut';
import FormAddCourse from './fontAdd/fontAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as apiUser from '~/services/getData/getUserClient';
import * as deleteData from "~/services/getData/deleteData";
import { AppContext } from '~/hook/context/AppContext';
import {faUserXmark,faToolbox,faX, faPlus,faUserCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames/bind";
import styles from "./course.module.scss";
const cx=classNames.bind(styles)
const Course=()=>{
    const {
        displayTable,
        displayFontAdd,
        displayFontPut,
        handleStyleFontAdd,
        handleStyleFontPut,
        callAPICourseDetail,
        dataCourse,setDataCourse,
        location,setLocation,
        handleCourseId,
        idDetailCourse,
        modalSaveCourse,
        handleModelSaveCourse
        }=useContext(AppContext)
       
         
        //callAPI ALL User
      
        useEffect(() => {
            const callApi = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                const course = await apiUser.getCourse();
                setDataCourse(course.data.courses); 
                const location=await apiUser.getLocation();
                setLocation(location.data.locations ) ;
                const trainer=await apiUser.getTrainer(accessToken,refresh_token);
                console.log(trainer)
            } catch (error) {
                console.log('error Api');
               
    
            }
        };
            callApi();
        }, []);
    
    
    
    return (
        <div className={cx('client')}>
            <div className={cx('tagBar')}>
                <button onClick={handleStyleFontAdd}><FontAwesomeIcon icon={faPlus} /> Thêm mới</button>
            </div>
            <div className={cx(displayFontPut?"noneFontAdd":"fontAdd")}>
                <FormPutCourse location={location}/>
  
            </div >
            <div className={cx(displayFontAdd?"noneFontAdd":"fontAdd")}>
                <FormAddCourse location={location}/>
  
            </div >
          
                 <div className={cx(displayTable?"table":"noneTable")}>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên Khóa học</th>
                            <th>Giá </th>
                            <th>Bắt đầu</th>
                            <th>Kết thúc</th>
                            
                            <th>Trạng thái</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataCourse.length === 0 ? (
                            <tr>
                                <td className={cx('error')}> Không có thông tin cho loại dữ liệu này...</td>
                            </tr>
                        ) : (
                            dataCourse.map((product, indext) => {
                                const handleDedete=async(id)=>{
                                    try {
                                        await handleModelSaveCourse()
                                        const accessToken = localStorage.getItem('accessToken');
                                        const refresh_token = localStorage.getItem('refresh_token');
                                        await deleteData.deleteDataCourse(id,accessToken,refresh_token);
                                        const user = await apiUser.getCourse();
                                        if(modalSaveCourse){
                                              setDataCourse(user.data.courses);
                                        }
                                      
                                    } catch (error) {
                                        console.log("can not delete data user!")
                                    }
                                }
                                return (
                                    <tr key={indext}>
                                        <td>{indext}</td>
                                        <td><img src={product.img} alt="" /></td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.start.slice(0,10)}</td>
                                        <td>{product.end.slice(0,10)}</td>
                                        
                                       <td>{product.status}</td>
                                        <td className={cx("detail")}  >
                                            <button className={cx("buttonview")} onClick={()=>handleCourseId(product._id)} >
                                                <FontAwesomeIcon icon={faEllipsis} />
                                            </button>
                                            <div className={cx(idDetailCourse!==product._id?"noneTableDetail":"tableDetail")}>
                                               <div className={cx("buttonX")}onClick={()=>handleCourseId("default")} >
                                                 <button >
                                                <FontAwesomeIcon icon={faX} />
                                                </button>
                                               </div>
                                               <button  className={cx("buttonDetail")} onClick={()=>callAPICourseDetail(product._id)}>
                                               <FontAwesomeIcon icon={faUserCheck} />
                                               <h5>Chi tiết</h5>
                                               </button>
                                                <button className={cx("buttonFix")} onClick={()=>handleStyleFontPut(product._id)}>
                                                <FontAwesomeIcon icon={faToolbox} />
                                                <h5>Sửa</h5>
                                                </button>
                                                <button className={cx("buttonDetete")} onClick={()=>handleDedete(product._id)}>
                                                <FontAwesomeIcon icon={faUserXmark} />
                                                 <h5>Xóa</h5> 
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
              
                    
        </div>
    );
}

export default Course