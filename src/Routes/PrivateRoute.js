import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center text-blue-600'>
                <button className="btn btn-ghost loading">loading</button>
            </div>
        );
    }

    if (user?.uid) {
        return children;
    }
    return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;