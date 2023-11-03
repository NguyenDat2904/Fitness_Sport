import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as getUser from '~/services/getData/getUserClient';
import * as putdata from '~/services/getData/putData';
import { AppContext } from '~/hook/context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './fontPut.module.scss';
const cx = classNames.bind(styles);
const FontPutBenefit = () => {
    const {
        handleSaveLocation,
        modalSaveLocation,
        setdataBenefit,
        dataBenefit,
        handleStyleFontPutBenefit,
        idPutBenefit,
        loadFromBenefit
    } = useContext(AppContext);
    const [rankBenefit, setRankBenefit] = useState([]);
    const [value,setvalue]=useState({
        name:"",
        rank:"",
        
    })
    useEffect(() => {
        if(loadFromBenefit){
           setvalue({
                  name: idPutBenefit.name,
                  rank: idPutBenefit.rank,
                 
              });
        }
      },[loadFromBenefit]);
      const [errorValue,setErrorValue]=useState({
        name:'',
        rank:'',
    })
    const handleOnchang=async(e)=>{
        const {name,value} =e.target;
        setvalue((values)=>({
            ...values,
            [name]:value,
        })) 
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newErrors = {};
        let hasError = false;
        if(value.name===""){
             newErrors.name ='Bạn vui lòng nhập tên cho chi nhánh' ;
             hasError = true;
        }
        if(value.rank===""){
            newErrors.name ='Bạn vui lòng chọn cấp bậc' ;
            hasError = true;
        }
        if(!hasError){
            try {
                await handleSaveLocation();
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                await putdata.putDataBenefits(idPutBenefit._id, value.name, value.rank, accessToken, refresh_token);
                if (modalSaveLocation) {
                    const user = await getUser.getBenefit();
                    setdataBenefit(user.data.benefits);
                    await handleStyleFontPutBenefit();
                }
            } catch (error) {
                console.log('not found benefit !!!');
            }
        }
    }
    const handleRankBenefit = () => {
        const rankBenefit = dataBenefit.map((product) => {
            return product.rank;
        });
        const result = [...new Set(rankBenefit)];

        setRankBenefit(result);
    };
    useEffect(() => {
        handleRankBenefit();
    }, [dataBenefit]);
    return (
        <form action="" onSubmit={handleSubmit} className={cx('formAddOrder')}>
            <h2>Chỉnh sửa lợi ích</h2>
            <div className={cx('formInputSelect')}>
                <div className={cx('input')}>
                   
                        <div className={cx('error')}>
                            <p className={cx('pError')}>{errorValue.name}</p>
                        </div>
                  
                    <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                    <input name="name" type="text" value={value.name} placeholder="Lợi ích" onChange={handleOnchang} />
                </div>
                <div className={cx('input')}>
                    
                        <div className={cx('error')}>
                            <p className={cx('pError')}>{errorValue.rank}</p>
                        </div>
                   
                    <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                    <select name="rank" id="" value={value.rank} onChange={handleOnchang}>
                        <option className={cx('opacity')} value="">
                            Cấp bậc...
                        </option>
                        {rankBenefit.map((product, index) => {
                            return (
                                <option key={index} value={product}>
                                    {product}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" onClick={handleStyleFontPutBenefit} className={cx('buttonCal')}>
                    Trở lại
                </button>
            </div>
        </form>
    );
};
export default FontPutBenefit;
