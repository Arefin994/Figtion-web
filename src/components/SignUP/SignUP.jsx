import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Signup = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        setSuccess('');
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.photoURL.value;
        console.log(name, email, password, photoURL);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('SuccessFull ^__^');
                window.location.href = '/home';
            })
            .catch(error =>{
                console.error(error);
                setError(error.message);
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already Exist');
                }
            });
    };

    return (
        <div className='container'>
            <ToastContainer />
            <h3 className='text-center my-5'>Please Sign Up</h3>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input required type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" className="form-control" id="password" placeholder="Enter your password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="photoURL">Profile picture URL</label>
                            <input type="url" className="form-control" id="photoURL" placeholder="Enter your profile picture URL" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    {error && <p className='text-danger mt-3'>{error}</p>}
                    {success && <p className='text-success mt-3'>{success}</p>}
                </div>
            </div>
        </div>
    );

};

export default Signup;