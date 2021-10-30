import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import "./Header.css"

const Header = (

) => {
    const { user, logOut } = UseAuth();
    return (
        <div className="row bg-black">
            <div className="col-md-6">
             
            </div>
            <div className="headers col-md-6">
             
             <Link to ="/home">Home</Link>
             <Link to="/addservice">Add Service</Link>
             <Link to="/manageuser"> Manage User</Link>
             <Link to="/about">About us</Link>
              <Link to="/login">Log in</Link>
             {user.email &&
                 <button onClick={logOut}>Log Out</button>
             }
         </div>
         
        </div>
    );
};

export default Header;