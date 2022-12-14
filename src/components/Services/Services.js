import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from '../Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-kaiser82.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div>
            {
                loading ? <div className='text-center text-blue-600'><button className="btn btn-ghost loading">loading</button></div> : <div></div>
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