import React, { useEffect, useState } from 'react';
import { FaRegEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MyReviewsTable = ({ review, handleDelete }) => {
    const { _id, serviceName, price, service, message } = review

    const [reviewService, setReviewService] = useState({})
    console.log(reviewService)
    useEffect(() => {
        fetch(`http://localhost:5000/details/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])

    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/myReview/reviewEdit/${id}`)
    }



    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-20 h-20">
                            {
                                reviewService?.image && <img src={reviewService.image} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm ">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td><button onClick={() => handleUpdate(_id)} className='btn btn-ghost'><FaRegEdit className='text-lg text-' /></button></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-ghost'><FaTrash className='text-lg text-red-600' /></button></td>
        </tr>
    );
};

export default MyReviewsTable;