import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaHeart } from "react-icons/fa";


const SingleToyDetails = () => {
    const toy = useLoaderData()
    return (
        <div>
           <div className=" min-h-screen w-full bg-base-200">
  <div className="hero-content flex-col w-full lg:flex-row">
  <div className='w-1/2'>  <img  src={toy.url} className=" rounded-lg shadow-2xl" /></div>
    <div className='w-1/2 text-center'>
      <h1 className="text-5xl font-bold">{toy.name}</h1>
      <h1 className="text-5xl font-bold my-5">{toy.sellerName}</h1>
      <p>{toy.sellerEmail}</p>
      <p>Price:{toy.price}</p>
      <p>Quantity:{toy.quantity}</p>
      <p className="py-6 my-3 ">{toy.details}</p>
      <div className='flex justify-between items-center '>
      <div className='flex justify-center items-end gap-4'>
        <Rating
      style={{ maxWidth: 100 }}
      value={toy.rating}
      readOnly
    /> <p>{toy.rating}</p>
    
    </div>
    <div className="card-actions flex gap-2 justify-end">
    <FaHeart className='text-red-600'></FaHeart>
    <FaHeart className='text-red-600'></FaHeart>
    <FaHeart className='text-red-600'></FaHeart>
      
    </div>
    </div>
    </div>
    
  </div>
  <div>
  
  </div>
</div> 
        </div>
    );
};

export default SingleToyDetails;