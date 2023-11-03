import React, { useState, useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as getdata from '~/services/getData/getUserClient';
import { AppContext } from '~/hook/context/AppContext';
import * as postUser from '~/services/getData/postData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './fontAdd.module.scss';

const cx = classNames.bind(styles);

const FormAddCourse = ({ location, handleStyleFontAdd }) => {
    const { handleModelSaveCourse, setDataCourse, modalSaveCourse } = useContext(AppContext);
    const [notification, setNotification] = useState('');
    const [schedule] = useState([]);
    const [idLocation, setIdLocation] = useState('');
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

    // const {handleModelSave}=useContext(AppContext)
    const formick = useFormik({
        initialValues: {
            name: '',
            price: '',
            start: '',
            end: '',
            status: '',
            day: '',
            startTimeCourse: '',
            endTimeCourse: '',
            location: '',
            img: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Bạn vui lòng nhập tên khóa học'),
            price: Yup.number().required('Bạn vui lòng nhập giá tiền'),
            start: Yup.date().required('Bạn vui lòng chọn thời gian bắt đầu'),
            end: Yup.date().required('Bạn vui lòng chọn thời gian kết thúc'),
            status: Yup.string().required('Bạn vui lòng chọn trạng thái lớp'),
            img: Yup.mixed().required('Bạn vui lòng chọn ảnh'),
            day: Yup.string().required('Bạn vui lòng chọn thứ'),
            startTimeCourse: Yup.string().required('Bạn vui lòng chọn thời gian bắt đầu học'),
            endTimeCourse: Yup.string().required('Bạn vui lòng chọn thời gian kết thúc học'),
            location: Yup.string().required('Bạn vui lòng chọn địa chỉ'),
        }),
        onSubmit: async (value) => {
            const result = {
                name: value.name,
                price: value.price,
                start: value.start,
                end: value.end,
                status: value.status,
                locationID: idLocation,
                shedule: schedule,
                img: value.img,
            };
            console.log(result);
            try {
                await handleModelSaveCourse();
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                await postUser.postDataCourse(
                    idLocation,
                    value.name,
                    value.price,
                    value.start,
                    value.end,
                    value.status,
                    schedule,
                    value.img,
                    accessToken,
                    refresh_token,
                );
                if (modalSaveCourse) {
                    const result = await getdata.getCourse();
                    setDataCourse(result.data.courses);
                    await handleStyleFontAdd();
                }
            } catch (error) {
                console.log('error data post course');
            }
        },
    });
    const handleSubmitSchedule = () => {
        const result = {
            start: formick.values.startTimeCourse,
            day: formick.values.day,
            end: formick.values.endTimeCourse,
        };
        if (formick.values.startTimeCourse !== '' && formick.values.day !== '' && formick.values.endTimeCourse !== '') {
            schedule.push(result);
            setNotification('Đã thêm vào lịch tập');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        }
    };
    const handlIdLocation = () => {
        const locationData = location.filter((product) => {
            return `${product.city}-${product.district}-${product.ward}-${product.street}` === formick.values.location;
        });

        locationData.forEach((product) => {
            setIdLocation(product._id);
        });
    };
    useEffect(() => {
        handlIdLocation();
    }, [formick.values.location]);
    const date= new Date(formick.values.start);
    console.log(date)
    return (
        <form action="" onSubmit={formick.handleSubmit} className={cx('formAddOrder')}>
            <h2>Thêm mới khóa học</h2>
            <div className={cx('formAddInput')}>
                <div className={cx('formAddInPutLeft')}>
                    <div className={cx('input')}>
                        {formick.errors.name && formick.touched.name && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.name}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input name="name" type="text" placeholder="Tên khóa học..." onChange={formick.handleChange} />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.price && formick.touched.price && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.price}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            name="price"
                            type="text"
                            placeholder="Giá của khóa học..."
                            onChange={formick.handleChange}
                        />
                    </div>

                    <div className={cx('inputSpan')}>
                        {formick.errors.start && formick.touched.start && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.start}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian bắt đầu:</span>
                        <input name="start" type="date" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('inputSpan')}>
                        {formick.errors.end && formick.touched.end && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.end}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian kết thúc:</span>
                        <input name="end" type="date" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.status && formick.touched.status && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.status}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select name="status" id="" onChange={formick.handleChange}>
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
                        {formick.errors.day && formick.touched.day && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.day}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select name="day" id="" onChange={formick.handleChange}>
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
                        {formick.errors.startTimeCourse && formick.touched.startTimeCourse && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.startTimeCourse}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Bắt đầu giờ học:</span>
                        <input name="startTimeCourse" type="time" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('inputSpan')}>
                        {formick.errors.endTimeCourse && formick.touched.endTimeCourse && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.endTimeCourse}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Kết thúc giời học:</span>
                        <input name="endTimeCourse" type="time" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('buttonSchedule')}>
                        <p>{notification}</p>
                        <button type="button" onClick={handleSubmitSchedule}>
                            {' '}
                            Lưu lịch tập
                        </button>
                    </div>

                    <div className={cx('input')}>
                        {formick.errors.location && formick.touched.location && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.location}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select name="location" id="" onChange={formick.handleChange}>
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
                        {formick.errors.img && formick.touched.img && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.img}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input name="img" type="file" onChange={formick.handleChange} />
                    </div>
                </div>
            </div>
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" className={cx('buttonCal')} onClick={handleStyleFontAdd}>
                    Trở lại
                </button>
            </div>
        </form>
    );
};

export default FormAddCourse;
