import React from 'react';
import style from './BlogDetails.module.scss';
import classNames from 'classnames/bind';
import GreyContain from '~/components/GreyContain/GreyContain';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const BlogDetails = () => {
    return (
        <div className={cx('body-contain')}>
            <div className={cx('banner-contain')}>
                <div className={cx('contain-left')}>
                    <div className={cx('breadcrumb-wrap')}>
                        <div className={cx('breadcrum')}>
                            <ul>
                                <li className={cx('breadcrum-item')}>
                                    <Link href="https://cali.vn/blog/">Blog</Link>
                                </li>
                                <li className={cx('breadcrum-item')}>
                                    <Link href="https://cali.vn/blog/news">Tin tức</Link>
                                </li>
                                <li className={cx('breadcrum-item')}>
                                    <Link>
                                        8.000 khán giả “cháy” cùng tlinh, HIEUTHUHAI, Andree Right Hand, Chillies tại
                                        đại nhạc hội California’s Fitness Festival
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('title-date')}>
                        <div className={cx('date')}>
                            <span>29/09/2023</span>
                            <div className={cx('net-work-contain')} id={cx('mobile')}>
                                <span>Share</span>
                                <div className={cx('net-work-icon')}>
                                    <Link href="https://www.facebook.com/sharer/sharer.php?u=https://cali.vn/blog/8000-khan-gia-chay-cung-tlinh-hieuthuhai-andree-right-hand-chillies-tai-dai-nhac-hoi-californias-fitness-festival">
                                        <img
                                            className="lazy"
                                            width="100%"
                                            height="100%"
                                            alt="button share"
                                            src="https://cali.vn/storage/app/media/old/icon/fb-1.svg"
                                        />
                                    </Link>
                                    <Link href="#">
                                        <img
                                            width="100%"
                                            height="100%"
                                            className="lazy"
                                            id="btn_share"
                                            alt="button share"
                                            src="https://cali.vn/storage/app/media/old/icon/share_button.svg"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('big-title')}>
                            <h1>
                                8.000 khán giả “cháy” cùng tlinh, HIEUTHUHAI, Andree Right Hand, Chillies tại đại nhạc
                                hội California’s Fitness Festival
                            </h1>
                        </div>
                    </div>
                    <div className={cx('net-work-contain')}>
                        <span>Share</span>
                        <div className={cx('net-work-icon')}>
                            <Link
                                target="_blank"
                                href="https://www.facebook.com/sharer/sharer.php?u=https://cali.vn/blog/8000-khan-gia-chay-cung-tlinh-hieuthuhai-andree-right-hand-chillies-tai-dai-nhac-hoi-californias-fitness-festival"
                            >
                                <img
                                    width="100%"
                                    height="100%"
                                    className="lazy"
                                    alt="button share"
                                    src="https://cali.vn/storage/app/media/old/icon/fb-1.svg"
                                    style={{}}
                                />
                            </Link>
                            <input
                                type={cx('text')}
                                style={{ opacity: 0, position: 'fixed', zIndex: -1 }}
                                defaultValue="https://cali.vn/blog/8000-khan-gia-chay-cung-tlinh-hieuthuhai-andree-right-hand-chillies-tai-dai-nhac-hoi-californias-fitness-festival"
                                id="myUrlCoppy"
                            />
                            <Link>
                                <img
                                    width="100%"
                                    height="100%"
                                    className="lazy"
                                    alt="button share"
                                    src="https://cali.vn/storage/app/media/old/icon/share_button.svg"
                                    style={{}}
                                />
                                <span className={cx('tool-tip')} id="copyTooltip"></span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('contain-right')}>
                    <div className={cx('image-feature')}>
                        <img
                            width="100%"
                            height="100%"
                            className="lazy"
                            alt="thumbnail"
                            src="https://cali.vn/storage/app/media/2023/Blog/CFF/Thumbnail_2.png"
                            style={{}}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('blog-contain')}>
                <div className={cx('content')}>
                    <div className={cx('toc')}>
                        <ol className={cx('toc-list')}>
                            <li className={cx('toc-list-item', 'is-active-li')}>
                                <a
                                    href="#"
                                    className={cx('toc-link', 'node-name--H1', 'is-active-link')}
                                    style={{ marginLeft: '10px' }}
                                >
                                    Tham gia ngay California’s Fitness Festival
                                </a>
                            </li>
                        </ol>
                    </div>

                    <p>
                        <strong>
                            <em>
                                Dàn sao hàng đầu V-biz bao gồm tlinh, HIEUTHUHAI, Andree Right Hand, Chillies Band,
                                2PillZ, DJ MINH TRI, DJ Mouzee, DJ Long Nhật và MC Quang Bảo sẽ “cháy” cùng gần 8.000
                                khán giả tại sự kiện California's Fitness Festival vào ngày 14.10 tại Ravo Park (Q2,
                                TP.HCM).
                            </em>
                        </strong>
                    </p>
                    <p>
                        California's Fitness Festival là sự kiện thể chất kết hợp âm nhạc được thương hiệu thể hình
                        California Fitness & Yoga tổ chức nhằm truyền tải thông điệp tích cực về sức khỏe. Trong đó, Đại
                        nhạc hội thuộc khuôn khổ sự kiện diễn ra vào tối cùng ngày đang là chủ đề được bàn luận sôi nổi
                        trên các trang mạng xã hội khi công bố sự góp mặt của dàn nghệ sĩ.tài năng và hot bậc nhất làng
                        giải trí Việt hiện nay.
                    </p>
                    <p>
                        <img alt='i' src="https://cali.vn/storage/app/media/Editors/6516a1c065c88Dan%20nghe%20si.png" />
                    </p>
                    <p>
                        <em>Mỗi nghệ sĩ mang đến một màu sắc âm nhạc riêng biệt</em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Là nghệ sĩ nữ duy nhất trình diễn tại sự kiện, tlinh sẽ mang đến màu sắc âm nhạc giao thoa giữa
                        sự ngọt ngào, thơ mộng với chút cá tính, mạnh mẽ như chính tính cách của cô nàng thông qua những
                        ca khúc mới nhất nằm trong album “ái” được ra mắt gần đây. Với khả năng hát live tuyệt vời và
                        phong cách trình diễn máu lửa, giọng ca <em>Nếu lúc đó</em> chắc chắn sẽ chinh phục được mọi
                        khán thính giả khó tính nhất.
                    </p>
                    <p>
                        <img
                            alt='i'
                            src="https://cali.vn/storage/app/media/Editors/6516f43773069Hinh%202.jpg"
                            style={{ height: 707, width: 864 }}
                        />
                    </p>
                    <p>
                        <em>Tlinh sẽ trình diễn live các ca khúc trong album mới nhất</em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        California's Fitness Festival đích thị là một bữa tiệc nhạc rap thịnh soạn khi chào đón đến hai
                        rapper đang gây sốt hiện nay là HIEUTHUHAI và Andree Right Hand. HIEUTHUHAI sẽ đốt cháy sân khấu
                        bằng những bản hit triệu view như <em>Không thể say, Ngủ một mình</em>,... cùng với màn vũ đạo
                        lắc hông quyến rũ “đặc sản” và những pha giao lưu khán giả duyên dáng. Đồng thời, tại
                        California's Fitness Festival, HIEUTHUHAI cũng sẽ “nhá hàng” một ca khúc giấu tên mà nam rapper
                        sắp sửa ra mắt trong tháng 10.
                    </p>
                    <p>
                        <img
                            alt='i'
                            src="https://cali.vn/storage/app/media/Editors/6516f499efa04Hinh%203.jpg"
                            style={{ height: 707, width: 864 }}
                        />
                    </p>
                    <p>
                        <em>
                            HIEUTHUHAI mang bộ sưu tập hit làm mưa làm gió các bảng xếp hạng âm nhạc đến California’s
                            Fitness Festival
                        </em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Trong khi đó, Andree Right Hand lại đốn tim các fangirl bằng phong cách trình diễn phóng khoáng
                        đậm chất “bad boy” cùng những bộ outfit chất nghệ. Huấn luyện viên Rap Việt mùa 3 đã sẵn sàng để
                        thổi bùng sự cuồng nhiệt của đêm hội với những màn trình diễn đỉnh cao bao gồm{' '}
                        <em>Crazy, Nhạc của anh, Em iu, Chơi như tụi Mỹ.</em>
                    </p>
                    <p>
                        <img alt='i' src="https://cali.vn/storage/app/media/Editors/6516f6b1813a6Hinh%204.JPG" />
                    </p>
                    <p>
                        <em>Nhiều khán giả mong chờ sự xuất hiện của rapper điển trai Andree Right Hand</em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Bên cạnh những giai điệu rap sôi động, khán giả còn được chìm đắm vào những thanh âm da diết,
                        chữa lành của ban nhạc Chillies. Những bản tình ca làm nên tên tuổi của nhóm như{' '}
                        <em>Mascara, Vùng ký ức, Giấc mơ khác, Nếu ngày mai không đến</em> sẽ được Chillies mang lên sân
                        khấu với bản phối đầy cảm xúc.
                    </p>
                    <p>
                        <img alt='i' src="https://cali.vn/storage/app/media/Editors/6516f725026c6Hinh%205.jpg" />
                    </p>
                    <p>
                        <em>Chillies sẽ đưa khán giả vào miền cảm xúc sâu lắng với những ca khúc làm nên tên tuổi</em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        Ngoài ra, ban tổ chức còn chiêu mộ được nhà sản xuất âm nhạc trẻ tài năng 2pillz - người đứng
                        sau sự thành công của hàng loạt ca khúc đình đám như Nếu lúc đó, We go hard,… cùng dàn DJ cực
                        phẩm như DJ MINH TRI, DJ Mouzee, DJ Long Nhật để thổi hồn vào những track nhạc EDM lôi cuốn. Bên
                        cạnh đó, sự dẫn dắt tài tình của MC Quang Bảo hứa hẹn là chất xúc tác khuấy động nhiệt huyết đêm
                        hội.
                    </p>
                    <p>
                        Đại nhạc hội California's Fitness Festival là một hoạt động thuộc chiến dịch Một Đời Sống Khỏe
                        được California Fitness khởi động vào tháng 7.2023. Sự kiện ra đời với mục đích thúc đẩy đời
                        sống thể chất và tinh thần tích cực, cổ vũ lối sống lành mạnh, cân bằng để sống khỏe toàn diện,
                        hướng đến gia tăng tuổi sống khỏe cho mọi người thêm ít nhất 6 năm.
                    </p>
                    <p>
                        Ban tổ chức cho biết chương trình được California Fitness đầu tư nhất từ trước đến nay với sân
                        khấu hoành tráng, kết hợp hệ thống âm thanh, ánh sáng đẳng cấp, dự kiến quy tụ lượng khán giả
                        hùng hậu ước tính lên đến 8.000 người. Thương hiệu mong muốn mang lại trải nghiệm đa giác quan
                        sống động, bùng nổ, tạo điều kiện cho các nghệ sĩ cùng khán giả thỏa sức vẫy vùng trong thế giới
                        âm nhạc.
                    </p>
                    <p>
                        Trước khi đêm nhạc khai mạc, người tham dự sẽ có cơ hội tận hưởng không khí lễ hội với&nbsp;các
                        lớp tập ngoài trời như lớp Yoga, lớp Zumba, lớp Les Mills, Đường chạy bong bóng
                        <strong> </strong>5km, Giải đấu võ thuật All-Star Fight và triển lãm Live Well Expo trưng bày
                        các nhãn hàng phong cách sống hàng đầu trong và ngoài nước.
                    </p>
                    <p>
                        <img
                            alt='i'
                            src="https://cali.vn/storage/app/media/Editors/6516f75897986Racekit%20giai%20chay.png"
                        />
                    </p>
                    <p>
                        <em>Người tham gia California’s Fitness Festival được trang bị bộ Race kit độc quyền</em>
                    </p>
                    <p>&nbsp;</p>
                    <div>
                        <table cellSpacing={0} style={{ borderCollapse: 'collapse', width: 624 }}>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            borderBottom: '1px solid #000000',
                                            borderLeft: '1px solid #000000',
                                            borderRight: '1px solid #000000',
                                            borderTop: '1px solid #000000',
                                            verticalAlign: 'top',
                                            padding: '10px',
                                        }}
                                    >
                                        <h1>Tham gia ngay California’s Fitness Festival</h1>
                                        <p>
                                            Sự kiện thể chất kết hợp âm nhạc lớn nhất 2023, có sự đồng hành thân thiết
                                            của Ủy ban Olympic Việt Nam, Liên đoàn Muay TP. HCM, Đài Truyền hình HTV,
                                            Vinamilk Super Nut, ASN, La Roche-Posay, Livwell, Reebok, Lipovitan, Anessa,
                                            AceCook Việt Nam, Sunplay - Skin Aqua, Mandala, Savyu, Globe Visa, Siêu
                                            Thanh, Life Fitness, Artemis of Switzerland, EXO Trails, Bernard Healthcare,
                                            Logitech G, Gymwolf - All The Fit, Evian.
                                        </p>
                                        &nbsp;
                                        <p>
                                            Combo <strong>Vuiii Khỏeee 699.000đ</strong> bao gồm:
                                        </p>
                                        <ul style={{ paddingLeft: '40px' }}>
                                            <li>
                                                Đường chạy bong bóng 5km & Racekit (Áo thun, BIB chạy, Huy chương, Máy
                                                bắn bong bóng/ Que phẩy bong bóng, Bộ sản phẩm La Roche-Posay, Xịt khử
                                                mùi Mandala, thẻ tập tại California miễn phí,…)
                                            </li>
                                            <li>Vé Đại Nhạc Hội và giải đấu võ thuật All-Star Fight</li>
                                            <li>Lightstick & vòng tay</li>
                                        </ul>
                                        &nbsp;
                                        <p>Tham gia các lớp tập ngoài trời buổi sáng:</p>
                                        <ul style={{ paddingLeft: '40px' }}>
                                            <li>
                                                Lớp Sunrise Yoga <strong>250.000đ</strong>
                                            </li>
                                            <li>
                                                Lớp Les Mills - BodyCombat <strong>250.000đ</strong>
                                            </li>
                                            <li>
                                                Lớp Zumba <strong>250.000đ</strong>
                                            </li>
                                        </ul>
                                        &nbsp;
                                        <p>
                                            Bạn đọc truy cập{' '}
                                            <a href="https://link.cali.vn/CFF-Sav" style={{ color: '#007bff' }}>
                                                tại đây
                                            </a>{' '}
                                            để mua vé.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <GreyContain />
        </div>
    );
};

export default BlogDetails;
