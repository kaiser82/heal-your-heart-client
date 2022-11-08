import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from '../Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div>
            {
                loading ? <div className='text-center'><progress className="progress w-56 "></progress></div> : <div></div>
            }
            <h2 className='text-4xl font-semibold text-center py-4'>Total Services: {services.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service =>
                        <Card key={service._id} service={service}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Services;