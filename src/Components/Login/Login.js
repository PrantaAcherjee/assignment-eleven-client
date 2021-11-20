import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';



const Login = () => {
    const {signInUsingGoogle} = UseAuth();
    const location=useLocation();
    const redirect_uri=location.state?.from || '/home'
    const history=useHistory();


    const handleGoogleLogin=()=>{
signInUsingGoogle()
.then(result => {
   history.push(redirect_uri) 
})
    }
    return (
        <div className="row">
            <div className="col-md-8">
                <div>
                    <img className="img-fluid" src="https://as2.ftcdn.net/v2/jpg/03/86/51/03/500_F_386510351_03Qk3je4FGnVLo4vXRdOpoDWfZjtmajd.jpg" alt="" />
                    <button className="bg-warning rounded-pill" onClick={handleGoogleLogin}>Google Log in</button>
                </div>
            </div>
            <div className="col-md-4">
                 
            </div>

        </div>
    );
};

export default Login;