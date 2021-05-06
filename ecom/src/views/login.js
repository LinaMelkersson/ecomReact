import React from 'react'
import { NavLink } from 'react-router-dom'

const login = () => {
    return (
        <div>
            <h1 className="home d-flex justify-content-center">WELCOME BACK</h1>
            <form className="login">
            {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input type="email" id="form1Example1" className="form-control" />
                    <label className="form-label" for="form1Example1">Email address</label>
                </div>

            {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input type="password" id="form1Example2" className="form-control" />
                    <label className="form-label" for="form1Example2">Password</label>
                </div>


            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            <p className="clickreg"> No account? <NavLink exact className="nav-link" to="/register">Register</NavLink></p>
            </form> 
        </div>
    )
}

export default login
