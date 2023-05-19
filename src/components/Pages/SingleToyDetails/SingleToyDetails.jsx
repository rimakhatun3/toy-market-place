import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleToyDetails = () => {

    const {id} = useParams()
    console.log(id)
    const toy = useLoaderData()
    console.log(toy)


    return (
        <div>
            
        </div>
    );
};

export default SingleToyDetails;