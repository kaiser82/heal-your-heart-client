import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from '../Card/Card';
import MyServices from '../MyServices/MyServices';
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

    return (
        <div>

            <Carousel></Carousel>
            <h2>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 3).map(service =>
                        <Card key={service._id} service={service}></Card>
                    )
                }
            </div>
            <div className='text-center py-2'><Link to='/services'><button className='btn btn-primary  w-1/4'>See All</button></Link></div>
            <MyServices></MyServices>
        </div>
    );
};

export default Home;