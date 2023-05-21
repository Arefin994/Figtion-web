import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
// import { getItems } from './utils/db';
import './MyToys.css';

const auth = getAuth();

const MyToys = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const userId = auth.currentUser.uid;
        // getItems(userId).then(items => setItems(items));
    }, []);

    return (
        <div className='container'>
            <h1 className='text-center my-4'>Under Build</h1>
            {/* <h3 className='text-center my-5'>My Toys</h3>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    {items.length > 0 ? (
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className='text-center'>No items found</p>
                    )}
                </div>
            </div> */}
        </div>
    );

};

export default MyToys;