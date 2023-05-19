import React from 'react';

const Figure = () => {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={selectedItem.image} alt={selectedItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{selectedItem.name}</h2>
                        <p className="card-text">Price: ${selectedItem.price}</p>
                        <p className="card-text">Rating: {selectedItem.rating}</p>
                        <button className="btn btn-cstm-inv">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Figure;