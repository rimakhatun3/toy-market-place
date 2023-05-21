import React from 'react';
import errorImg from '../../../assets/images/error.jpg'
import { Link } from 'react-router-dom';
import useTitle from '../../title';
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    useTitle()
    return (
        <div>
            <img className='relative' src={errorImg}  />
            <div className='absolute top-5 left-5'><Link to='/'><button className='btn btn-warning'><FaArrowLeft></FaArrowLeft> Back To Home</button></Link></div>
            {/* <p className='text-center absolute mb-0 '>
              <Link to="/"><button className='btn btn-primary'>Go Back To Home</button> </Link>
            </p> */}
        </div>
    );
};

export default ErrorPage;