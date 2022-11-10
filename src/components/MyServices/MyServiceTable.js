import React from 'react';

const MyServiceTable = ({ myService }) => {
    const { serviceName, image, price, serviceId } = myService
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>

                    </div>
                </div>
            </td>
            <td>
                {price}

            </td>
            <td>{serviceId}</td>
        </tr>
    );
};

export default MyServiceTable;