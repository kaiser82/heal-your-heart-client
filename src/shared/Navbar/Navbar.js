import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
        toast.success('Successfully Sign Out!')
    }
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>

                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span><img className='w-12 p-2' src="logo.png" alt="" /></span> Heal Your Heart</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                </ul>
            </div>

            <div className="navbar-end space-x-5 ">

            </div>

            <div className="navbar-end space-x-3">
                <div className='hidden md:flex justify-center items-center space-x-3 '>
                    <p className='hidden lg:block'>
                        {
                            user?.displayName ? <span>{user.displayName}</span> : <span>{user?.email}</span>
                        }
                    </p>
                    {
                        user?.photoURL &&

                        <div className="avatar p-1">
                            <div className="w-8 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photoURL} alt="profilePic" />
                            </div>
                        </div>

                    }
                </div>
                {
                    user ? <button onClick={handleLogOut} className="btn btn-ghost normal-case">Sign Out</button> :
                        <Link to={'/signIn'} className="btn btn-ghost">Sign In</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;