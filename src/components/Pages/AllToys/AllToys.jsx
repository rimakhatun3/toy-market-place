import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const  AllToys = () => {
    const allToys = useLoaderData()
    // console.log(allToys)
    return (
        <div className='mt-12'>
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Serial No</th>
        <th>Seller</th>
        <th>Toy Name</th>
        <th>SubCategory</th>
        <th>Price</th>
        <th>AvailableQuantity</th>
        <th>View Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        allToys.map((singleToy,i)=><tr key={singleToy._id}>
            <th>{i}</th>
            <td>{singleToy.sellerName}</td>
            <td>{singleToy.name}</td>
            <td>{singleToy.category}</td>
            <td>{singleToy.price}</td>
            <td>{singleToy.quantity}</td>
            <td><Link to={`/singletoy/${singleToy._id}`}><button className='btn bg-[#AEE6AC]'>view Details</button></Link></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;