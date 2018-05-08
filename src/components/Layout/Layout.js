import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
            
import './styles.css';

const Layout = ({ children }) => (

    <div className="appContentWrapper">
        <div className="appHeader">
            <NavBar />
        </div>
        <div className="appContent">
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;