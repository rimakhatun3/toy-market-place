import React from 'react';
import errorImg from '../../../assets/images/error.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <Link to='/'><img className='relative' src={errorImg}  /></Link>
            {/* <p className='text-center absolute mb-0 '>
              <Link to="/"><button className='btn btn-primary'>Go Back To Home</button> </Link>
            </p> */}
        </div>
    );
};

export default ErrorPage;