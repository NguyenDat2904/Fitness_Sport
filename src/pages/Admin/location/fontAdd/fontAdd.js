import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '~/hook/context/AppContext';
import * as getUser from '~/services/getData/getUserClient';
import * as postUser from '~/services/getData/postData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './fontAdd.module.scss';

const cx = classNames.bind(styles);

const FormAddLocation = () => {
    const { handleStyleFontAddLocation, setUserLocation, modalSaveLocation, handleSaveLocation } =
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
    const formick = useFormik({
        initialValues: {
            name: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            desc: '',
            start_time: '',
            end_time: '',
            start_day: '',
            end_day: '',
            phone: '',
            img: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Bạn vui lòng nhập tên cho chi nhánh'),
            city: Yup.string().required('Bạn vui lòng nhập tên Thành Phố'),
            district: Yup.string().required('Bạn vui lòng nhập tên Quận'),
            ward: Yup.string().required('Bạn vui lòng nhập tên Phường'),
            street: Yup.string().required('Bạn vui lòng nhập tên Đường'),
            desc: Yup.string().required('Bạn vui lòng ghi nội dung mô tả'),
            start_time: Yup.string().required('Bạn vui lòng chọn giờ mở cửa'),
            end_time: Yup.string().required('Bạn vui lòng chọn giờ đóng cửa'),
            start_day: Yup.string().required('Bạn vui lòng chọn thứ bắt đầu trong tuần'),
            end_day: Yup.string().required('Bạn vui lòng chọn thứ kết thúc trong tuần'),
            phone: Yup.string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Bạn vui lòng nhập đúng số điện thoại')
                .required('Bạn vui lòng nhập số điện thoại'),
            img: Yup.mixed().required('Bạn vui lòng chọn ảnh'),
        }),
        onSubmit: async (value) => {
            const result = {
                name: value.name,
                city: value.city,
                district: value.district,
                ward: value.ward,
                street: value.street,
                phone: value.phone,
                img: value.img,
                desc: value.desc,
                times_days: times_days,
            };
            console.log(result);
            try {
                await handleSaveLocation();
                const accessToken = localStorage.getItem('accessToken');
                const refresh_token = localStorage.getItem('refresh_token');
                await postUser.postDataLocation(
                    value.name,
                    value.city,
                    value.district,
                    value.ward,
                    value.street,
                    value.phone,
                    value.img,
                    value.desc,
                    times_days,
                    accessToken,
                    refresh_token,
                );
                if (modalSaveLocation) {
                    const user = await getUser.getLocation();
                    setUserLocation(user.data.locations);
                    await handleStyleFontAddLocation();
                }
            } catch (error) {
                console.log('not found locations !!!');
            }
        },
    });
    const handleSubmitSchedule = () => {
        const result = {
            time: `${formick.values.start_time} - ${formick.values.end_time}`,
            day: `${formick.values.start_day} - ${formick.values.end_day}`,
        };
        if (
            formick.values.start_time !== '' &&
            formick.values.end_time !== '' &&
            formick.values.start_day !== '' &&
            formick.values.end_day !== ''
        ) {
            times_days.push(result);
            setNotification('Đã thêm');
            setTimeout(() => {
                setNotification('');
            }, 2000);
        }
    };

    return (
        <form action="" onSubmit={formick.handleSubmit} className={cx('formAddOrder')}>
            <h2>Thêm mới chi nhánh</h2>
            <div className={cx('formAddInput')}>
                <div className={cx('formAddInPutLeft')}>
                    <div className={cx('input')}>
                        {formick.errors.name && formick.touched.name && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.name}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            name="name"
                            type="text"
                            placeholder="Tên chi nhánh mới..."
                            onChange={formick.handleChange}
                        />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.city && formick.touched.city && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.city}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input name="city" type="text" placeholder="Tại thành phố..." onChange={formick.handleChange} />
                    </div>

                    <div className={cx('input')}>
                        {formick.errors.district && formick.touched.district && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.district}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />

                        <input
                            name="district"
                            type="text"
                            placeholder="Tại Quận/Huyện..."
                            onChange={formick.handleChange}
                        />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.ward && formick.touched.ward && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.ward}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />

                        <input name="ward" type="text" placeholder="Tại phường..." onChange={formick.handleChange} />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.street && formick.touched.street && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.street}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input name="street" id="" placeholder="Tại đường..." onChange={formick.handleChange} />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.phone && formick.touched.phone && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.phone}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input
                            name="phone"
                            id=""
                            placeholder="Số điện thoại của chi nhánh..."
                            onChange={formick.handleChange}
                        />
                    </div>
                </div>
                <div className={cx('formAddInPutRight')}>
                    <div className={cx('inputSpan')}>
                        {formick.errors.start_time && formick.touched.start_time && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.start_time}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian mở cửa:</span>
                        <input name="start_time" type="time" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('inputSpan')}>
                        {formick.errors.end_time && formick.touched.end_day && (
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{formick.errors.end_time}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <span>Thời gian kết thúc:</span>
                        <input name="end_time" type="time" onChange={formick.handleChange} />
                    </div>
                    <div className={cx('input')}>
                        {formick.errors.start_day && formick.touched.start_day && (
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{formick.errors.start_day}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select name="start_day" id="" onChange={formick.handleChange}>
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
                        {formick.errors.end_day && formick.touched.end_day && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.end_day}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <select name="end_day" id="" onChange={formick.handleChange}>
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
                        {formick.errors.img && formick.touched.img && (
                            <div className={cx('error')}>
                                <p className={cx('pError')}>{formick.errors.img}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <input onChange={formick.handleChange} type="file" name="img" id="" placeholder="Chọn ảnh" />
                    </div>

                    <div className={cx('input')}>
                        {formick.errors.desc && formick.touched.desc && (
                            <div className={cx('error')}>
                                {' '}
                                <p className={cx('pError')}>{formick.errors.desc}</p>
                            </div>
                        )}
                        <FontAwesomeIcon icon={faStarOfLife} className={cx('icon')} />
                        <textarea
                            className={cx('textares')}
                            name="desc"
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Mô tả..."
                            onChange={formick.handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('buttonAddNew')}>
                <button type="submit" className={cx('buttonSave')}>
                    Lưu
                </button>
                <button type="button" onClick={handleStyleFontAddLocation} className={cx('buttonCal')}>
                    Trở lại
                </button>
            </div>
        </form>
    );
};

export default FormAddLocation;
