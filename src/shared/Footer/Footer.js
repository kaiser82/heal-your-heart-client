import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-purple-200 text-base-content">
            <div>
                <img className='w-20' src="logo.png " alt="" />
                <p>HEAL YOUR HEART service<br />All right reserved. Copyright 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Home</Link>
                <Link to='/services' className="link link-hover">Services</Link>
                <Link to="/blogs" className="link link-hover">Blogs</Link>

            </div>
            <div>
                <span className="footer-title">Offered Packages</span>
                <Link className="link link-hover">Membership Package</Link>
                <Link className="link link-hover">Poor Patient Package</Link>
                <Link className="link link-hover">Holiday Special Package</Link>

            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;