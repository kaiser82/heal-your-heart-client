import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    const { _id, serviceName, rating, price, image, description } = service
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='w-11/12 rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{description.length > 100 ? description.slice(0, 100) : description}</p>
                <div className="card-actions justify-between items-center">
                    <div className='flex justify-between space-x-4 '>
                        <p className='font-semibold'>Price: {price}</p>
                        <p className='flex text-md items-center space-x-1'><FaStar className='text-yellow-500' /> <span>{rating}</span></p>
                    </div>
                    <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;