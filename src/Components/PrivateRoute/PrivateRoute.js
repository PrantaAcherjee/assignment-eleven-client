import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';


const PrivateRoute = (props) => {
    const { children, ...rest } = props
    const { user } = UseAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            >

            </Redirect>}
        >


        </Route>
    );
};

export default PrivateRoute;

