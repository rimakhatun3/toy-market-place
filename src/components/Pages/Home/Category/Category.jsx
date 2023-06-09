import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({category}) => {
    const {url,name,rating,price,_id} = category || {}
    return (
        <div>
            <div className="card card-compact w-full min-h-min  bg-base-100 shadow-lg border">
  <figure><img className='max-h-56' src={url} alt="Shoes" /></figure>
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
    
      <Link to={`/subcategory/${_id}`}><button className="btn bg-[#AEE6AC] text-black">View Details</button></Link>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Category;