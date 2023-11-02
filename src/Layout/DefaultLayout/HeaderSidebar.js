import Header from './Header/Header';
import React from 'react';

function HeaderSidebar({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default HeaderSidebar;
