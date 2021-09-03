import React from 'react'
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({component: Component,auth, restricted, ...rest}) {
    return (
        <div>
            <Route {...rest} render={props => (
            auth && restricted ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
        </div>
    )
}

export default PrivateRoute
