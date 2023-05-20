import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


// 
const MyToys = () => {
const {user} = useContext(AuthContext)
// const option ={
//   value :'price-Ascending',
//   value : 'price-Descending'
// }

    const [myToys,setMyToys] = useState([])
    // const [selected,setSelected] = useState(option[0])
    // const [loadding,setLoadding] = useState(true)

    // useEffect(()=>{
    //   setLoadding(true)
    //   const fetchProduct = async () =>{
    //     try {
  
    //        const [type,value] = selected.value.split('-').map(item=>item.toLowerCase())
    //        const response = await fetch(`https://toy-marketplace-server-one.vercel.app/toys?email?${user?.email}&value=${value}$type=${type}`)
    //        const data = await response.json()
    //        setMyToys(data)
    //     }
    //     finally{
    //       setTimeout(()=>{
    //         setLoadding(false)
    //       },1000)
    //     }
    //   }
    //   fetchProduct()
    // },[selected])
    
    useEffect(()=>{
        fetch(`https://toy-marketplace-server-one.vercel.app/toys?email?${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyToys(data))
    },[])
    

    const handleRemove=(id)=>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "are u sure u want to delete this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            
          })
         
          fetch(`https://toy-marketplace-server-one.vercel.app/mytoys/${id}`,{
            method:"DELETE"
          }
          
          )
          .then(res=>res.json())
          .then((result) => {
            console.log(result)
            if (result.deletedCount>0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }

            const remaining = myToys.filter(myToy=>myToy._id !==id)
            setMyToys(remaining)

          })
    }

    return (
        <div className='mt-10 '>

<div className='text-center mb-8'>
<select  className="select select-bordered w-full max-w-xs ">
  <option disabled selected>sort by</option>
  <option value='asending' >acending</option>
  <option value='descending' >descending</option>
</select>
</div>


             <div className="overflow-x-auto ">
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
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        myToys.map((singleToy,i)=><tr key={singleToy._id}>
            <th>{i}</th>
            <td>{singleToy.sellerName}</td>
            <td>{singleToy.name}</td>
            <td>{singleToy.category}</td>
            <td>{singleToy.price}</td>
            <td>{singleToy.quantity}</td>
            <td><button onClick={()=>handleRemove(singleToy._id)} className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
            <td>
            <Link to={`/update/${singleToy._id}`}><button className='btn bg-[#AEE6AC]'>Update</button></Link>
            </td>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyToys;