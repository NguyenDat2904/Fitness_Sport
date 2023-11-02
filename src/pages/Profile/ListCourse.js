import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './ListCourse.module.scss';
import moment from 'moment';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '~/hook/context/AppContext';

const cx = classNames.bind(style);
function ListCourse() {
    const { loadingProfile, userInfoProfile } = useContext(AppContext);

    const courseActive = userInfoProfile.courseID?.filter((course) => course.status === 'Hoạt động');
    const renderCourse =
        courseActive === undefined || courseActive.length === 0
            ? null
            : courseActive.map((course, index) => {
                  const formattedStart = moment(course.start).format('DD.MM.YYYY');
                  const formattedEnd = moment(course.end).format('DD.MM.YYYY');

                  const renderTime = course.schedule?.map((schedule, index) => {
                      return (
                          <div key={index}>
                              <span>{schedule.time}</span> - <span>{schedule.day}</span>
                          </div>
                      );
                  });

                  return (
                      <ul className={cx('list-item-course')} key={index}>
                          <li>{index + 1}</li>
                          <li>{course.name}</li>
                          <li>{course.status}</li>
                          <li>{renderTime}</li>
                          <li>{formattedStart}</li>
                          <li>{formattedEnd}</li>
                      </ul>
                  );
              });

    return (
        <div className={cx('course')}>
            <div className={cx('list-header')}>
                <ul className={cx('list-menu')}>
                    <li>STT</li>
                    <li>Tên khóa học</li>
                    <li>Trạng thái</li>
                    <li>Thời gian học</li>
                    <li>Ngày bắt đầu</li>
                    <li>Ngày kết thúc </li>
                </ul>
            </div>
            <div className={cx('list-course')}>
                {!loadingProfile ? (
                    <>
                        {renderCourse ? (
                            renderCourse
                        ) : (
                            <div className={cx('course-link')}>
                                Bạn chưa đăng ký khóa học nào. <Link to="/course">Đăng ký ngay</Link>
                            </div>
                        )}
                    </>
                ) : (
                    <div className={cx('loading-course')}>
                        <FontAwesomeIcon icon={faCircleNotch} spin className={cx('loading-icon')} />
                        <div className={cx('loading-text')}>Đang tải dữ liệu...</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListCourse;
