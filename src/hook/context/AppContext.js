import { faBullseye } from '@fortawesome/free-solid-svg-icons';
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
    // admin
    //client
    const [userData, setUser] = useState([]);
    const [modal, setModel] = useState(true);
    const [modalDetail, setModalDetail] = useState(true);
    const [profileDetail, setProfileDetai] = useState([]);
    const [tableDetailId, setTableDetailId] = useState('');
    const [idDetail, setIdDetail] = useState('');
    const [benefitCourse, setBenefitCourse] = useState('');

    // client
    const handleTableStyle = (id) => {
        setTableDetailId(id);
    };

    const handleDetaiUSer = () => {
        const result = userData?.filter((product) => product._id === idDetail);
        setProfileDetai(result);
        const resultbenefit = result
            ?.map((product) => {
                return product.benefitID.map((item) => item.name);
            })
            .join(',');
        setBenefitCourse(resultbenefit);
    };
    useEffect(() => {
        handleDetaiUSer();
    }, [idDetail]);

    const handleTurnOnDetail = (id) => {
        handleTableStyle('default');
        setIdDetail(id);
        if (modalDetail === true) {
            setModalDetail(false);
        } else {
            setModalDetail(true);
        }
    };
    const handleModelSave = () => {
        if (modal === true) {
            setModel(false);
        } else {
            setModel(true);
        }
    };
    //course
    const [modalSaveCourse, setModalSaveCourse] = useState(true);
    const [idCOurseDetail, setIdCourseDetail] = useState('');
    const [locationIDCourse, setLocationIDCourse] = useState('');
    const [dataCourse, setDataCourse] = useState([]);

    const [dataCourseDetail, setDataCourseDetail] = useState([]);
    const [location, setLocation] = useState([]);
    const [addressCourse, setAddressCourse] = useState([]);
    const [modalCourse, setModelCourse] = useState(true);
    const [idDetailCourse, setIdDetailCourse] = useState('');
    const handleModelSaveCourse = () => {
        if (modalSaveCourse === true) {
            setModalSaveCourse(false);
        } else {
            setModalSaveCourse(true);
        }
    };
    const handleCourseId = (id) => {
        setIdDetailCourse(id);
    };
    const callAPICourseDetail = (id) => {
        setIdCourseDetail(id);
        setIdDetailCourse('default');
        if (modalCourse === true) {
            setModelCourse(false);
        } else {
            setModelCourse(true);
        }
    };
    const CourseDetail = () => {
        const detail = dataCourse.filter((product) => product._id === idCOurseDetail);

        detail.forEach((product) => {
            setLocationIDCourse(product.locationID);
        });

        setDataCourseDetail(detail);
        const addressLocation = location.filter((product) => product._id === locationIDCourse);
        setAddressCourse(addressLocation);
    };
    useEffect(() => {
        CourseDetail();
    }, [idCOurseDetail]);

    // order
    const [modalDetailOrder, setModalDetailOrder] = useState(true);
    const [userDataOrder, setUserOrder] = useState([]);
    const [profileDetailOrder, setProfileDetailOrder] = useState([]);
    const [idDetailOrder, setIdDetailOrder] = useState('');

    const handleTableStyleOrder = (id) => {
        setTableDetailId(id);
    };

    const handleTurnOnDetailOrder = (id) => {
        handleTableStyleOrder('default');
        setIdDetailOrder(id);
        if (modalDetailOrder === true) {
            setModalDetailOrder(false);
        } else {
            setModalDetailOrder(true);
        }
    };

    const handleDetaiOrder = () => {
        const redult = userDataOrder?.filter((product) => product._id === idDetailOrder);
        setProfileDetailOrder(redult);
    };
    useEffect(() => {
        handleDetaiOrder();
    }, [idDetailOrder]);
    //location
    const [modalLocation, setModalLocation] = useState(true);
    const [userDataLocation, setUserLocation] = useState([]);
    const [displayTableLocation, setDisplayTableLocation] = useState(true);
    const [displayFontAddLocation, setDisplayFontAddLocation] = useState(true);
    const [displayFontPutLocation, setDisplayFontPutLocation] = useState(true);
    const [idDetailLocation, setIdDetailLocation] = useState('');
    const [idLocationDetail, setIdLocationDetail] = useState('');
    const [idputLocation, setIdPutLocation] = useState({});
    const [detailLocation, setDetailLocation] = useState([]);
    const [modalSaveLocation, setModalSaveLocation] = useState(true);
    const [loadFrom, setLoadForm] = useState(false);

    const handleSaveLocation = () => {
        if (modalSaveLocation === true) {
            setModalSaveLocation(false);
        } else {
            setModalSaveLocation(true);
        }
    };
    const callAPILocationDetail = (id) => {
        setIdLocationDetail(id);
        setIdDetailLocation('default');
        if (modalLocation === true) {
            setModalLocation(false);
        } else {
            setModalLocation(true);
        }
    };
    const handeDetailLocation = () => {
        const dataDetailLocation = userDataLocation.filter((product) => product._id === idLocationDetail);
        setDetailLocation(dataDetailLocation);
    };
    useEffect(() => {
        handeDetailLocation();
    }, [idDetailLocation]);

    const handleLocationId = (id) => {
        setIdDetailLocation(id);
    };
    const handleStyleFontPutLocation = (product) => {
        setIdPutLocation(product);
        if (displayFontPutLocation === true) {
            setLoadForm(true);
            setDisplayFontAddLocation(true);
            setDisplayTableLocation(false);
            setDisplayFontPutLocation(false);
        } else {
            setDisplayFontPutLocation(true);
            setDisplayTableLocation(true);
            setLoadForm(false);
        }
    };
    const handleStyleFontAddLocation = () => {
        if (displayFontAddLocation === true) {
            setDisplayFontAddLocation(false);
            setDisplayTableLocation(false);
            setDisplayFontPutLocation(true);
        } else {
            setDisplayFontAddLocation(true);
            setDisplayTableLocation(true);
        }
    };

    // benefit
    const [dataBenefit, setdataBenefit] = useState([]);
    const [displayTableBenefit, setDisplayTableBenefit] = useState(true);
    const [displayFontAddBenefit, setDisplayFontAddBenefit] = useState(true);
    const [displayFontPutBenefit, setDisplayFontPutBenefit] = useState(true);
    const [idDetailBenefit, setIdDetailBenefit] = useState('');
    const [idPutBenefit, setIdPutBenefit] = useState({});
    const [loadFromBenefit, setLoadFromBenefit] = useState(faBullseye);
    const handleBenefitId = (id) => {
        setIdDetailBenefit(id);
    };
    const handleStyleFontPutBenefit = (product) => {
        setIdPutBenefit(product);
        if (displayFontPutBenefit === true) {
            setLoadFromBenefit(true);
            setDisplayFontAddBenefit(true);
            setDisplayTableBenefit(false);
            setDisplayFontPutBenefit(false);
        } else {
            setDisplayFontPutBenefit(true);
            setDisplayTableBenefit(true);
            setLoadFromBenefit(false);
        }
    };
    const handleStyleFontAddBenefit = () => {
        if (displayFontAddBenefit === true) {
            setDisplayFontAddBenefit(false);
            setDisplayTableBenefit(false);
            setDisplayFontPutBenefit(true);
        } else {
            setDisplayFontAddBenefit(true);
            setDisplayTableBenefit(true);
        }
    };
    //logOut
    const [idLogout, setIdLogOut] = useState('');
    const [statusLogout, setStatusLogout] = useState(0);
    // end Admin
    const value = {
        handleModelSave,
        modal,
        userData,
        setUser,
        profileDetail,
        handleTurnOnDetail,
        modalDetail,
        benefitCourse,
        tableDetailId,
        handleTableStyle,

        //order
        userDataOrder,
        setUserOrder,
        handleTableStyleOrder,
        profileDetailOrder,
        modalDetailOrder,
        handleTurnOnDetailOrder,
        //course
        handleModelSaveCourse,
        modalSaveCourse,
        callAPICourseDetail,
        dataCourse,
        setDataCourse,
        dataCourseDetail,
        location,
        setLocation,
        addressCourse,
        idDetailCourse,
        handleCourseId,
        modalCourse,

        //location
        setUserLocation,
        userDataLocation,
        displayTableLocation,
        displayFontAddLocation,
        handleStyleFontAddLocation,
        displayFontPutLocation,
        idDetailLocation,
        handleLocationId,
        idLocationDetail,
        callAPILocationDetail,
        modalLocation,
        handleStyleFontPutLocation,
        idputLocation,
        detailLocation,
        loadFrom,
        //benefit
        dataBenefit,
        setdataBenefit,
        handleStyleFontAddBenefit,
        displayFontAddBenefit,
        displayTableBenefit,
        idDetailBenefit,
        handleBenefitId,
        handleStyleFontPutBenefit,
        displayFontPutBenefit,
        idPutBenefit,
        handleSaveLocation,
        modalSaveLocation,
        loadFromBenefit,

        //logOut
        idLogout,
        setIdLogOut,
        statusLogout,
        setStatusLogout,
        //
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
