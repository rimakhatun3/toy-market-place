import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const location = useLocation()

    const {user,loadding} = useContext(AuthContext)

    if(loadding){
        return <progress className="progress w-56"></progress>
    }

    if(!user){
        alert('login first')
    }
    else{
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;