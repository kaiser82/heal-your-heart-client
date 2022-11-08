import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {

        return (
            <div>
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/signIn' state={{ from: location }} replace></Navigate>
    }

    return children;

};

export default PrivateRoute;