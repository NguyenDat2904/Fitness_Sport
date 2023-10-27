import classNames from 'classnames/bind';
import style from './Member.module.scss';
const cx = classNames.bind(style);
function Member() {
    return (
        <div className={cx('member-cali-container')}>
            <div className={cx('container-left')}>
                <div className={cx('big-title')}>
                    <h2>LỢI ÍCH CỦA THÀNH VIÊN CALIFORNIA FITNESS & YOGA </h2>
                </div>
                <ul className={cx('main-list')}>
                    <li className="list">Vị trí CLB thuận tiện khắp cả nước</li>
                    <li className="list">Chương trình tập luyện không giới hạn</li>
                    <li className="list">HLV tiêu chuẩn Quốc Tế</li>
                    <li className="list">Đa dạng gói hội viên phù hợp với nhu cầu</li>
                    <li className="list">Ưu đãi sức khoẻ từ ứng dụng đổi điểm lấy quà Livwell</li>
                    <li className="list">Bảo hiểm tai nạn cá nhân lên đến 01 tỷ đồng dành cho hội viên mới</li>
                    <li className="list">Đa dạng ưu đãi từ đối tác</li>
                </ul>
            </div>
            <div className={cx('container-right')}>
                <img
                    className="img-cali-member"
                    src="https://cali.vn/storage/app/media/2021/Register/register_benefit.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Member;
