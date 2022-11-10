import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyServiceTable from './MyServiceTable';


const MyServices = () => {
    const info = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(info)

    const [myServices, setMyServices] = useState([]);
    console.log(myServices)
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-kaiser82.vercel.app/myServices?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [user?.email])


    return (
        <div className='space-y-5'>
            <h2 className='text-4xl font-bold text-center pb-5'>My Added Services:{myServices.length}</h2>

            <div className="overflow-x-auto w-xl ">
                <table className="table w-full ">
                    <thead >
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            myServices.map(myService => <MyServiceTable key={myService._id} myService={myService}></MyServiceTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyServices;