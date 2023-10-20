import React from 'react';
import './Slide.module.scss';

export default function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <button className="custom-arrow prev-arrow">Prev</button>
        </div>
    );
}
