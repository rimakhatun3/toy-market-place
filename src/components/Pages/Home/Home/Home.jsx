import React, { useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';
import Marquee from "react-fast-marquee";
import Banner from '../Banner/Banner';
import Gallerry from '../Gallerry/Gallerry';
import Category from '../Category/Category';
import pi1 from '../../../../assets/images/sp2.avif'
import pi2 from '../../../../assets/images/sp3.avif'
import pi3 from '../../../../assets/images/sp6.jpg'
import pi4 from '../../../../assets/images/spe1.avif'


import { FaChild,  FaFileImage,  FaOsi, FaPagelines,   FaPlayCircle, FaStar, FaUserCheck,  } from 'react-icons/fa';
import Aos from 'aos';

const Home = () => {
    const [activetab, setActiveTab] = useState('Baby Dolls')
    const [categories, setCategories] = useState([])

useEffect(()=>{
    Aos.init()
},[])

    useEffect(() => {
        fetch(`https://toy-marketplace-server-one.vercel.app/all/${activetab}`)
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
                <h1 className='text-2xl font-bold text-center my-8'>Exclusive Collection</h1>
                <div className='space-x-4 text-center'>
                    <button className='py-2 px-6 bg-pink-500 rounded-e-2xl rounded-s-2xl'>Feature Product</button>
                    <button className='py-2 px-6 bg-purple-200 rounded-e-2xl rounded-s-2xl'>New Product</button>
                    <button className='py-2 px-6 bg-blue-300 rounded-e-2xl rounded-s-2xl'>Latest Product</button>
                </div>

                <div>
                <Marquee speed={100} className='mt-5 '>


  <img className='w-24 mx-5' src={pi1} alt="" />
  <img className='w-24 mx-5'  src={pi2} alt="" />
  <img className='w-24 mx-5'  src={pi3} alt="" />
  <img className='w-24 mx-5'  src={pi4} alt="" />
  <img className='w-24 mx-5'  src={pi2} alt="" />
  <img className='w-24 mx-5'  src={pi3} alt="" />
  <img className='w-24 mx-5'  src={pi4} alt="" />
</Marquee>
                </div>
<div className='grid md:grid-cols-2 lg:grid-cols-4'>
    
    
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={pi1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">baby doll</h2>
    <p>Your kid Also love It</p>
    <div className="card-actions flex gap-2">
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
      <FaStar className='text-orange-700 ml-3'></FaStar>
    </div>

    <div >
        <button data-aos='feed-up' className='btn bg-[#AEE6AC]'>Buy Now</button>
    </div>
  </div>
</div>
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