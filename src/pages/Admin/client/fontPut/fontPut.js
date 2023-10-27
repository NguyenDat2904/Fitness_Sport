import React,{useState,useEffect,useContext} from "react";
import { useFormik} from "formik";
import * as Yup from "yup";
import *as putUser from "~/services/getData/putData";
import * as apiUser from '~/services/getData/getUserClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "~/hook/context/AppContext";
import classNames from "classnames/bind";
import styles from "./fontPut.module.scss";
const cx=classNames.bind(styles)
const FormPut=({setUser,courseData,locationData,handlePutNew,benefitData,idPut})=>{
   const {handleModelSave,modal}=useContext(AppContext)
  const [benefitID,]=useState([])
  const [courseID,]=useState([]);
  const [benefit,setBenefit]=useState("Lợi ích theo cấp bậc")
    const formick=useFormik({
        initialValues:{
            name:idPut.name||"",
            age:idPut.age,
            phone:idPut.phone||"",
            email:idPut.email||"",
            address:idPut.address||"",
            course:"",
            rank:idPut.rank||"",
        },
        validationSchema:Yup.object({
            name:Yup.string().required("Bạn vui lòng nhập tên"),
            age:Yup.number().required("Bạn vui lòng nhập tuổi"),
            phone:Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,"Bạn vui lòng nhập đúng số điện thoại").required("Bạn vui lòng nhập số điện thoại"),
            email:Yup.string().required("Bạn vui lòng nhập địa chỉ email"),
            address:Yup.string().required("Bạn vui lòng chọn địa chỉ"), 
            course:Yup.string().required("Bạn vui lòng chọn khóa học")  , 
          rank:Yup.string().required("Bạn vui lòng chọn cấp bậc"),
         
        }),
        onSubmit:async(value)=>{
          const result={
            name:value.name,
            age:value.age,
            phone:value.phone,
            email:value.email,
            address:value.address,
            courseID:courseID,
            rank:value.rank,
            benefitID:benefitID,
            _id:idPut._id
          }
          
          try {
           await handleModelSave();
            const accessToken = localStorage.getItem('accessToken');
            const refresh_token = localStorage.getItem('refresh_token');
            await putUser.putDataUser(result.name,result.age,result.phone,
              result.email,result.address,result.courseID,result.rank,result.benefitID,
              result._id,
              accessToken,refresh_token
              )
              if(modal){
                const user = await apiUser.getUserClien(accessToken,refresh_token);
                setUser(user.data.users);
               await handlePutNew()
              }
          } catch (error) {
            console.log("Error put data user")
          }
        }
    });
    const handleBenefit=()=>{
      const filterBenefit=benefitData.filter((product)=>product.rank===formick.values.rank);
     filterBenefit.forEach((product)=>{
      benefitID.push({_id:product._id})
       })
      
    const result = filterBenefit.map((product)=>{
       return product.name
       
      }).join(",")
      setBenefit(result)
      if(formick.values.rank==="")
      {
        setBenefit("Lợi ích theo cấp bậc")
      }
      
  }
  useEffect(()=>{
    handleBenefit()
  },[formick.values.rank])
  const handleCourseId=()=>{
    courseData.forEach((element)=>{
       if(element.name===formick.values.course)
       {
         courseID.push({_id:element._id})
       }
     })
   }
   useEffect(()=>{
     handleCourseId()
   },[formick.values.course])
    return (
     
          <form action="" onSubmit={formick.handleSubmit} className={cx("formAdd")}>
          <h2>Sửa Thông tin  khách hàng</h2>
          <div className={cx("formAddInput")}>
              <div className={cx("inputLeft")}>
                <div className={cx("input")}>
                <FontAwesomeIcon icon={faStarOfLife} className={cx("icon")} />
                  {formick.errors.name&&formick.touched.name&&(
                  <div className={cx("p")}><p>{formick.errors.name}</p></div>  
                  )}
                  <input name="name" type="text" value={formick.values.name} placeholder="Tên khách hàng..." onChange={formick.handleChange}/>
                </div>
                <div className={cx("input")}>
                <FontAwesomeIcon icon={faStarOfLife} className={cx("icon")}/>
                {formick.errors.age&&formick.touched.age&&(
                  <div className={cx("p")}> <p>{formick.errors.age}</p></div> 
                  )}
                  <input name="age" type="text" value={formick.values.age} placeholder="Tuổi..."onChange={formick.handleChange}/>
                </div>
                <div className={cx("input")}>
                <FontAwesomeIcon icon={faStarOfLife}className={cx("icon")} />
                {formick.errors.phone&&formick.touched.phone&&(
                  <div className={cx("p")}> <p>{formick.errors.phone}</p></div> 
                  )}
                    <input  name="phone"type="text" value={formick.values.phone} placeholder="Số điện thoại..."onChange={formick.handleChange}/>
                </div>
                <div className={cx("input")}>
                <FontAwesomeIcon icon={faStarOfLife} className={cx("icon")}/>
                {formick.errors.email&&formick.touched.email&&(
                  <div className={cx("p")}> <p>{formick.errors.email}</p></div> 
                  )}
                  <input name="email"type="text" value={formick.values.email} placeholder="Địa chỉ email..."onChange={formick.handleChange}/>
                </div>
              </div>
              <div className={cx("selectRight")}>
                <div className={cx("select")}>
                <FontAwesomeIcon icon={faStarOfLife} className={cx("icon")}/>
                {formick.errors.course&&formick.touched.course&&(
                  <div className={cx("p")}><p>{formick.errors.course}</p></div> 
                  )}
                  <select value={formick.values.course} name="course" id=""onChange={formick.handleChange}>
                  <option className={cx("opacity")} value="">Khóa học...</option>
                {courseData.map((product,index)=>{
                  return <option key={index} value={product.name}>{product.name}</option>
                }
                )}
                </select>
                </div>
                <div  className={cx("select")}>
                <FontAwesomeIcon icon={faStarOfLife}className={cx("icon")}/>
                {formick.errors.address&&formick.touched.address&&(
                  <div className={cx("p")}> <p>{formick.errors.address}</p></div> 
                  )}
                  <select value={formick.values.address} name="address" id=""onChange={formick.handleChange}>
                  <option className={cx("opacity")} value="">Địa chỉ học tập...</option>
                 {locationData.map((product)=>{
                  return <option key={product._id} value={`${product.city}-${product.district}-${product.ward}-${product.street}`}>{`${product.city}-${product.district}-${product.ward}`}</option>
                 })}
                </select>
                </div>
                <div  className={cx("select")}>
                <FontAwesomeIcon icon={faStarOfLife}className={cx("icon")} />
                {formick.errors.rank&&formick.touched.rank&&(
                  <div className={cx("p")}><p>{formick.errors.rank}</p></div> 
                  )}
                  <select value={formick.values.rank} name="rank" id=""onChange={formick.handleChange}>
                  <option className={cx("opacity")} value="">Cấp bậc...</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                  <option value="Diamond">Diamond</option>
                </select>
                </div>
                <div  className={cx("select")} >
                <FontAwesomeIcon icon={faStarOfLife} className={cx("icon")} />
                  <h4 className={cx("benefit")}>{benefit}</h4>
                </div>
              </div>
          </div>
          <div className={cx("buttonAddNew")}>
            <button type="submit"  className={cx("buttonSave")}>Lưu</button>
            <button className={cx("buttonCal")} onClick={handlePutNew}>Trở lại</button>
          </div>
        </form>
        
     
    )
}

export default FormPut