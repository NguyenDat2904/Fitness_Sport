import React from 'react';
import style from './WhiteContain.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

const WhiteContain = () => {
    return (
        <div className={cx("white-contain")}>
            <div className={cx("quest-contain")}>
                <h3 dir="ltr">
                    <span style={{ fontSize: 30 }}>
                        <strong>CÁC CÂU HỎI THƯỜNG GẶP</strong>
                    </span>
                </h3>
                <p>
                    <br />
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        <strong>
                            Hội viên có thể tập luyện ở các phòng tập khác nơi mình đăng ký lúc đầu hay không?
                        </strong>
                    </span>
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        Cơ sở tập luyện sẽ tùy theo hạng thẻ mà hội viên đăng ký lúc đầu. California Fitness &amp; Yoga
                        luôn cố gắng tạo điều kiện để mang lại sự tiện lợi và dịch vụ tốt nhất cho hội viên. Vì vậy, hội
                        viên từ hạng thẻ Mars trở lên đều có thể tham gia hầu hết các phòng tập trong hệ thống mà không
                        có bất kỳ trở ngại nào.
                    </span>
                </p>
                <p>
                    <span style={{ fontSize: 18 }}>
                        <br />
                    </span>
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        <strong>Trang thiết bị ở các cơ sở có giống nhau hay không?</strong>
                    </span>
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        Về cơ bản, hệ thống phòng tập California Fitness and Yoga đều được trang bị đầy đủ các thiết bị,
                        dụng cụ với những khu vực tập luyện riêng biệt. Tuy nhiên, ở mỗi trung tâm sẽ có những thiết kế
                        riêng đáp ứng những nhu cầu khác nhau của khách hàng nhằm tạo ra những trải nghiệm mới lạ và
                        không trùng lặp.
                    </span>
                </p>
                <p>
                    <span style={{ fontSize: 18 }}>
                        <br />
                    </span>
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        <strong>Các dịch vụ tiện ích mở rộng tại phòng tập bao gồm những gì?</strong>
                    </span>
                </p>
                <p dir="ltr">
                    <span style={{ fontSize: 18 }}>
                        Bên cạnh những lớp học đa dạng,{' '}
                        <span style={{ fontSize: 18 }}>California Fitness and Yoga</span> còn cung cấp cho khách hàng
                        những dịch vụ bổ trợ cao cấp giúp nâng cao hiệu quả tập luyện như: hồ bơi, phòng xông hơi
                        ướt/khô, phòng tắm, bể ngâm jacuzzi, quầy bar dinh dưỡng Califresh,...
                    </span>
                </p>
            </div>
        </div>
    );
};

export default WhiteContain;
