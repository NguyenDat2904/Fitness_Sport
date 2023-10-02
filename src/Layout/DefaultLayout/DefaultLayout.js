import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Register from'./Register/Form/Form'
function DefaultLayout({ children }) {
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Register/>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;
