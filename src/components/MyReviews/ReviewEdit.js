import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


const ReviewEdit = () => {
    const navigate = useNavigate();

    const info = useParams();
    console.log(info)
    const { id } = info;



    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);

    console.log(review)

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [id, refresh])




    const handleUpdateReview = (e) => {

        e.preventDefault();
        const message = e.target.message.value;
        const review = {
            message
        }

        fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review updated successfully.');
                    navigate('/myReviews')
                }

            })
            .catch(e => console.log(e.message))
    }
    return (
        <div className='py-5'>
            <h2 className='text-3xl font-semibold text-center py-5'>Update your Review</h2>
            <form onSubmit={handleUpdateReview} className='w-3/4 mx-auto'>
                <textarea name='message' defaultValue={review.message} className="textarea textarea-bordered h-24 w-full text-lg" placeholder="Enter your review here...."></textarea>
                <div className='text-center'><input className='btn btn-primary' type="submit" value="Update Review" /></div>
            </form>
        </div>
    );
};

export default ReviewEdit;