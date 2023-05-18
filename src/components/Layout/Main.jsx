import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    return (
        <div className='container mx-auto my-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;