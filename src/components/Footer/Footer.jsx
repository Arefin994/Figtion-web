import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer py-3" style={{ backgroundColor: '#57080c', color: '#f8ca96' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <img className='w-25 h25' src="/public/logo.PNG" alt="Logo" />
                        </div>
                        <p className="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu dignissim
                            lobortis, elit sapien eleifend nunc, non malesuada purus risus ac quam.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="footer-title">Contact Us</h5>
                        <ul className="footer-links">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Main St, New York, NY 10001</li>
                            <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                            <li><i className="fas fa-envelope"></i> info@example.com</li>
                        </ul>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="footer-copy">&copy; 2021 My Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;