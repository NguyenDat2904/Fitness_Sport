import React, { useState, useContext,useEffect } from 'react';
import * as putdata from '~/services/getData/putData';
import { AppContext } from '~/hook/context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import * as getUser from '~/services/getData/getUserClient';
import classNames from 'classnames/bind';
import styles from './fontPut.module.scss';
const cx = classNames.bind(styles);
const FormPutLocation = () => {
    const {loadFrom, handleStyleFontPutLocation, setUserLocation, modalSaveLocation, idputLocation, handleSaveLocation } =
        useContext(AppContext);
    const week = [
        {
            id: 1,
            day: 'Thứ 2',
        },
        {
            id: 2,
            day: 'Thứ 3',
        },
        {
            id: 3,
            day: 'Thứ 4',
        },
        {
            id: 4,
            day: 'Thứ 5',
        },
        {
            id: 5,
            day: 'Thứ 6',
        },
        {
            id: 6,
            day: 'Thứ 7',
        },
        {
            id: 7,
            day: 'Chủ nhật',
        },
    ];
    const [notification, setNotification] = useState('');
    const [times_days] = useState([]);
    const [value,setvalue]=useState({
        name: '',
        city:'',
        district: '',
        ward:  '',
        street:  '',
        desc: '',
        start_time: '',
        end_time: '',
        start_day: '',
        end_day: '',
        phone:  '',
        img:  '',
    })
    const [errorValue,setErrorValue]=useState({
        name:'',
        price: '',
        start:  '',
        end:'',
        status:'',
        day: '',
        startTimeCourse: '',
        endTimeCourse: '',
        location: '',
        img: '',
    })
    useEffect(() => {
        if(loadFrom){
           setvalue({
            name:idputLocation.name,
            city:idputLocation.city,
            district:idputLocation.district,
            ward:idputLocation.ward,
            street:idputLocation.street,
            desc:idputLocation.desc,
            start_time: '',
            end_time: '',
            start_day: '',
            end_day: '',
            phone: idputLocation.phone,
            img:"",
              });
        }
      },[loadFrom]);

      const handleOnchang=(e)=>{
        const {name,value} =e.target;
        setvalue((values)=>({
            ...values,
            [name]:value,
        })) 
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newErrors = {};
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        let hasError = false;
        if(value.name===""){
            hasError=true;
            newErrors.name='Bạn vui lòng nhập tên cho chi nhánh'
        }
        if(value.city===""){
            hasError=true;
            newErrors.city='Bạn vui lòng nhập tên Thành Phố'
        }
        if(value.district===""){
            hasError=true;
            newErrors.district='Bạn vui lòng nhập tên Quận'
        }
        if(value.ward===""){
            hasError=true;
            newErrors.ward='Bạn vui lòng nhập tên Phường'
        }
        if(value.street===""){
            hasError=true;
            newErrors.street='Bạn vui lòng nhập tên Đường'
        }
        if(value.desc===""){
            hasError=true;
            newErrors.desc='Bạn vui lòng ghi nội dung mô tả'
        }
        if(value.start_time===""){
            hasError=true;
            newErrors.start_time='Bạn vui lòng chọn giờ mở cửa'
        }
        if(value.end_time===""){
            hasError=true;
            newErrors.end_time='Bạn vui lòng chọn giờ đóng cửa'
        }
        if(value.start_day===""){
            hasError=true;
            newErrors.start_day='Bạn vui lòng chọn thứ bắt đầu trong tuần'
        }
        if(value.end_day===""){
            hasError=true;
            newErrors.end_day='Bạn vui lòng chọn thứ kết thúc trong tuần'
        }
       
        if(!regexPhone.test(value.phone)||value.phone===""){
            hasError=true;
            newErrors.phone='Bạn vui lòng nhập đúng số điện thoại'
        }
        if(value.img===""){
            hasError=true;
            newErrors.img='Bạn vui lòng chọn ảnh'
        }
        setErrorValue(newErrors)
        if(!hasError){
            try {
                await handleSaveLocation();
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                await putdata.putDataLocation(
                    value.name,
                    value.city,
                    value.district,
                    value.ward,
                    value.street,
                    value.img,
                    value.desc,
                    value.phone,
                    times_days,
                    idputLocation._id,
                    accessToken,
                    refresh_token,
                );
                if (modalSaveLocation) {
                    const user = await getUser.getLocation();
                    setUserLocation(user.data.locations);
                    await handleStyleFontPutLocation();
                }
            } catch (error) {
                console.log("error put location")
            }
        }


    }

    const handleSubmitSchedule = () => {
        const result = {
            time: `${value.start_time} - ${value.end_time}`,
            day: `${value.start_day} - ${value.end_day}`,
        };
        if (
            value.start_time !== '' &&
            value.end_time !== '' &&
            value.start_day !== '' &&
            value.end_day !== ''
        ) {
            times_days.push(result);
            setNotification('Đã thêm');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        }
    };
    return (
        <form action="" onSubmit={handleSubmit} className={cx('formAddOrder')}>
            <h2>Sửa thông tin chi nhánh</h2>
            <div className={cx('formAddInput')}>
                <div className={cx('formAddInPutLeft')}>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.name}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            value={value.name}
                            name="name"
                            type="text"
                            placeholder="Tên chi nhánh mới..."
                            onChange={handleOnchang}
                        />
                    </div> 
                    <div className={cx('input')}>
                        
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.city}</p>
                            </div>
                      
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            value={value.city}
                            name="city"
                            type="text"
                            placeholder="Tại thành phố..."
                            onChange={handleOnchang}
                        />
                    </div>

                    <div className={cx('input')}>
                        
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.district}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />

                        <input
                            value={value.district}
                            name="district"
                            type="text"
                            placeholder="Tại Quận/Huyện..."
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('input')}>
                      
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.ward}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />

                        <input
                            value={value.ward}
                            name="ward"
                            type="text"
                            placeholder="Tại phường..."
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.street}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            value={value.street}
                            type='text'
                            name="street"
                            id=""
                            placeholder="Tại đường..."
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.phone}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            value={value.phone}
                            type='number'
                            name="phone"
                            id=""
                            placeholder="Số điện thoại của chi nhánh..."
                            onChange={handleOnchang}
                        />
                    </div>
                </div>
                <div className={cx('formAddInPutRight')}>
                    <div className={cx('inputSpan')}>
                      
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.start_time}</p>
                            </div>
                      
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian mở cửa:</span>
                        <input
                            value={value.start_time}
                            name="start_time"
                            type="time"
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('inputSpan')}>
                     
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{errorValue.end_time}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian kết thúc:</span>
                        <input
                            value={value.end_time}
                            name="end_time"
                            type="time"
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('input')}>
                     
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{errorValue.start_day}</p>
                            </div>
                     
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select value={value.start_day} name="start_day" id="" onChange={handleOnchang}>
                            <option className={cx('opacity')} value="">
                                Bắt đầu từ thứ...
                            </option>
                            {week.map((product) => {
                                return (
                                    <option key={product.id} value={product.day}>
                                        {product.day}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.end_day}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select value={value.end_day} name="end_day" id="" onChange={handleOnchang}>
                            <option className={cx('opacity')} value="">
                                Kết thúc từ thứ...
                            </option>
                            {week.map((product) => {
                                return (
                                    <option key={product.id} value={product.day}>
                                        {product.day}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={cx('buttonSchedule')}>
                        <p>{notification}</p>
                        <button type="button" onClick={handleSubmitSchedule}>
                            {' '}
                            Lưu thời gian hoạt động
                        </button>
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.img}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                          
                            type="file"
                            name="img"
                            id=""
                              value={value.img}
                            placeholder="Chọn ảnh"
                              onChange={handleOnchang}
                        />
                    </div>

                    <div className={cx('input')}>
                   
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{errorValue.desc}</p>
                            </div> 

                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <textarea
                            value={value.desc}
                            className={cx('textares')}
                            name="desc"
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Mô tả..."
                            onChange={handleOnchang}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" onClick={handleStyleFontPutLocation} className={cx('buttonCal')}>
                    Trở lại
                </button>
            </div>
        </form>
    );
};

export default FormPutLocation;
