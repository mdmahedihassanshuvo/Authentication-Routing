import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../UserProvider/UserProvider';

const Header = () => {

    const {user, logOut} = useContext(userContext)

    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">Auth</a>
            <Link className='text-xl ml-6' to="/">Home</Link>
            {
                user && <Link className='text-xl ml-6' to="/products">Products</Link>
            }
            <Link className='text-xl ml-6' to="/login">Login</Link>
            <Link className='text-xl ml-6' to="/register">Register</Link>
            {
                user ? 
                <>
                <span>{user.email}</span>
                <button onClick={handleSignOut} className="btn btn-xs">Sign out</button>
                </>: 
                <Link className='text-xl ml-6' to="/login">Login</Link>
            }
        </div>
    );
};

export default Header;