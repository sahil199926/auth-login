import React from 'react'
import Login from '../Login'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import Admin from '../admin/Admin';
import User from '../user/User';

function Auth() {
    const histore = useHistory();

    const AdminLogin = ({ component: Component, ...rest }) => {

        return (
            <Route
                {...rest}
                render={props=>'a' === 'a' ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                }
            />

        )


    }
    const UserLogin = ({ component: Component, ...rest }) => {

        return (
            <Route
                {...rest}
                render={props=>'b' === 'a' ?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                }
            />

        )


    }

    return (<>
    <Router>
        <Switch>
            <AdminLogin path='/adminDashboard' component={Admin}/>
            <UserLogin path='/userDashboard' component={User}/>
            <Route path="/">
            <Login />
            </Route>
        </Switch>
    </Router>
        
    </>
    )
}

export default Auth
