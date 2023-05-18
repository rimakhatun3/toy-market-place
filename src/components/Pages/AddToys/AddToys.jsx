import React, { useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Select from 'react-select';

const AddToys = () => {

    const {user} = useState(AuthContext)

    // const [allToy,setAllToy] = useState([])
    // const [selectedOption, setSelectedOption] = useState(null);

    const handleAddToy =(event)=>{
        event.preventDefault()
        // event.skills = selectedOption;
        console.log(event)
        const form = event.target;
        
        const name = form.name.value
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const quantity = form.quantity.value
        const details = form.details.value
        const url = form.url.value
        const price = form.price.value
        const rating = form.rating.value
        const category = form.category.value
        const allToyInfo = {
            name,sellerName,sellerEmail,quantity,details,url,price,rating,category
        }
        console.log(allToyInfo)
        // allToyInfo.skills = selectedOption
       
        fetch('http://localhost:5000/alltoys',{
            method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(allToyInfo)
           
        })
.then(res=>res.json())
.then(data=>console.log(data))
        
    }
   
    // const options = [
    //     { value: "disney", label: "disney" },
    //     { value: "princess", label: "princess" },
    //     { value: "frozen", label: "frozen" },
    //     { value: "dolls", label: "dolls" },
    //     { value: "donald duck", label: "donald duck" },
    //     { value: "animation character", label: "animation character" },
       
    //   ];

    return (
        <div>
            <form  onSubmit={handleAddToy}>
                <div>
                <div className='w-full flex gap-5'>
      
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name='name' className="input input-bordered" />
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Seller Name</span>
        </label>
        <input type="text" name='sellerName' defaultValue={user?.displayName}  className="input input-bordered" />
        
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Seller Email</span>
        </label>
        <input type="text" name='sellerEmail' defaultValue={user?.email}  className="input input-bordered" />
        
      </div>
      
    </div>
                <div className='w-full flex gap-5'>
      
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Available Quantity</span>
        </label>
        <input type="text" placeholder="Name" name='quantity' className="input input-bordered" />
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input type="text" name='details' placeholder='Detail Description'  className="input input-bordered" />
        
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select name='category' className="select select-bordered  w-full max-w-xs">
  <option disabled selected>select one</option>
  <option>Baby Dolls</option>
  <option>Barbie Dolls</option>
  <option>American Girls</option>
</select>
        {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        name='select'
        isMulti
      /> */}
      </div>
      
    </div>
    <div className='w-full flex gap-5'>
      
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Toy URL</span>
        </label>
        <input type="text" placeholder="Toy URL" name='url' className="input input-bordered" />
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input type="text" name='price' placeholder='Price'  className="input input-bordered" />
        
      </div>
      <div className="form-control w-1/2">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input type="text" name='rating' placeholder='Rating'  className="input input-bordered" />
        
      </div>
      
    </div>
                </div>

      <input className="btn bg-[#FF3811] w-full my-4" type="submit" value="order confirm" />
    </form>
</div>
        
    );
};

export default AddToys;