import React from 'react'
import { NavLink } from 'react-router-dom'

const register = () => {
    return (
        <div>
            <h1 className="home d-flex justify-content-center">NEW HERE?</h1>
            <form className="login">
                {/* Förnamn */}
                <div className="form-outline mb-4">
                    <input type="text" id="form1Example1" className="form-control" />
                    <label className="form-label" for="form1Example1">Firstname</label>
                </div>
                {/* Efternamn */}
                <div className="form-outline mb-4">
                    <input type="text" id="form1Example2" className="form-control" />
                    <label className="form-label" for="form1Example2">Lastname</label>
                </div>
            {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input type="email" id="form1Example3" className="form-control" />
                    <label className="form-label" for="form1Example3">Email address</label>
                </div>

            {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input type="password" id="form1Example4" className="form-control" />
                    <label className="form-label" for="form1Example4">Password</label>
                </div>


            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block">Register</button>
            <p className="clickreg"> Already a member?<NavLink exact className="nav-link" to="/login">Login</NavLink></p>
            </form>   
        </div>
    )
}

export default register
