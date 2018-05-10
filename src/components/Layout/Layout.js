import React from 'react';
import NavBarDesktop from '../NavBarDesktop/NavBarDesktop';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import Footer from '../Footer/Footer';
            
import './styles.css';

const Layout = ({ children }) => (

    <div className="appContentWrapper">
        <div className="appHeaderDesktop">
            <NavBarDesktop />
        </div>
        <div className="appHeaderMobile">
            <NavBarMobile />
        </div>
        <div className="appContent">
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;