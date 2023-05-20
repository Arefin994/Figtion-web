import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './PopularNow.css';

const PopularNow = () => {
    const [seller, setSeller] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => {
                setSeller(data);
                console.log(data);
                console.log(data.allItems);
                console.log(data.allItems.allItems.sellers[0]);
            });
    }, []);

    const handleBuyNow = (item) => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        navigate('/figure');
    };

    return (
        <>

            <div className="popular-now d-flex align-items-center justify-content-center">
                <div className="container">
                    <h2 className='text-center py-5 '>Currently <span className='text-white' style={{ color: 'ffc107' }} >Popular</span></h2>
                    <div className="row row-cols-1 row-cols-md-3">
                        {seller.allItems?.allItems.sellers.map((sellerData, sellerIndex) => (
                            <div key={sellerIndex}>
                                {sellerData.figures.map((figure, figureIndex) => (
                                    <div key={figureIndex} className="mt-3">
                                        <div className="col mb-4" key={figure.id}>
                                            <div className="card" style={{ height: '100%', backgroundColor: '#F8CA96' }}>
                                                <div style={{ paddingBottom: '75%', position: 'relative' }}>
                                                    <img src={figure.image} className="card-img-top" alt="..." style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <div className="card-body d-flex flex-column justify-content-between">
                                                    <div>
                                                        <h5 className="card-text font-weight-bold">{figure.name}</h5>
                                                        <div className='d-flex justify-content-between'>
                                                            <h6>Price: ${figure.price}</h6>
                                                            <h6><FaStar color='#ffc107' /> {figure.rating}</h6>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-cstm-inv" onClick={() => handleBuyNow(figure)}>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}






export default PopularNow;