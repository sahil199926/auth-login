import React from 'react'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'

function Admin() {
    const history = useHistory();
    const logout=()=>{
        localStorage.setItem('admin',null);
        history.push("/")
    }
    return (
        <div>
            welcome Admin
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Admin
