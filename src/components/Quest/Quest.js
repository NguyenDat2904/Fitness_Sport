import React, { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Quest.module.scss';
const cx = classNames.bind(style);
function Quest({ img, data }) {
    const [show, setShow] = useState(null);

    const handleShow = (index) => {
        if (show === index) {
            setShow(null);
        } else {
            setShow(index);
        }
    };

    const renderListQuest = data.map((quest, index) => {
        return (
            <Fragment key={index}>
                <div className={cx('quest')}>
                    <input
                        type="checkbox"
                        name="quest-box"
                        checked={show}
                        hidden
                        id={`checkbox-${index}`}
                        onChange={() => handleShow(index)}
                    />
                    <label htmlFor={`checkbox-${index}`}></label>
                    <div className={cx('quest-title')}>
                        <div className={cx('quest-title-h3')}>
                            <h3>{quest.title}</h3>
                            <div className={cx('quest-answer', show === index ? 'show' : '')}>{quest.desc}</div>
                        </div>
                        <div className={cx('quest-icon')}>
                            <span></span>
                            <span className={cx(show === index ? 'show' : '')}></span>
                        </div>
                    </div>
                </div>
                <hr />
            </Fragment>
        );
    });

    return (
        <div className={cx('quest-container')}>
            <div className={cx('left-container')}>
                <div className={cx('big-title')}>
                    <h1>CÁC CÂU HỎI THƯỜNG GẶP</h1>
                </div>
                <div className={cx('quest-list')}>{renderListQuest}</div>
            </div>
            <div className={cx('right-container')}>
                <div className={cx('quest-img')}>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Quest;
