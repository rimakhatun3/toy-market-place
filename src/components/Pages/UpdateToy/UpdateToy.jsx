import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
const toy = useLoaderData()
console.log(toy)

    const handleToyUpdate =(event)=>{
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value
        const updatedToy = {
            price,
            quantity,
            detail
        }
        console.log(updatedToy)

        Swal.fire({
            title: 'Are you sure?',
            text: "are u sure u want to update this",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it !'
            
          })

          fetch(`https://toy-marketplace-server-one.vercel.app/mytoy/${toy._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedToy)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire(
                    'Modify',
                    'Your file has been modified.',
                    'success'
                  )
            }
          })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-slate-100">
    <form onSubmit={handleToyUpdate} className="card  w-1/2  shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea className="border rounded-sm" name="detail" id="" cols="30" rows="4"></textarea>
          
        </div>
        <div className="form-control mt-6">
        <input className="btn bg-[#FF3811] w-full my-4" type="submit" value="updated" />
        </div>
      </div>
    </form>
  </div>
</div>
        
    );
};

export default UpdateToy;
