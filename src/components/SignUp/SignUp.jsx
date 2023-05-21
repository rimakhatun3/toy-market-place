import React, { useContext } from 'react';
import signupLogo from '../../assets/logos/signup.avif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../title';
const SignUp = () => {
useTitle('sign up')
const {createUser,updateUser} = useContext(AuthContext)

const handleSignUp=(event)=>{
  event.preventDefault()
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const photo = form.photo.value;

  // console.log(name,email,password,photo)
  createUser(email,password)
  .then(result=>{
    // const user = result.user;
    console.log(result)
    updateUser(name,photo)
    
  })

  .then(error=>{
    console.error(error.message)
  })

}

    return (
        <div>
           
    
    <div className="card flex-shrink-0 w-1/2 mx-auto mt-12 shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control  ">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered" />
          <label className="label">
           <p>Already Have an Account Please <Link className='text-primary' to='/login'>Login</Link></p>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>

    );
};

export default SignUp;