import { createContext, useEffect, useState } from 'react';
import { number } from 'yup';
const AppContext = createContext();
const AppProvider = (props) => {
    // admin
    //client
    const [userData, setUser] = useState([]);
    const [tableUser, setTacbleUser] = useState(userData);
    const [modal, setModel] = useState(true);
    const [modalDetail, setModalDetail] = useState(true);
   
    const [profileDetail, setProfileDetai] = useState([]);
    const [tableDetailId,setTableDetailId]=useState("")
    const [idDetail, setIdDetail] = useState('');
    const [nameCourse, setNameCourse] = useState('');
    const [priceCourse, setPriceCourse] = useState('');
    const [timeRegisterCourse, setTimeRegister] = useState('');
    const [benefitCourse, setBenefitCourse] = useState('');
  
  
    
  
// client
    const handleTableStyle=(id)=>{
        setTableDetailId(id)
    }



    const handleDetaiUSer = () => {
        const result = tableUser?.filter((product) => product._id === idDetail);
        setProfileDetai(result);
        const resultName = result
            ?.map((product) => {
                return product.courseID.map((item) => item.name);
            })
            .join(',');
        setNameCourse(resultName);
        const resultTimeRegester = result
            ?.map((product) => {
                return product.courseID.map((item) => item.updatedAt.slice(0, 10));
            })
            .join(',');
        setTimeRegister(resultTimeRegester);
        const resultbenefit = result
            ?.map((product) => {
                return product.benefitID.map((item) => item.name);
            })
            .join(',');
        setBenefitCourse(resultbenefit);
        setTimeRegister(resultTimeRegester);
        const resultPrice = result
            ?.map((product) => {
                return product.courseID.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.price;
                }, 0);
            })
            .join('');
        setPriceCourse(resultPrice);
    };
    useEffect(() => {
        handleDetaiUSer();
    }, [idDetail]);
   
    const handleTurnOnDetail = (id) => {
        handleTableStyle("default")
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
    const [modalSaveCourse,setModalSaveCourse]=useState(true)
    const [displayTable,setDisplayTable]=useState(true);
    const [displayFontAdd,setDisplayFontAdd]=useState(true);
    const [displayFontPut,setDisplayFontPut]=useState(true);
    const [idPutCourse,setIdPutCourse]=useState("");
    const [idCOurseDetail,setIdCourseDetail]=useState("");
    const [locationIDCourse,setLocationIDCourse]=useState("")
    const [dataCourse,setDataCourse]=useState([]);
    const [dataCourseDetail,setDataCourseDetail]=useState([]);
    const [location,setLocation]=useState([]);
    const [addressCourse,setAddressCourse]=useState([]);
    const [modalCourse,setModelCourse]=useState(true);
    const [idDetailCourse,setIdDetailCourse]=useState("");
    const handleModelSaveCourse = () => {
        if (modalSaveCourse === true) {
            setModalSaveCourse(false);
        } else {
            setModalSaveCourse(true);
        }
    };
    const handleStyleFontAdd=()=>{
        if(displayFontAdd===true)
        {
            setDisplayFontAdd(false)
            setDisplayTable(false)
            setDisplayFontPut(true)
        }else{
            setDisplayFontAdd(true)
            setDisplayTable(true)
        }
    }
    const handleStyleFontPut=(id)=>{
        setIdPutCourse(id)
        if(displayFontPut===true)
        {
            setDisplayFontAdd(true)
            setDisplayTable(false)
            setDisplayFontPut(false)
        }else{
            setDisplayFontPut(true)
            setDisplayTable(true)
        }
    }
    
    const handleCourseId=(id)=>{
        setIdDetailCourse(id)

      }
    const callAPICourseDetail=(id)=>{
        setIdCourseDetail(id)
         setIdDetailCourse("default")
        if(modalCourse===true){
            setModelCourse(false)
        }
        else{
            setModelCourse(true)
        }
    }
    const CourseDetail=()=>{
        const detail= dataCourse.filter((product)=>product._id===idCOurseDetail)
       
        detail.forEach((product)=>{
            console.log(product.locationID)
            setLocationIDCourse(product.locationID)
        })
      
       setDataCourseDetail(detail);
    }
    const addressDetail=()=>{
          const addressLocation=location.filter((product)=>product._id===locationIDCourse);

        setAddressCourse( addressLocation);
    }
   
    
    useEffect(()=>{
        CourseDetail()
    },[idCOurseDetail])
   useEffect(()=>{
        addressDetail()
    },[locationIDCourse])
// order 
const [modalDetailOrder,setModalDetailOrder]=useState(true)
const [userDataOrder, setUserOrder] = useState([]);
const [tableUserOrder, setTacbleUserOrder] = useState(userDataOrder);
const [profileDetailOrder,setProfileDetailOrder]=useState([])
const [idDetailOrder,setIdDetailOrder]=useState("");
const [nameCourseOrder,setNameCourseOrder]=useState("");
const [priceCourseOrder,setPriceCourseOrder]=useState("");
const [timeRegisterOrder,setTimeRegisterOrder]=useState("");
const [statusCourseOrder,setStatusCourseOrder]=useState("");
const [timePayment,setTimePayment]=useState("")
    const handleTableStyleOrder=(id)=>{
        setTableDetailId(id)
    }

     const handleTurnOnDetailOrder=(id)=>{
        handleTableStyleOrder("default")
        setIdDetailOrder(id);
        if(modalDetailOrder===true)
        {
            setModalDetailOrder(false)
        }else{
            setModalDetailOrder(true)
        }

    }

    const handleDetaiOrder=()=>{
        const redult=tableUserOrder?.filter((product)=>product._id===idDetailOrder);
        setProfileDetailOrder(redult);
        const nameCourseOrder=redult.map((product)=>{
            return product.courseID.map((item)=>item.name)
        }).join(",")
        setNameCourseOrder(nameCourseOrder)

        const resultPriceOrder = redult
        ?.map((product) => {
            return product.courseID.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price;
            }, 0);
        })
        .join('');
        setPriceCourseOrder(resultPriceOrder)
        const resultTimeRegester = redult
            ?.map((product) => {
                return product.courseID.map((item) => item.updatedAt.slice(0, 10));
            })
            .join(',');
            setTimeRegisterOrder(resultTimeRegester);
        const statusCourseOrder=redult.map((product)=>product.status).join(" ")
        setStatusCourseOrder(statusCourseOrder)
        const timePaymentOrder=redult.map((product)=>{
            return product.courseID.map((item)=>item.updatedAt.slice(0,10))
        }).join("")
        setTimePayment(timePaymentOrder)

    }
    useEffect(()=>{
        handleDetaiOrder()
    },[idDetailOrder])
    
    //location
    const [modalLocation,setModalLocation]=useState(true)
    const [userDataLocation, setUserLocation] = useState([]);
    const [displayTableLocation,setDisplayTableLocation]=useState(true);
    const [displayFontAddLocation,setDisplayFontAddLocation]=useState(true);
    const [displayFontPutLocation,setDisplayFontPutLocation]=useState(true);
    const [idDetailLocation,setIdDetailLocation]=useState("");
    const [idLocationDetail,setIdLocationDetail]=useState("");
    const [idputLocation,setIdPutLocation]=useState("")
    const [detailLocation,setDetailLocation]=useState([])
    const [modalSaveLocation,setModalSaveLocation]=useState(true)


    const handleSaveLocation=()=>{
        if(modalSaveLocation===true)
        {
            setModalSaveLocation(false)
        }
        else{
            setModalSaveLocation(true)
        }
    }
    const callAPILocationDetail=(id)=>{
        setIdLocationDetail(id)
        setIdDetailLocation("default")
        if(modalLocation===true){
            setModalLocation(false)
        }
        else{
            setModalLocation(true)
        }
    }
    const handeDetailLocation=()=>{
        const dataDetailLocation=userDataLocation.filter((product)=>product._id===idLocationDetail);
        setDetailLocation(dataDetailLocation)
    }
    useEffect(()=>{
    handeDetailLocation()
    },[idDetailLocation])
    
    const handleLocationId=(id)=>{
        setIdDetailLocation(id)
    }
    const handleStyleFontPutLocation=(id)=>{

        setIdPutLocation(id)
        if(displayFontPutLocation===true)
        {
            setDisplayFontAddLocation(true)
            setDisplayTableLocation(false)
            setDisplayFontPutLocation(false)
        }else{
            setDisplayFontPutLocation(true)
            setDisplayTableLocation(true)
        }
    }
    const handleStyleFontAddLocation=()=>{
        if(displayFontAddLocation===true)
        {
           
            setDisplayFontAddLocation(false)
            setDisplayTableLocation(false)
            setDisplayFontPutLocation(true)
        }else{
           
            setDisplayFontAddLocation(true)
            setDisplayTableLocation(true)
        }
    }
    
  // benefit
    const [dataBenefit,setdataBenefit]=useState([])
    const [displayTableBenefit,setDisplayTableBenefit]=useState(true);
    const [displayFontAddBenefit,setDisplayFontAddBenefit]=useState(true);
    const [displayFontPutBenefit,setDisplayFontPutBenefit]=useState(true);
    const [idDetailBenefit,setIdDetailBenefit]=useState("");
    const [idPutBenefit,setIdPutBenefit]=useState("")

    const handleBenefitId=(id)=>{
        setIdDetailBenefit(id)
    }
    const handleStyleFontPutBenefit=(id)=>{

        setIdPutBenefit(id)
        if(displayFontPutBenefit===true)
        {
            setDisplayFontAddBenefit(true)
            setDisplayTableBenefit(false)
            setDisplayFontPutBenefit(false)
        }else{
            setDisplayFontPutBenefit(true)
            setDisplayTableBenefit(true)
        }
    }
    const handleStyleFontAddBenefit=()=>{
        if(displayFontAddBenefit===true)
        {
           
            setDisplayFontAddBenefit(false)
            setDisplayTableBenefit(false)
            setDisplayFontPutBenefit(true)
        }else{
           
            setDisplayFontAddBenefit(true)
            setDisplayTableBenefit(true)
        }
    }
    //logOut
    const [idLogout,setIdLogOut]=useState("");
    const [statusLogout,setStatusLogout]=useState(0)
    // end Admin
    const value = {
        handleModelSave,
        modal,
        userData,
        setUser,
        tableUser,
        setTacbleUser,
        profileDetail,
        handleTurnOnDetail,
        modalDetail,
        nameCourse,
        priceCourse,
        timeRegisterCourse,
        benefitCourse,
        tableDetailId,
        handleTableStyle,
      
//order
        userDataOrder, setUserOrder,
        tableUserOrder, setTacbleUserOrder,
        handleTableStyleOrder,
        profileDetailOrder,
        modalDetailOrder,
        nameCourseOrder,
        priceCourseOrder,
        timeRegisterOrder,
        statusCourseOrder,
        timePayment,
         handleTurnOnDetailOrder,
        //course
        handleModelSaveCourse,
        modalSaveCourse,
        displayTable,
        displayFontAdd,
        displayFontPut,
        handleStyleFontAdd,
        handleStyleFontPut,
        idPutCourse,
        callAPICourseDetail,
        dataCourse,setDataCourse,
        dataCourseDetail,
        location,setLocation,
        addressCourse,idDetailCourse,
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
        //benefit
        dataBenefit,setdataBenefit,
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

        //logOut
        idLogout,setIdLogOut,
        statusLogout,setStatusLogout


        


    };
    return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

export { AppProvider, AppContext };
