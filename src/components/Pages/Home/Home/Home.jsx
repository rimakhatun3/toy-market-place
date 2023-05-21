import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Banner from '../Banner/Banner';
import Gallerry from '../Gallerry/Gallerry';
import Category from '../Category/Category';
import SpecialToy from '../../SpeacialToy/SpecialToy';
import { FaChild, FaFile, FaFileExcel, FaFileImage, FaFilePdf, FaHireAHelper, FaOsi, FaPage4, FaPagelines, FaPager, FaPaperclip, FaPlayCircle, FaUserCheck, FaViadeo } from 'react-icons/fa';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const Home = () => {
    const [activetab, setActiveTab] = useState('Baby Dolls')
    const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch('https://toy-marketplace-server-one.vercel.app//alltoys')
    //         .then(res => res.json())
    //         .then(data => setCategories(data))
    // }, [])


    useEffect(() => {
        fetch(`https://toy-marketplace-server-one.vercel.app/alltoys/${activetab}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [activetab])
    // console.log(categories)
    const handleTabs = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div>
            <Banner></Banner>
            <Gallerry></Gallerry>

            <section>
                <h1 className='text-2xl font-bold text-center my-8'>Our Speacia Collection</h1>
                <div className='grid lg:grid-cols-3 gap-4'>
                    {
                        categories.map(specialToy => <SpecialToy key={specialToy._id} specialToy={specialToy}></SpecialToy>)
                    }
                </div>

            </section>


            <div className='text-center my-12'>
                <h2 className='text-2xl font-bold text-center my-8'>Shop By Category</h2>
                <div className='border bg-[#AEE6AC] py-2'>
                    <div onClick={() => handleTabs('Baby Dolls')} className={`btn btn-success${activetab == 'Baby Dolls' ? 'bg-[#E6C3AC]' : ''}`}>Baby Dolls</div>
                    <div onClick={() => handleTabs('Barbie Dolls')} className={`btn btn-success ${activetab == 'Barbie Dolls' ? 'bg-[#E6C3AC]' : ''}`}>Barbie Dolls</div>
                    <div onClick={() => handleTabs('American Girls')} className={`btn  btn-success${activetab == 'American Girls' ? 'bg-[#E6C3AC]' : ''}`}>American Girls</div>
                </div>

            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    categories?.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>

            <section className='bg-[#AEE6AC] py-10 px-10 my-10'>
                <h2 className='text-2xl font-bold text-center my-4'>Here Our Most Popular online resource</h2>
                <div className='grid lg:grid-cols-6 my-4 md:grid-cols-2'>
                    <div >
                        <FaPlayCircle className='font-extrabold text-5xl my-2'></FaPlayCircle>
                        <span className='text-2xl'>Toys video</span>
                    </div>
                    <div >
                        <FaPagelines className='font-extrabold text-5xl my-2'></FaPagelines>
                        <span className='text-2xl'>commuity</span>
                    </div>
                    <div >
                        <FaChild className='font-extrabold text-5xl my-2'></FaChild>
                        <span className='text-2xl'>child Toy Info</span>
                    </div>
                    <div className='flex-col gap-3 justify-center items-center' >
                        <FaOsi className='font-extrabold text-5xl my-2'></FaOsi>
                        <span className='text-2xl '>support</span>
                    </div>
                    <div className='flex-col gap-3 justify-center items-center' >
                        <FaUserCheck className='font-extrabold text-5xl my-2'></FaUserCheck>
                        <span className='text-2xl '>Online</span>
                    </div>
                    <div className='flex-col gap-3 justify-center items-center' >
                        <FaFileImage className='font-extrabold text-5xl my-2'></FaFileImage>
                        <span className='text-2xl '>technic center</span>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;