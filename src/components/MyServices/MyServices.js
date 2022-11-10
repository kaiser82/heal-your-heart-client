import React, { useEffect, useState } from 'react';
import MyServiceTable from './MyServiceTable';


const MyServices = () => {

    const [myServices, setMyServices] = useState([]);
    console.log(myServices)
    useEffect(() => {
        fetch('http://localhost:5000/myServices')
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [])


    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>My Added Services:{myServices.length}</h2>

            <div className="overflow-x-auto w-xl">
                <table className="table w-full ">
                    <thead >
                        <tr>
                            <th>Services</th>
                            <th>Price</th>
                            <th>ServiceId</th>
                        </tr>
                    </thead>
                    <tbody>
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