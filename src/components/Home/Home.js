import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from '../Card/Card';
import Carousel from './Carousel';

const Home = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services);
    return (
        <div>
            <h2>Home page</h2>
            <Carousel></Carousel>
            <h2>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 3).map(service =>
                        <Card key={service._id} service={service}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Home;