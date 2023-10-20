import { createContext, useState } from 'react';
const AppContext = createContext();
const AppProvider = (props) => {
    const [courses, setCourses] = useState([]);

    const value = { courses, setCourses };
    return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
};

export { AppProvider, AppContext };
