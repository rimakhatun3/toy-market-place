import React, { useEffect } from 'react';
import gallerry from '../../../../assets/images/gallerry.avif'
import gallerry1 from '../../../../assets/images/gallery3.avif'
import gallerry2 from '../../../../assets/images/gallerry4.avif'
import gallerry3 from '../../../../assets/images/gallerry1.avif'
import gallerry4 from '../../../../assets/images/gallery5.avif'
import gallerry5 from '../../../../assets/images/gallerry6.avif'
import gallerry6 from '../../../../assets/images/gallerry7.avif'
import gallerry7 from '../../../../assets/images/gallery8.avif'
import gallerry8 from '../../../../assets/images/gallerry.avif'
import gallerry9 from '../../../../assets/images/gallerry7.avif'
import gallerry10 from '../../../../assets/images/gallery8.avif'
import gallerry11 from '../../../../assets/images/gallerry.avif'
import Aos from 'aos';

const Gallerry = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
        
    },[])
    return (
        <div className='my-16'> 

        <h2 className='text-2xl font-bold mb-8 text-center'>Kids Toys Gallery Zone</h2>
            <div data-aos = 'feed-down' className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div data-aos ='fade-up' >
            <img className='w-full min-h-full' src={gallerry} alt="" />
            </div>
            <img data-aos = 'feed-down' className='w-full min-h-full' src={gallerry1} alt="" />
            <img data-aos = 'feed-up' className='w-full min-h-full' src={gallerry2} alt="" />
            <img className='w-full min-h-full' src={gallerry3} alt="" />
            <img className='w-full min-h-full' src={gallerry4} alt="" />
            <img className='w-full min-h-full' src={gallerry5} alt="" />
            <img data-aos = 'feed-up' className='w-full min-h-full' src={gallerry6} alt="" />
            <img className='w-full min-h-full' src={gallerry7} alt="" />
            <img className='w-full min-h-full' src={gallerry8} alt="" />
            <img className='w-full min-h-full' src={gallerry9} alt="" />
            <img className='w-full min-h-full' src={gallerry10} alt="" />
            <img className='w-full min-h-full' src={gallerry11} alt="" />
        </div>
        </div>
    );
};

export default Gallerry;