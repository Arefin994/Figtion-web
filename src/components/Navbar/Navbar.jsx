import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Navbar.css';
import Footer from '../Footer/Footer';

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#270A08' }}>
        <div className="container-fluid">
          <NavLink className="navbar-brand thm-clr" to="/">
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
                <NavLink className={`nav-link thm-clr ${location.pathname === '/home' ? 'active' : ''}`} to="/home">
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link thm-clr ${location.pathname === '/allToys' ? 'active' : ''}`} to="/allToys">
                  <span>All Toys</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link thm-clr ${location.pathname === '/myToys' ? 'active' : ''}`} to="/myToys">
                  <span>My Toys</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link thm-clr ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog">
                  <span>Blog</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <NavLink className="btn btn-outline-light me-2" to="/login">
              Login
            </NavLink>
            <NavLink className="btn text-black btn-cstm" to="/signup">
              Sign up
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Navbar;