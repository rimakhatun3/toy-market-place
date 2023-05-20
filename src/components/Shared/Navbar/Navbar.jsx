import React, { useContext } from 'react';
import logo from '../../../assets/logos/navLogo2.avif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(result=>{})
    .catch(error=>{
      console.error(error.message)
    })
  }

    const navItem = <>
    <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        
        {
          user?<>
          <li><Link to='/mytoys' >My Toys</Link></li>
        <li ><Link to='/addtoy' >Add A Toys</Link></li>
        <div className='tooltip' data-tip={user?.displayName}>
        <img className='w-10 rounded-full mx-3' src={user?.photoURL} alt="" />
        </div>
          <button onClick={handleLogOut} className='btn btn-sm'>LogOut</button>
          
          </>
          :<><Link to='/login'><button className='btn btn-sm'>Login</button></Link></>
        }
        </>


        
    return (
        <div>
     <div className="navbar bg-[#AEE6AC]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <img className='w-24' src={logo} alt="" />
    <a className="btn btn-ghost normal-case text-xl">Kids Toy</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
     
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;