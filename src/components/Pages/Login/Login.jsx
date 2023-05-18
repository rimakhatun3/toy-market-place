import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const from = location.from?.state?.pathname || '/';

const {logIn} = useContext(AuthContext)

const handleLogIn =(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
   
  logIn(email,password)
  .then(result=>{
    console.log(result.user)
    navigate(from , {replace:true})
  })
  .catch(error=>{
console.error(error.message)
  })
}

    return (
        <div>
           <div className="card flex-shrink-0 w-1/2 mx-auto mt-12 shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        
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
        <div className=" flex mt-4">
         
           <p>New to This Site Please  <Link className='text-primary' to='/signup'>SignUp</Link></p>
          
         
           <button className='btn btn-link'>Forget Password</button>
         
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div> 
        </div>
    );
};

export default Login;