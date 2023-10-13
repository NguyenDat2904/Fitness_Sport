import style from './ItemCart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const ItemCart = (props) => {
    const { item, index } = props;

    const { urlImg } = item;
    return (
        <div key={index} style={{position:'relative'}}>
            <a href="#">
                <img
                    width="100%"
                    height="100%"
                    className={cx('lazy', 'banner')}
                    data-src={urlImg}
                    alt="banner-homepage"
                    src={urlImg}
                />
            </a>
            <div className={cx('submit-contain-header')}>
                <div className={cx('submit-header-content')}>
                    <h4>
                        <br />
                    </h4>
                    <p>
                        <br />
                    </p>
                </div>
                <div className={cx('submit-header-content-mobile')}>
                    <p>
                        <br />
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        <br />
                    </p>
                </div>
                <a href="#">
                    <button className={cx('btn-submit-banner')}>MUA VÉ NGAY!</button>
                </a>
            </div>
        </div>
    );
};

export default ItemCart;
