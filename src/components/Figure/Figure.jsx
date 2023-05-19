import React from 'react';

const Figure = () => {
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

    return (
        <div>
            <h2>{selectedItem.name}</h2>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <p>Price: ${selectedItem.price}</p>
            <p>Rating: {selectedItem.rating}</p>
        </div>
    );
};

export default Figure;