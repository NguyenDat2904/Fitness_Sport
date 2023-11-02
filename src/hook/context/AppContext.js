import { createContext, useEffect, useState } from 'react';
import { get } from '~/uliti/htppRequest';
const AppContext = createContext();

const AppProvider = (props) => {
    const [show, setShow] = useState('');
    const [loading, setLoading] = useState(true);
    const [isCheckBlur, setIsCheckBlur] = useState(true);
    const [isCheckPay, setIsCheckPay] = useState(JSON.parse(localStorage.getItem('isCheckPay')));

    const [statusCode, setStatusCode] = useState('');
    const [dis, setDis] = useState('');
    const [courses, setCourses] = useState([]);
    const [userInfo, setUserInfo] = useState(localStorage.getItem('user'));
    const [userParse, setUserParse] = useState(JSON.parse(localStorage.getItem('user')));
    const [userInfoProfile, setUserInfoProfile] = useState({});
    const [clubLocation, setClubLocation] = useState({});
    const [buyCourse, setBuyCourse] = useState(JSON.parse(localStorage.getItem('course')));

    const [loadingProfile, setLoadingProfile] = useState(true);
    useEffect(() => {
        const storedCourse = localStorage.getItem('course');
        const storedIsCheckPay = localStorage.getItem('isCheckPay');

        if (storedCourse && storedIsCheckPay) {
            setBuyCourse(JSON.parse(storedCourse));
            setIsCheckPay(JSON.parse(storedIsCheckPay));
        }
    }, []);

    useEffect(() => {
        const userParseData = localStorage.getItem('user');
        const fetchAPI = async () => {
            setLoadingProfile(true);
            const user = await get(`https://fitness-sport.onrender.com/user/${userParse._id}`, {
                headers: { refresh_token: `${userParse.refreshToken}`, authorization: `${userParse.accessToken}` },
            });
            if (user.status === 200) {
                setUserInfoProfile(user.data);
            }
            setLoadingProfile(false);
        };
        if (userParseData) {
            setUserParse(JSON.parse(userParseData));
            fetchAPI();
        }
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            const user = await get(`https://fitness-sport.onrender.com/location?limit=50`);
            if (user.status === 200) {
                setClubLocation(user.data);
            }
        };
        fetchAPI();
    }, []);

    const onShow = () => {
        if (show === '') {
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
        userInfoProfile,
        setUserInfoProfile,
        loadingProfile,
        setLoadingProfile,
        clubLocation,
        setClubLocation,
        buyCourse,
        setBuyCourse,
        isCheckPay,
        setIsCheckPay,
    };

    return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

export { AppProvider, AppContext };
