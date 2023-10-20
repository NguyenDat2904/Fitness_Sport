import React from 'react';
import './Slide.module.scss';

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            <button className="custom-arrow next-arrow">Next</button>
        </div>
    );
}

export default CustomNextArrow;
