import { createContext, useState } from 'react';
const AppContext = createContext();

const AppProvider = (props) => {
    const [show, setShow] = useState('');
    const [loading, setLoading] = useState(true);
    const [isCheckBlur, setIsCheckBlur] = useState(true);
    const [statusCode, setStatusCode] = useState('');
    const [dis, setDis] = useState('');
    const [courses, setCourses] = useState([]);
    const [userInfo, setUserInfo] = useState(localStorage.getItem('user'));
    const [userParse, setUserParse] = useState(JSON.parse(localStorage.getItem('user')));

    const onShow = () => {
        if (show == '') {
            setShow('show');
        } else {
            setShow('');
        }
    };

    const onBlur = () => {
        if (isCheckBlur) {
            setShow('');
        }
    };

    const onMouseEnter = () => {
        // console.log(false);
        setIsCheckBlur(false);
    };

    const onMouseLeave = () => {
        // console.log(true);
        setIsCheckBlur(true);
    };

    const value = {
        show: show,
        loading: loading,
        statusCode: statusCode,
        dis: dis,
        setShow,
        setLoading,
        onShow,
        onBlur,
        setIsCheckBlur,
        onMouseEnter,
        onMouseLeave,
        setStatusCode,
        setDis,
        courses,
        setCourses,
        userInfo,
        setUserInfo,
        userParse,
        setUserParse,
    };

    return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

export { AppProvider, AppContext };
