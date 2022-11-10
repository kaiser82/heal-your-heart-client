import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const { _id, serviceName, price, description, rating } = useLoaderData();

    const navigate = useNavigate();


    const handleSubmitReview = (event) => {
        event.preventDefault();
        const message = event.target.message.value;
        const email = user?.email || 'unregistered';
        const userName = user?.displayName;
        const photo = user?.photoURL;

        const review = {

            service: _id,
            serviceName,
            price,
            userName,
            email,
            photo,
            message
        }

        fetch('https://b6a11-service-review-server-side-kaiser82.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('heartToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Review added successfully.')
                    event.target.reset();
                    navigate(`/details/${_id}`)
                }
            })
            .then(err => console.log(err));
    }

    return (
        <div>
            <h2 className='text-3xl font-semibold text-center py-5'>Add Review for service: {serviceName}</h2>
            <form onSubmit={handleSubmitReview} className='w-3/4 mx-auto'>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full text-lg" placeholder="Enter your review here...."></textarea>
                <input className='btn btn-primary' type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default Reviews;