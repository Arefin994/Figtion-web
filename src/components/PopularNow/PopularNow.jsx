import React, { useState, useEffect } from 'react';
import './PopularNow.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PopularNow = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const handleBuyNow = (item) => {
        localStorage.setItem('selectedItem', JSON.stringify(item));
        navigate('/figure');
    };

    return (
        <div className="popular-now d-flex align-items-center justify-content-center">
            <div className="container">
                <h2 className='text-center py-5'>Currently <span className='' style={{color: 'ffc107'}} >Popular</span></h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {data.allItems?.products?.map(item => (
                        <div className="col mb-4" key={item.id}>
                            <div className="card" style={{ height: '100%', backgroundColor: '#F8CA96' }}>
                                <div style={{ paddingBottom: '75%', position: 'relative' }}>
                                    <img src={item.image} className="card-img-top" alt="..." style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-text font-weight-bold">{item.name}</h5>
                                        <div className='d-flex justify-content-between'>
                                            <h6>Price: ${item.price}</h6>
                                            <h6><FaStar color='#ffc107' /> {item.rating}</h6>
                                        </div>
                                    </div>
                                    <button className="btn btn-cstm-inv" onClick={() => handleBuyNow(item)}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularNow;