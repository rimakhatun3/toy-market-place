import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';

const Category = ({category}) => {
    console.log(category)
    const {url,name,rating,price} = category || {}
    return (
        <div>
            <div className="card card-compact w-full h-full  bg-base-100 shadow-xl">
  <figure><img  src={url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Item Price: {price}</p>
    
    <div className='flex justify-between items-center'>
    <div className='flex justify-center items-end gap-4'>
        <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    /> <p>{rating}</p>
    </div>
    <div className="card-actions justify-end">
    
      <button className="btn btn-primary">View Details</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Category;