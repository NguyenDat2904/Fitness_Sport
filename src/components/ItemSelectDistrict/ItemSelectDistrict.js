import { useRef, useContext } from 'react';
import style from './ItemSelectDistrict.module.scss';
import classNames from 'classnames/bind';
import { AppContext } from '~/hook/context/AppContext';

const cx = classNames.bind(style);

const ItemSelectDistrict = (props) => {
    const { district, index } = props;
    const values = useContext(AppContext);
    const { setDis } = values;

    const inputRef = useRef(null);

    const handleClick = () => {
        if (inputRef.current) {
            const defaultValue = inputRef.current.defaultValue;
            setDis(defaultValue);
        }
    };
    return (
        <span className={cx('span')} key={index}>
            <input
                // id="district_916"
                type="radio"
                hidden
                name="select_box"
                className="select_district"
                ref={inputRef}
                defaultValue={district}
            />
            <label htmlFor="district_916" onClick={handleClick}>
                {district}
            </label>
        </span>
    );
};

export default ItemSelectDistrict;
