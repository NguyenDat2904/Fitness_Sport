import React, { useState, useEffect, useContext } from 'react';

import { AppContext } from '~/hook/context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import * as putdata from '~/services/getData/putData';
import * as getdata from '~/services/getData/getUserClient';
import classNames from 'classnames/bind';
import styles from './fontPut.module.scss';
const cx = classNames.bind(styles);
const FormPutCourse = ({ location,loadFrom, handleStyleFontPut, idPutCourse }) => {
    const { handleModelSaveCourse, setDataCourse, modalSaveCourse } = useContext(AppContext);
    const [notification, setNotification] = useState('');
    const [schedule,] = useState([]);
    const [idLocation, setIdLocation] = useState('');
    const [value,setvalue]=useState({
        name:"",
        price:"",
        start:"",
        end:"" ,
        status:"",
        day: '',
        startTimeCourse: '',
        endTimeCourse: '',
        location: '',
        img: '',
    })
    useEffect(() => {
      if(loadFrom){
         setvalue({
                name: idPutCourse.name,
                price: idPutCourse.price,
                start:"",
                end:"" ,
                status:idPutCourse.status,
                day: '',
                startTimeCourse: '',
                endTimeCourse: '',
                location:"",
                img: '',
            });
      }
    },[loadFrom]);
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
        let hasError = false;
        if(value.name===""){
            hasError=true;
            newErrors.name='Bạn vui lòng nhập tên khóa học'
        }
        if(value.price===""){
            hasError=true;
            newErrors.price='Bạn vui lòng nhập giá tiền'
        }
        if(value.start===""){
            hasError=true;
            newErrors.start='Bạn vui lòng chọn thời gian bắt đầu'
        }
        if(value.end===""){
            hasError=true;
            newErrors.end='Bạn vui lòng chọn thời gian kết thúc'
        }
        if(value.status===""){
            hasError=true;
            newErrors.status='Bạn vui lòng chọn trạng thái lớp'
        }
        if(value.location===""){
            hasError=true;
            newErrors.location='Bạn vui lòng chọn địa chỉ'
        }
        if(value.day===""){
            hasError=true;
            newErrors.day='Bạn vui lòng chọn thứ'
        }
        if(value.img===""){
            hasError=true;
            newErrors.img='Bạn vui lòng chọn ảnh'
        }
        if(value.startTimeCourse===""){
            hasError=true;
            newErrors.startTimeCourse='Bạn vui lòng chọn thời gian bắt đầu học'
        }
        if(value.endTimeCourse===""){
            hasError=true;
            newErrors.endTimeCourse='Bạn vui lòng chọn thời gian kết thúc học'
        }
        setErrorValue(newErrors)
        if(!hasError){
            try {
                await handleModelSaveCourse();
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                await putdata.putDataCourses(
                    value.name,
                    value.price,
                    value.start,
                    value.end,
                    value.status,
                    schedule,
                    value.img,
                    idPutCourse._id,
                    idLocation,
                    accessToken,
                    refresh_token,
                );
                if (modalSaveCourse) {
                    const result = await getdata.getCourse();
                    setDataCourse(result.data.courses);
                    await handleStyleFontPut();
                }
            } catch (error) {
                console.log('error data put course');
            }
        }
    }
    //fake Api
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
    const handleSubmitSchedule = () => {
        const result = {
            start: value.startTimeCourse,
            day: value.day,
            end: value.endTimeCourse,
        };
        if (value.startTimeCourse !== '' && value.day !== '' && value.endTimeCourse !== '') {
            schedule.push(result);
            setNotification('Đã thêm vào lịch tập');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        } else {
            setNotification('Bạn cần chọn đủ thông tin');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        }
    };
    const handlIdLocation = () => {
        const locationData = location.filter((product) => {
            return `${product.city}-${product.district}-${product.ward}-${product.street}` === value.location;
        });

        locationData.forEach((product) => {
            setIdLocation(product._id);
        });
    };
    useEffect(() => {
        handlIdLocation();
    }, [value.location]);
    return (
        <form action="" onSubmit={handleSubmit} className={cx('formAddOrder')}>
            <h2>Sửa thông tin khóa học</h2>
            <div className={cx('formAddInput')}>
                <div className={cx('formAddInPutLeft')}>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.name}</p>
                            </div>
                  
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            name="name"
                            type="text"
                            value={value.name}
                            placeholder="Tên khóa học..."
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.price}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            value={value.price}
                            name="price"
                            type="number"
                            placeholder="Giá của khóa học..."
                            onChange={handleOnchang}
                        />
                    </div>

                    <div className={cx('inputSpan')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.start}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian bắt đầu:</span>
                        <input value={value.start} name="start" type="date" onChange={handleOnchang} />
                    </div>
                    <div className={cx('inputSpan')}>
                        
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.end}</p>
                            </div>
                       
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian kết thúc:</span>
                        <input value={value.end} name="end" type="date" onChange={handleOnchang} />
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.status}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select value={value.status} name="status" id="" onChange={handleOnchang}>
                            <option value="" className={cx('opacity')}>
                                Trạng thái hoạt động
                            </option>
                            <option value="Hoạt động">Hoạt động</option>
                            <option value="Chưa hoạt động">Chưa hoạt động</option>
                        </select>
                    </div>
                </div>
                <div className={cx('formAddInPutRight')}>
                    <div className={cx('input')}>
                        
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.day}</p>
                            </div>
                      
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select value={value.day} name="day" id="" onChange={handleOnchang}>
                            <option value="" className={cx('opacity')}>
                                Học vào thứ...
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

                    <div className={cx('inputSpan')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.startTimeCourse}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Bắt đầu giờ học:</span>
                        <input
                            value={value.startTimeCourse}
                            name="startTimeCourse"
                            type="time"
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('inputSpan')}>
                        
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.endTimeCourse}</p>
                            </div>
                     
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Kết thúc giời học:</span>
                        <input
                            value={value.endTimeCourse}
                            name="endTimeCourse"
                            type="time"
                            onChange={handleOnchang}
                        />
                    </div>
                    <div className={cx('buttonSchedule')}>
                        <p>{notification}</p>
                        <button type="button" onClick={handleSubmitSchedule}>
                            {' '}
                            Lưu lịch tập
                        </button>
                    </div>

                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.location}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select value={value.location} name="location" id="" onChange={handleOnchang}>
                            <option className={cx('opacity')} value="">
                                Địa chỉ...
                            </option>
                            {location?.map((product) => {
                                return (
                                    <option
                                        key={product._id}
                                        value={`${product.city}-${product.district}-${product.ward}-${product.street}`}
                                    >{`${product.city}-${product.district}-${product.ward}`}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={cx('input')}>
                       
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{errorValue.img}</p>
                            </div>
                        
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input value={value.img} name="img" type="file" onChange={handleOnchang} />
                    </div>
                </div>
            </div>
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" className={cx('buttonCal')} onClick={handleStyleFontPut}>
                    Trở lại
                </button>
            </div>
        </form>
    );
};

export default FormPutCourse;
