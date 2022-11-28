import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/banner/7.jfif';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" />
                <p>EQRAM web development training institute Ltd.<br />Providing reliable training since 2021</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/' className="link link-hover">HTML-5</Link>
                <Link to='/' className="link link-hover">CSS</Link>
                <Link to='/' className="link link-hover">JS</Link>
                <Link to='/' className="link link-hover">REACT-BOOTSTRAP</Link>
                <Link to='/' className="link link-hover">TAILWIND</Link>
                <Link to='/' className="link link-hover">FIREBASE-MONGODB</Link>
            </div>
            <div>
                <span className="footer-title">Course fees</span>

            </div>
            <div>
                <span className="footer-title">Course duration</span>

            </div>
        </footer>
    );
};

export default Footer;