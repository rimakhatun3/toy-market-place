import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const SubCategory = () => {

    const toyCategory = useLoaderData()
    const {url,name,sellerName,sellerEmail,price,quantity,rating,details} = toyCategory

    return (
        <div>
            <div className="card w-1/2 bg-base-100 shadow-xl">
  <figure><img src={url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {name}
      
    </h2>
    <p>{sellerName}</p>
    <p>{sellerEmail}</p>
    <p>{details}</p>
    <div className='flex justify-between'>
        <div className='flex gap-2'>
        <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    /> <p>{rating}</p>
        </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Price:{price}</div>
      <div className="badge badge-outline">Quantity:{quantity}</div>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubCategory;