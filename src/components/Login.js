import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div>
            <div style={{ border: '2px solid' }}>
                <label>email</label>
                <input />
                <Link to='/userDashboard' ><button>login</button></Link>
            </div>
            <div style={{ border: '2px solid' }}>
                <h2>admin Login</h2>
                <input />
                <Link to='/adminDashboard' ><button>login</button></Link>
            </div>
        </div>
    )
}

export default Login
