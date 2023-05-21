import React, { useState } from 'react';
import './Figure.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Figure = () => {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    const [addedToCart, setAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setAddedToCart(true);
        toast.success('Item added to cart!');
    };

    return (
        <div className="card my-3 mx-auto p-3 bg-cstm" style={{ maxWidth: '1000px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h2 className="card-title text-center">{selectedItem.name}</h2>
                        <p className="card-text text-center">Price: ${selectedItem.price}</p>
                        <p className="card-text text-center">Rating: {selectedItem.rating}</p>
                        <button className={`btn ${addedToCart ? 'btn-success' : 'btn-cstm-inv'}`} onClick={handleAddToCart}>{addedToCart ? 'Added' : 'Add to Cart'}</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Figure;