import { useContext } from 'react';
import classNames from 'classnames/bind';
import style from './Error.module.scss';
import { AppContext } from '~/hook/context/AppContext';

const cx = classNames.bind(style);

const Error = () => {
    const values = useContext(AppContext);
    const { statusCode } = values;

    return (
        <div style={{ width: 'auto', height: '100vh' }} className={cx('error')}>
            <h1>{statusCode}</h1>
            <h2>Something is wrong !</h2>
        </div>
    );
};

export default Error;
