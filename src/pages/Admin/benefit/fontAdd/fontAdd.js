import React, { useContext, useState ,useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as getUser from "~/services/getData/getUserClient";

import { AppContext } from "~/hook/context/AppContext";
import * as postUser from '~/services/getData/postData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './fontAdd.module.scss';

const cx = classNames.bind(styles);

const FormAddBenefit = () => {
  const {dataBenefit, handleStyleFontAddBenefit,handleSaveLocation,setdataBenefit,modalSaveLocation}=useContext(AppContext)
  const [rankBenefit,setRankBenefit]=useState([])
    const formick = useFormik({
        initialValues: {
            name: '',
            rank:"",
            
            
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Bạn vui lòng nhập tên cho chi nhánh'),
           rank:Yup.string().required("Bạn vui lòng chọn cấp bậc")
          
        }),
        onSubmit: async(value) => {
          const result={
            name:value.name,
            rank:value.rank
          }
          console.log(result)
       try {
        await handleSaveLocation()
        const accessToken = localStorage.getItem('accessToken');
        const refresh_token = localStorage.getItem('refresh_token');
        await postUser.postDataBenefit(value.name,value.rank,accessToken,refresh_token
          )
          if(modalSaveLocation){
            const user= await getUser.getBenefit()
            setdataBenefit(user.data.benefits)
            await handleStyleFontAddBenefit()
          }
       } catch (error) {
        console.log("not found benefit !!!")
        }
        },
    });
    const handleRankBenefit=()=>{
        const rankBenefit= dataBenefit.map((product)=>{
            return product.rank
        })
        const result=[... new Set(rankBenefit)]
        
        setRankBenefit(result)
    }
    useEffect(()=>{
        handleRankBenefit()
    },[dataBenefit])
    return (
        <form action="" onSubmit={formick.handleSubmit} className={cx('formAddOrder')}>
            <h2>Thêm mới lợi ích</h2>
            <div className={cx("formInputSelect")}>
  <div className={cx("input")}>
                {formick.errors.name&& formick.touched.name&&(
                    <div  className={cx("error")}>
                        <p  className={cx("pError")}>{formick.errors.name}</p>
                    </div>
                )}
                <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                <input name="name" type="text"  placeholder='Lợi ích' onChange={formick.handleChange}/>
            </div>
            <div className={cx("input")}>
                {formick.errors.rank&& formick.touched.rank&&(
                    <div className={cx("error")}>
                        <p className={cx("pError")}>{formick.errors.rank}</p>
                    </div>
                )}
                 <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                <select name="rank" id="" onChange={formick.handleChange}>
                    <option className={cx("opacity")} value="">Cấp bậc...</option>
                    {
                        rankBenefit.map((product,index)=>{
                            return <option key={index} value={product}>{product}</option>
                        })
                    }
                </select>
            </div>
            </div>
          
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" onClick={handleStyleFontAddBenefit} className={cx('buttonCal')} >
                    Trở lại
                </button>
            </div>
        </form>
    );
};

export default FormAddBenefit;
