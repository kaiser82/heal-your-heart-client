import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DetailCard from './DetailCard'
import Table from './Table';
import toast from 'react-hot-toast';


const ServiceDetails = () => {

    const service = useLoaderData();
    const { _id, serviceName, price, description, rating, image } = service;
    // console.log(service)
    const { loading, user } = useContext(AuthContext)
    console.log(user)
    const [reviews, setReviews] = useState([]);
    // console.log(reviews)
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const handleAddService = (id) => {
        const myService = {
            serviceId: id,
            serviceName,
            price,
            image
        }

        fetch('http://localhost:5000/myServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(myService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service added to my service.');

                }
            })
            .catch(er => console.log(er.message))


    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='w-11/12 mx-auto'>
                <DetailCard service={service} handleAddService={handleAddService}></DetailCard>
            </div>
            <div>
                {
                    loading && <div className='text-center text-blue-600'><button className="btn btn-ghost loading">loading...</button>
                    </div>
                }
                <h2 className='text-xl font-semibold'>Reviews of service: {serviceName}</h2>
                {/* Table start */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Service</th>
                                <th>Reviews</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (reviews.filter(rev => rev.service === _id)).map(review => <Table key={review._id} review={review}></Table>)
                            }
                        </tbody>
                    </table>
                </div>
                {/* Table end */}
                <Link to={`/reviews/${_id}`}><button className='btn btn-primary'>Add review</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;