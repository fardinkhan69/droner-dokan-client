import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import dronerDokan from '../../images/droner-dokan.png'

import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container" style={{ alignSelf: 'flex-start' }}>
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img width="50%"  class="d-inline-block align-text-top" src={dronerDokan} alt=""/></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '100%' }}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/addproduct" className="nav-link">Admin</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/orders" className="nav-link">Orders</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/deals" className="nav-link">deals</Link>
                                </li>

                                <li className="nav-item">
                                    {
                                        loggedInUser?.email ? <span className="nav-link">{loggedInUser.name}</span> : <Link to="/login" className="nav-link"><button className="btn btn-primary site-btn">Login</button></Link>
                                    }

                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;