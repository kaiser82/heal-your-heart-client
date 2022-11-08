import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Carousel from './Carousel';

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <h2>Home page</h2>
            <Carousel></Carousel>
            <h2>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.slice(0, 3).map(service =>
                        <Card service={service}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Home;