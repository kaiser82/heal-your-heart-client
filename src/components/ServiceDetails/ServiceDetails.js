import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DetailCard from './DetailCard'


const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, serviceName, price, description, rating } = service;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-11/12 mx-auto'>
                <DetailCard service={service}></DetailCard>
            </div>
            <div>
                <h2>Review section</h2>
                <Link to={'/reviews'}><button className='btn btn-primary'>Add review</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;