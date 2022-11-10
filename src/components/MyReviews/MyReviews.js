import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsTable from './MyReviewsTable';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Review deleted!');
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining)
                    }
                    else {
                        toast.error(data.error);
                    }
                })
        }
    }

    return (
        <div>
            {
                myReviews.length === 0 ? <h2 className='text-4xl font-bold text-center'>No reviews were added</h2> :
                    <h2 className='text-4xl font-bold text-center'>My Total Reviews: {myReviews.length}</h2>
            }
            {/* Table start */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    <thead className='text-center'>
                        <tr>
                            <th>Services</th>
                            <th>Reviews</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews.map(review => <MyReviewsTable key={review._id} review={review} handleDelete={handleDelete}></MyReviewsTable>)

                        }
                    </tbody>
                </table>
            </div>
            {/* Table end */}


        </div>
    );
};

export default MyReviews;