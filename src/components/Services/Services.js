import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Services = () => {
    const services = useLoaderData()

    return (
        <div>
            <h2 className='text-4xl font-semibold text-center py-4'>Total Services: {services.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service =>
                        <Card service={service}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Services;