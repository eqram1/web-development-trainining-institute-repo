import React from 'react';
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
                <a href='/' className="link link-hover">HTML-5</a>
                <a href='/' className="link link-hover">CSS</a>
                <a href='/' className="link link-hover">JS</a>
                <a href='/' className="link link-hover">REACT-BOOTSTRAP</a>
                <a href='/' className="link link-hover">TAILWIND</a>
                <a href='/' className="link link-hover">FIREBASE-MONGODB</a>
            </div>
            <div>
                <span className="footer-title">Course fees</span>
                <a href='/' className="link link-hover"></a>
                <a href='/' className="link link-hover"></a>
                <a href='/' className="link link-hover"></a>
                <a href='/' className="link link-hover"></a>
            </div>
            <div>
                <span className="footer-title">Course duration</span>
                <a href='/' className="link link-hover"></a>
                <a href='/' className="link link-hover"></a>
                <a href='/' className="link link-hover"></a>
            </div>
        </footer>
    );
};

export default Footer;