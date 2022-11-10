import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ConfirmAddService = () => {

    const service = useLoaderData();
    const { _id, serviceName, image, rating, price } = service
    console.log(service)
    const { user } = useContext(AuthContext)
    console.log(user)

    const navigate = useNavigate()


    const handleAddService = (id) => {
        const email = user.email;
        const myService = {
            serviceId: id,
            serviceName,
            price,
            image,
            rating,
            email
        }

        fetch('https://b6a11-service-review-server-side-kaiser82.vercel.app/myServices', {
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
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                    <Link to='/myServices'><button onClick={() => handleAddService(_id)} className="btn btn-primary">Confirm to add</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAddService;