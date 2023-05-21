import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Navbar.css';

const Navbar = () => {
    const auth = getAuth(app);

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#270A08' }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img className='me-2' src="/public/logo.PNG" alt="Logo" width="50" height="50" />
                        Fig<span className='text-white'>tion</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link thm-clr" activeClassName="active" to="/home">
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link thm-clr" activeClassName="active" to="/allToys">
                                    <span>All Toys</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link thm-clr" activeClassName="active" to="/myToys">
                                    <span>My Toys</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link thm-clr" activeClassName="active" to="/blog">
                                    <span>Blog</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        {user ? (
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle thm-clr" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-name={user.email}>
                                        <img src={user.photoURL} alt={user.email} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                        {user.displayName}
                                    </a>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <li><button className="dropdown-item" onClick={handleSignOut}>Log out</button></li>
                                    </ul>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="btn btn-outline-light me-2 ms-2 text-white " onClick={() => navigate('/login')}>Login</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn text-black btn-cstm ms-2 text-white cstm-btn" onClick={() => navigate('/signup')}>Sign up</button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navbar;