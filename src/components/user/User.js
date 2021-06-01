import React from 'react'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'

function User() {

    const history = useHistory();
    const logout=()=>{
        localStorage.setItem('user',null);
        history.push("/")
    }
    return (
        <div>
            welcome user
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default User
