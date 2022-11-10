import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from '../Card/Card';
import MyServices from '../MyServices/MyServices';
import Carousel from './Carousel';
import SectionOne from './SectionOne';

const Home = () => {
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

            <Carousel></Carousel>
            <h2 className='text-4xl font-bold text-center py-5'> Offerd Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 3).map(service =>
                        <Card key={service._id} service={service}></Card>
                    )
                }
            </div>
            <div className='text-end py-5'><Link to='/services'><button className='btn btn-primary  '>See All Services</button></Link></div>
            <div className='py-5'>
                <MyServices></MyServices>
            </div>
            <div className='py-5'>
                <SectionOne></SectionOne>
            </div>
        </div>
    );
};

export default Home;