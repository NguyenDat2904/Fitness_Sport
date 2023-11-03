import React, { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './modalSave.module.scss';
import { AppContext } from '~/hook/context/AppContext';
const cx = classNames.bind(styles);
const ModalSave = () => {
    const { handleModelSave } = useContext(AppContext);
    return (
        <React.Fragment>
            <div className={cx('modal-overlay')} />
            <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={cx('modal')}>
                    <div className={cx('custom-icon-add')}>
                        <span className={cx('success-line-tip')}></span>
                        <span className={cx('success-line-long')}></span>
                    </div>
                    <div className={cx('modal-header')}>
                        <div className={cx('modal-title')}>Bạn đã sửa thông tin khách hàng thành công</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={handleModelSave}
                        >
                            <span aria-hidden="true">Đóng</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ModalSave;
