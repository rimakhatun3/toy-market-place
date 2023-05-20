import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';


const Main = () => {
    return (
        <div className='container mx-auto my-10'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-450px)]'>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;