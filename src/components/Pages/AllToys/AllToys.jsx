import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const  AllToys = () => {
    // const allToys = useLoaderData()
    const [allToys,setAlltoys] = useState([])

   

    useEffect(()=>{
      fetch('https://toy-marketplace-server-one.vercel.app/alltoys')
      .then(res=>res.json())
      .then(data=>setAlltoys(data))
    },[])

    // console.log(allToys)
    const [searchText , setSearchText] = useState("")

    const handleSearch =()=>{
fetch(`https://toy-marketplace-server-one.vercel.app/searchByText/${searchText}`)
.then(res=>res.json())
.then(data=>setAlltoys(data))
    }

    return (
        <div className='mt-12'>
<div className=' flex  my-5'>
          <input onChange={(e)=>setSearchText(e.target.value)} placeholder='search here' className='border p-2 me-2 px-4 rounded-lg' type="text" /> 
        <button onClick={handleSearch} className='btn bg-[#AEE6AC]'> Search By <FaArrowRight className='ml-3'/> </button>
        </div>

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