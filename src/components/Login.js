import React, { useState } from 'react'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
function Login() {
    const history = useHistory();
    const [userLoginState, setUserLoginState] = useState('first');
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Admin,setAdmin]=useState("");
    const [error,setError]=useState("");
    const [adminError,setAdminError]=useState("");
    //dummi data
    const User = { email: 'sahil', name: 'sahil', password: '12345' }
    const AdminKey = 'admin12345'
    const checkEmailExist = (e) => {
        e.preventDefault();
        if(email===User.email){
        setError("")
        setUserLoginState("second");}
        else{
            setError("email Does'nt exist")
        }
    }
    const userLogin=()=>{
        setError("");
        if(password==User.password){
            setError("");
            localStorage.setItem('user',JSON.stringify(true))
            history.push("/userDashboard")
        }
        else{
            setError('wrong password')
        }
    }
    const adminLogin=()=>{
        setError("");
        if(Admin==AdminKey){
            setError("");
            localStorage.setItem('admin',JSON.stringify(true))
            history.push("/adminDashboard")
        }
        else{
            setAdminError('wrong key')
        }
    }

    return (
        <div>
            <div style={{ border: '2px solid' }}>
                <div hidden={userLoginState === 'first' ? false : true}>

                    <h3>Welcome, please enter your email</h3>
                    <p style={{fontSize:'12px',color:'red'}}>{error}</p>
                    <form onSubmit={(e) => checkEmailExist(e)}>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </form>
                </div>
                <div hidden={userLoginState === 'first' ? true : false}>
                   {error===""&&<div> <h3>Enter the password</h3></div>}
                   {error!=""&&<div> <h3 style={{color:'red'}}>{error}</h3></div>}
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} />
                   <button onClick={userLogin} >login</button>
    
                </div>
            </div>
            <div style={{ border: '2px solid' }}>
                <h2>admin Login</h2>
                <p  style={{fontSize:'12px',color:'red'}}>{adminError}</p>
                <input value={Admin} onChange={(e)=>setAdmin(e.target.value)} />
              <button onClick={adminLogin} >login</button>
            </div>
        </div>
    )
}

export default Login
