import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const info = useLoaderData();
    console.log(user, info)

    const handleSubmitReview = (event) => {
        event.preventDefault();
        const message = event.target.message.value;

        const review = {

        }
    }

    return (
        <div>
            <h2 className='text-3xl text-center'>Add Review for service:</h2>
            <form onSubmit={handleSubmitReview} className='w-3/4 mx-auto'>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full text-lg" placeholder="Enter your review here...."></textarea>
                <input className='btn btn-primary' type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default Reviews;